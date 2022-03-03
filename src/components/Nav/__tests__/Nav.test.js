import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import Nav from "../Nav";

describe("Nav Component", () => {
  // Baseline test
  it("should render", () => {
    render(<Nav />);
  });
  // Snapshot test
  it("should match snapshot", () => {
    const { asFragment } = render(<Nav />);

    // Assert value comparison
    expect(asFragment()).toMatchSnapshot();
  });
});
