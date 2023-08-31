import { Link } from "react-router-dom";

import "./StudentProfile.scss";

export default function StudentProfile() {
  return (
    <div className="profile">
      <div className="profile-info">
        <img className="profile-info__background" alt="background banner" />
        <img className="profile-info__pic" alt="profile" />
        <div className="profile-info__detail">
          <span className="profile-info__detail-name">{"Iman Hedeshy"}</span>
          <span className="profile-info__detail-headline">
            {"The strongest developer of Asgard!"}
          </span>
          <span className="profile-info__detail-discipline">
            {"Software Engineering"}
          </span>
          <span className="profile-info__detail-cohort">{"Online"}</span>
          <span className="profile-info__detail-startdate">{"Jun 23"}</span>
          <span className="profile-info__detail-cohortname">
            {"The Namless '23"}
          </span>
          <span className="profile-info__detail-connections">
            {2_246} connections
          </span>
        </div>
        <div className="profile-info__contact">
          <Link
            className="profile-info__contact-item"
            to={`mailto:${"iman.hedeshy@gmail.com"}`}
          >
            Email: {"iman.hedeshy@gmail.com"}
          </Link>
          <Link
            className="profile-info__contact-item"
            to={`tel:${"+14169394969"}`}
          >
            Phone number: {"+1 (416) 939-4969"}
          </Link>
          <Link
            className="profile-info__contact-item"
            to={`slack://user?team=${"T3N0S87QD"}&id=${"D05DD8CM00J"}`}
          >
            Slack: {"Iman Hedeshy"}
          </Link>
        </div>
        <div className="profile-info__links">
          <Link to={"http://hedeshy.ca"} className="profile-info__link-item">
            <img src="" alt="personal website icon" />
          </Link>
          <Link
            to={"https://www.linkedin.com/in/imanhedeshy/"}
            className="profile-info__link-item"
          >
            <img src="" alt="LinkedIn logo" />
          </Link>
          <Link
            to={"https://github.com/imanhedeshy"}
            className="profile-info__link-item"
          >
            <img src="" alt="GitHub logo" />
          </Link>
        </div>
      </div>
      <div className="profile-hero">
        <h2>Videos</h2>
        <iframe className="profile-hero__video">Video Resume</iframe>
        <iframe className="profile-hero__video">Capstone Demo</iframe>
      </div>
      <div className="profile-resume">
        <h2>Resume</h2>
      </div>
      <div className="profile-projects">
        <h2>Portfolio</h2>
        <div className="profile-projects__capstone">
          <h3>Capstone Project</h3>
          <div className="profile-projects__item">
            <h3>The BOX!</h3>
          </div>
        </div>
        <div className="profile-projects__list">
          <h3>Hackathons</h3>
          <div className="profile-projects__item">
            <h4>BrainStationFlix</h4>
          </div>
          <div className="profile-projects__item">
            <h4>MooCooCaw</h4>
          </div>
          <div className="profile-projects__item">
            <h4>TritonPrivacyVault</h4>
          </div>
        </div>
        <div className="profile-projects__list">
          <h3>Student Projects</h3>
          <div className="profile-projects__item">
            <h4>BandSite</h4>
          </div>
          <div className="profile-projects__item">
            <h4>BrainFlix</h4>
          </div>
          <div className="profile-projects__item">
            <h4>InStock</h4>
          </div>
        </div>
        <div className="profile-projects__list">
          <h3>Personnal Projects</h3>
          <div className="profile-projects__item">
            <h4>Solar System</h4>
          </div>
          <div className="profile-projects__item">
            <h4>File Structure Viewer</h4>
          </div>
          <div className="profile-projects__item">
            <h4>Journal</h4>
          </div>
        </div>
      </div>
      <div className="profile-skills">
        <h2>Skills</h2>
        <div className="profile-skills__item">
          <span>JavaScript</span>
          <img src="" alt="JS logo" />
        </div>
        <div className="profile-skills__item">
          <span>React.js</span>
          <img src="" alt="React logo" />
        </div>
        <div className="profile-skills__item">
          <span>Node.js</span>
          <img src="" alt="Node logo" />
        </div>
      </div>
    </div>
  );
}

