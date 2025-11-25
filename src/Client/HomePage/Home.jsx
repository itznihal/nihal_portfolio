import React, { useState, useEffect, useRef } from "react";
import "./homepage.scss";
import { FaChevronDown } from "react-icons/fa";
import { homePagedata } from "../Data/HomeAndAboutPageData";

const Home = React.memo(() => {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = homePagedata.description;
  const cursorIntervalRef = useRef(null);

  useEffect(() => {
    let currentIndex = 0;
    let timeoutId;

    const typeText = () => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
        timeoutId = setTimeout(typeText, 100); // Typing speed: 100ms per character
      } else {
        // Blinking cursor effect after typing is complete
        cursorIntervalRef.current = setInterval(() => {
          setShowCursor((prev) => !prev);
        }, 530);
      }
    };

    // Start typing after a short delay
    const startDelay = setTimeout(() => {
      typeText();
    }, 500);

    return () => {
      clearTimeout(startDelay);
      clearTimeout(timeoutId);
      if (cursorIntervalRef.current) {
        clearInterval(cursorIntervalRef.current);
      }
    };
  }, [fullText]);

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
          <h2 data-aos="fade-up" data-aos-delay="100" className="typing-text">
            {displayedText}
            <span className={`typing-cursor ${showCursor ? "visible" : ""}`}>
              |
            </span>
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
