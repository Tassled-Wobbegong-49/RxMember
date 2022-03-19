import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CalendarContainer from './containers/CalendarContainer.jsx'; 
// import Login from './components/Login.jsx';
// import SignUp from './components/SignUp.jsx';
import Nav from './components/Nav.jsx';
import CardHeadings from './components/CardHeadings.jsx';
import MedicineCard from './components/medicineCard.jsx';
import AddMedicine from './components/addMedicine.jsx';
import Day from './components/Day.jsx';
import Week from './components/Week.jsx';
import Month from './components/Month.jsx';
// import CalendarContainer from './containers/CalendarContainer.jsx';


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
          <Routes>
            <Route path="/medications" element={<> <CardHeadings/><MedicineCard/><AddMedicine/> </>}/>
            <Route path="/day" element={<Day/>}/>
            <Route path="/week" element={<Week/>}/>
            <Route path="/month" element={<Month/>}/>
          </Routes>
        </div>
      </Router>
    );
  };
}

export default App;
