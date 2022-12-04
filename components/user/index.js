const CONSTANTS = require('./constants');
const UserService = require('./service');
const ADMIN = CONSTANTS.ADMIN;
const ROLES = CONSTANTS.ROLES;

module.exports = class User extends AbstractController {
  constructor(schema, databases) {
    super(schema, databases);
    this.moduleName = "User";
    this.service = new UserService(this);
  }

  static get name() {
    return "User";
  }

  get = async (req) => {
    const { query } = req;
    const { dashboard } = query;
    let populateObj = false
    if (query.populateObj) {
      populateObj = true;
      delete query.populateObj;
    }
    if (dashboard) delete query.dashboard;
    req.query.populate = [
      { path: 'role', select: 'name description' },
    ];
    req.query.fields = '_id, emailId, firstName, lastName, role';
    try {
      let result = await super.find(req);
      if (result.data) {
        let role = null;
        if (!Array.isArray(result.data)) {
          role = result.data.role;
          if (role) await this.populateAdditionalData(role, dashboard, result.data)
          result.data.role = role ? role._id : null;
        } else {
          for (let i = 0; i < result.data.length; i++) {
            role = result.data[i].role;
            if (role) await this.populateAdditionalData(role, dashboard, result.data[i])
            if (!populateObj) {
              result.data[i].role = role ? role._id.toString() : null;
            }
          }
        }
      }
      return result;
    } catch (err) {
      return err;
    }
  }

  populateAdditionalData = async (role, dashboard, data) => {
    let result = {};
    switch (role.name) {
      case 'Rework Engineer':
        let query = {
          engineer: data._id,
        }
        try {
          let completedSts = await controllers.wipStatus.util.getEngCmpltdSts();
          let assignedSts = await controllers.wipStatus.util.getEngAsgSts();
          let inProgressSts = await controllers.wipStatus.util.getEngWipSts();

          query.wipStatus = { $in: completedSts.data || null }
          if (dashboard && dashboard.sdate && dashboard.edate) {
            query.endTime = {
              $gte: dashboard.sdate,
              $lte: dashboard.edate
            }
          }
          result = await controllers.wipVehicle.service.getCompletedCount(query)
          if (result.data || result.data === 0) data.completed = result.data;
          delete query.endTime;
          query.wipStatus = { $in: assignedSts.data || null }
          if (dashboard && dashboard.sdate && dashboard.edate) {
            query.assignedOn = {
              $gte: dashboard.sdate,
              $lte: dashboard.edate
            }
          }
          result = await controllers.wipVehicle.service.getAssignedCount(query)
          if (result.data || result.data === 0) data.assigned = result.data;
          delete query.assignedOn;
          if (!dashboard) {
            query.wipStatus = { $in: inProgressSts.data || null }
            if (dashboard && dashboard.sdate && dashboard.edate) {
              query.createdAt = {
                $lte: dashboard.edate
              }
            }
            result = await controllers.wipVehicle.service.findByWip(query);
          }
        } catch (err) {
          console.log(err);
        }
        if (!dashboard) {
          if (result.data && result.data.length > 0) {
            data.wipVehicle = result.data;
          }
        }
        break;
      default: break;
    }
  }

  inviteUser = async (req) => {
    let emailId = req.body.emailId;
    let options = {
      to: emailId,
      subject: 'Erework Invitation',
      text: `https://dev.erework.co.uk/signup/${req.body.link || ''}`
    }
    return await MailService.send(options);
  }

  create = async (req) => {
    let body = req.body;
    // if(!Array.isArray(body)){
    //   body = [body]
    // };
    let emailIds = [];
    body.users.forEach(item => emailIds.push(item.emailId));
    req.query.emailId = { $in: emailIds }
    delete req.body;
    req.method = 'GET';
    try {
      const user = await super.find(req);
      if (user.data.length !== 0) {
        // Todo: Make this async call to check if user is present in db as user types.
        return {
          message: "User already exists!",
          status: this.httpStatus.conflict,
        }
      } else {
        let result = [];
        req.query = {};
        req.method = 'POST';
        req.body = body
        result = await this.createMultipleUsers(req);
        // body.forEach(async item => {
        //   req.body = item;
        //   req.method = 'POST'
        //   req.query = {}
        //   let user = await super.insert(req);
        //   result.push(user.data);
        // });
        return {
          data: result,
          message: `Users added successfully!`,
          status: this.httpStatus.ok
        }
      }
    } catch (err) {
      return {
        message: err.message
      }
    }
  }

  createMultipleUsers = async (req) => {
    let userList = req.body.users;
    delete req.body.users;
    let result = [];
    for (let i = 0; i < userList.length; i++) {
      req.body = {
        ...req.body,
        ...userList[i],
      }
      // const invite =  await super.inviteUser(req);
      const res = await super.insert(req);
      let accessToken = await Auth._createToken({ data: { _id: res.data._id.toString(), emailId: res.data.emailId } });
      req.body.link = accessToken;
      const invite = await this.inviteUser(req);
      result.push(res.data);
    }
    return result;
  }

  login = async (req) => {
    const { body } = req;
    const self = this;
    if (!body.emailId || !body.password) {
      return { message: "Creation of Token Failed!" };
    }
    try {
      req.query = { emailId: body.emailId.toLowerCase() };
      req.query.populate = [
        { path: 'role', select: "name" },
        ]
      const password = Auth.encryptPassword(body.password);
      console.log(password)
      req.method = "GET";
      const result = await super.findOne(req);
      if (password === result.data.password) {
        result.data = (({ _id, emailId, firstName, lastName, role, }) => ({ _id, emailId, firstName, lastName, role, }))(result.data);
        result.data.accessToken = await Auth._createToken(result);
        result.message = "Login Successful";
        return result;
      } else {
        return {
          message: "Invalid Password!",
          status: self.httpStatus.forbidden,
        }
      }
    }
    catch (err) {
      console.log(err);
      return {
        message: "Invalid Credentials!",
        status: self.httpStatus.forbidden,
      }
    }
  }

  update = async (req) => {
    let body = req.body;
    try {
      if (body) {
        if (body.password) {
          req.body.password = await Auth.encryptPassword(body.password);
        }
        return await super.update(req);
      } else {
        return {
          message: 'Bad Request',
          status: this.httpStatus.bad_request
        }
      }
    } catch (err) {
      return {
        message: err.message,
        status: this.httpStatus.bad_request
      }
    }
  }

  // update = async (req) => {
  //   let body = req.body;
  //   // if(!Array.isArray(body)){
  //   //   body = [body]
  //   // };
  //   // let emailIds = [];
  //   // body.users.forEach(item => emailIds.push(item.emailId));
  //   // req.query.emailId = {$in: emailIds}
  //   // delete req.body;
  //   // req.method = 'GET';
  //   try{
  //     // const user = await super.find(req);
  //     // if(user.data.length !== 0) {
  //     //   // Todo: Make this async call to check if user is present in db as user types.
  //     //   return {
  //     //     message: "User already exists!",
  //     //     status: this.httpStatus.conflict,
  //     //   }
  //     // } else {
  //       let result = [];
  //       req.query = {};
  //       req.method = 'PUT';
  //       req.body = body
  //       result = await this.updateMultipleUsers(req);
  //       return {
  //         data: result,
  //         message: `User(s) updated successfully!`,
  //         status: this.httpStatus.ok
  //       }
  //     // }
  //   } catch(err) {
  //     return {
  //       message: err.message
  //     }
  //   }
  // }

  //!Delete if not needed
  // updateMultipleUsers = async (req) => {
  //   let userList = req.body.users;
  //   delete req.body.users;
  //   let result = [];
  //   for(let i = 0; i<userList.length; i++){
  //     req.query={_id: userList[i]._id || userList[i]};
  //     req.body = {
  //       ...userList[i],
  //       ...req.body,
  //     }
  //     const res = await super.update(req);
  //     result.push(res.data);
  //   }
  //   return result;
  // }

  initAdmin = async (req) => {
    try {
      req.query.emailId = ADMIN.emailId;
      const user = await super.find(req);
      if (user.data.length !== 0) {
        return {
          message: "Admin has already been setup!",
          status: this.httpStatus.conflict,
        }
      } else {
        req.method = 'POST';
        req.body = ROLES[0];
        const roles = await controllers.role.create(req);
        const role = roles.data ? roles.data._id : null;
        if (role) {
          req.body = { ...ADMIN, role };
          console.log(req.body);
          const admin = await super.insert(req);
          const { _id } = admin.data;
          if (_id) {
            return {
              message: 'Admin setup successful!',
              status: this.httpStatus.ok,
            }
          }
        }
      }
    } catch (err) {
      console.log(err)
      return {
        message: err.message,
        status: this.httpStatus.bad_request
      }
    }
    return
  }

  checkInvite = async (req) => {
    try {
      let user = req.user;
      // if(user.isVerified && user.isRegistered) {
      let result = {};
      result.data = (({ _id, emailId, firstName, lastName, role }) => ({ _id, emailId, firstName, lastName, role }))(user);
      result.data.accessToken = await Auth._createToken(result);
      result.message = "User verified";
      result.status = this.httpStatus.ok;
      return result;
      // }
    } catch (err) {
      return {
        message: err.message,
        status: this.httpStatus.bad_request
      }
    }
  }

  _checkForAccessToken = async (id) => {
    let req = { params: {}, query: {} }
    req.params._id = id;
    req.method = 'GET';
    return super.find(req);
  }
}