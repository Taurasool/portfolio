import "./Footer.css";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

const Footer = () => {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNavigation = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      <div className="container">

        <div className="row">

          {/* LEFT */}

          <div className="col-lg-5">

            <div className="footer-about">

              <h2>Tauseef Rasool</h2>

              <p>
                Frontend Developer passionate about building
                responsive, scalable and modern web applications
                using React.js, TypeScript, Node.js and MongoDB.
              </p>

            </div>

          </div>

          {/* CENTER */}

          <div className="col-lg-3">

            <div className="footer-links">

              <h4>Quick Links</h4>

              <NavLink to="/" onClick={handleNavigation}>
                Home
              </NavLink>

              <NavLink to="/experience" onClick={handleNavigation}>
                Experience
              </NavLink>

              <NavLink to="/projects" onClick={handleNavigation}>
                Projects
              </NavLink>

              <NavLink to="/skills" onClick={handleNavigation}>
                Skills
              </NavLink>

              <NavLink to="/contact" onClick={handleNavigation}>
                Contact
              </NavLink>

            </div>

          </div>

          {/* RIGHT */}

          <div className="col-lg-4">

            <div className="footer-social">

              <h4>Connect</h4>

              <div className="social-icons">

                <a
                  href="https://github.com/Taurasool"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/tauseef-rasool/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>

                <a href="mailto:rasooltauseef43@gmail.com">
                  <FaEnvelope />
                </a>

              </div>

            </div>

          </div>

        </div>

        <hr />

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Tauseef Rasool.
            All Rights Reserved.
          </p>

          <button
            className="scroll-top"
            onClick={scrollTop}
          >
            <FaArrowUp />
          </button>

        </div>

      </div>

    </footer>
  );
};

export default Footer;