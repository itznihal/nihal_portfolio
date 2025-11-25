import React, { useEffect, Suspense } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

// Lazy load components for better performance
const Navbar = React.lazy(() => import("./Client/NavbarPage/Navbar"));
const Sidebar = React.lazy(() => import("./Client/SideBarPage/Sidebar"));
const Home = React.lazy(() => import("./Client/HomePage/Home"));
const About = React.lazy(() => import("./Client/AboutPage/About"));
const Projects = React.lazy(() => import("./Client/ProjectsPage/Projects"));
const Certifications = React.lazy(() =>
  import("./Client/CertificationsPage/Certifications")
);
const Articles = React.lazy(() => import("./Client/ArticlesPage/Articles"));
const Resume = React.lazy(() => import("./Client/ResumePage/Resume"));
const Contact = React.lazy(() => import("./Client/ContactPage/Contact"));
const Footer = React.lazy(() => import("./Client/FooterPage/Footer"));

// Loading fallback component
const LoadingFallback = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
    }}
  >
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

function App() {
  useEffect(() => {
    // Initialize AOS with optimized settings
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
      disable: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    });

    // Refresh AOS on route changes (if needed in future)
    AOS.refresh();
  }, []);

  return (
    <div className="App">
      <Suspense fallback={<LoadingFallback />}>
        <Navbar />
        <Sidebar />
        <Home />
        <About />
        <Projects />
        <Certifications />
        <Articles />
        <Resume />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}

export default React.memo(App);
