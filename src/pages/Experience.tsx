import "./Experience.css";

import {
  FaBriefcase,
  FaGraduationCap,
} from "react-icons/fa";

import { MdLocationOn } from "react-icons/md";
import { BsCalendarEvent } from "react-icons/bs";

const experiences = [
  {
    role: "Software Developer",
    company: "Idealleads.io",
    dates: "Nov 2025 - Present",
    responsibilities: [
      "Develop responsive web applications using React.js, TypeScript, and JavaScript with reusable, component-based architecture.",
      "Build dynamic forms with client-side validation, routing, conditional rendering, and interactive user workflows.",
      "Integrate RESTful APIs using Axios and Fetch API for asynchronous data fetching, dynamic rendering, loading states, and error handling.",
      "Develop responsive dashboards and interactive UI features focused on usability, cross-device compatibility, and frontend performance.",
      "Use Git, GitHub, Postman, and Chrome DevTools for version control, API testing, debugging, and frontend optimization.",
    ],
    technologies: [
      "React.js",
      "TypeScript",
      "JavaScript",
      "RESTful APIs",
      "Axios",
      "Fetch API",
      "Git",
      "GitHub",
      "Postman",
    ],
  },
  {
    role: "Web Developer Intern",
    company: "APV Technologies Pvt. Ltd.",
    dates: "Nov 2024 - Feb 2025",
    location: "Lucknow, India",
    responsibilities: [
      "Developed responsive web interfaces using React.js, JavaScript, HTML5, CSS3, and Bootstrap.",
      "Built multi-step registration workflows using reusable React components with form validation and dynamic data handling.",
      "Implemented client-side routing using React Router and organized features with a modular component architecture.",
    ],
    technologies: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "React Router",
    ],
  },
];

const Experience = () => {
  return (
    <section className="experience-section">
      <div className="container">
        <div className="experience-heading">
          <span className="experience-tag">
            EXPERIENCE &amp; EDUCATION
          </span>

          <h2>
            Experience &amp; Education
          </h2>

          <p>
            My professional experience building responsive web applications,
            along with my computer science education.
          </p>
        </div>

        <div className="timeline">
          <div className="timeline-line"></div>

          {experiences.map((experience) => (
            <div className="experience-card" key={experience.company}>
              <div className="experience-left">
                <div className="company-icon">
                  <FaBriefcase />
                </div>
              </div>

              <div className="experience-right">
                <h3>{experience.role}</h3>
                <h4>{experience.company}</h4>

                <div className="experience-meta">
                  <span>
                    <BsCalendarEvent />
                    {experience.dates}
                  </span>

                  {experience.location && (
                    <span>
                      <MdLocationOn />
                      {experience.location}
                    </span>
                  )}
                </div>

                <ul>
                  {experience.responsibilities.map((responsibility) => (
                    <li key={responsibility}>{responsibility}</li>
                  ))}
                </ul>

                <div className="tech-title">
                  Technologies &amp; Skills
                </div>

                <div className="tech-list">
                  {experience.technologies.map((technology) => (
                    <span className="tech-pill" key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="experience-card education-card">
          <div className="experience-left">
            <div className="company-icon">
              <FaGraduationCap />
            </div>
          </div>

          <div className="experience-right">
            <h3>Bachelor of Technology</h3>
            <h4>Computer Science | Integral University</h4>

            <div className="experience-meta">
              <span>
                <BsCalendarEvent />
                2024
              </span>

              <span>
                <FaGraduationCap />
                CGPA: 7.1 / 10
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
