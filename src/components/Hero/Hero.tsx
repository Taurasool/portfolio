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

const Hero = () => {
  return (
    <section className="hero-section">

      <div className="container">

        <div className="row align-items-center">

          {/* LEFT */}

          <div className="col-lg-6">

            <span className="available-badge">
              ● Available for Full Time Opportunities
            </span>


             <h1 className="hero-title mt-4">
              Hi, I'm
              <span> Tauseef Rasool</span>
            </h1>

            <h2 className="hero-subtitle">
              MERN Stack Developer
            </h2>

            <p className="hero-description">

              Passionate MERN Stack Developer with hands-on experience
              in React.js, TypeScript, JavaScript, Node.js,
              Express.js and MongoDB.

              I enjoy building responsive,
              scalable and modern web applications with
              clean UI and reusable components.

            </p>

            <div className="hero-buttons">

              <button className="btn btn-info hire-btn">

                Hire Me

                <FaArrowRight className="ms-2"/>

              </button>

              <button className="btn btn-outline-info project-btn">

                View Projects

              </button>

            </div>

            <div className="tech-stack">

              <div className="tech-item">

                <FaReact/>

                React

              </div>

              <div className="tech-item">

                <SiTypescript/>

                TypeScript

              </div>

              <div className="tech-item">

                <FaNodeJs/>

                Node.js

              </div>

              <div className="tech-item">

                <SiExpress/>

                Express

              </div>

              <div className="tech-item">

                <SiMongodb/>

                MongoDB

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="col-lg-6">

            <div className="code-card">

              <div className="editor-header">

                <span className="dot red"></span>

                <span className="dot yellow"></span>

                <span className="dot green"></span>

                <p className="file-name">
                  portfolio.tsx
                </p>

              </div>

              <div className="editor-body">

                <p>

                  <span className="blue">
                    const
                  </span>

                  developer = {"{"}

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
                    "MERN Stack Developer"
                  </span>,

                </p>

                <p>

                  &nbsp;&nbsp;frontend:
                  [

                  <span className="orange">
                    React,
                    TypeScript,
                    Bootstrap
                  </span>

                  ],

                </p>

                <p>

                  &nbsp;&nbsp;backend:
                  [

                  <span className="orange">
                    Node,
                    Express
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

                  &nbsp;&nbsp;tools:
                  [

                  <span className="orange">
                    Git,
                    GitHub,
                    VS Code,
                    Postman
                  </span>

                  ]

                </p>

                <p>{"}"}</p>

              </div>

              <div className="github-box">

                <FaGithub/>

                github.com/Tauseef-Rasool

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;