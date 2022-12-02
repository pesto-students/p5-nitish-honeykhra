import { createStore } from "redux";

const reducerFn = (state = { isLightOn: true }, action) => {
  // Only Synchronous function
  // We should not be able to mutate orighinal state

  if (action.type === "FLIP") {
    return { isLightOn: !state.isLightOn };
  }

  return state;
};

const store = createStore(reducerFn);

export default store;
