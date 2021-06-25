import { configureStore } from "@reduxjs/toolkit";
import listSlice from "./list-slice";

const store = configureStore({ reducer: { data: listSlice.reducer } });

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
