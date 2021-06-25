import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Emergency, Health, Marathon, Personal, ReceivedDatas, Sourvenir } from "../modal/data";

const initialState: ReceivedDatas = {
  personal: [{
    nameTitle: "",
    firstNameTh: "",
    firstNameEng: "",
    lastNameTh: "",
    lastNameEng: "",
    birthDate: "",
    email: "",
    personalId: 0,
    address: "",
    phone: 0,
    picture: "",
    runningName: "",
  }],
  marathon: [{
    experience: "",
    timing: "",
  }],
  emergency: [{
    firstPatientName: "",
    firstPatientRelationship: "",
    firstPatientPhone: "",
    secondPatientName: "",
    secondPatientRelationship: "",
    secondPatientPhone: "",
  }],
  health: [{
    bloodType: "",
    allergy: "",
    allergyDetail: "",
    disease: "",
    diseaseDetail: "",
    surgery: "",
    surgeryPosition: "",
    surgeryWhen: "",
    child: "",
    medicine: "",
    medicineDetail: "",
    accident: "",
    exercise: "",
    abnormal: "",
  }],
  souvenir: [{
    size: "",
  }]
};

const listSlice = createSlice({
  name: "dataStorage",
  initialState,
  reducers: {
    addPersonal(state, action: PayloadAction<Personal>) {
      state.personal.push(action.payload);
    },
    addMarathon(state, action: PayloadAction<Marathon>) {
      state.marathon.push(action.payload);
    },
    addEmergency(state, action: PayloadAction<Emergency>) {
      state.emergency.push(action.payload);
    },
    addHealth(state, action: PayloadAction<Health>) {
      state.health.push(action.payload);
    },
    addSourvenir(state, action: PayloadAction<Sourvenir>) {
      state.souvenir.push(action.payload);
    },
  },
});

export const listAction = listSlice.actions;
export default listSlice;