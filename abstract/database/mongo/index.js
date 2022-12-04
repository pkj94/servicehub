var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
global.ObjectId = mongoose.Schema.Types.ObjectId;

//Plugins
var timestamps = require('mongoose-timestamp');
var mongoosastic = require('mongoosastic');
var mongoose_delete = require('mongoose-delete');
var autopopulate = require('mongoose-autopopulate');
var requireAll = require('require-all');
var merge = require('merge');

var db_defaults = {
    plugins: {
        timestamps: true,
        elasticSearch: false,
        softDelete: true,
        autoPopulate: true,
        timestamps_fields: {
            createdAt: 'createdAt',
            updatedAt: 'updatedAt'
        }
    },
    connection: {
        mongo: {
            host: 'mongodb://localhost',
            user: "",
            pass: "",
            database: "",
            replicaSet: ""
        },
        elasticSearchHosts: ['localhost:9200']
    },
    indices: {
        fields: {},
        options: {}
    }
}

module.exports = class database {
    constructor(defaults) {
        this.defaults = defaults;
    }

    async createConnection() {
        this.db_connection = await mongoose.createConnection(
            this.defaults.host + '/' + this.defaults.database + '' + ((this.defaults.replicaSet != "" && this.defaults.replicaSet != undefined) ? ('&replicaSet=' + this.defaults.replicaSet) : ''),
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        );
        mongoose.set('debug', true)
        this.db_connection.on('error', function (err) {
            console.log("err:", err);
        });
        this.db_connection.once('open', function () {
            console.log("DB connection opened");
        });
    }

    async createModel(opts) {   // opts is {} or path to {} file
        // opts = name,schema
        opts = this.objectFinder(opts);
        opts.plugins = this.objectExtend(db_defaults.plugins, opts.plugins);
        opts.indices = this.objectExtend(db_defaults.indices, opts.indices);

        if (typeof opts.schema.__proto__.instanceOfSchema === 'undefined') {
            var schema = mongoose.Schema(opts.schema);
        } else {
            var schema = opts.schema;
        }
        if (opts.pre_save)
            schema.pre('save', opts.pre_save);

        if (opts.pre_findOneAndUpdate)
            schema.pre('findOneAndUpdate', opts.pre_findOneAndUpdate);

        // apply Plugins
        if (opts.plugins.timestamps)
            schema.plugin(timestamps, opts.plugins.timestamps_fields);
        if (opts.plugins.elasticSearch)
            schema.plugin(mongoosastic, {
                hosts: defaults.connection.elasticSearchHosts
            })
        if (opts.plugins.softDelete)
            schema.plugin(mongoose_delete, { overrideMethods: true, deletedAt: true });
        if (opts.plugins.autoPopulate)
            schema.plugin(autopopulate);
        //index
        if (opts.indices.fields && Object.keys(opts.indices.fields).length) {
            if (!opts.indices.options.name)
                opts.indices.options.name = opts.name + 'Index';
            schema.index(opts.indices.fields || {}, opts.indices.options || {});
        }

        var model = this.db_connection.model(opts.name, schema, opts.name);
        // custom methods
        model.insert = function (data) {
            return model(data).save();
        }
        return model;
    }

    // add all models to mongoose/neev db
    createModels(path) {
        return requireAll({
            dirname: process.cwd() + path,
            filter: /(.+)\.js$/,
            resolve: function (Model) {
                return createModel(Model);
            }
        });
    }

    objectFinder(obj) {
        if (typeof obj == "object") { return obj; }
        else if (typeof obj == "string") {
            return require(process.cwd() + obj);
        }
    }

    // extend passed object with default
    objectExtend(default_obj, obj) {
        return merge.recursive(true, this.objectFinder(default_obj), this.objectFinder(obj));
    }
}