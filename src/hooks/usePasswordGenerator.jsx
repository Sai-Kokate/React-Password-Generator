import React, { useState } from "react";

const usePasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const generatePassword = (checkboxes, length) => {
    //check length
    if (length < 4) {
      console.log("Invalid Length");
      setErrorMessage("Invalid Length");
      return;
    }

    const selectedOptions = checkboxes.filter(
      (checkbox) => checkbox.state === true
    );

    // check checkboxes, if atleast one is selected
    if (selectedOptions.length === 0) {
      console.log("No checkbox selected");
      setErrorMessage("Select at least one checkbox");
      return;
    }

    let charset = "",
      generatedPassword = "";

    selectedOptions.forEach((element) => {
      switch (element.title) {
        case "Include Uppercase Letters":
          charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;
        case "Include Lowercase Letters":
          charset += "abcdefghijklmnopqrstuvwxyz";
          break;
        case "Include Numbers":
          charset += "0123456789";
          break;
        case "Include Symbols":
          charset += "!@#$%^&*()";
          break;
        default:
          break;
      }
    });

    for (let i = 0; i < length; i++) {
      let randIdx = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randIdx];
    }

    setPassword(generatedPassword);
    setErrorMessage("");
  };

  return { password, errorMessage, generatePassword };
};

export default usePasswordGenerator;
