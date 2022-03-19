import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import medicineReducer from './reducers/medicineReducers';

const store = createStore(
  medicineReducer,
  composeWithDevTools(applyMiddleWare(thunk)),
);