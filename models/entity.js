const { Schema, model } = require('mongoose');
const { regions } = require("../constants");
const FamilySchema = require('./family')

const Entity = new Schema({
    username: {
        type: String,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        default: '',
    },
    registrationDate: {
        type: Date,
        default: Date.now,
    },
    age: {
        type: Number,
        default: '',
    },
    location: {
        type: String,
        enum: regions,
    },
    userType: {
        type: String,
        enum: ['veteran', 'family_member'],
        default: 'veteran',
    },
    familyMembers: [FamilySchema.schema],
    typicalQuestionsAnswered: {
        type: Number,
        default: 0,
    },
    adminRequestsCount: {
        type: Number,
        default: 0,
    },
});

module.exports = model('Entity', Entity)
