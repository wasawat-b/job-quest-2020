import { useState } from "react";
import { useDispatch } from "react-redux";
import { listAction } from "../store/list-slice";
import useValid from "../hook/use-valid";

import classes from "./information.module.css";

const Souvenir = (props) => {
  const dispatch = useDispatch();

  const [size, setSize] = useState("");

  // Validation
  const {
    isValid: sizeIsValid,
    errorOccur: sizeError,
    inputBlur: sizeBlur,
    inputFocus: sizeFocus,
    reset: resetSize,
  } = useValid(size);

  // Changing size !!!!
  const sizeChange = (event) => {
    setSize(event.target.value);
  };

  if (sizeIsValid) {
    dispatch(listAction.sourvenirFormIsvalid());
  }

  const sizeClasses = sizeError ? classes.invalid : null;

  const submitHandler = (event) => {
    event.preventDefault();

    const savedData = {
      size: size,
    };

    resetSize();

    props.onSentSourvenir(savedData);
  };

  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h3 className="accordion-header" id="headingFive">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFive"
            aria-expanded="true"
            aria-controls="collapseFive"
          >
            เสื้อของที่ระลึก
          </button>
        </h3>
        <div
          id="collapseFive"
          className="accordion-collapse collapse show"
          aria-labelledby="headingFive"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <form onSubmit={submitHandler}>
              <div className={`${sizeClasses}`}>
                <label>ไซส์เสื้อ</label>
                <select
                  value={size}
                  onChange={sizeChange}
                  onBlur={sizeBlur}
                  onFocus={sizeFocus}
                >
                  <option value="">โปรดเลือก</option>
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                  <option value="XXXL">XXXL</option>
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

export default Souvenir;
