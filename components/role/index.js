const RoleConstants = require('./constants');
const RoleService = require('./service');
const RoleUtils = require('./util');
module.exports = class Role extends AbstractController {
  constructor(schema, databases) {
    super(schema, databases);
    this.moduleName = "Roles";
    this.service = new RoleService(this);
    this.util = new RoleUtils(this);
    this.constants = RoleConstants;
  }

  static get name() {
    return "Roles";
  }

  async test(req) {
    return { data: 'TEST API' };
  }
}

