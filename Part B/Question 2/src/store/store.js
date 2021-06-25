import { configureStore } from "@reduxjs/toolkit";
import listSlice from "./list-slice";

const store = configureStore({ reducer: { data: listSlice.reducer } });

export default store;
