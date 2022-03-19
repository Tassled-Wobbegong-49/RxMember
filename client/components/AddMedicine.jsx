import React from 'react';


const AddMedicine = () => {
  return(
    <main className="addMedicineBox">
      <label>medicine<input type="text"/></label>
      <label>dosage<input type="text"/></label>
      <label>purchaseDate<input type="text"/></label>
      <label>expiration<input type="text"/></label>
      <label>refill<input type="text"/></label>
      <label>doctor<input type="text"/></label>
      <label>notes<input type="text"/></label>
      <button>Add medicine</button>
    </main>
  )

}



export default AddMedicine;