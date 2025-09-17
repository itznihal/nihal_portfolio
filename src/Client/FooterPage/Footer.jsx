import React from "react";
import "./footerfile.scss";
import { footerPageData } from "../Data/FooterPageData";

// icons
import { CgMail } from "react-icons/cg";
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { AiFillMediumSquare } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineShareAlt } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";

const Footer = () => {
  return (
    <>
      <div id="footer" className="footer footercls">
        <div className="container-fluid nav_bg ">
          <div className="row">
            <footer id="footer" background>
              <div className="container">
                <h3>{footerPageData.copyWrite}</h3>
                {/* <p>Built with React</p> */}
                <div className="social-links">
                  {footerPageData.footerSocialArray.map((item) => (
                    <a href={item.link} className="githubicn">
                      {item.logo}
                    </a>
                  ))}
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
