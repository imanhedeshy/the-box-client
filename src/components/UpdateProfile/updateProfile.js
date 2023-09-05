// import { useParams } from "react-router-dom";
// import profilePicture from "../../assets/images/images/profile_pic (2).png";

// import "./UpdateProfile.scss";
// import { useEffect } from "react";

// export default function UpdateProfile() {
//   const storageUser = JSON.parse(localStorage.getItem("storageUser"));
//   const { username } = useParams();
//   document.title = `The Box | ${storageUser.name}`;

//   return (
//     <div className="update-profile">
//       <img
//         className="update-profile__picture"
//         src={profilePicture}
//         alt="update-profile"
//       />
//       <form className="update-profile-form">
//         <label className="update-profile-form__label" htmlFor="name">
//           Name
//           <input
//             className="update-profile-form__input"
//             name="name"
//             id="name"
//             value="Iman Hedeshy"
//             placeholder="Full Name"
//           />
//         </label>
//         <label className="update-profile-form__label" htmlFor="username">
//           Username
//           <input
//             className="update-profile-form__input"
//             name="username"
//             id="username"
//             value={username}
//             placeholder="Username"
//             disabled={true}
//           />
//         </label>
//         <label className="update-profile-form__label" htmlFor="email">
//           Email
//           <input
//             className="update-profile-form__input"
//             name="email"
//             id="email"
//             value="iman.hedeshy@gmail.com"
//             placeholder="Email"
//           />
//         </label>
//         <label className="update-profile-form__label" htmlFor="userType">
//           User Type
//           <input
//             className="update-profile-form__input"
//             name="userType"
//             id="userType"
//             value="Odin"
//             placeholder="User Type"
//             disabled={true}
//           />
//         </label>
//         <label className="update-profile-form__label" htmlFor="bio">
//           Bio
//           <textarea
//             className="update-profile-form__input profile-form__input--textarea"
//             name="bio"
//             id="bio"
//             value="Husband, Software Engineer, MBA, Elecetrical Engineer, Operations Manager, Project Manager, Sport Enthusiast, Guitar Player, Foody, Sushi Lover"
//             placeholder="Bio"
//           />
//         </label>
//         <label className="update-profile-form__label" htmlFor="currentPassword">
//           Current Password
//           <input
//             className="update-profile-form__input"
//             name="currentPassword"
//             id="currentPassword"
//             placeholder="Current Passwords"
//           />
//         </label>
//         <label className="update-profile-form__label" htmlFor="newPassword">
//           New Password
//           <input
//             className="update-profile-form__input"
//             name="newPassword"
//             id="newPassword"
//             placeholder="New Password"
//           />
//         </label>
//         <label className="update-profile-form__label" htmlFor="confirmPassword">
//           Confirm Password
//           <input
//             className="update-profile-form__input"
//             name="confirmPassword"
//             id="confirmPassword"
//             placeholder="Confirm Password"
//           />
//         </label>
//         <button className="update-profile-form__button">Save</button>
//       </form>
//     </div>
//   );
// }
import { useParams } from "react-router-dom";
import profilePicture from "../../assets/images/images/profile_pic (2).png";
import { useEffect, useState } from "react";
import "./UpdateProfile.scss";

export default function UpdateProfile() {
  const storageUser = JSON.parse(localStorage.getItem("storageUser"));
  const { username } = useParams();

  const [formData, setFormData] = useState({
    name: storageUser.name,
    username: storageUser.username,
    email: storageUser.email,
    userType: storageUser.userType,
    bio: storageUser.bio,
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
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
        src={profilePicture}
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
        <button className="update-profile-form__button">Save</button>
      </form>
    </div>
  );
}
