import { useState } from "react";
import { useDispatch } from "react-redux";
import { listAction } from "../../store/list-slice";
import useValid from "../../hook/use-valid";

import classes from "./information.module.css";

const MarathonExperience = (props) => {
  const dispatch = useDispatch();

  const [experience, setExperience] = useState("");
  const [timing, setTiming] = useState("");

  // Validation
  const {
    isValid: experienceIsValid,
    errorOccur: experienceError,
    inputBlur: experienceBlur,
    inputFocus: experienceFocus,
    reset: resetExperience,
  } = useValid(experience);
  const {
    isValid: timingIsValid,
    errorOccur: timingError,
    inputBlur: timingBlur,
    inputFocus: timingFocus,
    reset: resetTiming,
  } = useValid(timing);

  
  // Changing experience !!!!
  const experienceChange = (event) => {
    setExperience(event.target.value);
  };
  // Changing timing !!!!
  const timingChange = (event) => {
    setTiming(event.target.value);
  };

  if (experienceIsValid && timingIsValid) {
    dispatch(listAction.marathonFormIsvalid());
  }

  const experienceClasses = experienceError ? classes.invalid : null;
  const timingThClasses = timingError ? classes.invalid : null;

  const submitHandler = (event) => {
    event.preventDefault();

    const savedData = {
      experience: experience,
      timing: timing,
    };

    resetExperience();
    resetTiming();

    props.onSentMarathon(savedData);
  };

  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h3 className="accordion-header" id="headingTwo">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            ข้อมูลเกี่ยวกับการวิ่ง
          </button>
        </h3>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse show"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <form onSubmit={submitHandler}>
              <div className={`${experienceClasses}`}>
                <label>ประวัติการลงแข่ง</label>
                <input type="text"
                  value={experience}
                  onChange={experienceChange}
                  onBlur={experienceBlur}
                  onFocus={experienceFocus} />
              </div>
              <div className={`${timingThClasses}`}>
                <label>
                  เวลาที่คาดว่าจะจบในการวิ่งครั้งนี้ (ชั่วโมงและนาที)
                </label>
                <input type="text"
                  value={timing}
                  onChange={timingChange}
                  onBlur={timingBlur}
                  onFocus={timingFocus} />
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

export default MarathonExperience;
