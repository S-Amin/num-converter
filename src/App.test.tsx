import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Form from "./Components/Form";
import { numConverter } from "./Utils/converter";

test("check layout element", () => {
  const { getByText, getByPlaceholderText } = render(<Form />);
  getByText(/Number Converter/i);
  getByPlaceholderText(/Enter Number/i);
  getByText(/Submit/i);
  getByText(/English Phrase:/i);
});

test("check converter func", () => {
  expect(numConverter("")).toBe(""); // empty value should return empty string
  expect(numConverter("zxc")).toBe(""); // wrong format result in empty string
  expect(numConverter("235")).toBe(""); // wrong format result in empty string
  // test converter
  expect(numConverter("٢٣")).toBe("twenty-three");
  expect(numConverter("٢٣٤٣٤٦٧")).toBe(
    "two million three hundred and forty-three thousand four hundred and sixty-seven"
  );
  expect(numConverter("٢٣٩٠٩٣٧٧٦٥٦٢٥٨")).toBe("out of range");
});

test("check user interaction", () => {
  const { getByText, getByPlaceholderText } = render(<Form />);
  const input = getByPlaceholderText(/Enter Number/i);
  const submit = getByText(/Submit/i);

  fireEvent.change(input, { target: { value: "٦٧" } });
  fireEvent.click(submit);

  getByText("sixty-seven");
});
