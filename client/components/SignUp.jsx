import React from 'react';


const SignUp = (props) => {
  return (
    <div>
      <div>Creating an account is as easy as 1, 2, 3...</div>
      <p/>
      <div className="username-field">
        <label>Username: </label>
        <input type="text"/>
      </div>
      <div className="password-field">
        <label>Password: </label>
        <input type="text"/>
      </div>
      <div className="email-field">
        <label>Email: </label>
        <input type="text"/>
      </div>
      <div className="DOB-field">
        <label>Date of Birth: </label>
        <input type="text"/>
      </div>
      <button>Sign Up</button>
      <p/>
      <div id="OAuth">
        <div>Sign in with <a href="www.google.com">Google</a></div>
        <div>Sign in with <a href="www.facebook.com">Facebook</a></div>
      </div>
    </div>
  )

};




export default SignUp;

