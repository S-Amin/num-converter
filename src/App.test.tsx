import React from "react";
import { render } from "@testing-library/react";
// import App from "./App";
import Form from "./Components/Form";

test("check layout element", () => {
  const { getByText, getByPlaceholderText } = render(<Form />);
  getByPlaceholderText(/Enter Number/i);
  getByText(/Number Converter/i);
  getByText(/Submit/i);
  getByText(/English Phrase:/i);
});
