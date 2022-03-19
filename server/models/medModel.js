const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const medSchema = new Schema({
  name: {},
  dosage: {},
  purchaseDate: {},
  exp: {},
  refill: {},
  doctor: {},
  notes: {}

})