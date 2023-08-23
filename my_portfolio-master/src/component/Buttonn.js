import React from "react";
import "./buttonn.css";
function Buttonn({ texxt }) {
  return (
    <a href="#contact">
      <button className="bttn">{texxt}</button>
    </a>
  );
}

export default Buttonn;
