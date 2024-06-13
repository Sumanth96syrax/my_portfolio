import React from "react";
import "./cbutton.css";
function Cbutton({ liveLink, codeLink }) {
  return (
    <div className="buttons">
    <a href={liveLink} target="_blank" rel="noopener noreferrer">
      <button className="btn">Live</button>
    </a>
    <a href={codeLink} target="_blank" rel="noopener noreferrer">
      <button className="btn">Code</button>
    </a>
  </div>
  );
}

export default Cbutton;
