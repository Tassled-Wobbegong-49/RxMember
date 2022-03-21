import React from 'react';


const MedicineCard = (props) => {
  return(
    <main className="medicineCard">
      <div className="cardBox">medicine</div>
      <div className="cardBox">dosage</div>
      <div className="cardBox">purchaseDate</div> 
      <div className="cardBox">expiration</div>
      <div className="cardBox">refill</div>
      <div className="cardBox">doctor</div>
      <div className="cardBox">notes</div>
      <button>delete</button>
    </main>
  )
}
// props.medList[index].medicineName
// props.medList[index].dosage
// props.medList[index].purchaseDate
// props.medList[index].expirationDate
// props.medList[index].refillDate
// props.medList[index].doctor
// props.medList[index].medicineName


export default MedicineCard;