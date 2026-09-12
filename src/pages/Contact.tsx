import React from "react";
import "./Contact.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Thank you for your message!");
    e.currentTarget.reset();
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        {/* =========================
            HEADING
        ========================= */}
        <div className="contact-heading">
          <span className="contact-tag">
            CONTACT
          </span>

          <h2>
            Let's Work Together
          </h2>

          <p>
            I'm currently available for Frontend, React.js and Full Stack
            Developer opportunities. If you have a project, internship or
            full-time opportunity, feel free to contact me.
          </p>
        </div>

        {/* =========================
            CONTACT CONTENT
        ========================= */}
        <div className="row g-4">
          {/* =========================
              LEFT - CONTACT INFO
          ========================= */}
          <div className="col-lg-5">
            <div className="contact-info">
              <h3>
                Get In Touch
              </h3>

              <p>
                Have a question or want to work together?
                Feel free to reach out using the information below.
              </p>

              {/* EMAIL */}
              <div className="info-item">
                <div className="info-icon">
                  <FaEnvelope />
                </div>
                <div>
                  <h5>Email</h5>
                  <a
                    href="mailto:rasooltauseef43@gmail.com"
                    className="contact-link"
                  >
                    rasooltauseef43@gmail.com
                  </a>
                </div>
              </div>

              {/* PHONE */}
              <div className="info-item">
                <div className="info-icon">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h5>Phone</h5>
                  <a
                    href="tel:+919335110843"
                    className="contact-link"
                  >
                    +91 9335110843
                  </a>
                </div>
              </div>

              {/* LOCATION */}
              <div className="info-item">
                <div className="info-icon">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h5>Location</h5>
                  <span>
                    Lucknow, Uttar Pradesh, India
                  </span>
                </div>
              </div>

              {/* SOCIAL LINKS */}
              <div className="social-links">
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
              </div>
            </div>
          </div>

          {/* =========================
              RIGHT - CONTACT FORM
          ========================= */}
          <div className="col-lg-7">
            <div className="contact-form">
              <h3>
                Send Message
              </h3>

              <form onSubmit={handleSubmit}>
                {/* NAME + EMAIL */}
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <label htmlFor="name">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-4">
                    <label htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>

                {/* SUBJECT */}
                <div className="mb-4">
                  <label htmlFor="subject">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    required
                  />
                </div>

                {/* MESSAGE */}
                <div className="mb-4">
                  <label htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="form-control"
                    placeholder="Write your message..."
                    required
                  ></textarea>
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  className="contact-btn"
                >
                  <FaPaperPlane />
                  <span>
                    Send Message
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;