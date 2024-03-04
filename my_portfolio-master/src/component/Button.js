import React from "react";
import "./button.css";
function Button({ text }) {
  return (
    <a
      href="https://drive.google.com/file/d/1-r2SizClGTPNL7ZczMM3FIhP_rDHa7E9/view?pli=1"
      target="_blank"
    >
      <button className="btn">{text}</button>
    </a>
  );
}

export default Button;
