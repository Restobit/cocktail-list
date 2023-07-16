import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders MANHATTAN cocktail", () => {
  render(<App />);
  const cocktailElement = screen.getByText(/MANHATTAN/i);
  expect(cocktailElement).toBeInTheDocument();
});
