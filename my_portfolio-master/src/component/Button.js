import React from "react";
import "./button.css";
function Button({ text }) {
  return (
    <a
      href="file:///G:/My%20Drive/SB%20Resume.pdf"
      target="_blank"
    >
      <button className="btn">{text}</button>
    </a>
  );
}

export default Button;
