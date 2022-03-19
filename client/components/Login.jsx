import React from 'react';
import { Link } from 'react-router-dom'


const Login = (props) => {
  return (
    <div>
      <div className="username-field">
        <label></label>
        <input type="text"/>
      </div>
      <div className="password-field">
        <label></label>
        <input type="text"/>
      </div>
      <Link to="/nav" >
        <button>Login</button>
      </Link>
    </div>
  )

};


export default Login;

