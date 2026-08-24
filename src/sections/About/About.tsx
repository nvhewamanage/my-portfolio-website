import { motion } from "framer-motion";
import {
  GraduationCap,
  Code2,
  Database,
  Layers3,
  CalendarDays,
  MapPin,
} from "lucide-react";

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">

        {/* Section Heading */}

        <motion.div
          className="section-heading-wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">
            GET TO KNOW ME
          </span>

          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>

          <p className="section-subtitle">
            A little more about my background, education
            and passion for software development.
          </p>
        </motion.div>

        {/* Main About Grid */}

        <div className="about-grid">

          {/* =====================================
              ABOUT CARD
          ===================================== */}

          <motion.div
            className="about-card glass-card"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <div className="card-icon">
              <Code2 size={24} />
            </div>

            <h3>
              Who I Am
            </h3>

            <p>
              I am a Computer Science undergraduate with
              a strong interest in web development and
              software engineering.
            </p>

            <p>
              I enjoy designing and developing modern web
              applications that combine clean interfaces,
              useful functionality and reliable backend
              systems.
            </p>

            <p>
              My goal is to continue improving my technical
              skills while building practical software
              solutions that solve real-world problems.
            </p>

          </motion.div>

          {/* =====================================
              EDUCATION CARD
          ===================================== */}

          <motion.div
            className="education-card glass-card"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
          >

            <div className="card-icon">
              <GraduationCap size={24} />
            </div>

            <span className="card-label">
              EDUCATION
            </span>

            <h3>
              BSc (Hons) in Computer Science
            </h3>

            <p className="education-institute">
              NSBM Green University
            </p>

            <div className="education-meta">

              <div className="education-meta-item">
                <CalendarDays size={17} />

                <span>
                  Undergraduate
                </span>
              </div>

              <div className="education-meta-item">
                <Code2 size={17} />

                <span>
                  Computer Science
                </span>
              </div>

              <div className="education-meta-item">
                <MapPin size={17} />

                <span>
                  Colombo, Sri Lanka
                </span>
              </div>

            </div>

            <div className="education-divider"></div>

            <p className="education-description">
              Developing a strong foundation in programming,
              software engineering, databases, web development,
              computer networks and other areas of computing.
            </p>

          </motion.div>

        </div>

        {/* =====================================
            STATS
        ===================================== */}

        <motion.div
          className="about-stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
        >

          <div className="stat-card">
            <span className="stat-number">
              2+
            </span>

            <span className="stat-label">
              Projects Built
            </span>
          </div>

          <div className="stat-card">
            <span className="stat-number">
              0+
            </span>

            <span className="stat-label">
              Ongoing Projects
            </span>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default About;