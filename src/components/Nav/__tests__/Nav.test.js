/* eslint-disable testing-library/prefer-screen-queries */
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

describe("Emoji", () => {
  it("should insert emoji into h2 and be visible", () => {
    // Arrange
    // query to return the element containing the emoji
    const { getByLabelText } = render(<Nav />);

    // Assert
    // test the emoji's accessibility features by querying the element by its aria-label
    expect(getByLabelText("camera")).toHaveTextContent("📸");
  });
});

describe("Links", () => {
  it("should be visible by having text inserted into them", () => {
    // Similar to an id attribute, we will add a data-testid to the <a> element. Also similar to the getElementById DOM method, we will use the getByTestId method to return the DOM element.
    // The class and id attributes are used for CSS and JavaScript selection. In the case of a change in styling, we wouldn't want to break tests as a side effect of an unrelated change.
    //* Add these in order to test
    // <a data-testid="link" href="/">
    //   <span role="img" aria-label="camera">
    //     {" "}
    //     📸
    //   </span>{" "}
    //   Oh Snap!
    // </a>;

    // <a data-testid="about" href="#about"></a>;

    const { getByTestId } = render(<Nav />);
    // Did you notice in the preceding code block that we used two expect statements? This asserts that both links must have their text contents inserted. If either assertion fails, this test will fail. This is why the preceding screenshot has an additional passing test rather than two additional tests. Therefore, each it function is associated with a single test case.
    expect(getByTestId("link")).toHaveTextContent("Oh Snap!");
    expect(getByTestId("about")).toHaveTextContent("About me");
  });
});
