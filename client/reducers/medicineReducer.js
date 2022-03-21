import * as type from '../constants/actionTypes.js'
// DECIDE WHICH FETCH MODULE WE WILL USE

// DECLARE INITIAL STATE
const initialState = {
  user: {}, // object with username and email
  medicineList: [], // array of objects
  medicineCard: {
    medicineName: "",
    dosage: "",
    purchaseDate, // date.now inputted upon user pressing submit
    expirationDate: "", // date.now + (x days in milliseconds)
    refillDate: "", // date.now + exp date - date.now
    doctorContact: "", // user input string?
    notes: "" // user input string
  }
};

// {
//   user: username,
//   password: password,
//   email: email,
//   DOB: DOB,
//   medList: [
//     med1: {
//       medicineName: "",
//       dosage: "",
//       purchaseDate, // date.now inputted upon user pressing submit
//       expirationDate: "", // date.now + (x days in milliseconds)
//       refillDate: "", // date.now + exp date - date.now
//       doctorContact: "", // user input string?
//       notes: "" // user input string
//     },
//     ...,
//   ]
// }


// DECLARE REDUCER FUNCTION
const medicineReducer = (state = initialState, action) => {
  let newMedicineList;

  switch (action.type) {

    case type.createNewUser: // on signup page
      fetch("http://localhost:3000/signup", {
          method: "POST",
          headers: {
            "Content-Type" : "application/json"
          },
          body: JSON.stringify({
            user: action.payload // payload = { username, password, email, DOB }
          })
      })
        // if no errors client shoudl be redirected by server to calendar page
        // send them to home calendar page
      .catch((error) => {
        console.log(error);
        // create alert to client of input errors?
      })

    case type.loginUser: // on login page
      fetch("http://localhost:3000/login", {
          method: "POST",
          headers: {
            "Content-Type" : "application/json"
          },
          body: JSON.stringify({
            user: action.payload // payload = { username, password }
          })
      })
        // if no errors client shoudl be redirected by server to calendar page
        // send them to home calendar page
      .catch((error) => {
        console.log(error);
        // create alert to client of input errors?
      })

    // export const getMedicineCardList = "getMedicineCardList";
    // export const addNewMedicineCard = "addNewMedicineCard";
    // export const updateMedicineCard = "updateMedicineCard";
    // export const deleteMedicineCard = "deleteMedicineCard";

    case type.getMedicineCardList: 
      // GET REQUEST TO SERVER TO GRAB THE USER'S MEDICATION LIST 
      fetch("http://localhost:3000/", {
        method: "GET",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({
          user: action.payload // payload is user
        })
      })
      .then((data) => data.json())
      .then((data) => {
        newMedicineList = data.medList // array of objects
        return {
          ...state,
          user: action.payload, // initial time state updated wtih user (when page first loads after login)
          medicineList: newMedicineList
        }
      })
      .catch((error) => console.log(error));

    case type.addNewMedicineCard: 
      // GET REQUEST TO SERVER TO GRAB THE USER'S MEDICATION LIST 
      // send POST request to server to add medicine DB
        // if medicine is unique (no error)
          // grab all the medicine for user from DB
            // update medicineList array for user, which re-renders Medicine Page
        // else (medicine is not unique (error))
          // alert message to client?

    case type.updateMedicineCard: // this action object has payload
      // send DELETE request to server 
        // if server can delete (no error)
          // 
        // else (DB returns an error)
          // alert message to client?


    case type.deleteMedicineCard: // this action object has payload
      // send DELETE request to server 
        // if server can delete (no error)
          // 
        // else (DB returns an error)
          // alert message to client?


    default: {
      return state;
    };

  };
};


export default medicineReducer;
