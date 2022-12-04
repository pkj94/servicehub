module.exports = class RoleService {
    constructor(obj) {
        this.model = obj;
    }

    findRoles = async (query) => {
        let options = {
            query,
            method: 'GET',
            params: {},
        }
        return await this.model.get(options);
    }
}