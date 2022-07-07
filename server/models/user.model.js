const { Schema, model } = require('mongoose');

const meetSchema = new Schema({
    firstName : { type: String },
    lastName : { type: String },
    address : { type: String },
    phone : { type: String },
    email  : { type: String },
    height : { type: Number },
    weight : { type: String },
    managerDaily : { type: Array() }
  });

const Meet = model('Meet', meetSchema);

module.exports = Meet;