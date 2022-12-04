//Just extend the class and enjoy coding with nodejs and MongoDB, Currently Sql support is not given

const httpStatus = require('./httpStatusCodes');

module.exports = class BaseController {
    constructor(schema, databases) {
        this.models = {};
        this.repositories = {};
        this.httpStatus = httpStatus;
        Object.keys(databases).forEach(async (dbType) => {
            if (schema) {
                var model = databases[dbType].createModel(schema);
                this.models[dbType] = model;
            }
            var Repo = require('./repository/' + dbType);
            this.repositories[dbType] = new Repo(schema, databases[dbType]);
        });

        this.schema = schema ? schema.name : 'default';
        this.errorMessages = {
            'fieldsMissing': 'Few fields are missing!',
            'typeMismatch': 'Invalid type of data has been sent!',
            'databaseFailure': 'Database Failure'
        }
    }

    _getLastThreeQuarters(currentYearAndQuarter) {
        let quarters = [];
        if (currentYearAndQuarter) {
            const year = currentYearAndQuarter.split('.')[0];
            const quarter = currentYearAndQuarter.split('.')[1];
            const quarterNum = quarter.split('Q')[1];
            if (quarterNum == 1) {
                quarters = [`${year - 1}.Q3`, `${year - 1}.Q4`, `${year}.Q1`];
            }
            if (quarterNum == 2) {
                quarters = [`${year - 1}.Q4`, `${year}.Q1`, `${year}.Q2`];
            }
            if (quarterNum == 3) {
                quarters = [`${year}.Q1`, `${year}.Q2`, `${year - 1}.Q3`];
            }
            if (quarterNum == 4) {
                quarters = [`${year}.Q2`, `${year - 1}.Q3`, `${year}.Q4`];
            }
        }
        return quarters;
    }

    _getQuarterWiseData(data, quarters) {
        let quarterWiseData = [];
        quarters.forEach(quarter => {
            const index = data.findIndex(obj => obj.quarter == quarter);
            if (index != -1) {
                quarterWiseData.push(data[index]);
            } else {
                quarterWiseData.push({ "target": 0, "quarter": quarter, "revenue": 0 })
            }
        });
        return quarterWiseData;
    }

    _updateCreatedByAndUpdateBy(req) {
        let currentDate = new Date();
        let timestamp = currentDate.toJSON().split('T').join(' ').split('.')[0]
        req.body["lastUpdatedDate"] = timestamp;
        req.body["createdDate"] = timestamp;
        req.body["createdBy"] = req.user._id;
        req.body["lastUpdatedBy"] = req.user._id;
    }

    isValidMethod(expectedMethod, requestMethod) {
        return new Promise((resolve, reject) => {
            if (expectedMethod == requestMethod)
                resolve({ status: 200 });
            else
                reject({});
        })
    }

    getFields(fields, type = 'mongo') {
        return this.repositories[type].getFields(fields);
    }

    _updateResponse(fields, response) {
        if (response && response.data && Array.isArray(response.data)) {
            const final = [];
            if (response.data.length > 0) {
                response.data.forEach(obj => {
                    const newObj = {};
                    fields.forEach(key => {
                        if (obj[key] != undefined) {
                            newObj[key] = obj[key];
                        }
                    });
                    final.push(newObj);
                })
            }
            response.data = final;
            return response;
        } else {
            const final = {};
            if (response && response.data) {
                fields.forEach(key => {
                    if (response.data[key] != undefined) {
                        final[key] = response.data[key];
                    }
                });
            }
            response.data = final;
            return response;
        }
    }

    get(req, type = 'mongo') {
        return this.find(req, type);
    }

    _find(req, type = 'mongo') {
        var query = req.query;
        return this.repositories[type]._find(query, query.options);
    }

    //TODO: need to refactor
    find(req, type = 'mongo') {
        var self = this;
        return this.isValidMethod('GET', req.method)
            .then(result => {
                if (req.params._id)
                    return self.repositories[type]._findById(req.params._id, req.query)
                else {
                    var totalCount = 0;
                    var query = req.query;
                    return self.repositories[type]._count(query)
                        .then(result => {
                            totalCount = result.data;
                            var limit = query.limit;
                            var skip = query.skip;
                            if (isNaN(limit) || typeof limit == 'string') {
                                limit = (limit === undefined) ? 10 : parseInt(limit);
                            }

                            // limit = (limit > 20) ? 20 : limit;

                            if (isNaN(skip) || typeof skip == 'string') {
                                skip = (skip === undefined) ? 0 : parseInt(skip);
                            }
                            return self.repositories[type]._find(query, {
                                offset: skip,
                                limit: limit
                            })
                        }).then(result => {
                            var limit = query.limit;
                            var skip = query.skip;
                            if (isNaN(limit) || typeof limit == 'string') {
                                limit = (limit === undefined) ? 10 : parseInt(limit);
                            }

                            // limit = (limit > 20) ? 20 : limit;

                            if (isNaN(skip) || typeof skip == 'string') {
                                skip = (skip === undefined) ? 0 : parseInt(skip);
                            }

                            var pagination = {
                                from: skip + 1,
                                to: skip + result.data.length
                            };
                            result.totalCount = totalCount;
                            result.count = result.data.length;
                            result.pagination = pagination;
                            return result;
                        });
                }
            });
    }

    create(req, type = 'mongo') {
        return this.insert(req, type);
    }

    insert(req, type = 'mongo') {
        var self = this;
        return this.isValidMethod('POST', req.method)
            .then(result => {
                req.body.createdBy = req.user ? req.user._id : null;
                req.body.updatedBy = req.user ? req.user._id : null;
                return self.repositories[type]._insert(req.body);
            });
        //alerts need to be called here
    }

    count(req, type = 'mongo') {
        var self = this;
        return this.isValidMethod('GET', req.method)
            .then(result => {
                return self.repositories[type]._count(req.query);
            });
    }

    findOne(req, type = 'mongo') {
        var self = this;
        return this.isValidMethod('GET', req.method)
            .then(result => {
                // console.log(req.query, req.method)
                return self.repositories[type]._findOne(req.query);
            });
    }

    _findOne(req, type = 'mongo') {
        var self = this;
        return self.repositories[type]._findOne(req.query);
    }

    findOneAndUpdate(req, type = 'mongo') {
        var self = this;
        return this.isValidMethod('PUT', req.method)
            .then(result => {
                return self.repositories[type]._findOneAndUpdate(req.query, req.body, req);
            });
    }

    update(req, type = 'mongo') {
        var self = this;
        if (req.user) {
            req.body.updatedBy = req.user._id;
        }
        delete req.body.createdAt;
        req.body.updatedAt = new Date();
        return this.isValidMethod('PUT', req.method)
            .then(result => {
                if (req.params && req.params._id)
                    return self.repositories[type]._findByIdAndUpdate(req.params._id, req.body, req);
                else
                    return self.repositories[type]._findAndUpdate(req.query, req.body, req);
            });
    }

    _update(req, type = 'mongo') {
        var self = this;
        if (req.user) {
            req.body.updatedBy = req.user._id;
        }
        if (req.params && req.params._id)
            return self.repositories[type]._findByIdAndUpdate(req.params._id, req.body, req);
        else
            return self.repositories[type]._findAndUpdate(req.query, req.body, req);
    }

    remove(req, type = 'mongo') {
        var self = this;
        req.body.updated_by = req.user._id;
        return this.isValidMethod('DELETE', req.method)
            .then(result => {
                if (req.params._id)
                    return self.repositories[type]._removeById(req.params._id);
                else
                    return self.repositories[type].remove(req.query);
            });
    }

    query(rawQuery, type = 'mongo') {
        return this.repositories[type].query(rawQuery);
        //alerts need to be called here
    }

    getMappedObject(obj, type = 'mongo') {
        return this.repositories[type].getMappedObject(obj);
    }

    execStoredProcedure(functionName, ...options) {
        return this.repositories['postgres'].execStoredProcedure(functionName, options);
    }
}
