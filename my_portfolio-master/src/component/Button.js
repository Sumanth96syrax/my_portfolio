import React from "react";
import "./button.css";
function Button({ text }) {
  return (
    <a
      href="https://drive.google.com/file/d/1-hPWXq7VbDpHPsFTxrRsCDf6A0X-tlKY/view?pli=1"
      target="_blank"
    >
      <button className="btn">{text}</button>
    </a>
  );
}

export default Button;
