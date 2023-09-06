import { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

import { logIn, signUp, getStudentByUsername } from "../../utils/apiCalls";
import {
  isStrong,
  passwordsMatch,
  isValidEmail,
} from "../../utils/formValidator";

import IsLoading from "../../components/IsLoading/IsLoading";
import NotFound from "../../components/NotFound/NotFound";

import "./SignUpLogIn.scss";

import logo from "../../assets/images/logos/theboxlogo.png";
import { setToken } from "../../utils/storageFuncs";

export default function SignUpLogIn({ user, setUser }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isFound, setIsFound] = useState(true);
  const [isLogIn, setIsLogIn] = useState(true);

  const [loginError, setLoginError] = useState(null);

  const initialFormData = {
    username: "",
    email: "",
    userType: "",
    password: "",
    confirmPassword: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const [formError, setFormError] = useState({
    username: false,
    email: false,
    userType: false,
    password: false,
    confirmPassword: false,
  });

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    document.title = "The Box | Log In";
  }, []);

  useEffect(() => {
    if (!path.endsWith("/signup")) setIsLogIn(true);
  }, [path]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSwitch = () => {
    if (isLogIn) {
      setIsLogIn(false);
      document.title = "The Box | Register";
      navigate("/signup");
    } else {
      setIsLogIn(true);
      document.title = "The Box | Log In";
      navigate("/login");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { username, email, password, confirmPassword, userType } =
      event.target;

    // Validate form data
    /* if (!isLogIn) {
      if (
        !isValidEmail(email.value) ||
        !isStrong(password.value) ||
        !passwordsMatch(password.value, confirmPassword.value)
      ) {
        setLoginError("Invalid email, password, or passwords do not match.");
        return;
      }
    } else {
      if (
        !isValidEmail(email.value) ||
        !isStrong(password.value) ||
        !passwordsMatch(password.value, confirmPassword.value)
      ) {
        setLoginError("Invalid email, password, or passwords do not match.");
        return;
      }
    }*/

    const result = isLogIn
      ? await logIn(username.value, password.value)
      : await signUp(
          username.value,
          password.value,
          email.value,
          userType.value
        );
    if (result.success) {
      await setToken(result.token);
      console.log(result);

      localStorage.setItem("storageUser", JSON.stringify(result));
      setUser(result);
      navigate("/expo");
    } else {
      console.error(result.error);
      setLoginError(result.error);
    }
  };

  return (
    <div className="signup-login">
      {isLoading ? (
        <IsLoading />
      ) : !isFound ? (
        <NotFound />
      ) : (
        <>
          <article className="signup-login__description">
            <div className="signup-login__container">
              <img className="signup-login__logo" src={logo} alt="app logo" />
              <h3 className="signup-login__title">
                The <br />
                BOX!
              </h3>
            </div>
            <span className="signup-login__subtitle">
              <strong>B</strong>ridge&nbsp;<strong>O</strong>f&nbsp;e
              <strong>X</strong>perience
            </span>
            <div className="signup-login__slogan">
              <span className="signup-login__slogan-text">Our Bridge,</span>
              <span className="signup-login__slogan-text">Your Journey,</span>
              <span className="signup-login__slogan-text">
                Endless Opportunities
              </span>
            </div>
          </article>
          <form onSubmit={handleSubmit} className="signup-login-form">
            <label className="signup-login-form__label" htmlFor="username">
              <input
                className="signup-login-form__input"
                name="username"
                id="username"
                type="text"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
              />
            </label>
            <label
              className={`signup-login-form__label ${
                isLogIn ? "signup-login-form__label--hide" : ""
              }`}
              htmlFor="email"
            >
              <input
                className="signup-login-form__input"
                name="email"
                id="email"
                type="text"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
            <label
              className={`signup-login-form__label ${
                isLogIn ? "signup-login-form__label--hide" : ""
              }`}
              htmlFor="userType"
            >
              <select
                className="signup-login-form__input signup-login-form__input--dropdown"
                name="userType"
                id="userType"
                value={formData.userType}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select User Type
                </option>
                <option value="student">Student</option>
                <option value="partner">Partner</option>
                <option value="educator">Educator</option>
              </select>
            </label>

            <label className="signup-login-form__label" htmlFor="password">
              <input
                className="signup-login-form__input"
                name="password"
                id="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </label>
            <label
              className={`signup-login-form__label ${
                isLogIn ? "signup-login-form__label--hide" : ""
              }`}
              htmlFor="confirmPassword"
            >
              <input
                className="signup-login-form__input"
                name="confirmPassword"
                id="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </label>
            {loginError && <div style={{ color: "red" }}>{loginError}</div>}
            <button
              className={`signup-login-form__button ${
                !isLogIn ? "signup-login-form__button--hide" : ""
              }`}
              name="log-in"
            >
              Log In
            </button>
            <div
              className={`signup-login-form__divider ${
                !isLogIn ? "signup-login-form__divider--hide" : ""
              }`}
            >
              <div className="line-with-text">
                <div className="text">OR</div>
                <div className="line"></div>
              </div>
            </div>
            <span
              className={`signup-login-form__button signup-login-form__button--switch ${
                !isLogIn ? "signup-login-form__button--hide" : ""
              }`}
              onClick={handleSwitch}
            >
              Create New Account
            </span>
            <button
              className={`signup-login-form__button ${
                isLogIn ? "signup-login-form__button--hide" : ""
              }`}
              name="sign-up"
            >
              Sign Up
            </button>
            <span
              className={`signup-login-form__switch ${
                isLogIn ? "signup-login-form__button--hide" : ""
              }`}
            >
              Already a User? <span onClick={handleSwitch}>&nbsp;Sign In</span>
            </span>
          </form>
        </>
      )}
    </div>
  );
}
