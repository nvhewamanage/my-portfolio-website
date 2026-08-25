import { motion } from "framer-motion";
import {
  Code2,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";

const projects = [
    {
    title: "Personal Blog & Portfolio",
    category: "Web Application",
    description:
      "A modern personal portfolio and blog platform with a responsive frontend, backend API, authentication, admin dashboard and newsletter functionality.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "Firebase",
      "Firestore",
      "JWT",
    ],
    featured: true,
    image: "images/projects/portfolio.png",
    github: "https://github.com/nvhewamanage/personal-blog-website",
    demo: "https://www.chanukanimsara.com/",
  },

  {
    title: "Enterprise ERP System",
    category: "Full Stack Application",
    description:
      "An enterprise-style resource planning system designed to manage HR, inventory, suppliers, purchasing, sales, payroll and finance through a centralized platform.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "CI/CD",
      "JWT",
      "RBAC",
      "Docker",
    ],
    featured: false,
    image: "images/projects/erp.png",
    github: "https://github.com/nvhewamanage/ERP-Enterprise-Resource-Planning-System",
  },

];

function Projects() {
  const featuredProject = projects.find(
    (project) => project.featured
  );

  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  return (
    <section
      id="projects"
      className="section projects-section"
    >
      <div className="container">

        {/* =====================================
            SECTION HEADER
        ===================================== */}

        <motion.div
          className="section-heading-wrapper projects-heading"
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
            MY WORK
          </span>

          <h2 className="section-title">
            Featured Projects
          </h2>

          <p className="section-subtitle">
            A selection of projects I have designed and
            developed using modern technologies.
          </p>
        </motion.div>

        {/* =====================================
            FEATURED PROJECT
        ===================================== */}

        {featuredProject && (
          <motion.article
            className="featured-project"
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
              duration: 0.7,
            }}
          >

            {/* Project Image */}

            <div className="featured-project-image">

              <img
                src={featuredProject.image}
                alt={featuredProject.title}
              />

              <div className="project-image-overlay" />

              <span className="featured-badge">
                FEATURED PROJECT
              </span>

            </div>

            {/* Project Content */}

            <div className="featured-project-content">

              <span className="project-category">
                {featuredProject.category}
              </span>

              <h3>
                {featuredProject.title}
              </h3>

              <p className="featured-project-description">
                {featuredProject.description}
              </p>

              {/* Technologies */}

              <div className="project-tags">

                {featuredProject.technologies.map(
                  (technology) => (
                    <span
                      key={technology}
                      className="project-tag"
                    >
                      {technology}
                    </span>
                  )
                )}

              </div>

              {/* Buttons */}

              <div className="project-actions">

                <a
                  href={featuredProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-button project-button-primary"
                >
                  <Code2 size={17} />

                  GitHub

                  <ArrowUpRight size={15} />
                </a>

                <a
                  href={featuredProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-button project-button-secondary"
                >
                  <ExternalLink size={16} />

                  Live Demo
                </a>

              </div>

            </div>

          </motion.article>
        )}

        {/* =====================================
            OTHER PROJECTS
        ===================================== */}

        <div className="projects-grid">

          {otherProjects.map((project, index) => (
            <motion.article
              key={project.title}
              className="project-card"
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
                delay: index * 0.1,
              }}
            >

              {/* Image */}

              <div className="project-card-image">

                <img
                  src={project.image}
                  alt={project.title}
                />

                <div className="project-card-overlay">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Code2 size={19} />
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} live demo`}
                  >
                    <ExternalLink size={19} />
                  </a>

                </div>

              </div>

              {/* Content */}

              <div className="project-card-content">

                <span className="project-category">
                  {project.category}
                </span>

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

                {/* Tags */}

                <div className="project-tags">

                  {project.technologies.map(
                    (technology) => (
                      <span
                        key={technology}
                        className="project-tag"
                      >
                        {technology}
                      </span>
                    )
                  )}

                </div>

                {/* Bottom Link */}

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card-link"
                >
                  View Project

                  <ArrowUpRight size={16} />
                </a>

              </div>

            </motion.article>
          ))}

        </div>

        {/* =====================================
            ALL PROJECTS BUTTON
        ===================================== */}

        <motion.div
          className="projects-footer"
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
            duration: 0.5,
          }}
        >
          <a
            href="https://github.com/nvhewamanage"
            target="_blank"
            rel="noopener noreferrer"
            className="view-all-projects"
          >
            <Code2 size={17} />

            View More Projects

            <ArrowUpRight size={16} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default Projects;