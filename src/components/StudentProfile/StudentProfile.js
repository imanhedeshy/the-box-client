import { Link } from "react-router-dom";
import { useState } from "react";

import "./StudentProfile.scss";

import profileBkg from "../../assets/images/images/blue-polygon-dark-background-social-template_53876-116080.webp";
import profilePic from "../../assets/images/images/profile_pic (2).png";

import emailIcon from "../../assets/images/icons/email (1).png";
import phoneIcon from "../../assets/images/icons/telephone.png";
import slackIcon from "../../assets/images/icons/slack (1).png";
import websiteIcon from "../../assets/images/icons/globe.png";

import linkedinLogo from "../../assets/images/logos/linkedin (1).png";
import githubLogo from "../../assets/images/logos/github (3).png";

import cIcon from "../../assets/images/icons/c-.png";
import htmlIcon from "../../assets/images/icons/html-5.png";
import jsIcon from "../../assets/images/icons/js.png";
import nodeIcon from "../../assets/images/icons/node-js.png";
import mySqlIcon from "../../assets/images/icons/mysql.png";
import reactIcon from "../../assets/images/icons/react.png";
import sassIcon from "../../assets/images/icons/sass.png";
import tsIcon from "../../assets/images/icons/typescript.png";
import cssIcon from "../../assets/images/icons/css-3.png";

