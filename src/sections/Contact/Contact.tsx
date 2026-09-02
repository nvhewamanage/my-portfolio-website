import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  ArrowUpRight,
  MessageCircle,
  CheckCircle2,
  Handshake,
  Lightbulb,
  Share2,
} from "lucide-react";

import{
    FaGithub,
    FaLinkedin,
    FaWhatsapp,
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
    href: "#",
    color: "purple",
  },
];

const socialLinks = [
  {
    icon: FaGithub,
    name: "GitHub",
    value: "Navodh Viduranga Hewamanage",
    href: "https://github.com/nvhewamanage",
    color: "github",
  },
  {
    icon: FaLinkedin,
    name: "LinkedIn",
    value: "Viduranga Hewamanage",
    href: "https://www.linkedin.com/in/viduranga-hewamanage/",
    color: "linkedin",
  },
  {
    icon: FaWhatsapp,
    name: "WhatsApp",
    value: "Navodh Viduranga",
    href: "https://wa.me/+94770640990",
    color: "whatsapp",
  },
];

const projectPoints = [
  {
    icon: CheckCircle2,
    title: "Quick response",
    description: "I usually reply within 24 hours",
    color: "blue",
  },
  {
    icon: Handshake,
    title: "Open to opportunities",
    description: "Freelance, full-time or collaborations",
    color: "purple",
  },
  {
    icon: Lightbulb,
    title: "Let's build something great",
    description: "Together we can create impact",
    color: "blue",
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
          className="contact-grid"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.7,
          }}
        >

          {/* ===================================
              LEFT SIDE
          =================================== */}

          <motion.div
            className="contact-left"
            initial={{
              opacity: 0,
              x: -35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
          >

            <span className="section-label contact-label">
              GET IN TOUCH
            </span>

            <h2 className="contact-title">
              Let's <span>Connect</span>
            </h2>

            <div className="contact-title-line" />

            <p className="contact-description">
              I'm currently open to new opportunities,
              collaborations or interesting projects.
              Feel free to reach out!
            </p>

            {/* ==============================
                CONTACT INFORMATION
            ============================== */}

            <div className="contact-block">

              <div className="contact-block-heading">
                <Mail size={18} />
                <span>
                  CONTACT INFORMATION
                </span>
              </div>

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
                        <Icon size={20} />
                      </div>

                      <div className="contact-detail-content">

                        <span>
                          {item.label}
                        </span>

                        <strong>
                          {item.value}
                        </strong>

                      </div>

                      <ArrowUpRight
                        size={19}
                        className="contact-detail-arrow"
                      />

                    </a>
                  );
                })}

              </div>

            </div>

            {/* ==============================
                SOCIAL LINKS
            ============================== */}

            <div className="contact-block social-block">

              <div className="contact-block-heading">
                <Share2 size={18} />
                <span>
                  LET'S CONNECT
                </span>
              </div>

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
                    >

                      <div className="contact-social-icon">
                        <Icon size={19} />
                      </div>

                      <div className="contact-social-content">

                        <strong>
                          {social.name}
                        </strong>

                        <span>
                          {social.value}
                        </span>

                      </div>

                      <ArrowUpRight
                        size={17}
                        className="contact-social-arrow"
                      />

                    </a>
                  );
                })}

              </div>

            </div>

          </motion.div>

          {/* ===================================
              RIGHT SIDE — PROJECT CARD
          =================================== */}

          <motion.div
            className="project-contact-card"
            initial={{
              opacity: 0,
              x: 35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
          >

            {/* Glow */}

            <div className="project-card-glow" />

            {/* Icon */}

            <div className="project-card-icon">
              <MessageCircle size={28} />
            </div>

            {/* Heading */}

            <h3>
              Have a <span>project</span>
              <br />
              in mind?
            </h3>

            <div className="project-title-line" />

            <p className="project-card-description">
              I'm always excited to hear about new
              ideas and how we can work together to
              bring them to life.
            </p>

            {/* Points */}

            <div className="project-points">

              {projectPoints.map((point) => {
                const Icon = point.icon;

                return (
                  <div
                    key={point.title}
                    className="project-point"
                  >

                    <div
                      className={`project-point-icon project-point-${point.color}`}
                    >
                      <Icon size={19} />
                    </div>

                    <div className="project-point-content">

                      <strong>
                        {point.title}
                      </strong>

                      <span>
                        {point.description}
                      </span>

                    </div>

                  </div>
                );
              })}

            </div>

          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}

export default Contact;