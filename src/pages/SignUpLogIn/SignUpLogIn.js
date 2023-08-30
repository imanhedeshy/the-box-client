import { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

import { logIn, signUp } from "../../utils/apiCalls";
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

export default function SignUpLogIn() {
  const [isLoading, setIsLoading] = useState(false);
  const [isFound, setIsFound] = useState(true);
  const [isLogIn, setIsLogIn] = useState(true);

  const [loginError, setLoginError] = useState(null);

  const initialFormData = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [formError, setFormError] = useState({
    username: false,
    email: false,
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
    setIsLogIn(false);
    document.title = "The Box | Register";
    navigate("/signup");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormData({
      username: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password.value,
      confirmPassword: event.target.confirmPassword.value,
    });

    const submitButton = event.nativeEvent.submitter.name;
    const formInputs = event.target;

    if (submitButton === "log-in") {
      const result = await logIn(
        formInputs.username.value,
        formInputs.password.value
      );
      if (result.success) {
        const tokenSet = await setToken(result.token);
        if (tokenSet) navigate("/expo");
      } else if (!result.success) {
        console.log(result.error);
        setLoginError(result.error);
      }
    } else {
      const result = await signUp(
        formInputs.username.value,
        formInputs.password.value,
        formInputs.email.value
      );
      console.log(result);
    }
    setFormData(initialFormData);
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
            <img className="signup-login__logo" src={logo} alt="app logo" />
            <h3 className="signup-login__title">BrainStation BOX</h3>
            <span className="signup-login__subtitle">
              <strong>B</strong>ridge <strong>O</strong>f<br />e
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
          </form>
        </>
      )}
    </div>
  );
}
