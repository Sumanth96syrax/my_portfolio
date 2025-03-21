import React from "react";
import "./about.css";
import Button from "./Button";
import Buttonn from "./Buttonn";
function About() {
  return (
    <section id="about">
      <div className="about">
        <h2>
          <span className="abt">ABOUT ME</span> <br />
          <br />
          Hello, I'm <span className="bd">SUMANTH BRUNGI </span>and i'm Front-End Software Engineer. <br />I have a passion for creating responsive,
          features rich website's with a great user{" "}
          <span className="bd">INTERFACE. </span>
          <br />
          I'm currently looking for an <span className="bd">OPPORTUNITY </span>
          to show my potential.
          <br />
          <br />
          <Button text="RESUME" />
          <Buttonn texxt="HIRE ME" />
        </h2>
      </div>
    </section>
  );
}

export default About;
