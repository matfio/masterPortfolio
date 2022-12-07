import React, { useState, useEffect } from "react";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { greeting, projectsHeader } from "../../portfolio.js";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";
import ProjectsMapper from "./ProjectsMapper";

const Projects = (props) => {
  const [projectsData, setProjectsData] = useState([]);

  //A quick way to request and map projects without re-deploying the project
  useEffect(() => {
    fetch(`https://api.github.com/users/matfio/repos`)
      .then((response) => response.json())
      .then(async (data) => {
        const mappedData = await ProjectsMapper(data);
        setProjectsData(mappedData);
      });
  }, []);

  const theme = props.theme;

  return (
    <div className="projects-main">
      <div className="basic-projects">
        <Fade bottom duration={2000} distance="40px">
          <div className="projects-heading-div">
            <div className="projects-heading-img-div">
              <ProjectsImg theme={theme} />
            </div>
            <div className="projects-heading-text-div">
              <h1
                className="projects-heading-text"
                style={{ color: theme.text }}
              >
                {projectsHeader.title}
              </h1>
              <p
                className="projects-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {projectsHeader["description"]}
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <div className="repo-cards-div-main">
        {projectsData.map((repo, i) => {
          return <GithubRepoCard key={i} repo={repo} theme={theme} />;
        })}
      </div>
      <Button
        text={"More Projects"}
        className="project-button"
        href={greeting.githubProfile}
        newTab={true}
        theme={theme}
      />

      <TopButton theme={props.theme} />
    </div>
  );
};

export default Projects;
