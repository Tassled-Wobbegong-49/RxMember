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
//       name,
//       dosage,
//       purchaseDate,
//       exp,
//       refill,
//       doctor,
//       notes
//     },
//     ...,
//   ]
// }


// DECLARE REDUCER FUNCTION
const medicineReducer = (state = initialState, action) => {
  let newMedicineList;

  switch (action.type) {
    
    // export const createNewUser = "createNewUser";
    // export const loginUser = "loginUser";

    case type.createNewUser: 
      fetch("http://localhost:3000/signup", {
          method: "POST",
          headers: {
            "Content-Type" : "application/json"
          },
          body: JSON.stringify({
            user: action.payload // payload is action.payload = { username, password, email, DOB }
          })
        })
        .then(() => {
          // send them to home calendar page
        })
        .catch((error) => {
          console.log(error);
        })



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
