import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Send,
  ArrowUpRight,
} from "lucide-react";

import{
    FaGithub,
    FaLinkedin,
}from "react-icons/fa";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "navodhviduranga2002@gmail.com",
    href: "mailto:navodhviduranga2002@gmail.com",
    color: "blue",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Colombo, Sri Lanka",
    color: "purple",
  },
];

const socialLinks = [
  {
    icon: FaLinkedin,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/viduranga-hewamanage/",
    color: "blue",
  },
  {
    icon: FaGithub,
    name: "GitHub",
    href: "https://github.com/nvhewamanage",
    color: "purple",
  },
];

function Contact() {
  return (
    <section
      id="contact"
      className="section contact-section"
    >
      <div className="container">

        {/* =====================================
            SECTION HEADER
        ===================================== */}

        <motion.div
          className="section-heading-wrapper contact-heading"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <span className="section-label">
            GET IN TOUCH
          </span>

          <h2 className="section-title">
            Let's Work Together
          </h2>

          <p className="section-subtitle">
            Have a project, opportunity or idea in mind?
            I'd love to hear about it and see how I can
            help.
          </p>
        </motion.div>

        {/* =====================================
            CONTACT GRID
        ===================================== */}

        <div className="contact-grid">

          {/* ===================================
              LEFT SIDE
          =================================== */}

          <motion.div
            className="contact-info"
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
          >

            <div className="contact-intro">

              <span className="contact-small-label">
                HAVE A PROJECT IN MIND?
              </span>

              <h3>
                Let's build something
                <span> meaningful.</span>
              </h3>

              <p>
                I'm always interested in discussing
                new projects, development opportunities
                and innovative ideas.
              </p>

            </div>

            {/* Contact information */}

            <div className="contact-details">

              {contactInfo.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`contact-detail contact-detail-${item.color}`}
                  >
                    <div className="contact-detail-icon">
                      <Icon size={19} />
                    </div>

                    <div>
                      <span>
                        {item.label}
                      </span>

                      <strong>
                        {item.value}
                      </strong>
                    </div>

                    <ArrowUpRight
                      className="contact-detail-arrow"
                      size={16}
                    />
                  </a>
                );
              })}

            </div>

            {/* Social links */}

            <div className="contact-social-wrapper">

              <span className="contact-social-label">
                FIND ME ONLINE
              </span>

              <div className="contact-socials">

                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`contact-social contact-social-${social.color}`}
                      aria-label={social.name}
                    >
                      <Icon size={18} />

                      <span>
                        {social.name}
                      </span>

                      <ArrowUpRight size={13} />
                    </a>
                  );
                })}

              </div>

            </div>

          </motion.div>

          {/* ===================================
              RIGHT SIDE — FORM
          =================================== */}

          <motion.div
            className="contact-form-card"
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
          >

            <div className="contact-form-glow" />

            <form>

              {/* Name + Email */}

              <div className="form-row">

                <div className="form-group">
                  <label htmlFor="name">
                    Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>

              </div>

              {/* Subject */}

              <div className="form-group">

                <label htmlFor="subject">
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  placeholder="How can I help you?"
                  required
                />

              </div>

              {/* Message */}

              <div className="form-group">

                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  rows={6}
                  placeholder="Tell me about your project..."
                  required
                />

              </div>

              {/* Submit */}

              <button
                type="submit"
                className="contact-submit"
              >
                <span>
                  Send Message
                </span>

                <Send size={16} />
              </button>

            </form>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Contact;