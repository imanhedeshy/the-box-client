import { useParams } from "react-router-dom";
import profilePicture from "../../assets/images/images/profile_pic (2).png";

import "./Profile.scss";
import { useEffect } from "react";

export default function Profile() {
  const { username } = useParams();
  useEffect(() => {
    document.title = `The Box | Profile: ${username}`;
  }, [username]);
  return (
    <div className="profile">
      <img className="profile__picture" src={profilePicture} alt="profile" />
      <form className="profile-form">
        <label className="profile-form__label" htmlFor="name">
          Name
          <input
            className="profile-form__input"
            name="name"
            id="name"
            value="Iman Hedeshy"
            placeholder="Full Name"
          />
        </label>
        <label className="profile-form__label" htmlFor="username">
          Username
          <input
            className="profile-form__input"
            name="username"
            id="username"
            value={username}
            placeholder="Username"
            disabled={true}
          />
        </label>
        <label className="profile-form__label" htmlFor="email">
          Email
          <input
            className="profile-form__input"
            name="email"
            id="email"
            value="iman.hedeshy@gmail.com"
            placeholder="Email"
          />
        </label>
        <label className="profile-form__label" htmlFor="userType">
          User Type
          <input
            className="profile-form__input"
            name="userType"
            id="userType"
            value="Odin"
            placeholder="User Type"
            disabled={true}
          />
        </label>
        <label className="profile-form__label" htmlFor="bio">
          Bio
          <textarea
            className="profile-form__input profile-form__input--textarea"
            name="bio"
            id="bio"
            value="Husband, Software Engineer, MBA, Elecetrical Engineer, Operations Manager, Project Manager, Sport Enthusiast, Guitar Player, Foody, Sushi Lover"
            placeholder="Bio"
          />
        </label>
        <label className="profile-form__label" htmlFor="currentPassword">
          Current Password
          <input
            className="profile-form__input"
            name="currentPassword"
            id="currentPassword"
            placeholder="Current Passwords"
          />
        </label>
        <label className="profile-form__label" htmlFor="newPassword">
          New Password
          <input
            className="profile-form__input"
            name="newPassword"
            id="newPassword"
            placeholder="New Password"
          />
        </label>
        <label className="profile-form__label" htmlFor="confirmPassword">
          Confirm Password
          <input
            className="profile-form__input"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm Password"
          />
        </label>
        <button className="profile-form__button">Save</button>
      </form>
    </div>
  );
}
