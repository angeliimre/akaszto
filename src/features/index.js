import { combineReducers } from "@reduxjs/toolkit";
import rajzReducer from "./rajzSlice";
import talalatReducer from "./talalatSlice";

export default combineReducers({
    rajz: rajzReducer,
    talalat: talalatReducer
})