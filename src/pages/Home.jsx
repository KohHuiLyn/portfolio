import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import HomeTop from "../components/HomeTop";
// import Projects from "../components/Projects";
import ProjectsSmall from "../components/ProjectsSmall";

const Home = () => {
  // const [isDesktop, setDesktop] = useState(window.innerWidth > 800);

  // const updateMedia = () => {
  //   setDesktop(window.innerWidth > 800);
  // };

  // useEffect(() => {
  //   window.addEventListener("resize", updateMedia);
  //   return () => window.removeEventListener("resize", updateMedia);
  // });
  return (
    <div className="Home" >
      <div className="scrollSnap">
        <HomeTop/>
        {/* {isDesktop ? (<Projects/>) : (<ProjectsSmall/>)} */}
        <ProjectsSmall/>
      </div>

    </div>
  );
};

export default Home;
