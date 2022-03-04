import React, { useEffect } from "react";

import { capitalizeFirstLetter } from "../../utils/helpers";

// function Nav(props) {
//   // Destructuring props from App.jsx
//   const {
//     //? What is the purpose of this line?
//     categories = [],
//     setCurrentCategory,
//     currentCategory,
//     contactSelected,
//     setContactSelected,
//   } = props;

//   // Change tab title to match category
//   useEffect(() => {
//     document.title = capitalizeFirstLetter(currentCategory.name);
//   }, [currentCategory]);

//   function categorySelected(name) {
//     console.log(`${name} clicked`);
//   }

//   function category(category) {
//     return (
//       // prettier-ignore
//       <li
//       className={`mx-1 ${
//         currentCategory.name === category.name && !contactSelected && `navActive`
//         }`}
//       key={category.name}
//     >
//       <span
//         onClick={() => {
//           setCurrentCategory(category)
//         }}
//       >
//         {capitalizeFirstLetter(category.name)}
//       </span>
//     </li>
//     );
//   }

//   //console.log(currentCategory.name);   // Result -> Undefined
//   // console.log(categories);
//   return (
//     <header>
//       <h2>
//         <a data-testid="link" href="/">
//           <span role="img" aria-label="camera">
//             {" "}
//             📸
//           </span>{" "}
//           Oh Snap!
//         </a>
//       </h2>
//       <nav>
//         <ul className="flex-row">
//           <li className={`mx-2 ${contactSelected && "navActive"}`}>
//             {/* <li className={`mx-2`}> */}
//             <a
//               onClick={() => {
//                 setContactSelected(false);
//               }}
//               data-testid="about"
//               href="#about"
//             >
//               About me
//             </a>
//           </li>
//           <li>
//             <span
//               onClick={() => {
//                 setCurrentCategory(category);
//                 setContactSelected(true);
//               }}
//             >
//               Contact
//             </span>
//           </li>
//           {categories.map(category)}
//         </ul>
//       </nav>
//     </header>
//   );
// }

// Goofed somewhere above
function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    contactSelected,
    currentCategory,
    setContactSelected,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <header className="flex-row px-1">
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
            <a
              data-testid="about"
              href="#about"
              onClick={() => setContactSelected(false)}
            >
              About me
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && "navActive"}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name &&
                !contactSelected &&
                "navActive"
              }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
export default Nav;
