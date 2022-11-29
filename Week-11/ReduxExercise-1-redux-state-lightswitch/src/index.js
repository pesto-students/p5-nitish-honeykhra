import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/index";
import { useSelector, useDispatch } from "react-redux";

function Room() {
  const isLightOn = useSelector((state) => state.isLightOn);
  const dispatch = useDispatch();

  const flipLight = () => {
    dispatch({ type: "FLIP" });
  };

  const lightedness = isLightOn ? "lit" : "dark";
  return (
    <div className={`room ${lightedness}`}>
      the room is {lightedness}
      <br />
      <button onClick={() => flipLight()}>flip</button>
    </div>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <Room />
  </Provider>,
  document.getElementById("root")
);
