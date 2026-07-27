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
  return (
    <section className="contact-section" id="contact">
      <div className="container">

        {/* Heading */}

        <div className="contact-heading">

          <span className="contact-tag">
            CONTACT
          </span>

          <h2>
            Let's Work Together
          </h2>

          <p>
            I'm currently available for Frontend, React.js and MERN Stack
            Developer opportunities. If you have a project, internship or
            full-time opportunity, feel free to contact me.
          </p>

        </div>

        <div className="row g-4">

          {/* ===========================
                LEFT SIDE
          =========================== */}

          <div className="col-lg-5">

            <div className="contact-info">

              <h3>Get In Touch</h3>

              <p>
                Have a question or want to work together?
                Feel free to reach out using the information below.
              </p>

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

              <div className="social-links">

                <a
                  href="https://github.com/Taurasool"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/tauseef-rasool-497371377/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>

              </div>

            </div>

          </div>

          {/* ===========================
                RIGHT SIDE
          =========================== */}

          <div className="col-lg-7">

            <div className="contact-form">

              <h3>Send Message</h3>

              <form>

                <div className="row">

                  <div className="col-md-6 mb-4">

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                    />

                  </div>

                  <div className="col-md-6 mb-4">

                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                    />

                  </div>

                </div>

                <div className="mb-4">

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                  />

                </div>

                <div className="mb-4">

                  <textarea
                    rows={6}
                    className="form-control"
                    placeholder="Write your message..."
                  ></textarea>

                </div>

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