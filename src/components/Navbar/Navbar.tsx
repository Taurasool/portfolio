import "./Navbar.css";
import { FaCode, FaEnvelope } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar fixed-top">
      <div className="container-fluid px-lg-5 px-4">

        {/* Logo */}
        <NavLink className="navbar-brand logo" to="/">
          Tauseef Rasool
        </NavLink>

        {/* Mobile Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbar">

          <ul className="navbar-nav mx-auto">

            <li className="nav-item">
              <NavLink to="/" end className="nav-link">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/experience" className="nav-link">
                Experience
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/projects" className="nav-link">
                Projects
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/skills" className="nav-link">
                Skills
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </li>

          </ul>

        <div className="d-flex align-items-center gap-3">

  {/* GitHub */}
  <a
    href="https://github.com/Taurasool"
    target="_blank"
    rel="noopener noreferrer"
    className="nav-icon"
    title="GitHub"
  >
    <FaCode />
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
  href="/tauseefmern.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="resume-btn">
    Resume
  </button>
</a>

</div>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;