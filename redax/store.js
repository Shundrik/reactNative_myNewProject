import { configureStore,combineReducers } from "@reduxjs/toolkit";
import { auhtSlice } from "./auth/authReducer";

const rootReduser = combineReducers({
[auhtSlice.name]:auhtSlice.reducer,
});

export const store = configureStore({
    reducer:rootReduser,
});