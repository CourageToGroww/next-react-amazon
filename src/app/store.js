import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";
// This code imports the configureStore function from the Redux Toolkit library and the basketReducer from the basketSlice file.
//It then creates a store object using configureStore and passes in the basketReducer as an argument.
//This store object will be used to manage the state of the application.
export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
