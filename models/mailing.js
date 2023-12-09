const { Schema, model } = require('mongoose');

const Mailing = new Schema({
  age: [{
    type: String,
  }],
  group: [{
    type: String,
  }],
  mail: {
    type: String,
  },
  messenger: [{
    type: String,
  }],
  regions: [{
    type: String,
  }],
  status: [{
    type: String,
  }],
  templateName: {
    type: String,
  },
});

module.exports = model('Mailing', Mailing)
