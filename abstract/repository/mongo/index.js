const { forEach } = require('lodash');
const httpStatus = require('../../httpStatusCodes');
const Repository = require('../base');
const validator = require('validator');

module.exports = class Mongo extends Repository {
    constructor(schema, database) {
        super(schema, database);
    }

    _mongoErrorHandler(err) {
        if (err) {
            switch (err.name) {
                case 'ValidationError': return (err.errors !== undefined) ? this._mongoValidateErrorHandler(err) : this.errorMessages.databaseFailure;
                    break;
                case 'CastError': return this.errorMessages.typeMismatch;
                    break;
                default: return this._mongoDatabaseErrorHandler(err);
                    break;
            }
        } else {
            return this.errorMessages.databaseFailure;
        }
    }

    _parseMongoError(message) {
        if (message.indexOf('Path') != -1 && message.indexOf('required') != -1) {
            message = errorMessages.fieldsMissing;
        } else if (message && message.indexOf('E11000') != -1) {
            if (message.indexOf('collection:') != -1) {
                var model = message.split('collection:')[1].split('index:')[0].split('.').pop();
                var key = message.split('_1 dup key')[0].split(':').pop();
                var value = message.split('{ :')[1].split(' }')[0].replace(/"/g, "`");
                key = key.replace(/\s/g, '').replace(/([A-Z])/g, ' $1').replace(/^./, function (str) { return str.toUpperCase(); })
                message = key + ' ' + value + ' already exist!';
            } else {
                var code = message.split('index:')[1].split('.$').pop();
                var key = code.split('_1 dup key')[0].split(':').pop();
                var value = message.split('{ :')[1].split(' }')[0].replace(/"/g, "`");
                key = key.replace(/\s/g, '').replace(/([A-Z])/g, ' $1').replace(/^./, function (str) { return str.toUpperCase(); })
                message = key + ' ' + value + ' already exist!';
            }
        }
        return message;
    }

    _mongoValidateErrorHandler(err) {
        var mongoErr = err.errors;
        var keys = Object.keys(mongoErr);
        return this._parseMongoError(mongoErr[keys[0]].message);
    }

    _mongoDatabaseErrorHandler(err) {
        var message = err.message;
        if (message != undefined) {
            return this._parseMongoError(err.message);
        }
        return errorMessages.databaseFailure;
    }

    getSelectedFields(fields) {
        return (fields !== undefined) ? fields.replace(/,/g, ' ') : ''
    }

    getInQuery(value) {
        if (typeof value == "string") {
            var arrayValue = value.split(",");
            return { $in: arrayValue };
        } else {
            return value;
        }
    }

    getBetweenQuery(value) {
        let data = value.split(',');
        let start = data[1];
        let end = data[2];
        return { "$gte": new Date(start), "$lt": new Date(end) };
    }

    isExists(value) {
        let data = value.split(',');
        let condition = data[1] == 'false' ? false : true;
        return { "$exists": condition }
    }

    notEqual(value) {
        let data = value.split(',');
        return { $ne: data[1] }
    }

    getFindQuery(find, fields, populate, limit, skip, sort, distinct = '') {
        fields = fields != undefined ? this.getSelectedFields(fields) : '';
        if (limit != '__^all^__') {
            if (isNaN(limit) || typeof limit == 'string') {
                limit = (limit === undefined) ? 10 : parseInt(limit);
            }

            // limit = (limit > 20) ? 20 : limit;

            if (isNaN(skip) || typeof skip == 'string') {
                skip = (skip === undefined) ? 0 : parseInt(skip);
            }
        } else {
            limit = 0;
            skip = 0;
        }
        let query = this.model.find(find).select(fields);
        if (populate) {
            if (Array.isArray(populate)) {
                populate.forEach(item => query.populate(item));
            } else {
                query.populate(populate);
            }
        }
        if (distinct) {
            return query.distinct(distinct)
        } else {
            return query.limit(limit).skip(skip).sort(sort);
        }

    }

    populateQuery(findQuery, options) {
        if (options) {
            if (Array.isArray(options)) {
                options.forEach(item => findQuery.populate(item));
            } else {
                findQuery.populate(populate);
            }
        }
        return findQuery;
    }

    getFilterQuery(query) {
        var self = this;
        var filterQuery = {};
        var findParam = ['limit', 'skip', 'fields', 'search', 'populate', 'searchFields', 'sortByAscending', 'sortByDescending', 'distinct'];
        Object.keys(query).forEach(function (key) {
            if (findParam.indexOf(key) < 0) {
                if (typeof query[key] == "string" && query[key].indexOf(',') == -1) {
                    filterQuery[key] = query[key];
                } else if (typeof query[key] == "string" && query[key].indexOf('compare') != -1) {
                    filterQuery[key] = self.getBetweenQuery(query[key])
                } else if (typeof query[key] == "string" && query[key].indexOf('exists') != -1) {
                    filterQuery[key] = self.isExists(query[key])
                } else if (typeof query[key] == "string" && query[key].indexOf('ne') != -1) {
                    filterQuery[key] = self.notEqual(query[key])
                } else {
                    filterQuery[key] = self.getInQuery(query[key]);
                }
            }
        });
        if (query['searchFields'] && query['search']) {
            var search = [];
            var searchText = query['search'].split(' ');
            query['searchFields'].split(',').forEach(function (field) {
                var dict = {};
                searchText.forEach(function (text) {
                    dict[field] = new RegExp(text, 'i');
                    search.push(dict);
                });
            });
            filterQuery.$or = search;
        }
        return filterQuery;
    }

    constructFindQuery(query) {
        var filterQuery = this.getFilterQuery(query);
        var findParam = ['limit', 'skip', 'fields', 'search', 'populate', 'searchFields', 'sortByAscending', 'sortByDescending', 'gender', 'gradelevel', 'gradeLevel', 'distinct'];
        var sort = {};
        var sortField = query.sortByAscending ? query.sortByAscending : query.sortByDescending;
        sort[sortField] = query.sortByAscending ? 1 : -1;
        if (!sortField) {
            sort = { 'createdAt': -1 };
        }
        // console.log('filterQuery',filterQuery)
        var findQuery = this.getFindQuery(filterQuery, query.fields, query.populate, query.limit, query.skip, sort, query.distinct)
        Object.keys(query).forEach(function (key) {
            if (
                findParam.indexOf(key) < 0 &&
                query[key] != 'true' &&
                query[key] != 'false' &&
                (typeof query[key]) != 'boolean' &&
                (typeof query[key] != 'object') &&
                query[key].indexOf(',') < 0 &&
                (!validator.isMongoId(query[key]))
            ) {
                findQuery.where(key).regex(new RegExp(query[key], 'i'))
            }
        })
        return findQuery;
    }
    getnextid(data) {
        return new Promise(async (resolve, reject) => {
            // console.log(this.schemaModel);
            let keys = Object.keys(this.schemaModel);
            for (let i = 0; i < keys.length; i++) {
                if (this.schemaModel[keys[i]].autoincrement) {
                    let lastId = await this.model.findOne({}).sort({ [keys[i]]: -1 });
                    // console.log(lastId);
                    data[keys[i]] = lastId ? (lastId[keys[i]] || 1)+1 : 1;
                }
            }
            resolve(data)
        })
    }
    _insert(data) {
        var self = this;
        return new Promise(async (resolve, reject) => {
            data = await this.getnextid(data);
            return this.model.create(data)
                .then(result => {
                    resolve({ data: result, status: httpStatus.ok, message: self.schema + ' record created successfully' });
                }).catch(error => {
                    reject({ error: error, status: httpStatus.bad_request, message: self._mongoErrorHandler(error) });
                });
        })
    }

    _find(queryString) {
        // console.log(this.schemaModel)
        var self = this;
        var findQuery = self.constructFindQuery(queryString);
        return new Promise((resolve, reject) => {
            findQuery.lean().exec((error, data) => {
                if (error) {
                    reject({ error: error, status: httpStatus.bad_request, message: self._mongoErrorHandler(error) });
                } else if (!data.length) {
                    // reject({ data : null, status : httpStatus.not_found, message : 'No '+self.schema+' record found'});
                    resolve({ data: [], status: httpStatus.ok, message: 'No ' + self.schema + ' record found' });
                } else {
                    resolve({ data: data, status: httpStatus.ok, message: self.schema + '\'s record found successfully' });
                }
            });
        });
    }

    _count(query) {
        var self = this;
        var find = this.getFilterQuery(query);
        var countQuery = this.model.count(find);
        return new Promise((resolve, reject) => {
            countQuery.exec((error, totalCount) => {
                if (error) {
                    reject({ error: error, status: httpStatus.bad_request, message: self._mongoErrorHandler(error) });
                } else {
                    resolve({ data: totalCount, status: httpStatus.ok });
                }
            });
        });
    }

    async _findOne(queryString) {
        var self = this;
        let { populate } = queryString;
        if (populate) {
            delete queryString.populate;
        }
        return new Promise((resolve, reject) => {
            let findQuery = self.model.findOne(queryString);
            findQuery = this.populateQuery(findQuery, populate);
            findQuery.lean().exec(function (error, data) {
                if (error) {
                    reject({ error: error, status: httpStatus.bad_request, message: self._mongoErrorHandler(error) });
                } else if (!data) {
                    reject({ data: null, status: httpStatus.not_found, message: 'No ' + self.schema + ' record found' });
                } else {
                    resolve({ data: data, status: httpStatus.ok, message: self.schema + ' record found successfully' });
                }
            });
        });
    }

    _findById(_id, options) {
        var self = this;
        return new Promise((resolve, reject) => {
            if (self.validateObjectId(_id)) {
                let findQuery = self.model.findById(_id);
                findQuery = this.populateQuery(findQuery, options.populate);
                findQuery.lean().exec((error, data) => {
                    if (error) {
                        reject({ error: error, status: httpStatus.bad_request, message: self._mongoErrorHandler(error) });
                    } else if (!data) {
                        reject({ data: null, status: httpStatus.not_found, message: 'No ' + self.schema + ' record found' });
                    } else {
                        resolve({ data: data, status: httpStatus.ok, message: self.schema + ' record found successfully' });
                    }
                });
            } else {
                reject({ error: true, status: httpStatus.bad_request, message: 'Invalid type of id has been sent for ' + this.schema + ' find' });
            }
        });
    }

    _findByIdAndUpdate(_id, update) {
        var self = this;
        let options = { new: true, runValidators: true };
        return new Promise((resolve, reject) => {
            if (self.validateObjectId(_id)) {
                self.model.findByIdAndUpdate(_id, update, options, (error, data) => {
                    if (error) {
                        reject({ error: error, status: httpStatus.bad_request, message: self._mongoErrorHandler(error) });
                    } else if (!data) {
                        reject({ error: true, status: httpStatus.not_found, message: 'No ' + self.schema + ' record found' });
                    } else {
                        resolve({ data: data, status: httpStatus.ok, message: self.schema + ' record updated successfully' });
                    }
                });
            } else {
                // ? This might be the required fix if modelName is not found
                // reject({error : true, status : httpStatus.bad_request, message : 'Invalid type of id has been sent for '+self.model.modelName+' update'})
                reject({ error: true, status: httpStatus.bad_request, message: 'Invalid type of id has been sent for ' + modelName + ' update' })
            }
        });
    }

    _findOneAndUpdate(findQuery, update) {
        var self = this;
        let options = { new: true, runValidators: true };
        return new Promise((resolve, reject) => {
            this.model.findOneAndUpdate(findQuery, update, options, (error, data) => {
                if (error) {
                    reject({ error: error, status: httpStatus.bad_request, message: self._mongoErrorHandler(error) });
                } else if (!data) {
                    reject({ error: true, status: httpStatus.not_found, message: 'No ' + self.schema + ' record found' });
                } else {
                    resolve({ data: data, status: httpStatus.ok, message: self.schema + ' record updated successfully' });
                }
            });
        });
    }

    _findAndUpdate(findQuery, update) {
        var self = this;
        let options = { multi: true, runValidators: true };
        return new Promise((resolve, reject) => {
            self.model.update(findQuery, update, options, (error, data) => {
                if (error) {
                    reject({ error: error, status: httpStatus.bad_request, message: self._mongoErrorHandler(error) });
                } else if (!data) {
                    reject({ error: true, status: httpStatus.not_found, message: 'No ' + self.schema + ' record found' });
                } else if (!data.nModified) {
                    reject({ error: true, status: httpStatus.not_found, message: 'No ' + self.schema + ' record found' });
                } else {
                    resolve({ status: httpStatus.ok, message: self.schema + ' record updated successfully' });
                }
            });
        });
    }

    remove(findQuery) {
        var self = this;
        return new Promise((resolve, reject) => {
            self.model.deleteMany(findQuery, (error, data) => {
                // self.model.remove(findQuery, (error, data) => {
                if (error) {
                    reject({ error: error, status: httpStatus.bad_request, message: self._mongoErrorHandler(error) });
                } else if (!data) {
                    reject({ error: true, status: httpStatus.not_found, message: 'No ' + self.schema + ' record found' });
                } else {
                    resolve({ data: data, status: httpStatus.ok, message: self.schema + ' record deleted successfully' });
                }
            });
        });
    }

    _removeById(_id) {
        var self = this;
        return new Promise((resolve, reject) => {
            self.model.deleteMany({ _id: _id }, (error, data) => {
                // self.model.remove({_id:_id}, (error, data) => {  //? remove() is deprecated!
                if (error) {
                    reject({ error: error, status: httpStatus.bad_request, message: self._mongoErrorHandler(error) });
                } else if (!data || data.deletedCount === 0) {
                    // (deletedCount == 0) => it didn't delete anything
                    reject({ error: true, status: httpStatus.not_found, message: 'No ' + self.schema + ' record found' });
                } else if (data.deletedCount > 0) {
                    // Returning ID of the deleted record
                    resolve({ data: { _id }, status: httpStatus.ok, message: self.schema + ' record deleted successfully' });
                } else {
                    // TODO: Remove this later after further inspection
                    resolve({ status: httpStatus.ok, message: self.schema + ' record deleted successfully' });
                }
            });
        });
    }
}

