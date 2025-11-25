import React, { useMemo } from "react";
import "./footerfile.scss";
import { footerPageData } from "../Data/FooterPageData";

const Footer = React.memo(() => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);
  const copyrightText = useMemo(
    () => footerPageData.copyWrite.replace("2022", currentYear.toString()),
    [currentYear]
  );
  const socialLinks = useMemo(() => footerPageData.footerSocialArray || [], []);

  return (
    <footer id="footer" className="footer footercls" role="contentinfo">
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="container">
            <h3>{copyrightText}</h3>
            <div className="social-links" role="list">
              {socialLinks.map((item, index) => (
                <a
                  key={`footer-social-${index}`}
                  href={item.link}
                  className="githubicn"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${item.link}`}
                >
                  {item.logo}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
