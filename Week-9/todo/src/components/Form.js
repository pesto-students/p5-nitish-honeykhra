import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <form className="form">
      <input type="text" placeholder="Enter a ToDo...." className="input" />
      <button className="button">Add Item</button>
    </form>
  );
};

export default Form;
