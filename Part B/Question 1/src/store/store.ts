import { configureStore } from "@reduxjs/toolkit";
import listSlice from "./list-slice";
import { apiSlice } from "./api-slice";

const store = configureStore({
    reducer: {
        data: listSlice.reducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(apiSlice.middleware);
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;