export default function StudentProfile() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="student-profile">
      <div className="student-profile-info">
        <img
          className="student-profile-info__background"
          alt="background banner"
          src={profileBkg}
        />
        <img
          className="student-profile-info__pic"
          alt="student-profile"
          src={profilePic}
        />
        <div className="student-profile-info__detail">
          <span className="student-profile-info__detail-name">
            {"Iman Hedeshy"}
          </span>
          <span className="student-profile-info__detail-headline">
            {"The strongest developer of Asgard!"}
          </span>
          <span className="student-profile-info__detail-discipline">
            {"Software Engineering"}
          </span>
          <span className="student-profile-info__detail-cohortname">
            {"The Namless '23"}
          </span>
          <span className="student-profile-info__detail-cohort">
            {"Online"} - {"Jun 23"}
          </span>
          <span className="student-profile-info__detail-connections">
            {(2_246).toLocaleString("en-US")} connections
          </span>
        </div>
        <div className="student-profile-info__bio">
          <h2 className="student-profile-info__bio-title">Bio</h2>
          <p className="student-profile-info__bio-contentwrapper">
            <p
              className={`student-profile-info__bio-content ${
                !isExpanded ? "" : "student-profile-info__bio-content--expanded"
              }`}
              onClick={() => {
                setIsExpanded(!isExpanded);
              }}
            >
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Donec in efficitur leo. Maecenas non felis facilisis, tristique quam vel, accumsan libero. Curabitur at tristique metus, nec lacinia est. Integer nec odio praesent libero lacinia ante."
              }
            </p>
          </p>
        </div>
        <div className="student-profile-info__contact">
          <Link
            className="student-profile-info__contact-item"
            to={`mailto:${"iman.hedeshy@gmail.com"}`}
          >
            <img
              className="student-profile-info__contact-icon"
              src={emailIcon}
              alt=""
            />
            {"iman.hedeshy@gmail.com"}
          </Link>
          <Link
            className="student-profile-info__contact-item"
            to={`tel:${"+14169394969"}`}
          >
            <img
              className="student-profile-info__contact-icon"
              src={phoneIcon}
              alt=""
            />
            {"+1 (416) 939-4969"}
          </Link>
          <Link
            className="student-profile-info__contact-item"
            to={`slack://user?team=${"T3N0S87QD"}&id=${"D05DD8CM00J"}`}
          >
            <img
              className="student-profile-info__contact-icon"
              src={slackIcon}
              alt=""
            />
            {"Iman Hedeshy"}
          </Link>
        </div>
        <div className="student-profile-info__links">
          <Link
            to={"http://hedeshy.ca"}
            className="student-profile-info__links-item"
          >
            <img
              className="student-profile-info__links-icon"
              src={websiteIcon}
              alt="personal website icon"
            />
          </Link>
          <Link
            to={"https://www.linkedin.com/in/imanhedeshy/"}
            className="student-profile-info__links-item"
          >
            <img
              className="student-profile-info__links-icon"
              src={linkedinLogo}
              alt="LinkedIn logo"
            />
          </Link>
          <Link
            to={"https://github.com/imanhedeshy"}
            className="student-profile-info__links-item"
          >
            <img
              className="student-profile-info__links-icon"
              src={githubLogo}
              alt="GitHub logo"
            />
          </Link>
        </div>
        <Link className="student-profile-info__bio-resume">
          Download Resume
        </Link>
      </div>
      <div className="student-profile-hero">
        <iframe
          className="student-profile-hero__video"
          src="https://share.synthesia.io/embeds/videos/a5b86147-cae2-4ef0-8b3a-e2d246a7c3be"
          loading="lazy"
          title="The Box video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
        <iframe
          className="student-profile-hero__video"
          src="https://share.synthesia.io/embeds/videos/77f00559-9513-47a0-9318-0906650c6959"
          loading="lazy"
          title="The Box video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
      </div>
      <div className="student-profile-projects">
        <h2 className="student-profile-projects__title">Portfolio</h2>
        <div className="student-profile-projects__capstone">
          <h3 className="student-profile-projects__capstone-title">
            Capstone Project
          </h3>
          <div className="student-profile-projects__capstone-item">
            <h3>The BOX!</h3>
          </div>
        </div>
        <div className="student-profile-projects__list">
          <h3 className="student-profile-projects__list-title">Hackathons</h3>
          <div className="student-profile-projects__list-items">
            <div className="student-profile-projects__list-item">
              <h4>BrainStationFlix</h4>
            </div>
            <div className="student-profile-projects__list-item">
              <h4>MooCooCaw</h4>
            </div>
            <div className="student-profile-projects__list-item">
              <h4>TritonPrivacyVault</h4>
            </div>
          </div>
        </div>
        <div className="student-profile-projects__list">
          <h3 className="student-profile-projects__list-title">
            Student Projects
          </h3>
          <div className="student-profile-projects__list-items">
            <div className="student-profile-projects__list-item">
              <h4>BandSite</h4>
            </div>
            <div className="student-profile-projects__list-item">
              <h4>BrainFlix</h4>
            </div>
            <div className="student-profile-projects__list-item">
              <h4>InStock</h4>
            </div>
          </div>
        </div>
        <div className="student-profile-projects__list">
          <h3 className="student-profile-projects__list-title">
            Personal Projects
          </h3>
          <div className="student-profile-projects__list-items">
            <div className="student-profile-projects__list-item">
              <h4>Solar System</h4>
            </div>
            <div className="student-profile-projects__list-item">
              <h4>File Structure Viewer</h4>
            </div>
            <div className="student-profile-projects__list-item">
              <h4>Journal</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="student-profile-skills">
        <h2 className="student-profile-skills__title">Technical Skills</h2>
        <div className="student-profile-skills__list">
          <div className="student-profile-skills__list-item">
            <img src={jsIcon} alt="JS logo" />
          </div>
          <div className="student-profile-skills__list-item">
            <img src={reactIcon} alt="React logo" />
          </div>
          <div className="student-profile-skills__list-item">
            <img src={nodeIcon} alt="Node logo" />
          </div>
          <div className="student-profile-skills__list-item">
            <img src={tsIcon} alt="Node logo" />
          </div>
          <div className="student-profile-skills__list-item">
            <img src={cIcon} alt="Node logo" />
          </div>
          <div className="student-profile-skills__list-item">
            <img src={githubLogo} alt="Node logo" />
          </div>
          <div className="student-profile-skills__list-item">
            <img src={mySqlIcon} alt="Node logo" />
          </div>
          <div className="student-profile-skills__list-item">
            <img src={htmlIcon} alt="Node logo" />
          </div>
          <div className="student-profile-skills__list-item">
            <img src={cssIcon} alt="Node logo" />
          </div>
          <div className="student-profile-skills__list-item">
            <img src={sassIcon} alt="Node logo" />
          </div>
        </div>
      </div>
    </div>
  );
}
