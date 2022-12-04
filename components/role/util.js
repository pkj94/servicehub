module.exports = class WipStatusUtil {
  constructor(obj) {
    this.model = obj;
  }

  getEngineerRole = async () => {
    let query = {
      name: this.model.constants.ROLES.Rework_Engineer
    }
    return await this.model.service.findRoles(query);
  }
}