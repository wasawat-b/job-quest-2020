import React, { useRef } from "react";
import { Item } from "../modal/itemsType";
import { useAppDispatch } from "../store/hook";
import { listAction } from "../store/list-slice";

import classes from "./inputForm.module.css";

const InputForm: React.FC = () => {
  const dispatch = useAppDispatch();

  const number = useRef<HTMLInputElement>(null);
  const firstName = useRef<HTMLInputElement>(null);
  const lastName = useRef<HTMLInputElement>(null);

  const submitDataHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const storedData: Item = {
      number: parseInt(number.current!.value),
      firstName: firstName.current!.value,
      lastName: lastName.current!.value,
    };

    dispatch(listAction.addData(storedData));
  };

  return (
    <div className={`container ${classes.inputContainer}`}>
      <form onSubmit={submitDataHandler}>
        <div className="input-group">
          <label className="input-group-prepend input-group-text">Number of jokes </label>
          <input className="form-control" type="number" min="1" max="619" ref={number} />
        </div>
        <div className="input-group my-3">
          <label className="input-group-prepend input-group-text">First name </label>
          <input className="form-control" type="text" ref={firstName} />
        </div>
        <div className="input-group">
          <label className="input-group-prepend input-group-text">Last name </label>
          <input className="form-control" type="text" ref={lastName} />
        </div>
        <button className={`btn my-3 ${classes.button}`}>Enter</button>
      </form>
    </div>
  );
};

export default InputForm;
