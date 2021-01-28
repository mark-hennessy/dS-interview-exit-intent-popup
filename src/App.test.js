/* eslint-disable no-unused-vars */
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("App", () => {
  it("renders without crashing", () => {
    render(<App shouldShowModalInitially />);
    expect(
      screen.getByText("Sicher dir jetzt das Paket für dein Studium")
    ).toBeInTheDocument();
  });

  it("opens modal on first exit intent", () => {});

  it("does not open modal on second exit intent", () => {});
});
