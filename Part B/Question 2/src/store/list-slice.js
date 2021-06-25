import { createSlice} from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "dataStorage",
  initialState: {
    data: [],
    personalValid: false,
    marathonValid: false,
    emergencyValid: false,
    healthValid: false,
    sourvenirValid: false,
    dataIsChanged: false,
  },
  reducers: {
    /* for receiving data from backend.
    receiveList(state, action) {
      state.data = action.payload.data;
    },
    */
    addData(state, action) {
      state.data.push(action.payload);
      state.dataIsChanged = true;

      console.log(state.data);
    },
    personalFormIsvalid(stata) {
      stata.personalValid = true;
    },
    marathonFormIsvalid(stata) {
      stata.marathonValid = true;
    },
    emergencyFormIsvalid(stata) {
      stata.emergencyValid = true;
    },
    healthFormIsvalid(stata) {
      stata.healthValid = true;
    },
    sourvenirFormIsvalid(stata) {
      stata.sourvenirValid = true;
    },
  },
});

export const listAction = listSlice.actions;
export default listSlice;