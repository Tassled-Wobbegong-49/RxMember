import * as type from '../constants/actionTypes.js'
// DECIDE WHICH FETCH MODULE WE WILL USE

// DECLARE INITIAL STATE
const initialState = {
  user: {}, // object with username and email
  medicineList: [], // array of objects
  // medicineCard: {
  //   medicineName: "",
  //   dosage: "",
  //   purchaseDate, // date.now inputted upon user pressing submit
  //   expirationDate: "", // date.now + (x days in milliseconds)
  //   refillDate: "", // date.now + exp date - date.now
  //   doctorContact: "", // user input string?
  //   notes: "" // user input string
  // }
};


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

    case type.getMedicineCardList: // on load on the calendar page
      fetch("http://localhost:3000/all", {
        method: "GET",
        headers: {
          "Content-Type" : "application/json"
        }
      })
      .then((data) => data.json())
      .then((data) => {
        newMedicineList = data.medList // array of objects
        return {
          user: data.user, // initial time state updated wtih user (when page first loads after login)
          medicineList: newMedicineList
        }
      })
      .catch((error) => console.log(error));


    // export const addNewMedicineCard = "addNewMedicineCard";
    // export const updateMedicineCard = "updateMedicineCard";
    // export const deleteMedicineCard = "deleteMedicineCard";

    // endpoint /addcard

    // const initialState = {
    //   user: {}, // object with username and email
    //   medicineList: [] // array of objects
    // };

    case type.addNewMedicineCard: 
      fetch("http://localhost:3000/addcard", {
        method: "POST",
        headers: {
          "Content-Type" : "application/json" 
        },
        body: JSON.stringify({
          user: action.payload // payload = { username, medicineName, dosage, purchaseDate, expirationDate, refillDate, doctorContact, notes }
        })
      })
      .then((data) => data.json())
      .then((data) => {
        newMedicineList = data.medList // array of objects
        return {
          ...state, 
          medicineList: newMedicineList
        }
      })

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
