const mongoose = require('mongoose');
const Schema = mongoose.Schema
require('mongoose-type-email'); // requires @ for email attribute
// const Med = require('./medModel.js') // importing med model, but unsure if needed??????

// //bcrypt
// const SALT_WORK_FACTOR = 10;
// const bcrypt = require('bcryptjs');

const userSchema = new Schema({
  // _id: Schema.Types.ObjectId,
  username: { type: String, required: [true, "Username is required"], unique: true },
  password: { type: String, required: [true, "Username is required"]},
  email: { type: mongoose.SchemaTypes.Email, required: true, unique: true }, 
  dob: { type: Date, required: true },
  medList:[{type: Schema.Types.ObjectId, ref: 'Med'}] // reference medModel 
});

module.exports = mongoose.model('User', userSchema);
