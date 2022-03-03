import React from "react";
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img
        className="my-2"
        src={coverImage}
        alt="cover"
        style={{ width: "100%" }}
      />
    </section>
  );
}

export default About;
