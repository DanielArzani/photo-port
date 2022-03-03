import React, { useEffect } from "react";

import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  // Destructuring props from App.jsx
  const { categories = [], setCurrentCategory, currentCategory } = props;

  // Change tab title to match category
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  function categorySelected(name) {
    console.log(`${name} clicked`);
  }

  function category(category) {
    return (
      // prettier-ignore
      <li
      className={`mx-1 ${
        currentCategory.name === category.name && 'navActive'
        }`}
      key={category.name}
    >
      <span
        onClick={() => {
          setCurrentCategory(category)
        }}
      >
        {capitalizeFirstLetter(category.name)}
      </span>
    </li>
    );
  }

  return (
    <header>
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera">
            {" "}
            📸
          </span>{" "}
          Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about">
              About me
            </a>
          </li>
          <li>
            <span>Contact</span>
          </li>
          {categories.map(category)}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;