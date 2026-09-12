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

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* LEFT */}
          <div className="col-lg-5">
            <div className="footer-about">
              <h2>Tauseef Rasool</h2>
              <p>
                Full Stack Developer passionate about building
                responsive, scalable and modern web applications
                using React.js, TypeScript, Node.js and MongoDB.
              </p>
            </div>
          </div>

          {/* CENTER */}
          <div className="col-lg-3">
            <div className="footer-links">
              <h4>Quick Links</h4>

              <NavLink to="/">
                Home
              </NavLink>

              <NavLink to="/experience">
                Experience
              </NavLink>

              <NavLink to="/projects">
                Projects
              </NavLink>

              <NavLink to="/skills">
                Skills
              </NavLink>

              <NavLink to="/contact">
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
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/tauseef-rasool-497371377/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>

                <a href="mailto:rasooltauseef43@gmail.com" aria-label="Email">
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Tauseef Rasool. All Rights Reserved.
          </p>

          <button
            className="scroll-top"
            onClick={scrollTop}
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;