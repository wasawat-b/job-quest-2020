import React, { useRef } from "react";
import { Item } from "../modal/itemsType";
import { useAppDispatch } from "../store/hook";
import { listAction } from "../store/list-slice";


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
        }

        dispatch(listAction.addData(storedData));
    };

    return (
        <form onSubmit={submitDataHandler}>
            <label>Number of jokes :</label>
            <input type="number" min="1" max="619" ref={number} />
            <label>First name :</label>
            <input type="text" ref={firstName} />
            <label>Last name :</label>
            <input type="text" ref={lastName} />

            <button>Enter</button>
        </form>
    );
};

export default InputForm;