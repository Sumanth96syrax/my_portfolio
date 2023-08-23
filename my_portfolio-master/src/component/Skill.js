import React from "react";
import "./skill.css";
function Skill() {
  return (
    <section id="skill">
      <div className="skill-c">
        <div className="a">
          <h2>
            <span className="abt">SKILLS</span>
            <br />
            <span className="s-abt">Technologies i'm familiar with</span>
          </h2>
        </div>
        <div className="b">
          <h3 className="skl">
            Html <br />
            Css <br />
            JavaScript <br />
            ReactJs <br />
            Php <br />
            Git & Github <br />
          </h3>
        </div>
        <div className="b">
          <h3 className="skl">
            C <br />
            C++ <br />
            Java <br />
            Data Structures
            <br />
            Algorithms <br />
            SQL <br />
          </h3>
        </div>
      </div>
    </section>
  );
}

export default Skill;
