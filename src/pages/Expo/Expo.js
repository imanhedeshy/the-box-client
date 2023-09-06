import { Link, useNavigate } from "react-router-dom";

import "./Expo.scss";

import mockUsers from "../../data/mockUsersFprExpo";

import Iman from "../../assets/images/images/Iman.png";
import Bruce from "../../assets/images/images/Bruce.png";
import Jack from "../../assets/images/images/Jack.png";
import James from "../../assets/images/images/James.png";
import Jane from "../../assets/images/images/Jane.png";
import Jenny from "../../assets/images/images/Jenny.png";
import John from "../../assets/images/images/John.png";
import Sahar from "../../assets/images/images/Sahar.png";
import yas from "../../assets/images/images/yas.png";

import rightArrow from "../../assets/images/icons/right-chevron (1).svg";

export default function Expo({ selectedUserType, setSelectedUserType }) {
  document.title = "The BOX | Expo";
  const navigate = useNavigate();

  const filteredUsers = selectedUserType
    ? mockUsers.filter((user) => user.userType === selectedUserType)
    : mockUsers;

  const handleClick = (event) => {
    if (event.target.innerText === "Students") {
      localStorage.setItem("storageUserType", "student");
      setSelectedUserType("student");
    }
    if (event.target.innerText === "Educators") {
      localStorage.setItem("storageUserType", "educator");
      setSelectedUserType("educator");
    }
    if (event.target.innerText === "Partners") {
      localStorage.setItem("storageUserType", "partner");
      setSelectedUserType("partner");
    }
  };

  return (
    <div className="expo">
      <h2 className="expo__title">Expo!</h2>
      <div className="expo-tabs">
        <span
          onClick={handleClick}
          className={`expo-tabs__category ${
            selectedUserType === "student" ? "expo-tabs__category--active" : ""
          }`}
        >
          Students
        </span>
        <span
          onClick={handleClick}
          className={`expo-tabs__category ${
            selectedUserType === "educator" ? "expo-tabs__category--active" : ""
          }`}
        >
          Educators
        </span>
        <span
          onClick={handleClick}
          className={`expo-tabs__category ${
            selectedUserType === "partner" ? "expo-tabs__category--active" : ""
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
                  src={`/assets/images/images/${user.name.split(" ")[0]}.png`}
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
                <p
                  className="expo-shortcuts__link"
                  onClick={() => {
                    setSelectedUserType(user.userType);
                    navigate(`/users/${user.username}`);
                  }}
                >
                  View Full Profile
                  <img
                    className="expo-shortcuts__chevron"
                    src={rightArrow}
                    alt=""
                  />
                </p>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
