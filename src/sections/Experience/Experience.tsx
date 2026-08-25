import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const experiences = [
  {
    type: "Academic / Project Experience",
    role: "Full Stack Developer",
    company: "Enterprise ERP System, Personal Blog Website, Hospital Management System, Expense Tracker Mobile App",
    location: "Academic Project",
    period: "2023-2026",
    description:
      "",
    technologies: [
      "",
    ],
  },
  {
    type: "Professional Experience",
    role: "system controller Intern",
    company: "Ultra Solutions International (PVT) Ltd | Full-time",
    location: "Galle, Sri Lanka",
    period: "May 2023 - Sep 2023",
    description:
      "Monitored payment transactions and ensured smooth processing. Resolved transaction issues with banks and merchants. Prepared reports and maintained accurate payment records.",
    technologies: [
      "Payment Processing",
      "Transaction Monitoring",
      "Data Management",
      "Generate Daily Reports",
    ],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="section experience-section"
    >
      <div className="container">

        {/* =====================================
            SECTION HEADER
        ===================================== */}

        <motion.div
          className="section-heading-wrapper experience-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">
            MY JOURNEY
          </span>

          <h2 className="section-title">
            Experience
          </h2>

          <p className="section-subtitle">
            My professional, academic and practical
            development experience.
          </p>
        </motion.div>

        {/* =====================================
            TIMELINE
        ===================================== */}

        <div className="experience-timeline">

          {experiences.map((experience, index) => (
            <motion.div
              key={`${experience.role}-${index}`}
              className="experience-item"
              initial={{
                opacity: 0,
                y: 40,
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
                delay: index * 0.15,
              }}
            >

              {/* Timeline Point */}

              <div className="timeline-marker">
                <div className="timeline-dot"></div>
              </div>

              {/* Experience Card */}

              <div className="experience-card">

                <div className="experience-card-header">

                  <div className="experience-type">
                    <BriefcaseBusiness size={15} />
                    {experience.type}
                  </div>

                  <span className="experience-number">
                    {String(experiences.length - index).padStart(2, "0")}
                  </span>

                </div>

                <div className="experience-main">

                  <div className="experience-title-row">

                    <div>
                      <h3>
                        {experience.role}
                      </h3>

                      <p className="experience-company">
                        {experience.company}
                      </p>
                    </div>

                    <ArrowUpRight
                      className="experience-arrow"
                      size={20}
                    />

                  </div>

                  <div className="experience-meta">

                    <span>
                      <CalendarDays size={14} />
                      {experience.period}
                    </span>

                    <span>
                      <MapPin size={14} />
                      {experience.location}
                    </span>

                  </div>

                  <p className="experience-description">
                    {experience.description}
                  </p>

                  {/* Technologies */}

                  <div className="experience-technologies">

                    {experience.technologies.map(
                      (technology) => (
                        <span
                          key={technology}
                          className="experience-tech"
                        >
                          {technology}
                        </span>
                      )
                    )}

                  </div>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

        {/* =====================================
            BOTTOM MESSAGE
        ===================================== */}

        <motion.div
          className="experience-footer"
          initial={{
            opacity: 0,
            y: 20,
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
          <span>
            Interested in working together?
          </span>

          <a href="#contact">
            Let's connect
            <ArrowUpRight size={16} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default Experience;