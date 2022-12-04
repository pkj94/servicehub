const nodemailer = require('nodemailer');
const mg = require('nodemailer-mailgun-transport');

module.exports = class nodeMailer {
    constructor(config) {
        this.config = config;
    }

    async sendMail(option) {
        var params = {
            from: this.config.from,
            to: option.to,
            cc: option.cc,
            bcc: option.bcc,
            subject: option.subject,
            'h:Reply-To': this.config.reply,
            // html: option.html,
            text: option.text
        };
        /***
         * Mail_Config: {
            auth: {
                api_key: 'key-8de8694381fde925a1e48f2046cc41c6',
                domain: 'flyero.com'
            },
            from: 'no-reply@Vikree.com',
            reply: '',
            provider: 'nodemailer',
            mailSchemaName: 'Vikree_mail'
        },
         */
        // sampel auth
        /* const auth = {
            auth: {
                api_key: 'key-1234123412341234',
                domain: 'one of your domain names listed at your https://mailgun.com/app/domains'
            },
            proxy: 'http://user:pass@localhost:8080' // optional proxy, default is false
        }*/
        // const nodemailerMailgun = nodemailer.createTransport(mg({auth:this.config.mailgun}));\
        try {
            
            const mailer = nodemailer.createTransport(this.config.custom);
            return new Promise((resolve) => {
                mailer.sendMail(params, (err, info) => {
                    if (err) {
                        console.log("mail sending err:", err)
                        resolve("not sent")
                    }
                    else {
                        console.log("mail sending result:", info);
                        resolve("sent");
                    }
                });
            })
        } catch (er) {
            console.log(er);
            return "some issue occurred while sending email";
        }
    }
}
