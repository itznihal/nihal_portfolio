import React, { useMemo } from "react";
import "./about.scss";
import { aboutPageData } from "../Data/HomeAndAboutPageData";
import aboutImage from "../Images/About/welcome-image.png";

const About = React.memo(() => {
  const rewardSection = useMemo(
    () => aboutPageData.rewardSection || [],
    []
  );

  return (
    <div className="abtcls">
      <section id="about" className="about" aria-label="About section">
        <div className="container">
          <div className="section-title">
            <span>{aboutPageData.sectionTitleSpan}</span>
            <h2>{aboutPageData.sectionTitleHeading}</h2>
            <p>{aboutPageData.sectionTitleParagraph}</p>
          </div>

          <div className="row mt-5">
            <div className="image col-lg-4 d-flex align-items-stretch justify-content-center justify-content-lg-start"></div>

            <div className="col-lg-8 d-flex flex-column align-items-stretch justify-content-center card">
              <div className="content ps-lg-4 d-flex flex-column justify-content-center">
                <div className="row titlerow">
                  <div className="section-title-second">
                    <p>{aboutPageData.aboutPageName}</p>
                    <h2>{aboutPageData.aboutPageHeading}</h2>
                  </div>
                </div>

                <div className="row abtparagraph">
                  <p>
                    {aboutPageData.aboutPagePraragraphOne.paragraphcon}
                    {aboutPageData.aboutPagePraragraphOne.paragraphData}
                  </p>
                  <p>
                    {aboutPageData.aboutPageParagraphSecond.paragraphcon}
                    {aboutPageData.aboutPageParagraphSecond.paragraphData}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row rewardcls">
            {rewardSection.map((item, index) => (
              <div
                key={`reward-${index}-${item.heading}`}
                className="col-md-6 mt-5 mb-5 d-md-flex align-items-md-stretch card"
              >
                <div className="count-box card-body">
                  {item.icon}
                  <span>
                    {" "}
                    <strong>{item.rating}</strong>
                  </span>
                  <p>
                    <strong>{item.heading}</strong> {item.description}{" "}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="about-img">
            <img
              src={aboutImage}
              className="imageClass-about"
              alt="About Nihal Parmar"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
});

About.displayName = "About";

export default About;
