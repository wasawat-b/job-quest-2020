import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item, Items } from "../modal/itemsType";

const initialState: Items = {
    data: "",
    item: {
        number: 1,
        firstName: "Chuck",
        lastName: "Norris",
    }
}

const listSlice = createSlice({
    name: "dataStorage",
    initialState,
    reducers: {
        addData(state, action: PayloadAction<Item>) {
            const newData = action.payload;

            state.item.firstName = newData.firstName;
            state.item.lastName = newData.lastName;
            state.item.number = newData.number;
        }
    }
});

export const listAction = listSlice.actions;
export default listSlice;