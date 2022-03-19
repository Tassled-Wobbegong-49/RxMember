import * as types from '../constants/actionTypes.js';

// THESE ARE OUR ACTION CREATORS (CREATE ACTION OBJECTS)

// export const addNewMedicineCard = "addNewMedicineCard";
// export const updateMedicineCard = "updateMedicineCard";
// export const deleteMedicineCard = "deleteMedicineCard";
// export const getMedicineCardList = "getMedicineCardList";

// adding AC to the end so we can distinguish Action Creators from Action Types

export const getMedicineCardListAC = (user) => ({
  type: types.getMedicineCardList,
  payload: user
});

export const addNewMedicineAC = (data) => ({
  type: types.addNewMedicineCard,
  payload: data // data is an object
});

export const updateMedicineCardAC = (data) => ({
  type: types.updateMedicineCard,
  payload: data // data is an object
});

export const deleteMedicineCardAC = (data) => ({
  type: types.deleteMedicineCard,
  payload: data // data is an object
});

