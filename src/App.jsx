import { useState } from "react";
import Button from "./components/Button";
import Checkbox from "./components/Checkbox";
import usePasswordGenerator from "./hooks/usePasswordGenerator";
import Strength from "./components/Strength";

function App() {
  const [length, setLength] = useState(4);
  const [checkboxes, setCheckboxes] = useState([
    { title: "Include Uppercase Letters", state: true },
    { title: "Include Lowercase Letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false },
  ]);
  const [copied, setCopied] = useState(false);

  const { password, errorMessage, generatePassword } = usePasswordGenerator();
  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const handleCheckboxSelect = (i) => {
    const updatedCheckboxes = [...checkboxes];
    updatedCheckboxes[i].state = !updatedCheckboxes[i].state;
    setCheckboxes(updatedCheckboxes);
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center text-lg">
      <div className="flex flex-col w-1/2 h-2/3 gap-2 justify-start items-center border-2  p-8">
        {/* Password dispaly and copy button */}
        <div className="flex flex-row justify-between w-full h-16">
          <input type="text" value={password} disabled className=" w-10/12" />
          <Button text={!copied ? "Copy" : "Copied"} onClick={handleCopy} />
        </div>

        {/* Slider for length */}
        <div className="flex flex-col w-full gap-2 mt-4 ">
          <div className="flex justify-between h-8">
            <span>Character Length</span>
            <span>{length}</span>
          </div>
          <input
            type="range"
            min={4}
            max={20}
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="h-8"
          />
        </div>
        {/* Checkboxes */}
        <div className="grid grid-cols-2 w-full gap-4 text-lg">
          {checkboxes.map((checkbox, index) => {
            return (
              <Checkbox
                key={index}
                text={checkbox.title}
                state={checkbox.state}
                onChange={() => handleCheckboxSelect(index)}
                className="w-full"
              />
            );
          })}
        </div>

        {/* Error */}
        {errorMessage && (
          <div className="text-red-600 font-bold my-2">{errorMessage}</div>
        )}
        {/* Strength Show */}
        <Strength password={password} className="my-2" />
        {/* Generate Button */}
        <Button
          text={"generate password"}
          onClick={() => generatePassword(checkboxes, length)}
        />
      </div>
    </div>
  );
}

export default App;
