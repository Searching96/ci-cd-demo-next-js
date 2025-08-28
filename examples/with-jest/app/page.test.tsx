import { render, screen } from "@testing-library/react";

// Mock out the Next.js special exports
jest.mock("./page.tsx", () => ({
  __esModule: true,
  default: () => <h1>App Router</h1>,
}));

import Page from "./page";

it("App Router: Works with Server Components", () => {
  render(<Page />);
  expect(screen.getByRole("heading")).toHaveTextContent("App Router");
});
