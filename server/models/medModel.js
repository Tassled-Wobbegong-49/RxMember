const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const medSchema = new Schema({
  name: { type: String, required: true},
  dosage: { type: Number, required: true},
  purchaseDate: {type: Date, required: true},
  exp: {type: Date, required: true},
  refill: {type: Date,  required: true},
  doctor: {type: String},
  notes: {type: String}
})

module.exports = mongoose.model('Med', medSchema);