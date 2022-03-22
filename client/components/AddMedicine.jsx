import React from 'react';


const AddMedicine = (props) => {
  return(
    <main className="addMedicineBox">
      <label>medicine<input id="name" type="text"/></label>
      <label>dosage<input id="dosage" type="text"/></label>
      <label>purchaseDate<input id="purchaseDate" type="text"/></label>
      <label>expiration<input id="exp" type="text"/></label>
      <label>refill<input id="refill" type="text"/></label>
      <label>doctor<input id="doctor" type="text"/></label>
      <label>notes<input id="notes" type="text"/></label>
      <button onClick={()=> {props.addCardInfo(props.username, props.addCard)}}>Add medicine</button>
    </main>
  )

}



export default AddMedicine;