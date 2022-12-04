const EMAIL = require('./email');

module.exports = class Communicator {
    constructor(defaults) {
        this.mode = defaults.mode;
        if (defaults.mode.toLowerCase() == 'email') {
            this.provider = new EMAIL(defaults.config);
        }
    }

    send(options) {
        if(!this.mode) {
            return Promise.reject({message:'Invalid provider'});
        }
        return this.provider.send(options);
    }
}