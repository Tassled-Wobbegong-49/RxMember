const mongoose = require('mongoose');
const Schema = mongoose.Schema

// //bcrypt
// const SALT_WORK_FACTOR = 10;
// const bcrypt = require('bcryptjs');

const userSchema = new Schema({
  _id: Schema.Types.ObjectId,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true }, // require @?
  dob: { type: Number, required: true },
  medList: {type: Schema.Types.ObjectId, ref: 'medModel'} // reference medModel 
});

module.exports = mongoose.model('User', userSchema);
