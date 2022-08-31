import React from "react";
import "./Header.css";
import { greeting } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";
import { NavHashLink } from "react-router-hash-link";

const onMouseEnter = (event, color) => {
  const el = event.target;
  el.style.backgroundColor = color;
};

const onMouseOut = (event) => {
  const el = event.target;
  el.style.backgroundColor = "transparent";
};

const Header = (props) => {
  const theme = props.theme;

  return (
    <>
      <SeoHeader />
      <div>
        <header className="header" style={{ backgroundColor: theme.body }}>
          <NavHashLink to="#home" className="logo">
            <span style={{ color: theme.text }}> &lt;</span>
            <span className="logo-name" style={{ color: theme.text }}>
              {greeting.logo_name}
            </span>
            <span style={{ color: theme.text }}>/&gt;</span>
          </NavHashLink>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu" style={{ backgroundColor: theme.body }}>
            <li>
              <NavHashLink
                to="#home"
                tag={NavHashLink}
                style={{ color: theme.text }}
                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                onMouseOut={(event) => onMouseOut(event)}
              >
                Home
              </NavHashLink>
            </li>

            <li>
              <NavHashLink
                to="#experience"
                tag={NavHashLink}
                style={{ color: theme.text }}
                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                onMouseOut={(event) => onMouseOut(event)}
              >
                Experience
              </NavHashLink>
            </li>
            <li>
              <NavHashLink
                to="#education"
                tag={NavHashLink}
                style={{ color: theme.text }}
                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                onMouseOut={(event) => onMouseOut(event)}
              >
                Education
              </NavHashLink>
            </li>
            <li>
              <NavHashLink
                to="#projects"
                tag={NavHashLink}
                style={{ color: theme.text }}
                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                onMouseOut={(event) => onMouseOut(event)}
              >
                Projects
              </NavHashLink>
            </li>

            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={greeting.resumeLink}
                style={{ color: theme.text }}
                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                onMouseOut={(event) => onMouseOut(event)}
              >
                Resume
              </a>
            </li>
          </ul>
        </header>
      </div>
    </>
  );
};

export default Header;
