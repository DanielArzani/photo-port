import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

// import About from ".."; // ? What does this mean?
import About from "../About";

// This will ensure that after each test, we won't have any leftover memory data that could give us false results
afterEach(cleanup);

// Format -> describe('About component', () => {
// renders About test
// })
describe("About component", () => {
  // First test
  it("should render", () => {
    render(<About />);
  });

  // Second test
  // A snapshot is a serialized version of the DOM node structure, enabled by Jest.
  it("should match snapshot DOM node structure", () => {
    // Returns a snapshot of the About component.
    const { asFragment } = render(<About />);

    //&IMPORTANT When changes are made to a component's element, such as a change in text content, button label, or attribute, it will cause the stored snapshot to become stale. A new snapshot can be written at the command line that contains the instance of the test runner by typing u to update, or rewrite, a new snapshot.
    expect(asFragment()).toMatchSnapshot();
  });
});
