const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const medSchema = new Schema({
  name: { type: String, required: true},
  dosage: { type: String, required: true},
  purchaseDate: {type: Date, required: true},
  exp: {type: Date, required: true},
  refill: {type: Date,  required: true},
  doctor: {type: String},
  notes: {type: String}
})

module.exports = mongoose.model('Med', medSchema);



/**** POSTMAN EXAMPLE JSON BODY ****/

// {
//   "name": "test",
//   "dosage": "2 a day",
//   "purchaseDate": "02/02/2009",
//   "exp": "08/08/2010",
//   "refill": "09/09/2011",
//   "doctor": "dr.dr"
  
// }

// {
//   "name": "addrall",
//   "dosage": "2-4 as needed",
//   "purchaseDate": "02/02/2022",
//   "exp": "08/08/2022",
//   "refill": "09/09/2022",
//   "doctor": "dr.sinclair"
  
// }

// {
//   "name": "jellybean",
//   "dosage": "2-4 as needed",
//   "purchaseDate": "02/02/2022",
//   "exp": "08/08/2022",
//   "refill": "09/09/2022",
//   "doctor": "dr.sinclair"
  
// }