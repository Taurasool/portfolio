import "./Projects.css";

import EmployeeImage from "../assets/employee-dashboard.png";
import VideoLibraryImage from "../assets/video-library.png";
import TodoImage from "../assets/todo-app.png";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiBootstrap,
} from "react-icons/si";

const Projects = () => {
  return (
    <section className="projects-section">

      <div className="container">

        <div className="projects-heading">

          <span className="projects-tag">
            PROJECTS
          </span>

          <h2>
            Featured Projects
          </h2>

          <p>
            Some of my recent projects developed using the MERN Stack
            and modern frontend technologies.
          </p>

        </div>

        {/* ================= FIRST ROW ================= */}

        <div className="row g-4">

          {/* ================= Project 1 ================= */}

          <div className="col-lg-6">

            <div className="project-card">

              <div className="project-image">

                <img
                  src={EmployeeImage}
                  alt="Employee Management System"
                />

              </div>

              <div className="project-content">

                <h3>
                  Employee Management System
                </h3>

                <p>

                  Full Stack MERN Employee Management System
                  built using MongoDB, Express.js,
                  React.js and Node.js.

                  Supports CRUD Operations,
                  Search, Department Filter,
                  Pagination, REST API Integration
                  and Responsive Dashboard.

                </p>

                <div className="project-tech">

                  <span><FaReact /> React</span>

                  <span><SiTypescript /> TypeScript</span>

                  <span><FaNodeJs /> Node.js</span>

                  <span><SiExpress /> Express</span>

                  <span><SiMongodb /> MongoDB</span>

                </div>

                <div className="project-buttons">

                  <a
                    href="https://github.com/Taurasool/employee-dashboard-ui"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-btn"
                  >

                    <FaGithub />

                    GitHub

                  </a>

                  <a
                    href="https://employee-dashboard-ui-dun.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="live-btn"
                  >

                    <FaExternalLinkAlt />

                    Live Demo

                  </a>

                </div>

              </div>

            </div>

          </div>

                    {/* ================= Project 2 ================= */}

          <div className="col-lg-6">

            <div className="project-card">

              <div className="project-image">

                <img
                  src={VideoLibraryImage}
                  alt="Video Library Management System"
                />

              </div>

              <div className="project-content">

                <h3>
                  Video Library Management System
                </h3>

                <p>

                  Full Stack MERN Video Library Application
                  built using React.js, TypeScript,
                  Node.js, Express.js and MongoDB.

                  Includes Admin & User Modules,
                  Authentication, Video CRUD,
                  Search, Category Filter,
                  Comments, Likes, Share
                  and Responsive UI.

                </p>

                <div className="project-tech">

                  <span><FaReact /> React</span>

                  <span><SiTypescript /> TypeScript</span>

                  <span><FaNodeJs /> Node.js</span>

                  <span><SiExpress /> Express</span>

                  <span><SiMongodb /> MongoDB</span>

                </div>

                <div className="project-buttons">

                  <a
                    href="https://github.com/Taurasool/video-library"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-btn"
                  >

                    <FaGithub />

                    GitHub

                  </a>

                  <a
                    href="https://video-library-vus7.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="live-btn"
                  >

                    <FaExternalLinkAlt />

                    Live Demo

                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* ================= SECOND ROW ================= */}

        <div className="row justify-content-center g-4 mt-4">

          <div className="col-lg-6">


                     <div className="project-card">

              <div className="project-image">

                <img
                  src={TodoImage}
                  alt="Appointment Management System"
                />

              </div>

              <div className="project-content">

                <h3>
                  Appointment Management System
                </h3>

                <p>

                  React.js based Appointment Management
                  application with CRUD Operations,
                  Search, Date Picker, JSON Server
                  Integration and Responsive Dashboard.

                  Users can Add, Edit, Delete
                  and Search appointments
                  through an intuitive interface.

                </p>

                <div className="project-tech">

                  <span><FaReact /> React</span>

                  <span>JavaScript</span>

                  <span><SiBootstrap /> Bootstrap</span>

                  <span>JSON Server</span>

                  <span>CSS</span>

                </div>

                <div className="project-buttons">

                  <a
                    href="https://github.com/Taurasool/todo-app-react"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-btn"
                  >

                    <FaGithub />

                    GitHub

                  </a>

                  <a
                    href="https://todo-app-react-p8ls.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="live-btn"
                  >

                    <FaExternalLinkAlt />

                    Live Demo

                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Projects;