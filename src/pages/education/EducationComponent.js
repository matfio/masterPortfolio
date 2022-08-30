import React, { Component } from "react";
import TopButton from "../../components/topButton/TopButton";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import EducationImg from "./EducationImg";
import { competitiveSites, degrees } from "../../portfolio";
import "./EducationComponent.css";

import { Fade } from "react-reveal";
import Educations from "../../containers/education/Educations";

class Education extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="education-main">
        <div className="basic-education">
          <Fade bottom duration={2000} distance="40px">
            <div className="heading-div">
              <div className="heading-img-div">
                {/* <img
									src={require("../../assests/images/education.svg")}
									alt=""
								/> */}
                <EducationImg theme={theme} />
              </div>
              <div className="heading-text-div">
                <h1 className="heading-text" style={{ color: theme.text }}>
                  Education
                </h1>
                <h3 className="heading-sub-text" style={{ color: theme.text }}>
                  Where I received my higher education
                </h3>
                <p
                  className="heading-detail-text"
                  style={{ color: theme.secondaryText }}
                >
                  I started my higher education with the fascination of IT and
                  technology. The first degree I achieved has been in IT
                  engineering in Italy. Afterwards, I decided to move to
                  Copenhagen to receive my specialization is designing and
                  developing videogames.
                </p>
                {
                  //<CompetitiveSites logos={competitiveSites.competitiveSites} />
                }
              </div>
            </div>
          </Fade>
          <Educations
            theme={this.props.theme}
            list={degrees.degrees}
            title="Degrees Received"
          />
        </div>
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Education;
