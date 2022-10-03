import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/authSlice";
import productSlice from "./slice/productSlice";
import userDetailsSlice from "./slice/userDetailsSlice";

const rootReducer = combineReducers({
  adminAuth: authSlice,
  userDetails: userDetailsSlice,
  product: productSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
