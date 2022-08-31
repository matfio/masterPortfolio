import React from "react";
import { BrowserRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Projects from "../pages/projects/Projects";
import Header from "../components/header/Header";

const Main = (props) => {
  return (
    <div>
      <BrowserRouter>
        <Header theme={props.theme} />

        <div id="home">
          <Home {...props} theme={props.theme} />
        </div>

        <div id="experience">
          <Experience {...props} theme={props.theme} />
        </div>

        <div id="education">
          <Education {...props} theme={props.theme} />
        </div>

        <div id="projects">
          <Projects {...props} theme={props.theme} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Main;
