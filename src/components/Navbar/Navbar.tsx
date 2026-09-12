import { useEffect } from "react";
import "./Navbar.css";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const closeNavbar = () => {
    const navbar = document.getElementById("navbar");
    if (navbar?.classList.contains("show")) {
      const toggler = document.querySelector<HTMLButtonElement>(".navbar-toggler");
      toggler?.click();
    }
  };

  useEffect(() => {
    closeNavbar();
  }, [location.pathname]);

  return (
    <nav className="navbar navbar-expand-lg custom-navbar fixed-top">
      <div className="container-fluid px-lg-5 px-4">
        {/* Logo */}
        <NavLink className="navbar-brand logo" to="/" onClick={closeNavbar}>
          Tauseef Rasool
        </NavLink>

        {/* Mobile Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Content */}
        <div className="collapse navbar-collapse" id="navbar">
          {/* Navigation Links */}
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink to="/" end className="nav-link" onClick={closeNavbar}>
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/experience" className="nav-link" onClick={closeNavbar}>
                Experience
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/projects" className="nav-link" onClick={closeNavbar}>
                Projects
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/skills" className="nav-link" onClick={closeNavbar}>
                Skills
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/contact" className="nav-link" onClick={closeNavbar}>
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Right Side */}
          <div className="d-flex align-items-center gap-3">
            {/* GitHub */}
            <a
              href="https://github.com/Taurasool"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-icon"
              title="GitHub"
            >
              <FaGithub />
            </a>

            {/* Email */}
            <a
              href="mailto:rasooltauseef43@gmail.com"
              className="nav-icon"
              title="Email"
            >
              <FaEnvelope />
            </a>

            {/* Resume */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn"
              onClick={closeNavbar}
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;