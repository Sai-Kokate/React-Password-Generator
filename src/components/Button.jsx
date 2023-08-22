import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className=" uppercase">
      {text}
    </button>
  );
};

export default Button;
