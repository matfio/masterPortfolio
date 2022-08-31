import React from "react";
import "./Educations.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";

import { Fade } from "react-reveal";

const Educations = (props) => {
  const list = props.list;
  const theme = props.theme;
  const title = props.title;

  return (
    <div className="main" id="educations">
      <div className="educations-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="educations-header" style={{ color: theme.text }}>
            {title}
          </h1>
        </Fade>
      </div>
      <div className="educations-body-div">
        {list.map((degree, i) => {
          return <DegreeCard key={i} degree={degree} theme={theme} />;
        })}
      </div>
    </div>
  );
};

export default Educations;
