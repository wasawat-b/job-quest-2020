export type ReceivedDatas = {
  personal: [{
    nameTitle: string;
    firstNameTh: string;
    firstNameEng: string;
    lastNameTh: string;
    lastNameEng: string;
    birthDate: string;
    email: string;
    personalId: number;
    address: string;
    phone: number;
    picture: any;
    runningName: string;
  }];
  marathon: [{
    experience: string;
    timing: string;
  }];
  emergency: [{
    firstPatientName: string;
    firstPatientRelationship: string;
    firstPatientPhone: string;
    secondPatientName: string;
    secondPatientRelationship: string;
    secondPatientPhone: string;
  }];
  health: [{
    bloodType: string;
    allergy: string;
    allergyDetail: string;
    disease: string;
    diseaseDetail: string;
    surgery: string;
    surgeryPosition: string;
    surgeryWhen: string;
    child: string;
    medicine: string;
    medicineDetail: string;
    accident: string;
    exercise: string;
    abnormal: string;
  }];
  souvenir: [{
    size: string;
  }];
};

export type ReceivedData = {
  data: {
    nameTitle: string;
    firstNameTh: string;
    firstNameEng: string;
    lastNameTh: string;
    lastNameEng: string;
    birthDate: string;
    email: string;
    personalId: number;
    address: string;
    phone: number;
    picture: any;
    runningName: string;
    experience: string;
    timing: string;
    firstPatientName: string;
    firstPatientRelationship: string;
    firstPatientPhone: number;
    secondPatientName: string;
    secondPatientRelationship: string;
    secondPatientPhone: number;
    bloodType: string;
    allergy: boolean;
    allergyDetail: string;
    disease: boolean;
    diseaseDetail: string;
    surgery: boolean;
    surgeryPosition: string;
    surgeryWhen: string;
    child: boolean;
    medicine: boolean;
    medicineDetail: string;
    accident: boolean;
    exercise: boolean;
    abnormal: boolean;
    size: string;
  };
};

export type Personal = {
  nameTitle: string;
  firstNameTh: string;
  firstNameEng: string;
  lastNameTh: string;
  lastNameEng: string;
  birthDate: string;
  email: string;
  personalId: number;
  address: string;
  phone: number;
  picture: any;
  runningName: string;
};

export type Marathon = {
  experience: string;
  timing: string;
};

export type Emergency = {
  firstPatientName: string;
  firstPatientRelationship: string;
  firstPatientPhone: string;
  secondPatientName: string;
  secondPatientRelationship: string;
  secondPatientPhone: string;
};

export type Health = {
  bloodType: string;
  allergy: string;
  allergyDetail: string;
  disease: string;
  diseaseDetail: string;
  surgery: string;
  surgeryPosition: string;
  surgeryWhen: string;
  child: string;
  medicine: string;
  medicineDetail: string;
  accident: string;
  exercise: string;
  abnormal: string;
};

export type Sourvenir = {
  size: string;
};