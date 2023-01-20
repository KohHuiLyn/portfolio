import React from "react";
import portrait from "../images/test.gif";
import "../styles/About.css";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  FadeUp,
  FadeIn,
} from "react-scroll-motion";
const About = () => {

  return (
    <div className="About">
      <ScrollContainer>
        <ScrollPage className="AboutDiv">
          <Animator animation={FadeIn()}>
            <img src={portrait} className="portrait" alt="hi" />
          </Animator>
          <h1>Hello! I'm Hui Lyn!</h1>
          <p>I'm a final year student at Singapore Polytechnic doing a diploma in AI & Analytics</p>
        </ScrollPage>
      </ScrollContainer>
    </div>
  );
};

export default About;
