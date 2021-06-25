import { useState } from "react";
import { useDispatch } from "react-redux";
import { listAction } from "../../store/list-slice";
import useValid from "../../hook/use-valid";

import classes from "./information.module.css";

const EmergencyContact = (props) => {
  const dispatch = useDispatch();

  const [firstPatientName, setFirstPatientName] = useState("");
  const [firstPatientRelationship, setFirstPatientRelationship] = useState("");
  const [firstPatientPhone, setFirstPatientPhone] = useState("");
  const [secondPatientName, setSecondPatientName] = useState("");
  const [secondPatientRelationship, setSecondPatientRelationship] =
    useState("");
  const [secondPatientPhone, setSecondPatientPhone] = useState("");

  // Validation
  const {
    isValid: firstPatientNameIsValid,
    errorOccur: firstPatientNameError,
    inputBlur: firstPatientNameBlur,
    inputFocus: firstPatientNameFocus,
    reset: resetFirstPatientName,
  } = useValid(firstPatientName);
  const {
    isValid: firstPatientRelationshipIsValid,
    errorOccur: firstPatientRelationshipError,
    inputBlur: firstPatientRelationshipBlur,
    inputFocus: firstPatientRelationshipFocus,
    reset: resetFirstPatientRelationship,
  } = useValid(firstPatientRelationship);
  const {
    isValid: firstPatientPhoneIsValid,
    errorOccur: firstPatientPhoneError,
    inputBlur: firstPatientPhoneBlur,
    inputFocus: firstPatientPhoneFocus,
    reset: resetFirstPatientPhone,
  } = useValid(firstPatientPhone);
  const {
    isValid: secondPatientNameIsValid,
    errorOccur: secondPatientNameError,
    inputBlur: secondPatientNameBlur,
    inputFocus: secondPatientNameFocus,
    reset: resetSecondPatientName,
  } = useValid(secondPatientName);
  const {
    isValid: secondPatientRelationshipIsValid,
    errorOccur: secondPatientRelationshipError,
    inputBlur: secondPatientRelationshipBlur,
    inputFocus: secondPatientRelationshipFocus,
    reset: resetSecondPatientRelationship,
  } = useValid(secondPatientRelationship);
  const {
    isValid: secondPatientPhoneIsValid,
    errorOccur: secondPatientPhoneError,
    inputBlur: secondPatientPhoneBlur,
    inputFocus: secondPatientPhoneFocus,
    reset: resetSecondPatientPhone,
  } = useValid(secondPatientPhone);

  // Changing firstPatientName !!!!
  const firstPatientNameChange = (event) => {
    setFirstPatientName(event.target.value);
  };
  // Changing firstPatientRelationship !!!!
  const firstPatientRelationshipChange = (event) => {
    setFirstPatientRelationship(event.target.value);
  };
  // Changing firstPatientPhone !!!!
  const firstPatientPhoneChange = (event) => {
    setFirstPatientPhone(event.target.value);
  };
  // Changing secondPatientName !!!!
  const secondPatientNameChange = (event) => {
    setSecondPatientName(event.target.value);
  };
  // Changing secondPatientRelationship !!!!
  const secondPatientRelationshipChange = (event) => {
    setSecondPatientRelationship(event.target.value);
  };
  // Changing secondPatientPhone !!!!
  const secondPatientPhoneChange = (event) => {
    setSecondPatientPhone(event.target.value);
  };

  if (
    firstPatientNameIsValid &&
    firstPatientRelationshipIsValid &&
    firstPatientPhoneIsValid &&
    secondPatientNameIsValid &&
    secondPatientRelationshipIsValid &&
    secondPatientPhoneIsValid
  ) {
    dispatch(listAction.emergencyFormIsvalid());
  }

  const firstPatientNameClasses = firstPatientNameError ? classes.invalid : null;
  const firstPatientRelationshipClasses =
    firstPatientRelationshipError ? classes.invalid : null;
  const firstPatientPhoneClasses = firstPatientPhoneError ? classes.invalid : null;
  const secondPatientNameClasses = secondPatientNameError ? classes.invalid : null;
  const secondPatientRelationshipClasses =
    secondPatientRelationshipError ? classes.invalid : null;
  const secondPatientPhoneClasses = secondPatientPhoneError ? classes.invalid : null;

  const submitHandler = (event) => {
    event.preventDefault();

    const savedData = {
      firstPatientName: firstPatientName.current.value,
      firstPatientRelationship: firstPatientRelationship.current.value,
      firstPatientPhone: firstPatientPhone.current.value,
      secondPatientName: secondPatientName.current.value,
      secondPatientRelationship: secondPatientRelationship.current.value,
      secondPatientPhone: secondPatientPhone.current.value,
    };

    resetFirstPatientName();
    resetFirstPatientRelationship();
    resetFirstPatientPhone();
    resetSecondPatientName();
    resetSecondPatientRelationship();
    resetSecondPatientPhone();

    props.onSentEmergency(savedData);
  };

  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h3 className="accordion-header" id="headingThree">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="true"
            aria-controls="collapseThree"
          >
            ผู้ติดต่อฉุกเฉิน
          </button>
        </h3>
        <div
          id="collapseThree"
          className="accordion-collapse collapse show"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <form onSubmit={submitHandler}>
              <div className={`${firstPatientNameClasses}`}>
                <label>ชื่อ-นามสกุล</label>
                <input
                  type="text"
                  value={firstPatientName}
                  onChange={firstPatientNameChange}
                  onBlur={firstPatientNameBlur}
                  onFocus={firstPatientNameFocus}
                />
              </div>
              <div className={`${firstPatientRelationshipClasses}`}>
                <label>ความสัมพันธ์</label>
                <input
                  type="text"
                  value={firstPatientRelationship}
                  onChange={firstPatientRelationshipChange}
                  onBlur={firstPatientRelationshipBlur}
                  onFocus={firstPatientRelationshipFocus}
                />
              </div>
              <div className={`${firstPatientPhoneClasses}`}>
                <label>เบอร์โทรศัพท์</label>
                <input
                  type="text"
                  value={firstPatientPhone}
                  onChange={firstPatientPhoneChange}
                  onBlur={firstPatientPhoneBlur}
                  onFocus={firstPatientPhoneFocus}
                />
              </div>
              <h5>ผู้ติดต่อฉุกเฉินคนที่ 2</h5>
              <div className={`${secondPatientNameClasses}`}>
                <label>ชื่อ-นามสกุล</label>
                <input
                  type="text"
                  value={secondPatientName}
                  onChange={secondPatientNameChange}
                  onBlur={secondPatientNameBlur}
                  onFocus={secondPatientNameFocus}
                />
              </div>
              <div className={`${secondPatientRelationshipClasses}`}>
                <label>ความสัมพันธ์</label>
                <input
                  type="text"
                  value={secondPatientRelationship}
                  onChange={secondPatientRelationshipChange}
                  onBlur={secondPatientRelationshipBlur}
                  onFocus={secondPatientRelationshipFocus}
                />
              </div>
              <div className={`${secondPatientPhoneClasses}`}>
                <label>เบอร์โทรศัพท์</label>
                <input
                  type="text"
                  value={secondPatientPhone}
                  onChange={secondPatientPhoneChange}
                  onBlur={secondPatientPhoneBlur}
                  onFocus={secondPatientPhoneFocus}
                />
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

export default EmergencyContact;
