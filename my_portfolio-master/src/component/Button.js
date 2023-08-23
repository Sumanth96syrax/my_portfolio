import React from "react";
import "./button.css";
function Button({ text }) {
  return (
    <a
      href="https://drive.google.com/file/d/1-CAPWGqRPnbxzANDEE9tS392pdB5ija2/view?usp=sharing"
      target="_blank"
    >
      <button className="btn">{text}</button>
    </a>
  );
}

export default Button;
