/* eslint-disable no-unused-vars */
import React from "react";
import fullStackImg from "../assets/fullstack.jpg";

const FullStack = () => {
  return (
    <div className="page">
      <img src={fullStackImg} alt="Full Stack Development" className="page-image" />
      <h1>Full Stack Development</h1>
      <p>Master web development with a focus on both frontend and backend technologies.</p>
      <ul>
        <li>HTML, CSS, JavaScript</li>
        <li>React and Redux</li>
        <li>Node.js, Express</li>
        <li>MongoDB</li>
      </ul>
    </div>
  );
};

export default FullStack;
