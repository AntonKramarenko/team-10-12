const { Schema, model } = require('mongoose');

const FamilySchema = new Schema({
  phoneNumber: String,
  status: {
    type: String,
    enum: ['parents', 'spouse', 'children'],
  }
});

module.exports = model('FamilySchema', FamilySchema)
