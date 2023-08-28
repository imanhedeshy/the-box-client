import { NavLink } from "react-router-dom";

import "./Footer.scss";

import linkedin from "../../assets/images/logos/linkedin.png";
import twitter from "../../assets/images/logos/twitter.png";
import facebook from "../../assets/images/logos/facebook.png";
import telegram from "../../assets/images/logos/telegram.png";
import whatsapp from "../../assets/images/logos/whatsapp.png";
import youtube from "../../assets/images/logos/youtube.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-social">
        <NavLink to="https://www.linkedin.com/in/imanhedeshy/">
          <img className="footer-social__icon" src={linkedin} alt="" />
        </NavLink>
        <NavLink to="https://www.facebook.com/ihedeshy/">
          <img className="footer-social__icon" src={facebook} alt="" />
        </NavLink>

        <NavLink to="https://www.youtube.com/channel/UCgAKrlxaw2DJwESa7NLegKg">
          <img className="footer-social__icon" src={youtube} alt="" />
        </NavLink>

        <NavLink to="https://twitter.com/Hedeshy">
          <img className="footer-social__icon" src={twitter} alt="" />
        </NavLink>
      </div>
      <p className="footer__copyright">
        &copy; 2023 The BOX | By Iman. All rights reserved.
      </p>
    </div>
  );
}
