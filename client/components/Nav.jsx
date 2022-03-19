import React from 'react';
import { Link } from 'react-router-dom'

const Nav = (props) => {
  return (
    <nav>
        <h3>logo</h3>
      <ul className="nav-links">
        <Link to='/signup' style={{textDecoration: 'none'}}>
          <li>signup</li>
        </Link>
        <Link to='/login' style={{textDecoration: 'none'}}>
          <li>login</li>
        </Link>
        <Link to='/medications' style={{textDecoration: 'none'}}>
          <li>MedList</li>
        </Link>
      </ul>
    </nav>
  )

};




export default Nav;