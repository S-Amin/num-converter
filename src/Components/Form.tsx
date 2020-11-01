import React, { useState } from "react";
import { numConverter } from "../Utils/converter";
import "./Form.css";

interface FormProps {}
const Form: React.FC<FormProps> = () => {
  const [phrase, setPhrase] = useState("");
  const onSubmit = () => {
    const val =
      (document.getElementById("input-number") as HTMLInputElement)?.value ||
      "";
    setPhrase(numConverter(val));
  };

  return (
    <>
      <form>
        <header className="App-header">Number Converter</header>
        <input
          type="text"
          className="input"
          id="input-number"
          placeholder="Enter Number"
        />
        <button type="button" className="submit" onClick={onSubmit}>
          Submit
        </button>
      </form>
      <div className="phrase">
        <strong>English Phrase: </strong>
        <small>{phrase}</small>
      </div>
    </>
  );
};

export default Form;
