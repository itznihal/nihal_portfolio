import React from "react";
import "./homepage.scss";
import { FaChevronDown } from "react-icons/fa";
import { homePagedata } from "../Data/HomeAndAboutPageData";

const Home = React.memo(() => {
  const handleScrollClick = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="homepge">
      <section id="hero" aria-label="Hero section">
        <div className="hero-container">
          <h1>
            <span>{homePagedata.name}</span>
          </h1>
          <h2 data-aos="fade-up" data-aos-delay="100">
            {homePagedata.description}
          </h2>
          <a
            href="#about"
            className="btn-scroll scrollto"
            title="Scroll Down"
            aria-label="Scroll to about section"
            onClick={handleScrollClick}
          >
            <FaChevronDown className="homeicncls" aria-hidden="true" />
          </a>
        </div>
      </section>
    </div>
  );
});

Home.displayName = "Home";

export default Home;
