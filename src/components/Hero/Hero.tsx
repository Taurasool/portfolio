import "./Hero.css";

import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaArrowRight,
} from "react-icons/fa";

import {
  SiTypescript,
  SiMongodb,
  SiExpress,
} from "react-icons/si";

import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          {/* LEFT SIDE */}
          <div className="col-lg-6">
            {/* AVAILABLE BADGE */}
            <span className="available-badge">
              ● Available for Full Time Opportunities
            </span>

            {/* NAME */}
            <h1 className="hero-title mt-4">
              Hi, I'm
              <span> Tauseef Rasool</span>
            </h1>

            {/* ROLE */}
            <h2 className="hero-subtitle">
              Full Stack Developer
            </h2>

            {/* DESCRIPTION */}
            <p className="hero-description">
              Full Stack Developer with experience building responsive web
              applications using React.js, TypeScript, JavaScript, Node.js,
              Express.js, MongoDB, and REST APIs. Skilled in developing
              reusable React components, CRUD operations, authentication,
              authorization, API integration, and responsive user interfaces.
            </p>

            {/* BUTTONS */}
            <div className="hero-buttons">
              <Link
                to="/contact"
                className="btn btn-info hire-btn"
              >
                Hire Me
                <FaArrowRight className="ms-2" />
              </Link>

              <Link
                to="/projects"
                className="btn btn-outline-info project-btn"
              >
                View Projects
              </Link>
            </div>

            {/* TECH STACK */}
            <div className="tech-stack">
              <div className="tech-item">
                <FaReact />
                React
              </div>

              <div className="tech-item">
                <SiTypescript />
                TypeScript
              </div>

              <div className="tech-item">
                <FaNodeJs />
                Node.js
              </div>

              <div className="tech-item">
                <SiExpress />
                Express
              </div>

              <div className="tech-item">
                <SiMongodb />
                MongoDB
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-6">
            <div className="code-card">
              {/* EDITOR HEADER */}
              <div className="editor-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
                <p className="file-name">
                  portfolio.tsx
                </p>
              </div>

              {/* EDITOR BODY */}
              <div className="editor-body">
                <p>
                  <span className="blue">const</span> developer = {"{"}
                </p>

                <p>
                  &nbsp;&nbsp;name:
                  <span className="green">
                    "Tauseef Rasool"
                  </span>,
                </p>

                <p>
                  &nbsp;&nbsp;role:
                  <span className="green">
                    "Full Stack Developer"
                  </span>,
                </p>

                <p>
                  &nbsp;&nbsp;frontend:
                  [
                  <span className="orange">
                    React, TypeScript, JavaScript, Bootstrap
                  </span>
                  ],
                </p>

                <p>
                  &nbsp;&nbsp;backend:
                  [
                  <span className="orange">
                    Node, Express, REST APIs
                  </span>
                  ],
                </p>

                <p>
                  &nbsp;&nbsp;database:
                  <span className="green">
                    "MongoDB"
                  </span>,
                </p>

                <p>
                  &nbsp;&nbsp;authentication:
                  [
                  <span className="orange">
                    JWT, Authorization
                  </span>
                  ],
                </p>

                <p>
                  &nbsp;&nbsp;tools:
                  [
                  <span className="orange">
                    Git, GitHub, VS Code, Postman
                  </span>
                  ]
                </p>

                <p>
                  {"}"}
                </p>
              </div>

              {/* GITHUB */}
              <div className="github-box">
                <FaGithub />
                github.com/Taurasool
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;