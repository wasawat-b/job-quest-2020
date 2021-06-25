import { useState } from "react";
import { useDispatch } from "react-redux";
import { listAction } from "../store/list-slice";
import useValid from "../hook/use-valid";

import classes from "./information.module.css";

const HealthDetail = (props) => {
  const dispatch = useDispatch();

  const [bloodType, setbloodType] = useState("");
  const [allergy, setAllergy] = useState("");
  const [allergyOther, setAllergyOther] = useState("");
  const [disease, setDisease] = useState("");
  const [diseaseOther, setDiseaseOther] = useState("");
  const [surgery, setSurgery] = useState("");
  const [surgeryPosition, setSurgeryPosition] = useState("");
  const [surgeryWhen, setSurgeryWhen] = useState("");
  const [child, setchild] = useState("");
  const [medicine, setMedicine] = useState("");
  const [medicineOther, setMedicineOther] = useState("");
  const [accident, setAccident] = useState("");
  const [exercise, setExercise] = useState("");
  const [abnormal, setAbnormal] = useState("");

  const [allergyOtherShow, setAllergyOtherShow] = useState(false);
  const [diseaseOtherShow, setDiseaseOtherShow] = useState(false);
  const [surgeryOtherShow, setSurgeryOtherShow] = useState(false);
  const [medicineOtherShow, setMedicineOtherShow] = useState(false);

  // Changing bloodType !!!!
  const bloodTypeChange = (event) => {
    setbloodType(event.target.value);
  };
  // Changing allergy !!!!
  const allergyChange = (event) => {
    if (event.target.value === "มี") {
      setAllergyOtherShow(true);
      setAllergy(event.target.value);
      return;
    }
    setAllergy(event.target.value);
    setAllergyOtherShow(false);
  };
  const allergyOtherChange = (event) => {
    setAllergyOther(event.target.value);
  };
  // Changing disease !!!!
  const diseaseChange = (event) => {
    if (event.target.value === "มี") {
      setDiseaseOtherShow(true);
      setDisease(event.target.value);
      return;
    }
    setDisease(event.target.value);
    setDiseaseOtherShow(false);
  };
  const diseaseOtherChange = (event) => {
    setDiseaseOther(event.target.value);
  };
  // Changing surgery !!!!
  const surgeryChange = (event) => {
    if (event.target.value === "มี") {
      setSurgeryOtherShow(true);
      setSurgery(event.target.value);
      return;
    }
    setSurgery(event.target.value);
    setSurgeryOtherShow(false);
  };
  const surgeryPositionChange = (event) => {
    setSurgeryPosition(event.target.value);
  };
  const surgeryWhenChange = (event) => {
    setSurgeryWhen(event.target.value);
  };
  // Changing child !!!!
  const childChange = (event) => {
    setchild(event.target.value);
  };
  // Changing medicine !!!!
  const medicineChange = (event) => {
    if (event.target.value === "มี") {
      setMedicineOtherShow(true);
      setMedicine(event.target.value);
      return;
    }
    setMedicine(event.target.value);
    setMedicineOtherShow(false);
  };
  const medicineOtherChange = (event) => {
    setMedicineOther(event.target.value);
  };
  // Changing accident !!!!
  const accidentChange = (event) => {
    setAccident(event.target.value);
  };
  // Changing exercise !!!!
  const exerciseChange = (event) => {
    setExercise(event.target.value);
  };
  // Changing abnormal !!!!
  const abnormalChange = (event) => {
    setAbnormal(event.target.value);
  };

  // Validation
  const {
    isValid: bloodTypeIsValid,
    errorOccur: bloodTypeError,
    inputBlur: bloodTypeBlur,
    inputFocus: bloodTypeFocus,
    reset: resetBloodType,
  } = useValid(bloodType);
  const {
    isValid: allergyIsValid,
    errorOccur: allergyError,
    inputBlur: allergyBlur,
    inputFocus: allergyFocus,
    reset: resetAllergy,
  } = useValid(allergy);
  const {
    isValid: allergyOtherIsValid,
    errorOccur: allergyOtherError,
    inputBlur: allergyOtherBlur,
    inputFocus: allergyOtherFocus,
    reset: resetAllergyOther,
  } = useValid(allergyOther);
  const {
    isValid: diseaseIsValid,
    errorOccur: diseaseError,
    inputBlur: diseaseBlur,
    inputFocus: diseaseFocus,
    reset: resetDisease,
  } = useValid(disease);
  const {
    isValid: diseaseOtherIsValid,
    errorOccur: diseaseOtherError,
    inputBlur: diseaseOtherBlur,
    inputFocus: diseaseOtherFocus,
    reset: resetDiseaseOther,
  } = useValid(diseaseOther);
  const {
    isValid: surgeryIsValid,
    errorOccur: surgeryError,
    inputBlur: surgeryBlur,
    inputFocus: surgeryFocus,
    reset: resetSurgery,
  } = useValid(surgery);
  const {
    isValid: surgeryPositionIsValid,
    errorOccur: surgeryPositionError,
    inputBlur: surgeryPositionBlur,
    inputFocus: surgeryPositionFocus,
    reset: resetSurgeryPosition,
  } = useValid(surgeryPosition);
  const {
    isValid: surgeryWhenIsValid,
    errorOccur: surgeryWhenError,
    inputBlur: surgeryWhenBlur,
    inputFocus: surgeryWhenFocus,
    reset: resetSurgeryWhen,
  } = useValid(surgeryWhen);
  const {
    isValid: childIsValid,
    errorOccur: childError,
    inputBlur: childBlur,
    inputFocus: childFocus,
    reset: resetChild,
  } = useValid(child);
  const {
    isValid: medicineIsValid,
    errorOccur: medicineError,
    inputBlur: medicineBlur,
    inputFocus: medicineFocus,
    reset: resetMedicine,
  } = useValid(medicine);
  const {
    isValid: medicineOtherIsValid,
    errorOccur: medicineOtherError,
    inputBlur: medicineOtherBlur,
    inputFocus: medicineOtherFocus,
    reset: resetMedicineOther,
  } = useValid(medicineOther);
  const {
    isValid: accidentIsValid,
    errorOccur: accidentError,
    inputBlur: accidentBlur,
    inputFocus: accidentFocus,
    reset: resetAccident,
  } = useValid(accident);
  const {
    isValid: exerciseIsValid,
    errorOccur: exerciseError,
    inputBlur: exerciseBlur,
    inputFocus: exerciseFocus,
    reset: resetExercise,
  } = useValid(exercise);
  const {
    isValid: abnormalIsValid,
    errorOccur: abnormalError,
    inputBlur: abnormalBlur,
    inputFocus: abnormalFocus,
    reset: resetAbnormal,
  } = useValid(abnormal);

  if (
    bloodTypeIsValid &&
    allergyIsValid &&
    allergyOtherIsValid &&
    diseaseIsValid &&
    diseaseOtherIsValid &&
    surgeryIsValid &&
    surgeryPositionIsValid &&
    surgeryWhenIsValid &&
    childIsValid &&
    medicineIsValid &&
    medicineOtherIsValid &&
    accidentIsValid &&
    exerciseIsValid &&
    abnormalIsValid
  ) {
    dispatch(listAction.healthFormIsvalid());
  }

  const bloodTypeClasses = bloodTypeError ? classes.invalid : null;
  const allergyClasses = allergyError ? classes.invalid : null;
  const diseaseClasses = diseaseError ? classes.invalid : null;
  const surgeryClasses = surgeryError ? classes.invalid : null;
  const childClasses = childError ? classes.invalid : null;
  const medicineClasses = medicineError ? classes.invalid : null;
  const accidentClasses = accidentError ? classes.invalid : null;
  const exerciseClasses = exerciseError ? classes.invalid : null;
  const abnormalClasses = abnormalError ? classes.invalid : null;

  const submitHandler = (event) => {
    event.preventDefault();

    const savedData = {
      bloodType: bloodType,
      allergy: allergy,
      allergyOther: allergyOther,
      disease: disease,
      diseaseOther: diseaseOther,
      surgery: surgery,
      surgeryPosition: surgeryPosition,
      surgeryWhen: surgeryWhen,
      child: child,
      medicine: medicine,
      medicineOther: medicineOther,
      accident: accident,
      exercise: exercise,
      abnormal: abnormal,
    };

    resetBloodType();
    resetAllergy();
    resetAllergyOther();
    resetDisease();
    resetDiseaseOther();
    resetSurgery();
    resetSurgeryPosition();
    resetSurgeryWhen();
    resetChild();
    resetMedicine();
    resetMedicineOther();
    resetAccident();
    resetExercise();
    resetAbnormal();

    props.onSentHealth(savedData);
  };

  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h3 className="accordion-header" id="headingFour">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFour"
            aria-expanded="true"
            aria-controls="collapseFour"
          >
            ข้อมูลทางการแพทย์
          </button>
        </h3>
        <div
          id="collapseFour"
          className="accordion-collapse collapse show"
          aria-labelledby="headingFour"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <form onSubmit={submitHandler}>
              <div className={`${bloodTypeClasses}`}>
                <label>หมู่เลือด</label>
                <select
                  onChange={bloodTypeChange}
                  onBlur={bloodTypeBlur}
                  onFocus={bloodTypeFocus}
                >
                  <option value="">โปรดระบุ...</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="O">O</option>
                  <option value="AB">AB</option>
                </select>
              </div>
              <div className={`${allergyClasses}`}>
                <label>ท่านมีอาการแพ้ยาหรือสารต่างๆ หรือไม่</label>
                <select
                  value={allergy}
                  onChange={allergyChange}
                  onBlur={allergyBlur}
                  onFocus={allergyFocus}
                >
                  <option value="">โปรดระบุ...</option>
                  <option value="ไม่มี">ไม่มี</option>
                  <option value="มี">มี</option>
                </select>
                {allergyOtherShow === true ? (
                  <input
                    type="text"
                    value={allergyOther}
                    onChange={allergyOtherChange}
                    onBlur={allergyOtherBlur}
                    onFocus={allergyOtherFocus}
                    placeholder="โปรดระบุ..."
                  />
                ) : null}
              </div>
              <div className={`${diseaseClasses}`}>
                <label>ท่านมีโรคประจำตัว หรือไม่</label>
                <select
                  value={disease}
                  onChange={diseaseChange}
                  onBlur={diseaseBlur}
                  onFocus={diseaseFocus}
                >
                  <option value="">โปรดระบุ...</option>
                  <option value="ไม่มี">ไม่มี</option>
                  <option value="มี">มี</option>
                </select>
                {diseaseOtherShow === true ? (
                  <input
                    type="text"
                    value={diseaseOther}
                    onChange={diseaseOtherChange}
                    onBlur={diseaseOtherBlur}
                    onFocus={diseaseOtherFocus}
                    placeholder="โปรดระบุ..."
                  />
                ) : null}
              </div>
              <div className={`${surgeryClasses}`}>
                <label>ท่านมีประวัติการผ่าตัด มาก่อนหรือไม่</label>
                <select
                  value={surgery}
                  onChange={surgeryChange}
                  onBlur={surgeryBlur}
                  onFocus={surgeryFocus}
                >
                  <option value="">โปรดระบุ...</option>
                  <option value="ไม่มี">ไม่มี</option>
                  <option value="มี">มี</option>
                </select>
                {surgeryOtherShow === true ? (
                  <div>
                    <input
                      type="text"
                      value={surgeryPosition}
                      onChange={surgeryPositionChange}
                      onBlur={surgeryPositionBlur}
                      onFocus={surgeryPositionFocus}
                      placeholder="ตำแหน่งไหน..."
                    />
                    <input
                      type="text"
                      value={surgeryWhen}
                      onChange={surgeryWhenChange}
                      onBlur={surgeryWhenBlur}
                      onFocus={surgeryWhenFocus}
                      placeholder="เมื่อไหร่..."
                    />
                  </div>
                ) : null}
              </div>
              <div className={`${childClasses}`}>
                <label>
                  ท่านมีแพลนที่จะมีบุตร หรือ
                  กำลังตั้งครรภ์ก่อนถึงช่วงการแข่งขันหรือไม่
                </label>
                <select
                  value={child}
                  onChange={childChange}
                  onBlur={childBlur}
                  onFocus={childFocus}
                >
                  <option value="">โปรดระบุ...</option>
                  <option value="ไม่มี">ไม่มี</option>
                  <option value="มี">มี</option>
                </select>
              </div>
              <div className={`${medicineClasses}`}>
                <label>ท่านมียาที่ต้องทานเป็นประจำหรือไม่</label>
                <select
                  value={medicine}
                  onChange={medicineChange}
                  onBlur={medicineBlur}
                  onFocus={medicineFocus}
                >
                  <option value="">โปรดระบุ...</option>
                  <option value="ไม่มี">ไม่มี</option>
                  <option value="มี">มี</option>
                </select>
                {medicineOtherShow === true ? (
                  <input
                    type="text"
                    value={medicineOther}
                    onChange={medicineOtherChange}
                    onBlur={medicineOtherBlur}
                    onFocus={medicineOtherFocus}
                    placeholder="Other..."
                  />
                ) : null}
              </div>
              <div className={`${accidentClasses}`}>
                <label>
                  ท่านเคยบาดเจ็บ/ เจ็บป่วย จากการเข้าร่วมงานวิ่ง
                  ที่ต้องไปรักษาต่อที่โรงพยาบาลหรือ
                </label>
                <select
                  value={accident}
                  onChange={accidentChange}
                  onBlur={accidentBlur}
                  onFocus={accidentFocus}
                >
                  <option value="">โปรดระบุ...</option>
                  <option value="ไม่มี">ไม่มี</option>
                  <option value="มี">มี</option>
                </select>
              </div>
              <div className={`${exerciseClasses}`}>
                <label>
                  ท่านออกกำลังกายสม่ำเสมอหรือไม่ (อย่างน้อย 1-2 ครั้ง
                  ต่อสัปดาห์)
                </label>
                <select
                  value={exercise}
                  onChange={exerciseChange}
                  onBlur={exerciseBlur}
                  onFocus={exerciseFocus}
                >
                  <option value="">โปรดระบุ...</option>
                  <option value="ไม่มี">ไม่มี</option>
                  <option value="มี">มี</option>
                </select>
              </div>
              <div className={`${abnormalClasses}`}>
                <label>
                  ท่านเคยมีอาการเจ็บแน่นหน้าอก ใจสั่น เหนื่อยง่ายผิดปกติ หน้ามืด
                  ขณะออกกำลังกาย
                </label>
                <select
                  value={abnormal}
                  onChange={abnormalChange}
                  onBlur={abnormalBlur}
                  onFocus={abnormalFocus}
                >
                  <option value="">โปรดระบุ...</option>
                  <option value="ไม่มี">ไม่มี</option>
                  <option value="มี">มี</option>
                </select>
              </div>

              <div>
                <button>Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthDetail;
