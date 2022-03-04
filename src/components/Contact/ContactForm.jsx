import React, { useState } from "react";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;

  function handleChange(e) {
    // Another way to do this
    // const { name, value } = e.target;
    // setFormState((prevValue) => {
    //   return { ...prevValue, [name]: value };
    // });

    // Objects are re-written, not merged, we use the spread operator so that we don't have to write down the rest of properties
    setFormState({ ...formState, [e.target.name]: e.target.value });
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
            onChange={handleChange}
            value={name}
            required
            type="text"
            name="name"
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            onChange={handleChange}
            value={email}
            required
            type="email"
            name="email"
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            onChange={handleChange}
            value={message}
            required
            name="message"
            rows="5"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
