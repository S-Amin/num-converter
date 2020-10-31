import React from "react";
import "./Form.css";

interface FormProps {}
const Form: React.FC<FormProps> = () => {
  return (
    <>
      <form>
        <input type="text" className="input" />
        <button type="button" className="submit">
          Submit
        </button>
      </form>
      <div className="phrase">
        <small>English Phrase: </small>
        <strong>four</strong>
      </div>
    </>
  );
};

export default Form;
