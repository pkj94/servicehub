const NodeMailer = require('./nodeMailer');
const SES = require('./SES');
const fs = require('fs');

module.exports = class Email {
    constructor(config) {
        this.config = config;
        if(this.config.provider == 'aws-ses'){
            this.provider = new SES(config);
        }
        if(this.config.provider == 'mailgun'){
            this.provider = new NodeMailer(config);
        }
    }

    getHtmlDataFromPath(options) {
        return new Promise((resolve, reject) => {
            if (options.htmlTemplate)
                return resolve(options.htmlTemplate);
            if (!options.templateName)
                return resolve("test")
            fs.readFile(options.templateName, 'utf8', function (err, htmlEmail) {
                if (err) {
                    return console.log(err);
                }
                Object.keys(options.templateData).forEach(key => {
                    options.templateData['%' + key + '%'] = options.templateData[key];
                    delete options.templateData[key];
                })

                htmlEmail = htmlEmail.replace(/%\w+%/g, function (all) {
                    return options.templateData[all] || all;
                });
                resolve(htmlEmail)
            })
        })
    }

    async send(option) {
        // option.html = await this.getHtmlDataFromPath(option);
        return this.provider.sendMail(option);
    }
}
