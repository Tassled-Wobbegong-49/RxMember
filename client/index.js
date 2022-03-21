import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import App from './App.jsx'
import SignUp from './components/SignUp.jsx'
import styles from './style/style.css';
import store from './store.js';

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);