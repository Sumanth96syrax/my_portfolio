import React from "react";
import "./home.css";
import Button from "./Button";
import About from "./About";
import Service from "./Service";
import Skill from "./Skill";
import Contact from "./Contact";
import Buttonn from "./Buttonn";
import Blogs from "./Blogs";
function Home() {
  return (
    <section id="home">
      <div class="center">
        <h1>
          <span className="im"> &nbsp; &nbsp; i'm</span> <br />{" "}
          <span className="txt">SUMANTH BRUNGI</span> <br />
          <span className="d-txt">
            FRONT-END WEB DEVELOPER & STUDENT LOOKING FOR <br />{" "}
            OPPORTUNITIES IN THE INDUSTRY.
          </span>{" "}
          <br />
          <Button text="RESUME" />
          <Buttonn texxt="HIRE ME" />
        </h1>
      </div>
      <About />
      <Service />
      <Skill />
      <Blogs/>
      <Contact />
    </section>
  );
}

export default Home;
