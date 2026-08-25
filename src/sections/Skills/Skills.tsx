import { motion } from "framer-motion";
import {
  Palette,
  Server,
  Database,
} from "lucide-react";
import { BsDisplay } from "react-icons/bs";

const skillCategories = [
  {
    title: "Frontend & UI",
    icon: BsDisplay,
    color: "purple",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "React Native",
    ],
  },

  {
    title: "Backend & APIs",
    icon: Server,
    color: "cyan",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT",
      "bcrypt",
      "Nodemailer",
    ],
  },

  {
    title: "Database & DevOps",
    icon: Database,
    color: "blue",
    skills: [
      "PostgreSQL",
      "MySQL",
      "Firebase",
      "Firestore",
      "Prisma",
      "Git",
      "GitHub",
      "Docker",
      "CI/CD",
    ],
  },
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
            Skills & Technologies
          </h2>

          <p className="section-subtitle">
            Technologies and tools I use to design,
            develop and build modern applications.
          </p>
        </motion.div>

        {/* =====================================
            SKILL CARDS
        ===================================== */}

        <div className="skills-cards-grid">

          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.article
                key={category.title}
                className={`skill-card skill-card-${category.color}`}
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
                  delay: index * 0.12,
                }}
              >

                {/* Glow */}

                <div className="skill-card-glow" />

                {/* Header */}

                <div className="skill-card-header">

                  <div className="skill-card-icon">
                    <Icon size={28} strokeWidth={2} />
                  </div>

                  <h3>
                    {category.title}
                  </h3>

                </div>

                {/* Technology Tags */}

                <div className="skill-tags">

                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      className="skill-tag"
                      whileHover={{
                        y: -2,
                      }}
                      transition={{
                        duration: 0.15,
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}

                </div>

              </motion.article>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Skills;