import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import About from "../About";

// This will ensure that after each test, we won't have any leftover memory data that could give us false results
afterEach(cleanup);

describe("About component", () => {
  // First test
  it("should render", () => {
    render(<About />);
  });

  // Second test
  it("should match snapshot DOM node structure", () => {
    // Returns a snapshot of the About component.
    const { asFragment } = render(<About />);

    expect(asFragment()).toMatchSnapshot();
  });
});
