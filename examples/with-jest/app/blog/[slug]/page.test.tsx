import { render, screen } from "@testing-library/react";
import Page from "./page";

describe("Blog slug page", () => {
  it("renders slug correctly", () => {
    render(<Page params={{ slug: "Test" }} />);
    expect(screen.getByRole("heading")).toHaveTextContent("Slug: Test");
  });
});
