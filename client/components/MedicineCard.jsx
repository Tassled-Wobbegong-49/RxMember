import React from 'react';


const MedicineCard = () => {
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



export default MedicineCard;