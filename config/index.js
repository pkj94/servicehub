let setup = function (configData) {
    global.AbstractController = require('../abstract');
    global.DatabaseController = require('../abstract/database');
    let auth = require('../commons/core/auth');
    global.Auth = new auth(configData.Auth_Config);
    let Communicator = require('../commons/core/communicator');
    global.MailService = new Communicator({config: configData.communicator.Mail_Config, mode: 'email'});
    global.environmentConfig = configData;
    global.default_user_roles = roles;
  }
  
  const configuration = {
    development: {
      root: require('path').normalize(__dirname + '/..'),
      app: {
        name: 'sms-api'
      },
      host: process.env.HOST || 'https://dev.erework.co.uk/',
      // host: process.env.HOST || 'http://localhost',
      port: process.env.PORT || 8000,
      DB_Config: {
        connection: {
          mongo: {
            host: process.env.MONGO_HOST || process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || "mongodb://127.0.0.1:27017",
            user: process.env.MONGO_USER || "",
            pass: process.env.MONGO_PWD || "",
            database: process.env.MONGO_DB || 'school-management-system',
            // database: process.env.MONGO_DB || 'templatedev',
            debug: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
          }
        },
      },
      Auth_Config: {
        facebook: {
          clientID: "1392263647457019",
          clientSecret: "db959d435314e38374f1515cd207ae9e",
        },
        google: {
          clientID:
            "646434765748-h25a9u7bk4el2uapfithrlcgikf6eqem.apps.googleusercontent.com",
          clientSecret: "Zw7ho65ul7GvAWCtJwnzW8s9",
        },
        linkedIn: {
          clientID: "867r6fhe67gf6i",
          clientSecret: "Sgr0no8U5xqMTHcS",
        },
        sessionOptions: {
          cookieName: "session",
          secret: "eg[isfd-8yF9-7w2315df{}+Ijsli;;to8",
          duration: 24 * 60 * 60 * 1000,
          activeDuration: 1 * 60 * 60 * 1000,
          httpOnly: false,
          secure: false,
          ephemeral: true,
        },
        // verificationLink:'http://swiftlyshipqa.above-inc.net/api/v1/user/verify',
        verificationLink: "https://dev-erework.ccwm.co//api/v1/user/verify",
        generatePasswordLink: "https://dev-erework.ccwm.co//setPassword",
        forgotPasswordLink: "https://dev-erework.ccwm.co//api/v1/forgotpassword",
        welcomeMessage: "Your Erewark verification code is <%OTP%>",
        forgotPassword: "Your Erewark reset the password code is <%OTP%>",
        applicationName: "Erewark",
        emailVerificationOptions: {
          to: "",
          subject: "Email Verification",
          templateName: __dirname + "/templates/verificationEmail.html",
          templateData: {
            name: "",
            emailId: "",
            verificationLink: "",
            applicationName: "Erewark",
          },
        },
        welcomeEmailOptions: {
          to: "",
          subject: "Welcome to Erewark",
          templateName: __dirname + "/templates/welcome_user.html",
          templateData: {
            name: "",
            emailId: "",
            support: "support@erewark.com",
            applicationName: "Erewark",
          },
        },
        forgotPasswordOptions: {
          templateName: __dirname + "/templates/password_reset.html",
          templateData: {},
        },
        emailVerificationOptions: {
          templateName: __dirname + "/templates/verificationEmail.html",
          templateData: {},
        },
        thumbnailPath: "https://s3.amazonaws.com/swiftlyship/",
        thumbnailType: "svg",
        thumbnailCreatorRequired: true,
        emailVerificationRequired: true,
        emailVerificationAuthOptional: true,
        OTPVerificationRequired: true,
        videoMettingLink: "https://meet.jit.si/",
        AWS_S3: {
          access: {
            accessKeyId: "AKIA2C5UMCUSY5IGJSDR",
            secretAccessKey: "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",
          },
          BUCKET_NAME: "erewark-local-storage",
          LocationConstraint: "eu-west-2",
        },
      },
      communicator: {
        Mail_Config: {
          mailgun: {
            api_key: 'c9c6c85e67722b0d5c71800fa756b8d9-ee13fadb-7371a9a5',
            domain: 'sandbox0a2f3c8c6c3643d4817997be81e9efc3.mailgun.org'
          },
          google: {
            service: "Gmail",
            auth: {
              type: 'OAuth2',
              user: "no-reply@vikree.ai",
              clientId: "380310254728-ekhrbpqhdt0hs4r2ihlcto9kkuo3i4fo.apps.googleusercontent.com",
              clientSecret: "a0QA5qFfJh81gRhIP5bmE7l4",
              refreshToken: "1//04WRoJ_V6O8iwCgYIARAAGAQSNwF-L9Irzux_Vn3vhSt7DpbiOVAC08RTnHxEHIOxzNhr0x_7GPdTr2Nr4qhLJnZ9wYQfIIKV6vw",
              accessToken: "ya29.a0AfH6SMCbYkXtVIrwP_d-pA9lZNeN2O8-0K0c8kwKdI73FQU0XvyYUDuN1zy2pjXdgo75lyqkjw9ZZUgav2GCE4_dU35aNdFVI56gHUw33oy3p_i2GOuSQlfUu7gStRTy0lg7nHgBOx1ROBN3zcbrfQ0LupOZNrT-ysg"
            }
          },
          custom: {
            // host:'smtp.gmail.com',
            host: 'smtpout.secureserver.net',
            port: '465',
            secure: 'false',
            auth: {
              user: 'contact@erework.co.uk',
              pass: 'Erework@123'
            }
          },
          from: 'no-reply@erework.co.uk',
          greetings: '',
          priority: 'true',
          provider: 'mailgun',
          // mailSchemaName: 'Vikree_mail'
        },
      },
      version: '0.0.1',
      URLPrefix: '/api/v1',
      security: {
        tokenLife: 3600
      }
    }
  };
  
  const roles = {
    "admin": [
      {
        "ModuleName": "workshop",
        "permission": "RWD",
      },
      {
        "ModuleName": "location",
        "permission": "RWD",
      },
      {
        "ModuleName": "workshop_type",
        "permission": "RWD",
      },
      {
        "ModuleName": "bay",
        "permission": "RWD",
      },
      {
        "ModuleName": "bayType",
        "permission": "RWD",
      },
      {
        "ModuleName": "vehicle",
        "permission": "RWD",
      },
      {
        "ModuleName": "platform",
        "permission": "RWD",
      },
      {
        "ModuleName": "make",
        "permission": "RWD",
      },
      {
        "ModuleName": "model",
        "permission": "RWD",
      },
      {
        "ModuleName": "variant",
        "permission": "RWD",
      },
      {
        "ModuleName": "team",
        "permission": "RWD",
      },
      {
        "ModuleName": "team_type",
        "permission": "RWD",
      },
      {
        "ModuleName": "account",
        "permission": "RWD",
      },
      {
        "ModuleName": "user",
        "permission": "RWD",
      },
      {
        "ModuleName": "cost_center",
        "permission": "RWD",
      },
      {
        "ModuleName": "job_card",
        "permission": "RWD",
      },
      {
        "ModuleName": "job_type",
        "permission": "RWD",
      },
      {
        "ModuleName": "job_parameter",
        "permission": "RWD",
      },
      {
        "ModuleName": "module",
        "permission": "RWD",
      },
    ],
    "manager": [
      {
        "ModuleName": "workshop",
        "permission": "R",
      },
      {
        "ModuleName": "location",
        "permission": "R",
      },
      {
        "ModuleName": "workshop_type",
        "permission": "R",
      },
      {
        "ModuleName": "bay",
        "permission": "R",
      },
      {
        "ModuleName": "bayType",
        "permission": "R",
      },
      {
        "ModuleName": "vehicle",
        "permission": "R",
      },
      {
        "ModuleName": "platform",
        "permission": "R",
      },
      {
        "ModuleName": "make",
        "permission": "R",
      },
      {
        "ModuleName": "model",
        "permission": "R",
      },
      {
        "ModuleName": "variant",
        "permission": "R",
      },
      {
        "ModuleName": "team",
        "permission": "R",
      },
      {
        "ModuleName": "team_type",
        "permission": "R",
      },
      {
        "ModuleName": "account",
        "permission": "",
      },
      {
        "ModuleName": "user",
        "permission": "RW",
      },
      {
        "ModuleName": "cost_center",
        "permission": "R",
      },
      {
        "ModuleName": "job_card",
        "permission": "RW",
      },
      {
        "ModuleName": "job_type",
        "permission": "R",
      },
      {
        "ModuleName": "job_parameter",
        "permission": "R",
      },
      {
        "ModuleName": "module",
        "permission": "R",
      },
    ],
    "engineer": [
      {
        "ModuleName": "workshop",
        "permission": "",
      },
      {
        "ModuleName": "location",
        "permission": "",
      },
      {
        "ModuleName": "workshop_type",
        "permission": "",
      },
      {
        "ModuleName": "bay",
        "permission": "",
      },
      {
        "ModuleName": "bayType",
        "permission": "",
      },
      {
        "ModuleName": "vehicle",
        "permission": "R",
      },
      {
        "ModuleName": "platform",
        "permission": "",
      },
      {
        "ModuleName": "make",
        "permission": "",
      },
      {
        "ModuleName": "model",
        "permission": "",
      },
      {
        "ModuleName": "variant",
        "permission": "",
      },
      {
        "ModuleName": "team",
        "permission": "",
      },
      {
        "ModuleName": "team_type",
        "permission": "",
      },
      {
        "ModuleName": "account",
        "permission": "",
      },
      {
        "ModuleName": "user",
        "permission": "RW",
      },
      {
        "ModuleName": "cost_center",
        "permission": "",
      },
      {
        "ModuleName": "job_card",
        "permission": "RW",
      },
      {
        "ModuleName": "job_type",
        "permission": "",
      },
      {
        "ModuleName": "job_parameter",
        "permission": "",
      },
      {
        "ModuleName": "module",
        "permission": "R",
      },
    ],
  }
  
  let env = process.env.NODE_ENV || 'development';
  setup(configuration[env]);
  
  module.exports = configuration[env];