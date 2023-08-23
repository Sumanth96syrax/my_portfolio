import React from "react";
import Cbutton from "./Cbutton";
import "./card.css";
function Card({ image, textt }) {
  return (
    <>
      <div className="card">
        <div className="imgg">
          <img className="card-img" src={image} alt="mi.com" />
        </div>
        <div className="c-txt">
          <h4 className="c-t"> {textt} </h4>
          <Cbutton />
        </div>
      </div>
    </>
  );
}

export default Card;
