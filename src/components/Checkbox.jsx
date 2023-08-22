import React from "react";

const Checkbox = ({ text, state, onChange }) => {
  return (
    <div className="flex justify-start gap-2 mx-8 ">
      <input type="checkbox" onChange={onChange} checked={state} name={text} />
      <label htmlFor={text}>{text}</label>
    </div>
  );
};

export default Checkbox;
