
//TODO:This needs to refactored later
module.exports = class database {
    constructor(options) {
        this.options = options;
    }

    getDatabases() {
        var dbs = {};
        let connections = Object.keys(this.options.connection);
        return new Promise((resolve) => {
            connections.forEach(async (dbType) => {
                switch(dbType) {
                    case 'mongo': {
                        let mongo = require('./mongo');
                        let mongoInstance = new mongo(this.options.connection[dbType]);
                        await mongoInstance.createConnection();
                        dbs['mongo'] = mongoInstance;
                        if(connections.length == (Object.keys(dbs).length)) return resolve(dbs);
                        break;
                    }
                    case 'postgres': {
                        let postgres = require('./postgres');
                        let postgresInstance = new postgres(this.options.connection[dbType]);
                        await postgresInstance.createConnection();
                        dbs['postgres'] = postgresInstance;
                        if(connections.length == (Object.keys(dbs).length)) return resolve(dbs);
                        break;
                    }
                }
            });
        })
    }
}