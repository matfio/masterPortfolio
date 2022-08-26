import React, { Component } from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import Header from "../components/header/Header";

export default class Main extends Component {
  render() {
    
      return (
        <div>
          <HashRouter>

        <Header theme={this.props.theme} />
          <div id='home'> <Home {...this.props} theme={this.props.theme} /></div>
             
            <div id='experience'>
                <Experience {...this.props} theme={this.props.theme} />
              
            </div>
              <div
                id='education'><Education {...this.props} theme={this.props.theme} /></div>
  
             
              <div  id='contact'> <Contact {...this.props} theme={this.props.theme} /></div>

              
              <div id='projects'> <Projects {...this.props} theme={this.props.theme} /></div>

              </HashRouter>
        </div>
      );
    }
  }

