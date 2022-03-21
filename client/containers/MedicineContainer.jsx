import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';
import CardHeadings from '../components/CardHeadings.jsx';
import MedicineCard from '../components/MedicineCard.jsx';
import AddMedicine from '../components/AddMedicine.jsx';

// MAP WHAT STATE PROPERTIES WE WANT TO PASS DOWN PASS DOWN
const mapStateToProps = state => ({
  user: state.reducer.user,
  medList: state.reducer.medList
});




// MAP WHAT DISPATCH/ACTION CREATORS WE WANT TO PASS DOWN
const mapDispatchToProps = dispatch => ({
  // addCard: (data) => {
  //   dispatch(actions.addNewMedicineCardAC(data));
  // },
  getMedicineCardList: (data) => {
    dispatch(actions.getMedicineCardListAC(data));
  },
  // updateCard: (data) => {
  //   dispatch(actions.updateCardAC(data));
  // },
  // deleteCard: (medicineName) => {
  //   dispatch(actions.deleteCardAC(medicineName))
  // }
});

class MedicineContainer extends Component {
  constructor(props) {
    super(props);

    // bind all onclick methods this.method = this.method.bind(this)
  }
// RENDER MEDICINE CARDS
  render() {

    // loop through medList (from state) to render all medicine cards
    const cardList = [];
    for (let i=0; i < this.props.medList; i++) {
      cardList.push(<MedicineCard 
        user={this.props.user} 
        medicineName={this.props.medList[i].medicineName} 
        dosage={this.props.medList[i].dosage} 
        expirationDate={this.props.medList[i].expirationDate} 
        refillDate={this.props.medList[i].refillDate} 
        purchaseDate={this.props.medList[i].purchaseDate} 
        doctorContact={this.props.medList[i].doctorContact} 
        notes={this.props.medList[i].notes} 
        updateCard={this.props.updateCard} 
        deleteCard={this.props.deleteCard} 
        key={i}/>)
    }

    return (
      <main>
        <label><input id="username" type="text" placeholder="username"/></label>
        <label><input id="password" type="text" placeholder="password"/></label>
        <button onClick={()=> {this.getInfo()}}>get info</button>
        <AddMedicine 
          // user={this.props.user}
          // addCard={this.props.addCard}
        />
        <CardHeadings/>
        { cardList }
        {/* <MedicineCard
          // user={this.props.user}
          // updateCard={this.props.updateCard}
          // deleteCard={this.props.deleteCard}
        /> */}
       
      </main>  
    )
  }

  // add card on click method
  // update card on click method. Editable fields on click? pop up modal?
  // delete card on click function. Are you sure prompt?
  getInfo() {
    let body ={};
    body.username = document.getElementById('username').value;
    // body.username = 'Hello';
    // body.password = 'world';
    console.log("body: ", body);
    this.props.getMedicineCardList(body);
    // })
  }



};

export default connect(mapStateToProps, mapDispatchToProps)(MedicineContainer);
// export default MedicineContainer;