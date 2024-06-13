import React from "react";
import "./button.css";
function Button({ Code }) {
  return (
    <a
      href="https://github.com/Sumanth96syrax/face-mask-detection"
      target="_blank"
    >
      <button className="btn">{Code}</button>
    </a>
  );
}

export default Button;
