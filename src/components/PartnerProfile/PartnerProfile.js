import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import "./PartnerProfile.scss";

import emailIcon from "../../assets/images/icons/email (1).png";
import phoneIcon from "../../assets/images/icons/telephone.png";
import websiteIcon from "../../assets/images/icons/globe.png";

import linkedinLogo from "../../assets/images/logos/linkedin (1).png";
import githubLogo from "../../assets/images/logos/github (3).png";
import twitterLogo from "../../assets/images/logos/twitter (2).png";

import cIcon from "../../assets/images/icons/c-.png";
import htmlIcon from "../../assets/images/icons/html-5.png";
import jsIcon from "../../assets/images/icons/js.png";
import nodeIcon from "../../assets/images/icons/node-js.png";
import mySqlIcon from "../../assets/images/icons/mysql.png";
import reactIcon from "../../assets/images/icons/react.png";
import sassIcon from "../../assets/images/icons/sass.png";
import tsIcon from "../../assets/images/icons/typescript.png";
import cssIcon from "../../assets/images/icons/css-3.png";

export default function PartnerProfile({ partner, user }) {
  const storageUser = JSON.parse(localStorage.getItem("storageUser"));

  const [isExpanded, setIsExpanded] = useState(false);

  const navigate = useNavigate();

  const techIcons = {
    javascript: jsIcon,
    react: reactIcon,
    nodejs: nodeIcon,
    typescript: tsIcon,
    c: cIcon,
    github: githubLogo,
    mysql: mySqlIcon,
    html: htmlIcon,
    css: cssIcon,
    sass: sassIcon,
  };

  const handleClick = (event) => {
    navigate(`/users/${"imanhedeshy"}/edit`);
  };

  return (
    <div className="partner-profile">
      <div className="partner-profile-info">
        <img
          className="partner-profile-info__background"
          alt="background banner"
          src={partner.backgroundImage}
        />
        <img
          className="partner-profile-info__pic"
          alt="partner-profile"
          src={partner.profilePic}
        />
        {partner.username === user.username || storageUser.username ? (
          <span
            className="partner-profile-info__edit-button"
            onClick={handleClick}
          >
            Edit Profile
          </span>
        ) : (
          ""
        )}
        <div className="partner-profile-info__detail">
          <span className="partner-profile-info__detail-name">
            {partner.name}
          </span>
          <span className="partner-profile-info__detail-headline">
            {partner.headline}
          </span>
          <span className="partner-profile-info__detail-industry">
            {partner.industry}
          </span>
          <span className="partner-profile-info__detail-location">
            {partner.location}
          </span>
          <span className="partner-profile-info__detail-employees">
            {(223_456).toLocaleString("en-US")} employees
          </span>
        </div>
        <div className="partner-profile-info__bio">
          <h2 className="partner-profile-info__bio-title">Bio</h2>
          <p className="partner-profile-info__bio-contentwrapper">
            <p
              className={`partner-profile-info__bio-content ${
                !isExpanded ? "" : "partner-profile-info__bio-content--expanded"
              }`}
              onClick={() => {
                setIsExpanded(!isExpanded);
              }}
            >
              {partner.bio}
            </p>
          </p>
        </div>
        <div className="partner-profile-info__contact">
          <Link
            className="partner-profile-info__contact-item"
            to={`mailto:${partner.email}`}
          >
            <img
              className="partner-profile-info__contact-icon"
              src={emailIcon}
              alt=""
            />
            {partner.email}
          </Link>
          <Link
            className="partner-profile-info__contact-item"
            to={`tel:${partner.phoneNumber}`}
          >
            <img
              className="partner-profile-info__contact-icon"
              src={phoneIcon}
              alt=""
            />
            {partner.phoneNumber}
          </Link>
          <div className="partner-profile-info__links">
            <Link
              to={partner.website}
              className="partner-profile-info__links-item"
            >
              <img
                className="partner-profile-info__links-icon"
                src={websiteIcon}
                alt="personal website icon"
              />
            </Link>
            <Link
              to={partner.linkedin}
              className="partner-profile-info__links-item"
            >
              <img
                className="partner-profile-info__links-icon"
                src={linkedinLogo}
                alt="LinkedIn logo"
              />
            </Link>
            <Link
              to={partner.github}
              className="partner-profile-info__links-item"
            >
              <img
                className="partner-profile-info__links-icon"
                src={githubLogo}
                alt="GitHub logo"
              />
            </Link>
            <Link
              to={partner.twitter}
              className="partner-profile-info__links-item"
            >
              <img
                className="partner-profile-info__links-icon"
                src={twitterLogo}
                alt="GitHub logo"
              />
            </Link>
          </div>
        </div>
      </div>
      <h3 className="partner-profile-hero-title">Videos</h3>
      <div className="partner-profile-hero">
        <iframe
          className="partner-profile-hero__video"
          src={partner.video1}
          loading="lazy"
          title="The Box video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
        <iframe
          className="partner-profile-hero__video"
          src={partner.video2}
          loading="lazy"
          title="The Box video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
      </div>
      <h3 className="partner-profile-hero-title">Opportunities</h3>
      <div className="partner-profile-jobs">
        <div className="partner-profile-jobs__list">
          <h3 className="partner-profile-jobs__list-title">Internships</h3>
          <div className="partner-profile-jobs__list-items">
            {partner.jobs
              .filter((job) => job.type === "internship")
              .map((job) => (
                <div className="partner-profile-jobs__list-item" key={job.id}>
                  <h4>{job.title}</h4>
                  <img src={job.imageSrc} alt="" />
                  <p>{job.description}</p>
                  <a href={job.link}>Apply here</a>
                </div>
              ))}
          </div>
        </div>
        <div className="partner-profile-jobs__list">
          <h3 className="partner-profile-jobs__list-title">
            Full-time Opportunities
          </h3>
          <div className="partner-profile-jobs__list-items">
            {partner.jobs
              .filter((job) => job.type === "full-time")
              .map((job) => (
                <div className="partner-profile-jobs__list-item" key={job.id}>
                  <h4>{job.title}</h4>
                  <img src={job.imageSrc} alt="" />
                  <p>{job.description}</p>
                  <a href={job.link}>Apply here</a>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="partner-profile-skills">
        <h2 className="partner-profile-skills__title">
          Required Technical Skills
        </h2>
        <div className="partner-profile-skills__list">
          {partner.techStacks.map((stack) => (
            <div
              className="partner-profile-skills__list-item"
              key={stack.tech_stack}
            >
              <img
                src={techIcons[stack.tech_stack]}
                alt={`${stack.tech_stack} logo`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
