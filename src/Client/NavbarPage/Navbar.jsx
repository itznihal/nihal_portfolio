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
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    
    // Update scrolled state for blur effect
    setIsScrolled(scrollY > 50);

    const sections = navItems.map((item) => item.id);
    const scrollPosition = scrollY + 150; // Offset for better detection

    // Special handling for hero section (at top)
    if (scrollY < 100) {
      setActiveSection("hero");
      return;
    }

    // Check sections from bottom to top
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i]);
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionBottom = sectionTop + sectionHeight;

        // Check if scroll position is within this section
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(sections[i]);
          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    // Use requestAnimationFrame for smoother performance
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll(); // Initial call to set active section

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
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
        className={`fixed-top d-flex justify-content-center align-items-center header-transparent ${
          isScrolled ? "header-scrolled" : ""
        }`}
        role="banner"
      >
        <nav
          className="navbar navbar-expand-lg my-auto mx-auto"
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="container-fluid">
            <button
              className={`navbar-toggler mx-auto ${isMenuOpen ? "active" : ""}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="hamburger-box" aria-hidden="true">
                <span className="hamburger-inner"></span>
              </span>
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
