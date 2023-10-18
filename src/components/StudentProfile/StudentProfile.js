import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import "./StudentProfile.scss";

import emailIcon from "../../assets/images/icons/email (1).png";
import phoneIcon from "../../assets/images/icons/telephone.png";
import slackIcon from "../../assets/images/icons/slack (1).png";
import websiteIcon from "../../assets/images/icons/globe.png";

import Bkg from "../../assets/images/images/Bkg.webp";

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

export default function StudentProfile(props) {
  console.log(props);
  const { student, user } = props;
  const storageUser = JSON.parse(localStorage.getItem("storageUser"));

  console.log(`../../assets/images/images/${student.name}.png`);
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  const techIcons = {
    javascript: jsIcon,
    typescript: tsIcon,
    react: reactIcon,
    nodejs: nodeIcon,
    github: githubLogo,
    mysql: mySqlIcon,
    html: htmlIcon,
    css: cssIcon,
    sass: sassIcon,
    c: cIcon,
  };

  const handleClick = (event) => {
    navigate(`/users/${"imanhedeshy"}/edit`);
  };

  return (
    <div className="student-profile">
      <div className="student-profile-info">
        <img
          className="student-profile-info__background"
          alt="background banner"
          src={Bkg}
        />
        <img
          className="student-profile-info__pic"
          alt="student-profile"
          src={`/assets/images/images/${student.name}.png`}
        />
        {student.username === user.username || storageUser.username ? (
          <span
            className="partner-profile-info__edit-button"
            onClick={handleClick}
          >
            Edit Profile
          </span>
        ) : (
          ""
        )}
        <div className="student-profile-info__detail">
          <span className="student-profile-info__detail-name">
            {student.name}
          </span>
          <span className="student-profile-info__detail-headline">
            {student.headline}
          </span>
          <span className="student-profile-info__detail-discipline">
            {student.discipline}
          </span>
          <span className="student-profile-info__detail-cohortname">
            {student.cohortName}
          </span>
          <span className="student-profile-info__detail-cohort">
            {student.cohort} - {student.cohortDate}
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
              {student.bio}
            </p>
          </p>
        </div>
        <div className="student-profile-info__contact">
          <Link
            className="student-profile-info__contact-item"
            to={`mailto:${student.email}`}
          >
            <img
              className="student-profile-info__contact-icon"
              src={emailIcon}
              alt=""
            />
            {student.email}
          </Link>
          <Link
            className="student-profile-info__contact-item"
            to={`tel:${student.phoneNumber}`}
          >
            <img
              className="student-profile-info__contact-icon"
              src={phoneIcon}
              alt=""
            />
            {student.phoneNumber}
          </Link>
          <Link
            className="student-profile-info__contact-item"
            to={student.slack}
          >
            <img
              className="student-profile-info__contact-icon"
              src={slackIcon}
              alt=""
            />
            {student.name}
          </Link>
        </div>
        <div className="student-profile-info__links">
          <Link
            to={student.website}
            className="student-profile-info__links-item"
          >
            <img
              className="student-profile-info__links-icon"
              src={websiteIcon}
              alt="personal website icon"
            />
          </Link>
          <Link
            to={student.linkedin}
            className="student-profile-info__links-item"
          >
            <img
              className="student-profile-info__links-icon"
              src={linkedinLogo}
              alt="LinkedIn logo"
            />
          </Link>
          <Link
            to={student.github}
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
          src={student.video1}
          loading="lazy"
          title="The Box video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
        <iframe
          className="student-profile-hero__video"
          src={student.video2}
          loading="lazy"
          title="The Box video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
      </div>
      <div className="student-profile-projects">
        <h2 className="student-profile-projects__title">Portfolio</h2>
        {student.projects.map((project) => {
          if (project.type === "capstone") {
            return (
              <div className="student-profile-projects__capstone">
                <h3 className="student-profile-projects__capstone-title">
                  Capstone Project
                </h3>
                <div className="student-profile-projects__capstone-item">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            );
          }
          return null;
        })}
        <div className="student-profile-projects__list">
          <h3 className="student-profile-projects__list-title">Hackathons</h3>
          <div className="student-profile-projects__list-items">
            {student.projects
              .filter((project) => project.type === "hackathon")
              .map((project) => (
                <div className="student-profile-projects__list-item">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                </div>
              ))}
          </div>
        </div>
        <div className="student-profile-projects__list">
          <h3 className="student-profile-projects__list-title">
            Student Projects
          </h3>
          <div className="student-profile-projects__list-items">
            {student.projects
              .filter((project) => project.type === "student_project")
              .map((project) => (
                <div className="student-profile-projects__list-item">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                </div>
              ))}
          </div>
        </div>
        <div className="student-profile-projects__list">
          <h3 className="student-profile-projects__list-title">
            Personal Projects
          </h3>
          <div className="student-profile-projects__list-items">
            {student.projects
              .filter((project) => project.type === "personal_project")
              .map((project) => (
                <div className="student-profile-projects__list-item">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="student-profile-skills">
        <h2 className="student-profile-skills__title">Technical Skills</h2>
        <div className="student-profile-skills__list">
          {student.techStacks.map(({ tech_stack }) => (
            <div className="student-profile-skills__list-item" key={tech_stack}>
              <img src={techIcons[tech_stack]} alt={`${tech_stack} logo`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
