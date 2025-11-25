import React, { useCallback, useEffect, useState } from "react";
import "./navbar.scss";

const navItems = [
  { id: "hero", label: "Home", href: "#hero" },
  { id: "about", label: "About", href: "#about" },
  { id: "projectss", label: "Projects", href: "#projectss" },
  { id: "certification", label: "Certificates", href: "#certification" },
  { id: "articles", label: "Articles", href: "#articles" },
  { id: "resume", label: "Resume", href: "#resume" },
  { id: "contact", label: "Contact", href: "#contact" },
];

const Navbar = React.memo(() => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    const sections = navItems.map((item) => item.id);
    const scrollPosition = window.scrollY + 100;

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i]);
      if (section && section.offsetTop <= scrollPosition) {
        setActiveSection(sections[i]);
        break;
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleNavClick = useCallback((e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
    }
  }, []);

  return (
    <div className="navcls container-fluid">
      <header
        id="header"
        className="fixed-top d-flex justify-content-center align-items-center header-transparent"
        role="banner"
      >
        <nav
          className="navbar navbar-expand-lg my-auto mx-auto"
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="container-fluid">
            <button
              className="navbar-toggler mx-auto"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="navbar-toggler-icon" aria-hidden="true"></span>
            </button>
            <div
              className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0" role="menubar">
                {navItems.map((item) => (
                  <li key={item.id} className="nav-item" role="none">
                    <a
                      className={`nav-link scrollto ${
                        activeSection === item.id ? "active" : ""
                      } ${item.id === "contact" ? "resumeFont" : ""}`}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      role="menuitem"
                      aria-current={activeSection === item.id ? "page" : undefined}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;
