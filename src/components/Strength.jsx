import React from "react";

const Strength = ({ password = "" }) => {
  const getPasswordStrength = () => {
    const passwordLength = password.length;

    if (passwordLength < 4) {
      return "";
    } else if (passwordLength < 8) {
      return "Poor";
    } else if (passwordLength < 12) {
      return "Medium";
    } else if (passwordLength < 16) {
      return "Strong";
    } else {
      return "Very Strong";
    }
  };

  const passwordStrength = getPasswordStrength();

  if (!passwordStrength) return <React.Fragment />;

  return (
    <div className=" text-red-600">
      Strength: <span style={{ fontWeight: "bold" }}>{passwordStrength}</span>
    </div>
  );
};

export default Strength;
