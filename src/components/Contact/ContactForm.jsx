import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;

  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      !isValid ? setErrorMessage("Your email is invalid") : setErrorMessage("");
    } else {
      !e.target.value.length
        ? setErrorMessage(`${e.target.name} is required`)
        : setErrorMessage("");
    }

    // eslint-disable-next-line no-unused-expressions
    !errorMessage
      ? setFormState({ ...formState, [e.target.name]: e.target.value })
      : null;
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section>
      <form onSubmit={handleSubmit} id="contact-form">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            // onBlur is used here for when the user has changed the focus by clicking
            // somewhere else, if what is inside is not allowed by the error message then
            // a text will be rendered under the textarea saying that what they have is
            // not allowed
            onBlur={handleChange}
            defaultValue={name}
            required
            type="text"
            name="name"
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            onBlur={handleChange}
            defaultValue={email}
            required
            type="email"
            name="email"
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            onBlur={handleChange}
            defaultValue={message}
            required
            name="message"
            rows="5"
          />
          {/* Custom error message */}
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
