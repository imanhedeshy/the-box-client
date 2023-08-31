import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import "./Expo.scss";

import mockUsers from "../../data/mockUsersFprExpo";
import profilePic from "../../assets/images/images/profile_pic (5).png";
import rightArrow from "../../assets/images/icons/right-chevron.png";

export default function Expo() {
  const [userType, setUserType] = useState("");

  document.title = "The BOX | Expo";

  const filteredUsers = userType
    ? mockUsers.filter((user) => user.userType === userType)
    : mockUsers;

  const handleClick = (event) => {
    if (event.target.innerText === "Students") setUserType("student");
    if (event.target.innerText === "Educators") setUserType("educator");
    if (event.target.innerText === "Partners") setUserType("partner");
  };

  return (
    <div className="expo">
      <h2 className="expo__title">Expo!</h2>
      <div className="expo-tabs">
        <span
          onClick={handleClick}
          className={`expo-tabs__category ${
            userType === "student" ? "expo-tabs__category--active" : ""
          }`}
        >
          Students
        </span>
        <span
          onClick={handleClick}
          className={`expo-tabs__category ${
            userType === "educator" ? "expo-tabs__category--active" : ""
          }`}
        >
          Educators
        </span>
        <span
          onClick={handleClick}
          className={`expo-tabs__category ${
            userType === "partner" ? "expo-tabs__category--active" : ""
          }`}
        >
          Partners
        </span>
      </div>
      <div className="expo__container">
        {filteredUsers.map((user) => (
          <>
            <div className="expo-card">
              <div className="expo-profile">
                <img
                  className="expo-profile__picture"
                  src={profilePic}
                  alt="profile"
                />
                <h3 className="expo-profile__name">{user.name}</h3>
                <span className="expo-profile__discipline">
                  {user.discipline}
                </span>
                <span className="expo-profile__cohort">
                  <strong>{user.cohortName}</strong>
                  <br />
                  {user.cohort} - {user.startDate}
                </span>
              </div>
              <div className="expo-wrapper">
                <h3 className="expo-profile__headline">{user.headline}</h3>
                <p className="expo-profile__bio">{user.bio}</p>
                <div className="expo-projects">
                  {user.projects.map((project) => (
                    <Link className="expo-projects__card" to={project.url}>
                      <h4 className="expo-projects__card-title">
                        {project.name}
                      </h4>
                      <span className="expo-projects__card-type">
                        {project.type}
                      </span>
                      <p className="expo-projects__card-description">
                        {project.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="expo-shortcuts">
                <Link
                  className="expo-shortcuts__link"
                  to={`/users/${user.username}`}
                >
                  View Full Profile
                  <img
                    className="expo-shortcuts__chevron"
                    src={rightArrow}
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
