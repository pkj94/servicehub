const mongoose = require('mongoose');
module.exports = {
    name: 'users',
    schema: {
        emailId: {
            type: String,
            default: ''
        },
        schoolId: {
            type: String,
            default: null
        },
        firstName: {
            type: String,
            default: ''
        },
        lastName: {
            type: String,
            default: '',
        },
        password: {
            type: String,
        },
        phoneNumber: {
            type: String,
            default: '',
        },
        image: {
            type: String,
            default: '',
        },
        gender: {
            type: String,
            default: 'M',
            enum: ['M', 'F', 'O']
        },
        mother: {
            type: String,
            default: null,
            ref: 'parents'
        },
        father: {
            type: String,
            default: null,
            ref: 'parents'
        },
        dob: {
            type: Date,
            default: null,
        },
        subjects: {
            type: Array,
            default: [],
            ref: 'subjects'
        },
        class: {
            type: String,
            default: null,
            ref: 'classes'
        },
        section: {
            type: String,
            default: null,
            ref: 'sections'
        },
        id: {
            type: String,
            default: '',
        },
        address: {
            type: String,
            default: '',
        },
        meta: {
            type: Object,
            default: {},
        },
        isVerified: {
            type: Boolean,
            default: false,
        },
        isRegistered: {
            type: Boolean,
            default: false,
        },
        isFirstLogin: {
            type: Boolean,
        },
        role: {
            type: String,
            ref: "roles",
            default: null,
        },
        createdBy: { type: String, ref: "users" },
        updatedBy: { type: String, ref: "users" },
    }
}