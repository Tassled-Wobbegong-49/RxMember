import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CalendarContainer from './containers/CalendarContainer.jsx'; 
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';
import Nav from './components/Nav.jsx';
import CardHeadings from './components/CardHeadings.jsx';
import MedicineCard from './components/medicineCard.jsx';
import AddMedicine from './components/addMedicine.jsx';
class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  

  render() {
    return (
      <Router>
        <div className="App">
          <Nav/>
          {/* <AddMedicine/> */}
          <Routes>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/medications" element={<> <CardHeadings/><MedicineCard/><AddMedicine/> </>}/>
          </Routes>
        </div>
      </Router>
    );
  };
}

export default App;
