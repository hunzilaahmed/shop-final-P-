import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userslice";
import cartSlice from "./cartSlice";


const rootReducer = combineReducers({
  userData: userReducer,
  cartStore: cartSlice, 
});

export default rootReducer;
