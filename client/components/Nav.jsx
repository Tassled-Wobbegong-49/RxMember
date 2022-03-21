import React from 'react';
import { Link } from 'react-router-dom'
import Logo2 from '../images/Logo2.jpg'


const Nav = (props) => {
  return (
    <nav>
        <img className="logo" src={Logo2} alt="RxMember Logo"/>
      <ul className="nav-links">
        <Link to='/medications' style={{textDecoration: 'none'}}>
          <li>MedList</li>
        </Link>
        <Link to='/day' style={{textDecoration: 'none'}}>
          <li>Day</li>
        </Link>
        <Link to='/week' style={{textDecoration: 'none'}}>
          <li>Week</li>
        </Link>
        <Link to='/month' style={{textDecoration: 'none'}}>
          <li>Month</li>
        </Link>
      </ul>
    </nav>
  )

};




export default Nav;