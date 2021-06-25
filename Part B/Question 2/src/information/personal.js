import { useState } from "react";
import { listAction } from "../store/list-slice";
import { useDispatch } from "react-redux";
import useValid from "../hook/use-valid";

import classes from "./information.module.css";

const PersonalForm = (props) => {
  const dispatch = useDispatch();

  const [nameTitle, setNameTitle] = useState("");
  const [nameTitleOther, setNameTitleOther] = useState("");
  const [firstNameTh, setFirstNameTh] = useState("");
  const [firstNameEng, setFirstNameEng] = useState("");
  const [lastNameTh, setLastNameTh] = useState("");
  const [lastNameEng, setLastNameEng] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [email, setEmail] = useState("");
  const [personalId, setPersonalId] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [picture, setPicture] = useState("");
  const [runningName, setRunningName] = useState("");

  const [nameTitleOtherShow, setNameTitleOtherShow] = useState(false);

  // Validation
  const {
    isValid: nameTitleIsValid,
    errorOccur: nameTitleError,
    inputBlur: nameTitleBlur,
    inputFocus: nameTitleFocus,
    reset: resetNameTitle,
  } = useValid(nameTitle);
  const {
    isValid: nameTitleOtherIsValid,
    errorOccur: nameTitleOtherError,
    inputBlur: nameTitlOthereBlur,
    inputFocus: nameTitleOtherFocus,
    reset: resetNameTitleOther,
  } = useValid(nameTitleOther);
  const {
    isValid: firstNameThIsValid,
    errorOccur: firstNameThError,
    inputBlur: firstNameThBlur,
    inputFocus: firstNameThFocus,
    reset: resetFirstNameTh,
  } = useValid(firstNameTh);
  const {
    isValid: firstNameEngIsValid,
    errorOccur: firstNameEngError,
    inputBlur: firstNameEngBlur,
    inputFocus: firstNameEngFocus,
    reset: resetFirstNameEng,
  } = useValid(firstNameEng);
  const {
    isValid: lastNameThIsValid,
    errorOccur: lastNameThError,
    inputBlur: lastNameThBlur,
    inputFocus: lastNameThFocus,
    reset: resetLastNameTh,
  } = useValid(lastNameTh);
  const {
    isValid: lastNameEngIsValid,
    errorOccur: lastNameEngError,
    inputBlur: lastNameEngBlur,
    inputFocus: lastNameEngFocus,
    reset: resetLastNameEng,
  } = useValid(lastNameEng);
  const {
    isValid: birthDateIsValid,
    errorOccur: birthDateError,
    inputBlur: birthDateBlur,
    inputFocus: birthDateFocus,
    reset: resetBirthDate,
  } = useValid(birthDate);
  const {
    isValid: emailIsValid,
    errorOccur: emailError,
    inputBlur: emailBlur,
    inputFocus: emailFocus,
    reset: resetEmail,
  } = useValid(email);
  const {
    isValid: personalIdIsValid,
    errorOccur: personalIdError,
    inputBlur: personalIdBlur,
    inputFocus: personalIdFocus,
    reset: resetPersonalId,
  } = useValid(personalId);
  const {
    isValid: addressIsValid,
    errorOccur: addressError,
    inputBlur: addressBlur,
    inputFocus: addressFocus,
    reset: resetAddress,
  } = useValid(address);
  const {
    isValid: phoneIsValid,
    errorOccur: phoneError,
    inputBlur: phoneBlur,
    inputFocus: phoneFocus,
    reset: resetPhone,
  } = useValid(phone);
  const {
    isValid: pictureIsValid,
    errorOccur: pictureError,
    inputBlur: pictureBlur,
    inputFocus: pictureFocus,
    reset: resetPicture,
  } = useValid(picture);
  const {
    isValid: runningNameIsValid,
    errorOccur: runningNameError,
    inputBlur: runningNameBlur,
    inputFocus: runningNameFocus,
    reset: resetRunningName,
  } = useValid(runningName);

  // Changing nameTitle !!!!
  const nameTitleChange = (event) => {
    if (event.target.value === "มี") {
      setNameTitleOtherShow(true);
      setNameTitle(event.target.value);
      return;
    }
    setNameTitle(event.target.value);
    setNameTitleOtherShow(false);
  };
  const nameTitleOtherChange = (event) => {
    setNameTitleOther(event.target.value);
  };
  // Changing firstNameTh !!!!
  const firstNameThChange = (event) => {
    setFirstNameTh(event.target.value);
  };
  // Changing firstNameEng !!!!
  const firstNameEngChange = (event) => {
    setFirstNameEng(event.target.value);
  };
  // Changing lastNameTh !!!!
  const lastNameThChange = (event) => {
    setLastNameTh(event.target.value);
  };
  // Changing lastNameEng !!!!
  const lastNameEngChange = (event) => {
    setLastNameEng(event.target.value);
  };
  // Changing birthDate !!!!
  const birthDateChange = (event) => {
    setBirthDate(event.target.value);
  };
  // Changing email !!!!
  const emailChange = (event) => {
    setEmail(event.target.value);
  };
  // Changing personalId !!!!
  const personalIdChange = (event) => {
    setPersonalId(event.target.value);
  };
  // Changing address !!!!
  const addressChange = (event) => {
    setAddress(event.target.value);
  };
  // Changing phone !!!!
  const phoneChange = (event) => {
    setPhone(event.target.value);
  };
  // Changing picture !!!!
  const pictureChange = (event) => {
    setPicture(event.target.value);
  };
  // Changing runningName !!!!
  const runningNameChange = (event) => {
    setRunningName(event.target.value);
  };

  if (
    nameTitleIsValid &&
    nameTitleOtherIsValid &&
    firstNameThIsValid &&
    firstNameEngIsValid &&
    lastNameThIsValid &&
    lastNameEngIsValid &&
    birthDateIsValid &&
    emailIsValid &&
    personalIdIsValid &&
    addressIsValid &&
    phoneIsValid &&
    pictureIsValid &&
    runningNameIsValid
  ) {
    dispatch(listAction.personalFormIsvalid());
  }

  const nameTitleClasses = nameTitleError ? classes.invalid : null;
  const firstNameClasses = firstNameThError ? classes.invalid : null;
  const lastNameClasses = lastNameThError ? classes.invalid : null;
  const birthDateClasses = birthDateError ? classes.invalid : null;
  const emailClasses = emailError ? classes.invalid : null;
  const personalIdClasses = personalIdError ? classes.invalid : null;
  const addressClasses = addressError ? classes.invalid : null;
  const phoneClasses = phoneError ? classes.invalid : null;
  const pictureClasses = pictureError ? classes.invalid : null;
  const runningNameClasses = runningNameError ? classes.invalid : null;

  // Submit
  const submitHandler = (event) => {
    event.preventDefault();

    const savedData = {
      nameTitle: nameTitle,
      firstNameTh: firstNameTh,
      firstNameEng: firstNameEng,
      lastNameTh: lastNameTh,
      lastNameEng: lastNameEng,
      birthDate: birthDate,
      email: email,
      personalId: parseInt(personalId),
      address: address,
      phone: parseInt(phone),
      picture: picture,
      runningName: runningName,
    };

    resetNameTitle();
    resetNameTitleOther();
    resetFirstNameTh();
    resetFirstNameEng();
    resetLastNameTh();
    resetLastNameEng();
    resetBirthDate();
    resetEmail();
    resetPersonalId();
    resetAddress();
    resetPhone();
    resetPicture();
    resetRunningName();

    props.onSentPersonal(savedData);
  };

  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h3 className="accordion-header" id="headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            ข้อมูลส่วนตัว
          </button>
        </h3>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <form onSubmit={submitHandler}>
              <div className={nameTitleClasses}>
                <label>คำนำหน้าชื่อ</label>
                <select
                  onChange={nameTitleChange}
                  onBlur={nameTitleBlur}
                  onFocus={nameTitleFocus}
                >
                  <option value="">โปรดระบุ...</option>
                  <option value="นาย">นาย</option>
                  <option value="นาง">นาง</option>
                  <option value="นางสาว">นางสาว</option>
                  <option value="อื่นๆ">อื่นๆ</option>
                </select>
                {nameTitleOtherShow === true ? (
                  <input
                    type="text"
                    value={nameTitleOther}
                    onChange={nameTitleOtherChange}
                    onBlur={nameTitlOthereBlur}
                    onFocus={nameTitleOtherFocus}
                    placeholder="โปรดระบุ..."
                  />
                ) : null}
              </div>
              <div className={`${firstNameClasses}`}>
                <label>ชื่อ</label>
                <input
                  type="text"
                  onChange={firstNameThChange}
                  onBlur={firstNameThBlur}
                  onFocus={firstNameThFocus}
                  placeholder="ภาษาไทย"
                />
                <input
                  type="text"
                  onChange={firstNameEngChange}
                  onBlur={firstNameEngBlur}
                  onFocus={firstNameEngFocus}
                  placeholder="English"
                />
              </div>
              <div className={`${lastNameClasses}`}>
                <label>นามสกุล</label>
                <input
                  type="text"
                  onChange={lastNameThChange}
                  onBlur={lastNameEngBlur}
                  onFocus={lastNameEngFocus}
                  placeholder="ภาษาไทย"
                />
                <input
                  type="text"
                  onChange={lastNameEngChange}
                  onBlur={lastNameThBlur}
                  onFocus={lastNameThFocus}
                  placeholder="English"
                />
              </div>
              <div className={`${birthDateClasses}`}>
                <label>วันเดือนปีเกิด</label>
                <input
                  type="date"
                  onChange={birthDateChange}
                  onBlur={birthDateBlur}
                  onFocus={birthDateFocus}
                />
              </div>
              <div className={`${emailClasses}`}>
                <label>อีเมล</label>
                <input
                  type="email"
                  onChange={emailChange}
                  onBlur={emailBlur}
                  onFocus={emailFocus}
                />
              </div>
              <div className={`${personalIdClasses}`}>
                <label>เลขบัตรประจำตัวประชาชน</label>
                <input
                  type="string"
                  onChange={personalIdChange}
                  onBlur={personalIdBlur}
                  onFocus={personalIdFocus}
                />
              </div>
              <div className={`${addressClasses}`}>
                <label>ที่อยู่</label>
                <textarea
                  value={address}
                  onChange={addressChange}
                  onBlur={addressBlur}
                  onFocus={addressFocus}
                ></textarea>
              </div>
              <div className={`${phoneClasses}`}>
                <label>เบอร์โทรศัพท์</label>
                <input
                  type="text"
                  onChange={phoneChange}
                  onBlur={phoneBlur}
                  onFocus={phoneFocus}
                />
              </div>
              <div className={`${pictureClasses}`}>
                <label>รูปถ่ายหน้าตรง</label>
                <input
                  type="File"
                  onChange={pictureChange}
                  onBlur={pictureBlur}
                  onFocus={pictureFocus}
                />
              </div>
              <div className={`${runningNameClasses}`}>
                <label>ชื่อบนเบอร์วิ่ง (BIB)</label>
                <input
                  type="text"
                  onChange={runningNameChange}
                  onBlur={runningNameBlur}
                  onFocus={runningNameFocus}
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

export default PersonalForm;
