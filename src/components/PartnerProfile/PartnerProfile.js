import { Link } from "react-router-dom";
import { useState } from "react";

import "./PartnerProfile.scss";

import profileBkg from "../../assets/images/images/microsoft-bgimage.jpg";
import profilePic from "../../assets/images/images/microsoft-logo.jpg";

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

export default function PartnerProfile() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="partner-profile">
      <div className="partner-profile-info">
        <img
          className="partner-profile-info__background"
          alt="background banner"
          src={profileBkg}
        />
        <img
          className="partner-profile-info__pic"
          alt="partner-profile"
          src={profilePic}
        />
        <div className="partner-profile-info__detail">
          <span className="partner-profile-info__detail-name">
            {"Microsoft"}
          </span>
          <span className="partner-profile-info__detail-headline">
            {"The greatest company of all!"}
          </span>
          <span className="partner-profile-info__detail-industry">
            {"Software Development"}
          </span>
          <span className="partner-profile-info__detail-location">
            {"Redmond, Washington"}
          </span>
          <span className="partner-profile-info__detail-employees">
            {(123_456).toLocaleString("en-US")} employees
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
              {
                "Every company has a mission. What's ours? To empower every person and every organization to achieve more. We believe technology can and should be a force for good and that meaningful innovation contributes to a brighter world in the future and today. Our culture doesn’t just encourage curiosity; it embraces it. Each day we make progress together by showing up as our authentic selves. We show up with a learn-it-all mentality. We show up cheering on others, knowing their success doesn't diminish our own. We show up every day open to learning our own biases, changing our behavior, and inviting in differences. When we show up, we achieve more together. Microsoft operates in 190 countries and is made up of more than 220,000 passionate employees worldwide."
              }
            </p>
          </p>
        </div>
        <div className="partner-profile-info__contact">
          <Link
            className="partner-profile-info__contact-item"
            to={`mailto:${"recruiter@microsoft.com"}`}
          >
            <img
              className="partner-profile-info__contact-icon"
              src={emailIcon}
              alt=""
            />
            {"recruiter@microsoft.com"}
          </Link>
          <Link
            className="partner-profile-info__contact-item"
            to={`tel:${"+14256387777"}`}
          >
            <img
              className="partner-profile-info__contact-icon"
              src={phoneIcon}
              alt=""
            />
            {"+1 425-638-7777"}
          </Link>
          <div className="partner-profile-info__links">
            <Link
              to={"http://microsoft.com"}
              className="partner-profile-info__links-item"
            >
              <img
                className="partner-profile-info__links-icon"
                src={websiteIcon}
                alt="personal website icon"
              />
            </Link>
            <Link
              to={"https://www.linkedin.com/company/microsoft//"}
              className="partner-profile-info__links-item"
            >
              <img
                className="partner-profile-info__links-icon"
                src={linkedinLogo}
                alt="LinkedIn logo"
              />
            </Link>
            <Link
              to={"https://github.com/microsoft"}
              className="partner-profile-info__links-item"
            >
              <img
                className="partner-profile-info__links-icon"
                src={githubLogo}
                alt="GitHub logo"
              />
            </Link>
            <Link
              to={"https://twitter.com/Microsoft"}
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
      <h3 className="partner-profile-hero-title">Events</h3>
      <div className="partner-profile-hero">
        <iframe
          className="partner-profile-hero__video"
          src="https://www.youtube.com/embed/RhwVMt_XCUE?si=GId3n6u-IiSZovYf"
          loading="lazy"
          title="The Box video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
        <iframe
          className="partner-profile-hero__video"
          src="https://www.youtube.com/embed/igpq47gTqlQ?si=AtJNYycmwzV9M5Wv"
          loading="lazy"
          title="The Box video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
      </div>
      <div className="partner-profile-jobs">
        <div className="partner-profile-jobs__list">
          <h3 className="partner-profile-jobs__list-title">Internships</h3>
          <div className="partner-profile-jobs__list-items">
            <div className="partner-profile-jobs__list-item">
              <h4>BrainStationFlix</h4>
            </div>
            <div className="partner-profile-jobs__list-item">
              <h4>MooCooCaw</h4>
            </div>
            <div className="partner-profile-jobs__list-item">
              <h4>TritonPrivacyVault</h4>
            </div>
          </div>
        </div>
        <div className="partner-profile-jobs__list">
          <h3 className="partner-profile-jobs__list-title">
            Full-time Opportunities
          </h3>
          <div className="partner-profile-jobs__list-items">
            <div className="partner-profile-jobs__list-item">
              <h4>BandSite</h4>
            </div>
            <div className="partner-profile-jobs__list-item">
              <h4>BrainFlix</h4>
            </div>
            <div className="partner-profile-jobs__list-item">
              <h4>InStock</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="partner-profile-skills">
        <h2 className="partner-profile-skills__title">Required Technical Skills</h2>
        <div className="partner-profile-skills__list">
          <div className="partner-profile-skills__list-item">
            <img src={jsIcon} alt="JS logo" />
          </div>
          <div className="partner-profile-skills__list-item">
            <img src={reactIcon} alt="React logo" />
          </div>
          <div className="partner-profile-skills__list-item">
            <img src={nodeIcon} alt="Node logo" />
          </div>
          <div className="partner-profile-skills__list-item">
            <img src={tsIcon} alt="Node logo" />
          </div>
          <div className="partner-profile-skills__list-item">
            <img src={cIcon} alt="Node logo" />
          </div>
          <div className="partner-profile-skills__list-item">
            <img src={githubLogo} alt="Node logo" />
          </div>
          <div className="partner-profile-skills__list-item">
            <img src={mySqlIcon} alt="Node logo" />
          </div>
          <div className="partner-profile-skills__list-item">
            <img src={htmlIcon} alt="Node logo" />
          </div>
          <div className="partner-profile-skills__list-item">
            <img src={cssIcon} alt="Node logo" />
          </div>
          <div className="partner-profile-skills__list-item">
            <img src={sassIcon} alt="Node logo" />
          </div>
        </div>
      </div>
    </div>
  );
}
