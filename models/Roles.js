const mongoose = require('mongoose');
module.exports = {
  name: 'roles',
  schema: {
    name: {
      type: String,
      default: ''
    },
    description:{
      type: String,
      default: ''
    },
    // permissions: [{
    //   moduleName: {type: String},
    //   permission: {
    //     read: {
    //       type: Boolean,
    //       default: false,
    //     },
    //     write: {
    //       type: Boolean,
    //       default: false,
    //     },
    //     delete: {
    //       type: Boolean,
    //       default: false,
    //     }
    //   },
    // }],
    createdBy: { type: String, ref: "users" },
    updatedBy: { type: String, ref: "users" },
  }
}