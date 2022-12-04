const crypto = require('crypto');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const FacebookTokenStrategy = require('passport-facebook-token');
const GoogleTokenStrategy = require('passport-google-token').Strategy;
const jwtToken = require('jsonwebtoken');

module.exports = class Auth {
  constructor(config) {
    this.config = config;
    this.facebookConfig = this.config.facebook;
    this.googleConfig = this.config.google;

    this.secret = "eg[isfd-8yF9-7w2315df{}+Ijsli;;to8";
    passport.serializeUser((user, done) => {
      done(null, user._id); // _id might change change
    });
    passport.deserializeUser((id, done) => {
      done(null);
    })

    passport.use('local', this.localStrategy());
    passport.use(new GoogleTokenStrategy(this.googleConfig, this.generateStrategy));
    passport.use(new FacebookTokenStrategy(this.facebookConfig, this.generateStrategy));
  }

  encrypt(text) {
    var algorithm = 'aes-256-ctr',
      password = 'd6F3Efeq';
    var cipher = this.crypto.createCipher(algorithm, password)
    var crypted = cipher.update(text, 'utf8', 'hex')
    crypted += cipher.final('hex');
    return crypted;
  }

  encryptPassword(password, salt = 'khggkbuimfpnfmxzrrffwaiglgycgqas') {
    var encodedPassword = crypto.pbkdf2Sync(password, salt, 1000, 24, 'sha1');
    return Buffer.alloc(30, encodedPassword, 'binary').toString('hex');
  }
  
  localAuthenticate(req, res, next) {
    passport.authenticate('local', (err, user, info) => {
      //error case needs to be handled
      if (info) {
        req.info = info;
        next();
      } else if (!user) {
        next();
      } else {
        req.user = user;
        //req.session.user = user;
        next();
      }
    })(req, res, next);
  }
  
  facebookAuthenticate(req, res, next) {
    return passport.authenticate('facebook-token', (error, user, info) => {
      req.user = user;
      req.error = error;
      next();
    })(req, res, next);
  }
  
  googleAuthenticate(req, res, next) {
    return passport.authenticate('google-token', (error, user) => {
      req.user = user;
      req.error = error;
      next();
    })(req, res, next);
  }

  localStrategyCallback() {
    //This method will be extended in the child class
  }

  localStrategy() {
    return new (LocalStrategy)({ usernameField: 'username', passwordField: 'password' },
      (username, password, done) => {
        process.nextTick(() => {
          this.localStrategyCallback(username, password, done);
        });
    });
  }

  generateStrategyCallback(provider, userDetails, done) {
      //Needs to be updated in extended class
  }

  generateStrategy(accessToken, refreshToken, profile, done) {
    process.nextTick(() => {
      if (profile) {
        let provider = profile.provider ? profile.provider : 'facebook';
        var userDetails = this.generateUserDetails(profile, profile.provider);
        this.generateStrategyCallback(provider, userDetails, done);
      } else {
        return done(new Error('Profile not found'));
      }
    });
  }

  generateToken(data) {
    console.log("aj", data);
    data = typeof data === 'object' && data.constructor == Object
      ? data
      : data.toJson()
    try{
      let token = jwtToken.sign(data, this.secret)
      return token;
    } catch (err) {
      console.log(err);
    }
  }
  validateToken(access_token, callback) {
    return jwtToken.verify(access_token, this.secret, callback);
  }

  _createToken(data) {
    data["createdOn"] = new Date();
    return this.generateToken(data);
  }
}