(async () => {
    let config = require('./config');
    let router = require('./routes');
    // boostrap all models
    const requireAll = require('require-all');
    var compression = require('compression')
    const bodyParser = require('body-parser');
    const morgan = require('morgan');
    const express = require('express');
    const fs = require('fs');
    let app = express();
    app.get('/ping', (req, res) => {
        res.send("pong!");
    });

    global.models = requireAll({
        dirname: __dirname + '/models',
        filter: /(.+)\.js$/,
        resolve: function (Model) {
            return Model;
        }
    });

    // boostrap all controllers
    let dbConfig = config.DB_Config;
    let dbController = new DatabaseController(dbConfig);
    let databases = await dbController.getDatabases();
    global.controllers = {};
    fs.readdirSync(__dirname + '/components').forEach(folder => {
        Object.assign(global.controllers,requireAll({
            dirname: __dirname + '/components/' + folder,
            filter: "index.js",
            resolve: function (Controller) {
                return new Controller(models[Controller.name], databases);
            },
            map: (name, path) => {
                return folder;            }
        }));
    });
    
    global.APPROOT = __dirname + '/';
    app.use(bodyParser.json({ limit: '50mb' }));
    app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
    app.use(compression());
    app.use('/uploads', express.static('uploads'))
    app.use(express.static('build'))
    app.use(morgan('dev'));
    app.use('/docs', express.static('docs'));
    app.all('*', (req, res, next) => {
        next();
    });

    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Credentials', true);
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Accept-Encoding ,authorization,content-type, enctype');
        res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,HEAD,DELETE,PATCH');
        res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
        res.header('Pragma', 'no-cache');
        res.header('Expires', '0');
        res.header('Access-Control-Max-Age', '3000');

        if (req.method == 'OPTIONS') {
            res.send(200);
        } else {
            next();
        }
    });

    router(app);
    app.get('*', (req, res, next) => {
        // console.log(req.url)
        res.sendFile(path.join(__dirname, 'build/index.html'));
    });
    app.listen(config.port, () => {
        console.log("Application is running on the port:" + config.port);
    });
})();
