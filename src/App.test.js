/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

// remove the <App /> added by index.js
ReactDOM.unmountComponentAtNode(document.getElementById("root"));

describe("App", () => {
  it("renders without crashing", () => {
    render(<App shouldShowModalInitially />);
    expect(screen.getByText("Lorem Ipsum")).toBeInTheDocument();
  });

  it("opens modal on first exit intent", () => {});

  it("does not open modal on second exit intent", () => {});
});
