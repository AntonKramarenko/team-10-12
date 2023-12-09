const { Schema, model } = require('mongoose');
const { regions } = require("../constants");
const FamilySchema = require('./family')

const Entity = new Schema({
    username: {
        type: String,
    },
    telegramName: {
        type: String,
    },
    userGroup: {
        type: String,
        default: 'Ментальне здоров’я'
    },
    messenger: {
        type: String,
        enum: ['telegram', 'viber', 'messenger'],
        default: 'telegram'
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
    birthday: {
        type: Date,
        default: '1994-12-08',
    },
    age: {
        type: Number,
        default: '',
    },
    location: {
        type: String,
        enum: regions,
    },
    userStatus: {
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
