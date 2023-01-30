import React from "react";
import portrait from "../images/test.gif";
import { Fade } from "react-reveal";
import "../styles/About.css";
const About = () => {

  return (
    <div className="Home">
      <Fade delay={1000}>
      <img src={portrait} className="portrait" alt="hi" />
      <h1>Hello! I'm Hui Lyn!</h1>
      </Fade>
      <Fade delay={3000}>
      <p>I'm a Third Year Student at Singapore Polytechnic currently <br/>pursuing a Diploma in Applied AI and Analytics!</p>
      </Fade>
    </div>
  );
};

export default About;
