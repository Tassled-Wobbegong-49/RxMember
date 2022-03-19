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

// export const getMedicineCardList = "getMedicineCardList";
// export const addNewMedicineCard = "addNewMedicineCard";
// export const updateMedicineCard = "updateMedicineCard";
// export const deleteMedicineCard = "deleteMedicineCard";

// DECLARE REDUCER FUNCTION
const medicineReducer = (state = initialState, action) => {
  let newMedicineList;

  switch (action.type) {
    
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
      {
        user: username,
        password: password,
        email: email,
        DOB: DOB,
        medList: [
          med1: {
            name,
            dosage,
            purchaseDate,
            exp,
            refill,
            doctor,
            notes
          },
          med2: {
            name,
            dosage,
          }
        ]
      }
      .then((data) => data.json())
      .then(() => {
        newMedicineList = data.list 
        return {
          ...state,
          user: action.payload,
          medicineList: newMedicineList
        }
      })
      .catch((error) => console.log(error));


    case type.addNewMedicineCard: // this action object has payload
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
