import React from 'react';
import { Link } from 'react-router-dom'

const Nav = (props) => {
  return (
    <nav>
        <h3>logo</h3>
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