module.exports = class SES {
  constructor(config) {
      this.config = config;
      this.AWS = require('aws-sdk');
  }

  sendMail(option) {
      var params = {
          Destination: {
              CcAddresses: option.cc,
              ToAddresses: option.to
          },
          Message: {
              Body: {
                  Html: {
                      Charset: "UTF-8",
                      Data: option.html
                  },
                  Text: {
                      Charset: "UTF-8",
                      Data: option.text
                  }
              },
              Subject: {
                  Charset: 'UTF-8',
                  Data: option.subject
              }
          },
          Source: this.config.from,
          ReplyToAddresses: this.config.reply,
      };

      this.AWS.config.update(this.config);
      var aws = this.AWS;
      return new aws.SES({ apiVersion: '2010-12-01' }).sendEmail(params).promise()
          .then(result => {
              console.log("mail sending result:", result);
              return result;
          }).catch(err => {
              console.log("mail sending err:", err)
          });
  }
}
