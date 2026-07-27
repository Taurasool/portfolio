import "./Skills.css";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaCode,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiVercel,
} from "react-icons/si";

const Skills = () => {
  return (
    <section className="skills-section">

      <div className="container">

        {/* Heading */}

        <div className="skills-heading">

          <span className="skills-tag">
            SKILLS
          </span>

          <h2>
            Technical Skills
          </h2>

          <p>
            Technologies and tools I use for building modern,
            scalable and responsive web applications.
          </p>

        </div>

        <div className="row g-4">

          {/* ==========================
              FRONTEND
          ========================== */}

          <div className="col-lg-4">

            <div className="skill-card">

              <h3>Frontend</h3>

              <div className="skill-list">

                <div className="skill-item">
                  <FaReact />
                  <span>React.js</span>
                </div>

                <div className="skill-item">
                  <SiTypescript />
                  <span>TypeScript</span>
                </div>

                <div className="skill-item">
                  <SiJavascript />
                  <span>JavaScript</span>
                </div>

                <div className="skill-item">
                  <FaHtml5 />
                  <span>HTML5</span>
                </div>

                <div className="skill-item">
                  <FaCss3Alt />
                  <span>CSS3</span>
                </div>

                <div className="skill-item">
                  <FaBootstrap />
                  <span>Bootstrap</span>
                </div>

              </div>

            </div>

          </div>

          {/* ==========================
              BACKEND
          ========================== */}

          <div className="col-lg-4">

            <div className="skill-card">

              <h3>Backend</h3>

              <div className="skill-list">

                <div className="skill-item">
                  <FaNodeJs />
                  <span>Node.js</span>
                </div>

                <div className="skill-item">
                  <SiExpress />
                  <span>Express.js</span>
                </div>

                <div className="skill-item">
                  <SiMongodb />
                  <span>MongoDB</span>
                </div>

                <div className="skill-item">
                  <FaCode />
                  <span>REST APIs</span>
                </div>

                <div className="skill-item">
                  <FaCode />
                  <span>CRUD Operations</span>
                </div>

                <div className="skill-item">
                  <FaCode />
                  <span>Authentication</span>
                </div>

              </div>

            </div>

          </div>

          {/* ==========================
              TOOLS
          ========================== */}

          <div className="col-lg-4">

            <div className="skill-card">

              <h3>Tools</h3>

              <div className="skill-list">

                <div className="skill-item">
                  <FaGitAlt />
                  <span>Git</span>
                </div>

                <div className="skill-item">
                  <FaGithub />
                  <span>GitHub</span>
                </div>

                <div className="skill-item">
                  <SiPostman />
                  <span>Postman</span>
                </div>

                <div className="skill-item">
                  <FaCode />
                  <span>VS Code</span>
                </div>

                <div className="skill-item">
                  <SiVercel />
                  <span>Vercel</span>
                </div>

                <div className="skill-item">
                  <FaCode />
                  <span>npm</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Skills;