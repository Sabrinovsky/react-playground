import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("adds 1 + 2 to equal 3", () => {
  render(<App></App>);
  expect(1).toBe(1);
  expect(screen.getByText("Vite + React")).toBeTruthy();
});
