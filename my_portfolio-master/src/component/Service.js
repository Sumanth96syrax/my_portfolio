import React from "react";
import "./service.css";
import Card from "./Card";

function Service() {
  return (
    <section id="service">
      <h3 className="headd">PROJECTS </h3>
      <div className="pro-center">
        <Card image="p1.png" textt="Face Mask Detection Using Machine Learning" />
        <Card image="p2.png" textt="Doctor Appointment Dashboard" />
        <Card image="p3.png" textt="Demo Project 1" />
        <Card image="p4.png" textt="Demo Project 2" />

      </div>
    </section>
  );
}

export default Service;
