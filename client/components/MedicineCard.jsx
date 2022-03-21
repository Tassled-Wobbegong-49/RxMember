import React from 'react';


const MedicineCard = (props) => {
  return(
    <main className="medicineCard">
      <div className="cardBox">{props.medicineName}</div>
      <div className="cardBox">{props.dosage}</div>
      <div className="cardBox">{props.purchaseDate}</div> 
      <div className="cardBox">{props.expirationDate}</div>
      <div className="cardBox">{props.refillDate}</div>
      <div className="cardBox">{props.doctorContact}</div>
      <div className="cardBox">{props.notes}</div>
      <button>delete</button>
    </main>
  )
}

{/* user={this.props.user} 
        medicineName={this.props.medList[i].medicineName} 
        dosage={this.props.medList[i].dosage} 
        expirationDate={this.props.medList[i].expirationDate} 
        refillDate={this.props.medList[i].refillDate} 
        purchaseDate={this.props.medList[i].purchaseDate} 
        doctorContact={this.props.medList[i].doctorContact} 
        notes={this.props.medList[i].notes} 
        updateCard={this.props.updateCard} 
        deleteCard={this.props.deleteCard}  */}

// props.medList[index].medicineName
// props.medList[index].dosage
// props.medList[index].purchaseDate
// props.medList[index].expirationDate
// props.medList[index].refillDate
// props.medList[index].doctor
// props.medList[index].medicineName


export default MedicineCard;