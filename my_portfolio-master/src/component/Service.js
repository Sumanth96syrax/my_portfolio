import React from "react";
import "./service.css";
import Card from "./Card";

function Service() {
  return (
    <section id="service">
      <h3 className="headd">PROJECTS </h3>
      <div className="pro-center">

        <Card image="p1.png" textt="Face Mask Detection Using Machine Learning" liveLink="" 
          codeLink="https://github.com/Sumanth96syrax/face-mask-detection"/>
        <Card image="p2.png" textt="Quiz App" liveLink="https://quiz-app-mobile.netlify.app/" 
          codeLink="https://github.com/Sumanth96syrax/Quiz-App"/>
        <Card image="p3.png" textt="Todo-Site" liveLink="https://todo-site-98.netlify.app/" 
          codeLink="https://github.com/Sumanth96syrax/Todo-site "/>
        <Card image="p4.png" textt="Weather App" liveLink="https://weather-mobile-app96.netlify.app/" 
          codeLink="https://github.com/Sumanth96syrax/Weather-mobile-app96"/>
        <card image="p5.png" textt="Calculator App" liveLink="https://calculator-site96.netlify.app/" 
          codeLink="https://github.com/Sumanth96syrax/Calculator-React"/>
      </div>
    </section>
  );
}

export default Service;
