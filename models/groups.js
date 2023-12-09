const { Schema, model } = require('mongoose');
const Entity =require('./entity')

const Groups = new Schema({
  name: {
    type: String,
    required: true,
  },
  users: [Entity.schema]
});

module.exports = model('Groups', Groups)
