import { useEffect, useState } from "react";
import "./UpdateProfile.scss";

export default function UpdateProfile() {
  const storageUser = JSON.parse(localStorage.getItem("storageUser"));

  const [formData, setFormData] = useState({
    name: storageUser.name,
    username: storageUser.username,
    email: storageUser.email,
    userType: storageUser.userType,
    bio: storageUser.bio,
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    phoneNumber: storageUser.phoneNumber,
    headline: storageUser.headline,
    discipline: storageUser.discipline,
    cohortName: storageUser.cohortName,
    cohort: storageUser.cohort,
    cohortDate: storageUser.cohortDate,
    slack: storageUser.slack,
    website: storageUser.website,
    linkedin: storageUser.linkedin,
    github: storageUser.github,
    video1: storageUser.video1,
    video2: storageUser.video2,
    projects: storageUser.projects,
    techStacks: storageUser.techStacks,
  });

  useEffect(() => {
    document.title = `The Box | ${storageUser.name}`;
  }, [storageUser]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // TODO: Send formData to server for updating
  };

  return (
    <div className="update-profile">
      <img
        className="update-profile__picture"
        src={`/assets/images/images/${formData.name}.png`}
        alt="update-profile"
      />
      <form className="update-profile-form" onSubmit={handleFormSubmit}>
        <label className="update-profile-form__label" htmlFor="name">
          Name
          <input
            className="update-profile-form__input"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Full Name"
          />
        </label>
        <label className="update-profile-form__label" htmlFor="username">
          Username
          <input
            className="update-profile-form__input"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleInputChange}
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
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
          />
        </label>
        <label className="update-profile-form__label" htmlFor="userType">
          User Type
          <input
            className="update-profile-form__input"
            name="userType"
            id="userType"
            value={formData.userType}
            onChange={handleInputChange}
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
            value={formData.bio}
            onChange={handleInputChange}
            placeholder="Bio"
          />
        </label>
        <label className="update-profile-form__label" htmlFor="currentPassword">
          Current Password
          <input
            className="update-profile-form__input"
            name="currentPassword"
            id="currentPassword"
            value={formData.currentPassword}
            onChange={handleInputChange}
            placeholder="Current Passwords"
          />
        </label>
        <label className="update-profile-form__label" htmlFor="newPassword">
          New Password
          <input
            className="update-profile-form__input"
            name="newPassword"
            id="newPassword"
            value={formData.newPassword}
            onChange={handleInputChange}
            placeholder="New Password"
          />
        </label>
        <label className="update-profile-form__label" htmlFor="confirmPassword">
          Confirm Password
          <input
            className="update-profile-form__input"
            name="confirmPassword"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            placeholder="Confirm Password"
          />
        </label>
        <label className="update-profile-form__label" htmlFor="phoneNumber">
          Phone Number
          <input
            className="update-profile-form__input"
            name="phoneNumber"
            id="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            placeholder="Phone Number"
          />
        </label>
        <label className="update-profile-form__label" htmlFor="headline">
          Headline
          <input
            className="update-profile-form__input"
            name="headline"
            id="headline"
            value={formData.headline}
            onChange={handleInputChange}
            placeholder="Headline"
          />
        </label>
        <label className="update-profile-form__label" htmlFor="discipline">
          Discipline
          <input
            className="update-profile-form__input"
            name="discipline"
            id="discipline"
            value={formData.discipline}
            onChange={handleInputChange}
            placeholder="Discipline"
          />
        </label>
        <label className="update-profile-form__label" htmlFor="cohortName">
          Cohort Name
          <input
            className="update-profile-form__input"
            name="cohortName"
            id="cohortName"
            value={formData.cohortName}
            onChange={handleInputChange}
            placeholder="Cohort Name"
          />
        </label>
        <label className="update-profile-form__label" htmlFor="cohort">
          Cohort
          <input
            className="update-profile-form__input"
            name="cohort"
            id="cohort"
            value={formData.cohort}
            onChange={handleInputChange}
            placeholder="Cohort"
          />
        </label>
        <label className="update-profile-form__label" htmlFor="cohortDate">
          Cohort Date
          <input
            className="update-profile-form__input"
            name="cohortDate"
            id="cohortDate"
            value={formData.cohortDate}
            onChange={handleInputChange}
            placeholder="Cohort Date"
          />
        </label>
        <label className="update-profile-form__label" htmlFor="slack">
          Slack
          <input
            className="update-profile-form__input"
            name="slack"
            id="slack"
            value={formData.slack}
            onChange={handleInputChange}
            placeholder="Slack"
          />
        </label>
        <label className="update-profile-form__label" htmlFor="website">
          Website
          <input
            className="update-profile-form__input"
            name="website"
            id="website"
            value={formData.website}
            onChange={handleInputChange}
            placeholder="Website"
          />
        </label>
        <label className="update-profile-form__label" htmlFor="linkedin">
          LinkedIn
          <input
            className="update-profile-form__input"
            name="linkedin"
            id="linkedin"
            value={formData.linkedin}
            onChange={handleInputChange}
            placeholder="LinkedIn"
          />
        </label>
        <label className="update-profile-form__label" htmlFor="github">
          GitHub
          <input
            className="update-profile-form__input"
            name="github"
            id="github"
            value={formData.github}
            onChange={handleInputChange}
            placeholder="GitHub"
          />
        </label>
        <button className="update-profile-form__button">Save</button>
      </form>
    </div>
  );
}
