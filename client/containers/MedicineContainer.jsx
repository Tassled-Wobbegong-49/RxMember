import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import Nav from '../components/Nav.jsx';
import * as actions from '../constants/actionTypes.js';
import MedicineCard from '../components/MedicineCard.jsx';
import AddMedicine from '../components/AddMedicine.jsx';

// MAP WHAT STATE PROPERTIES WE WANT TO PASS DOWN PASS DOWN
const mapStateToProps = state => {
  return {

  } 
};

// MAP WHAT DISPATCH/ACTION CREATORS WE WANT TO PASS DOWN
const mapDispatchToProps = dispatch => {
  return {

  } 
};

const MedicineContainer = (props) => {
// RENDER MEDICINE CARDS

// RENDER ADD MEDICINES 

};

export default connect(mapStateToProps, mapDispatchToProps)(MedicineContainer);