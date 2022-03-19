import { combineReducers } from 'redux';
import medicineReducer from './medicineReducer.js';

// COMBINE REDUCERS
export default combineReducers({
  reducer: medicineReducer
});