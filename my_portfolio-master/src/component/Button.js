import React from "react";
import "./button.css";
function Button({ text }) {
  return (
    <a

      href="https://drive.google.com/file/d/10JbudYLBOkwUdX_-G5Pj9aD-UhAO8QEm/view?pli=1"
        target="_blank"
    >
      <button className="btn">{text}</button>
    </a>
  );
}

export default Button;
