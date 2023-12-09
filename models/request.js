const { Schema, model } = require('mongoose');

const Request = new Schema({
  userId: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  group: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  resolved: {
    type: Boolean,
    default: false,
  },
});

module.exports = model('Request', Request)
