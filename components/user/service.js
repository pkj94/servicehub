module.exports = class UserService {
  constructor(obj) {
    this.model = obj;
  }

  findUsers = async (query) => {
    let options = {
      query,
      method: 'GET',
      params: {},
    }
    return await this.model.find(options);
  }

  getEngineers = async (query) => {
    let options = {
      method: 'GET',
      params: {},
    }
    let role = (await controllers.role.util.getEngineerRole()).data[0];
    options.query = {
      ...query,
      role
    }
    return await this.model.get(options);
  }
}