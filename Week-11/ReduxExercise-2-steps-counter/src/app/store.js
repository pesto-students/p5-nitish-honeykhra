import { configureStore } from "@reduxjs/toolkit";
import stepCounterReducer from "../features/stepCounter/stepCounterSlice";

export const store = configureStore({
  reducer: {
    stepCounter: stepCounterReducer,
  },
});
