import { useParams } from "react-router-dom";
import profilePicture from "../../assets/images/images/profile_pic (2).png";

import "./UpdateProfile.scss";
import { useEffect } from "react";

export default function UpdateProfile() {
  const { username } = useParams();
  useEffect(() => {
    document.title = `The Box | Profile: ${username}`;
  }, [username]);
  return (
    <div className="update-profile">
      <img className="update-profile__picture" src={profilePicture} alt="update-profile" />
      <form className="update-profile-form">
        <label className="update-profile-form__label" htmlFor="name">
          Name
          <input
            className="update-profile-form__input"
            name="name"
            id="name"
            value="Iman Hedeshy"
            placeholder="Full Name"
          />
        </label>
        <label className="update-profile-form__label" htmlFor="username">
          Username
          <input
            className="update-profile-form__input"
            name="username"
            id="username"
            value={username}
            placeholder="Username"
            disabled={true}
          />
        </label>
        <label className="update-profile-form__label" htmlFor="email">
          Email
          <input
            className="update-profile-form__input"
            name="email"
            id="email"
            value="iman.hedeshy@gmail.com"
            placeholder="Email"
          />
        </label>
        <label className="update-profile-form__label" htmlFor="userType">
          User Type
          <input
            className="update-profile-form__input"
            name="userType"
            id="userType"
            value="Odin"
            placeholder="User Type"
            disabled={true}
          />
        </label>
        <label className="update-profile-form__label" htmlFor="bio">
          Bio
          <textarea
            className="update-profile-form__input profile-form__input--textarea"
            name="bio"
            id="bio"
            value="Husband, Software Engineer, MBA, Elecetrical Engineer, Operations Manager, Project Manager, Sport Enthusiast, Guitar Player, Foody, Sushi Lover"
            placeholder="Bio"
          />
        </label>
        <label className="update-profile-form__label" htmlFor="currentPassword">
          Current Password
          <input
            className="update-profile-form__input"
            name="currentPassword"
            id="currentPassword"
            placeholder="Current Passwords"
          />
        </label>
        <label className="update-profile-form__label" htmlFor="newPassword">
          New Password
          <input
            className="update-profile-form__input"
            name="newPassword"
            id="newPassword"
            placeholder="New Password"
          />
        </label>
        <label className="update-profile-form__label" htmlFor="confirmPassword">
          Confirm Password
          <input
            className="update-profile-form__input"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm Password"
          />
        </label>
        <button className="update-profile-form__button">Save</button>
      </form>
    </div>
  );
}