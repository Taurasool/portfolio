import "./Experience.css";
import {
  FaBriefcase,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiBootstrap,
} from "react-icons/si";

import { MdLocationOn } from "react-icons/md";
import { BsCalendarEvent } from "react-icons/bs";

const Experience = () => {
  return (
    <section className="experience-section">

      <div className="container">

        <div className="experience-heading">

          <span className="experience-tag">
            EXPERIENCE
          </span>

          <h2>
            Work Experience
          </h2>

          <p>
            My professional journey developing modern
            MERN stack applications and responsive user interfaces.
          </p>

        </div>

        <div className="timeline">

          <div className="timeline-line"></div>

          <div className="timeline-dot"></div>

          <div className="experience-card">

            <div className="experience-left">

              <div className="company-icon">
                <FaBriefcase />
              </div>

            </div>

            <div className="experience-right">

              <h3>
                MERN Stack Developer Intern
              </h3>

              <h4>
                APV Technologies Pvt. Ltd.
              </h4>

              <div className="experience-meta">

                <span>

                  <BsCalendarEvent />

                  Nov 2024 - May 2025

                </span>

                <span>

                  <MdLocationOn />

                  Lucknow, India

                </span>

              </div>

              <ul>

                <li>
                  Developed responsive web applications using React.js,
                  TypeScript and Bootstrap.
                </li>

                <li>
                  Built reusable React components and integrated REST APIs.
                </li>

                <li>
                  Worked with Node.js, Express.js and MongoDB for CRUD applications.
                </li>

                <li>
                  Collaborated with team members using Git & GitHub.
                </li>

                <li>
                  Improved website responsiveness and UI performance.
                </li>

              </ul>

              <div className="tech-title">
                Technologies Used
              </div>

              <div className="tech-list">

                <div className="tech-pill">
                  <FaReact />
                  React
                </div>

                <div className="tech-pill">
                  <SiTypescript />
                  TypeScript
                </div>

                <div className="tech-pill">
                  <SiBootstrap />
                  Bootstrap
                </div>

                <div className="tech-pill">
                  <FaNodeJs />
                  Node.js
                </div>

                <div className="tech-pill">
                  <SiExpress />
                  Express
                </div>

                <div className="tech-pill">
                  <SiMongodb />
                  MongoDB
                </div>

                <div className="tech-pill">
                  <FaGitAlt />
                  Git
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Experience;