import { motion } from "framer-motion";
import {
  ArrowDownToLine,
  ArrowRight,
  Mail,
} from "lucide-react";

import{
    FaGithub,
    FaLinkedin,
}from "react-icons/fa";

function Home() {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">

        {/* =====================================
            LEFT CONTENT
        ===================================== */}

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Availability Badge */}

          <motion.div
            className="availability-badge"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="availability-dot"></span>
            Available for opportunities
          </motion.div>

          {/* Greeting */}

          <p className="hero-greeting">
            Hello, I'm
          </p>

          {/* Name */}

          <h1 className="hero-title">
            Viduranga
            <br />

            <span className="gradient-text">
              Hewamanage
            </span>
          </h1>

          {/* Developer Title */}

          <h2 className="hero-role">
            Full Stack Developer
            <span className="hero-role-dot">.</span>
          </h2>

          {/* Description */}

          <p className="hero-description">
            I build modern, responsive and scalable web
            applications using clean code, thoughtful design
            and modern technologies.
          </p>

          {/* Buttons */}

          <div className="hero-buttons">

            <a
              href="/documents/Viduranga-Hewamanage-cv.pdf"
              download
              className="primary-button"
            >
              <ArrowDownToLine size={18} />
              Download CV
            </a>

            <a
              href="#contact"
              className="secondary-button"
            >
              Contact Me
              <ArrowRight size={18} />
            </a>

          </div>

          {/* Social Links */}

          <div className="hero-socials">

            <span className="social-label">
              Find me on
            </span>

            <div className="social-links">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="social-link"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="social-link"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="mailto:your-email@gmail.com"
                aria-label="Email"
                className="social-link"
              >
                <Mail size={20} />
              </a>

            </div>
          </div>

        </motion.div>

        {/* =====================================
            RIGHT PROFILE
        ===================================== */}

        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.9,
            delay: 0.2,
          }}
        >

          {/* Background Glow */}

          <div className="hero-glow"></div>

          {/* Decorative Circle */}

          <div className="hero-circle"></div>

          {/* Profile Image */}

          <div className="profile-image-container">

            <img
              src="/images/profile.png"
              alt="Viduranga Hewamanage"
              className="profile-image"
            />

          </div>

          {/* Floating Developer Badge */}

          <motion.div
            className="floating-code-badge"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {"< />"}
          </motion.div>

        </motion.div>

      </div>

      {/* Scroll Indicator */}

      <motion.a
        href="#about"
        className="scroll-indicator"
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <span>Scroll to explore</span>

        <ArrowRight
          size={16}
          className="scroll-arrow"
        />
      </motion.a>

    </section>
  );
}

export default Home;