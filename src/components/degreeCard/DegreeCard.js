import React, { Component } from "react";
import "./DegreeCard.css";
import { Fade, Flip } from "react-reveal";
import Button from "../../components/button/Button";
import ReactPlayer from "react-player";

class DegreeCard extends Component {
  render() {
    const degree = this.props.degree;
    const theme = this.props.theme;
    return (
      <div className="degree-card">
        {degree.logo_path && (
          <Flip left duration={2000}>
            <div className="card-img">
              <img
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  transform: "scale(0.9)",
                }}
                src={require(`../../assests/images/${degree.logo_path}`)}
                alt={degree.alt_name}
              />
            </div>
          </Flip>
        )}
        <Fade right duration={2000} distance="40px">
          <div
            className="card-body"
            style={{ width: degree.logo_path ? "90%" : "100%" }}
          >
            <div
              className="body-header"
              style={{ backgroundColor: theme.headerColor }}
            >
              <div className="body-header-title">
                <h2 className="card-title" style={{ color: theme.body }}>
                  {degree.title}
                </h2>
                <h3 className="card-subtitle" style={{ color: theme.body }}>
                  {degree.subtitle}
                </h3>
              </div>
              <div className="body-header-duration">
                <h3 className="duration" style={{ color: theme.body }}>
                  {degree.duration}
                </h3>
              </div>
            </div>
            <div className="body-content">
              <ul>
                {degree.descriptions.map((sentence, i) => {
                  return (
                    <li
                      key={i}
                      className="content-list"
                      style={{ color: theme.text }}
                    >
                      {sentence}
                    </li>
                  );
                })}
              </ul>
              {degree.video_url && (
                <ReactPlayer
                  url={degree.video_url}
                  controls={true}
                  width="100%"
                />
              )}
              {degree.website_link && (
                <Button
                  text="Visit Website"
                  newTab={true}
                  href={degree.website_link}
                  theme={theme}
                  className="visit-btn"
                ></Button>
              )}
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default DegreeCard;
