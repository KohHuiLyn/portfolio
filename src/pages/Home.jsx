import React from "react";
import "../styles/Home.css";
import HomeTop from "../components/HomeTop";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <div className="Home" >
      <div className="scrollSnap">
        <HomeTop/>
        <Projects/>
      </div>

    </div>
  );
};

export default Home;
