import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Cloud,
  GitBranch,
  Braces,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    description:
      "Building responsive, interactive and modern user interfaces.",
    icon: Code2,
    skills: [
      {
        name: "HTML",
        level: "Advanced",
      },
      {
        name: "CSS",
        level: "Advanced",
      },
      {
        name: "JavaScript",
        level: "Advanced",
      },
      {
        name: "React",
        level: "Intermediate",
      },
      {
        name: "TypeScript",
        level: "Intermediate",
      },
      {
        name: "Tailwind CSS",
        level: "Intermediate",
      },
    ],
  },

  {
    title: "Backend Development",
    description:
      "Developing APIs, server-side applications and authentication systems.",
    icon: Server,
    skills: [
      {
        name: "Node.js",
        level: "Intermediate",
      },
      {
        name: "Express.js",
        level: "Intermediate",
      },
      {
        name: "REST APIs",
        level: "Intermediate",
      },
      {
        name: "JWT",
        level: "Intermediate",
      },
      {
        name: "bcrypt",
        level: "Familiar",
      },
      {
        name: "Nodemailer",
        level: "Familiar",
      },
    ],
  },

  {
    title: "Database",
    description:
      "Designing and working with relational and cloud databases.",
    icon: Database,
    skills: [
      {
        name: "PostgreSQL",
        level: "Intermediate",
      },
      {
        name: "MySQL",
        level: "Intermediate",
      },
      {
        name: "Prisma",
        level: "Intermediate",
      },
      {
        name: "Firebase",
        level: "Intermediate",
      },
      {
        name: "Firestore",
        level: "Intermediate",
      },
    ],
  },

  {
    title: "DevOps & Tools",
    description:
      "Using development tools and infrastructure technologies.",
    icon: Cloud,
    skills: [
      {
        name: "Git",
        level: "Intermediate",
      },
      {
        name: "GitHub",
        level: "Intermediate",
      },
      {
        name: "Docker",
        level: "Familiar",
      },
      {
        name: "Postman",
        level: "Familiar",
      },
      {
        name: "AWS",
        level: "Learning",
      },
    ],
  },
];
const additionalSkills = [
  "TypeScript",
  "Java",
  "C",
  "React Native",
  "Firebase",
  "Nodemailer",
  "Figma",
  "VS Code",
];

function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">

        {/* =====================================
            SECTION HEADER
        ===================================== */}

        <motion.div
          className="section-heading-wrapper skills-heading"
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
            MY TOOLKIT
          </span>

          <h2 className="section-title">
            Skills &{" "}
            <span className="gradient-text">
              Technologies
            </span>
          </h2>

          <p className="section-subtitle">
            Technologies and tools I use to design,
            develop and build modern software applications.
          </p>
        </motion.div>

        {/* =====================================
            SKILL CATEGORIES
        ===================================== */}

        <div className="skills-grid">

          {skillCategories.map(
            (category, categoryIndex) => {
              const Icon = category.icon;

              return (
                <motion.div
                  key={category.title}
                  className="skill-category-card"
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
                    delay: categoryIndex * 0.1,
                  }}
                >

                  {/* Card Header */}

                  <div className="skill-category-header">

                    <div className="skill-category-icon">
                      <Icon size={22} />
                    </div>

                    <div>
                      <h3>
                        {category.title}
                      </h3>

                      <p>
                        {category.description}
                      </p>
                    </div>

                  </div>

                  {/* Skills */}

                  <div className="skill-list">

                    {category.skills.map(
                      (skill,) => (
                        <div
                            className="skill-item"
                            key={skill.name}
                            >
                            <div className="skill-info">

                                <span className="skill-name">
                                {skill.name}
                                </span>

                                <span
                                className={`skill-level skill-${skill.level.toLowerCase()}`}
                                >
                                {skill.level}
                                </span>

                            </div>
                            </div>
                      )
                    )}

                  </div>

                </motion.div>
              );
            }
          )}

        </div>

        {/* =====================================
            ADDITIONAL TECHNOLOGIES
        ===================================== */}

        <motion.div
          className="additional-skills"
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

          <div className="additional-skills-header">

            <div className="additional-icon">
              <Braces size={20} />
            </div>

            <div>
              <span className="section-label">
                ALSO FAMILIAR WITH
              </span>

              <h3>
                Other Technologies
              </h3>
            </div>

          </div>

          <div className="additional-skills-list">

            {additionalSkills.map(
              (skill, index) => (
                <motion.span
                  key={skill}
                  className="additional-skill"
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.05,
                  }}
                >
                  {skill}
                </motion.span>
              )
            )}

          </div>

        </motion.div>

        {/* =====================================
            DEVELOPMENT STACK
        ===================================== */}

        <motion.div
          className="stack-banner"
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

          <div className="stack-banner-icon">
            <GitBranch size={22} />
          </div>

          <div className="stack-banner-content">
            <span>
              CURRENT DEVELOPMENT STACK
            </span>

            <p>
              React + Node.js + PostgreSQL
            </p>
          </div>

          <div className="stack-status">
            <span className="stack-status-dot"></span>
            Learning & Building
          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Skills;