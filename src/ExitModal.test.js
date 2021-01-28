/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ExitModal from "./ExitModal";

// remove the <App /> added by index.js
ReactDOM.unmountComponentAtNode(document.getElementById("root"));

describe("ExitModal", () => {
  it("renders without crashing", () => {});

  it("shows title, desc, image, input and submit button", () => {});

  it("validates email input", () => {});

  it("closes after submit", () => {});
});
