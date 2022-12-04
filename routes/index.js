//TODO: This needs to be refactored

var proxy = require('express-http-proxy')
var url = require('url')
const mapperRoute = require('./mapperRoute');
const validator = require('validator');

module.exports = function (app) {
    var router = function (req, res, next) {
        if (req.params.method && validator.isMongoId(req.params.method) && !req.params._id) {
            req.params._id = req.params.method;
            delete req.params.method;
        }
        console.log(req.params, req.method)
        if (req.params.method == undefined) {
            if (typeof mapperRoute[req.params.controller] != "undefined") {
                req.params.controller = mapperRoute[req.params.controller](req);
            }
            let controller = req.params.controller;
            console.log(controller)
            // Todo: Delete later if not needed.
            // controller = controller[controller.length - 1] == 's' ? controller.replace(/.$/, "") : controller;
            req.params.controller = controller;
            switch (req.method.toUpperCase()) {
                case 'POST': req.params.method = 'create'; break;
                case 'GET': req.params.method = 'get'; break;
                case 'PUT': req.params.method = 'update'; break;
                case 'DELETE': req.params.method = 'remove'; break;
            }
        } else {
            if (typeof mapperRoute[req.params.controller] != "undefined") {
                req.params.controller = mapperRoute[req.params.controller](req);
                if (!req.params.method) {
                    switch (req.method.toUpperCase()) {
                        case 'POST': req.params.method = 'create'; break;
                        case 'GET': req.params.method = 'get'; break;
                        case 'PUT': req.params.method = 'update'; break;
                        case 'DELETE': req.params.method = 'remove'; break;
                    }
                }
            }
            console.log(req.params)
        }

        if (!controllers[req.params.controller]) next();
        else if (!controllers[req.params.controller][req.params.method]) next();
        else if (req.params.method.startsWith('_')) next();
        else {
            new Promise((resolve, reject) => {
                try {
                    if (req.params.middleware) {
                        return controllers[req.params.controller][req.params.middleware](req, res, next)
                            .then(result => {
                                resolve(controllers[req.params.controller][req.params.method](req))
                            }).catch(error => {
                                reject(error);
                            })
                    } else {
                        //access control
                        // if (req.user) {
                        //     var partnersList = []
                        //     for (var i = 0; i < req.user.permissions.length; i++) {
                        //         var permissionData = req.user.permissions[i];
                        //         var invokedController = controllers[req.params.controller];
                        //         var moduleName = invokedController.moduleName;
                        //         if (permissionData.partner_account_manager && permissionData.partner_account_manager.toLowerCase() == req.user.email.toLowerCase()) {
                        //             partnersList.push(permissionData.partner_id);
                        //         } else if (moduleName) {
                        //             let index = permissionData.permissions.findIndex((permission) => permission.ModuleName.toUpperCase() == moduleName.toUpperCase());
                        //             if (index != -1) {
                        //                 if ((permissionData.permissions[index].permission == 'R' || permissionData.permissions[index].permission == 'RW')) {
                        //                     partnersList.push(permissionData.partner_id);
                        //                 }
                        //             }
                        //         }
                        //     }
                        //     req.user.accessPartners = partnersList;
                        // }
                        resolve(controllers[req.params.controller][req.params.method](req))
                    }
                } catch (ex) {
                    reject(ex);
                }
            }).then(result => {
                res.status(result.status ? result.status : 200).json({
                    meta: {
                        code: result.errorCode,
                        message: result.message,
                        currentDate: new Date().toISOString()
                    },
                    pagination: result.pagination,
                    totalCount: result.totalCount,
                    count: result.count,
                    data: result.data,
                    extraData: result.extraData ? result.extraData : undefined
                });
            }).catch(error => {
                console.log(error)
                if (!error.status) {
                    res.status(error.status ? error.status : 500).json({
                        meta: {
                            code: 500,
                            message: error.message,
                            error: error,
                            currentDate: new Date().toISOString()
                        }
                    });
                } else {
                    res.status(error.status ? error.status : 400).json({
                        meta: {
                            code: error.errorCode,
                            message: error.message,
                            currentDate: new Date().toISOString()
                        }
                    });
                }
            });
        }
    }
    //TODO: when Rbac is implemented this will be updated.
    function authenticate(req, res, next) {
        const skipRoutes = [
            '/api/v1/user/init_admin',
            '/api/v1/user/login',
            '/api/v1/user/signup',
            '/api/v1/user/social',
            '/api/v1/user/initAdmin',
            '/api/v1/user/verify',
            '/api/v1/user/forgotpassword',
            '/api/v1/user/changepassword',
            '/api/v1/user/ci',
            '/api/v1/user/healthCheck',
            '/api/v1/onboarding/getTruelayerLink',
            '/api/v1/onboarding/truelayerCallback',
            '/api/v1/role/get',
            '/api/v1/wip_status/get',
            '/api/v1/task_status/get',
        ]
        if(skipRoutes.indexOf(req.path) > -1) return next();
        // ! Path might end with "/" Keep in mind while defining routes to skip.
        if(req.method === 'GET' && skipRoutes.indexOf(`${req.path}/${(req.method).toLowerCase()}`) > -1) return next();
        const headers = req.headers;
        let accessToken = headers.authorization;
        if(!accessToken) {
            accessToken = 'Bearer '
        }
        if(accessToken.indexOf('Bearer ') === -1) {
            accessToken = 'Bearer ';
        }
        let token = accessToken.split(' ')[1];
        Auth.validateToken(token, async (err, decoded) => {
            if(err) {
                res.status(403).json({
                    meta:{
                        code: 403,
                        mesasge: "Unauthorized User!",
                        currentDate: new Date().toISOString()
                    }
                });
            } else {
                try {
                    if(validator.isMongoId(decoded.data._id)) {
                        let result = await controllers.user._checkForAccessToken(decoded.data._id);
                        if(result.data) {
                            req.user = result.data;
                            next();
                        } else {
                            res.status(403).json({
                                meta: {
                                    code: 403,
                                    message: "Unauthorized User!",
                                    currentDate: new Date().toISOString()
                                }
                            });
                        }
                    } else {
                        res.status(403).json({
                            meta: {
                                code: 403,
                                message: "Unauthorized User!",
                                currentDate: new Date().toISOString()
                            }
                        });
                    }
                } catch (err) {
                    console.log('err', err);
                    res.status(403).json({
                        meta: {
                            code: 403,
                            message: "Unauthorized User!",
                            currentDate: new Date().toISOString()
                        }
                    });
                }
            }
        })
        // next();
    }

    function errorHandler(res, message, status) {
        res.status(status).json({
            meta: {
                code: status,
                message: message,
                currentDate: new Date().toISOString()
            }
        });
    }

    app.all('/api/v1/:controller', authenticate, router);

    app.all('/api/v1/:controller/:method', authenticate, router);

    app.all('/api/v1/:controller/:_id/:method', authenticate, router);

    app.all('/api/v1/:controller/:middleware/redirect/:method', authenticate, router);

    app.use('/api/v1/r', (req, res) => {
        proxy(req.query.r, {
            forwardPath: function (req, res) {
                return url.parse(req.query.r).path;
            }
        })(req, res);
    });
    
    app.use((req, res, next) => {
        res.status(404).send('Not found!');
    });
}
