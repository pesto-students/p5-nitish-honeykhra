import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  status: "idle",
};

export const stepCounterSlice = createSlice({
  name: "stepCounter",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      state.value += 1;
    },
    resetSteps: (state) => {
      state.value = 0;
    },
  },
});

export const selectCount = (state) => state.stepCounter.value;

export const { increment, resetSteps } = stepCounterSlice.actions;

export default stepCounterSlice.reducer;
