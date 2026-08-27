import { motion } from "framer-motion";
import {
  Award,
  ExternalLink,
  CalendarDays,
  ShieldCheck,
} from "lucide-react";

const certifications = [
  {
    title: "Prompt Engineering 101",
    organization: "kodekloud",
    date: "Aug 2026",
    credentialId: "CERTIFIED",
    description:
      "Completed Learn by Doing – Prompt Engineering 101 by KodeKloud, gaining practical knowledge of prompt engineering techniques and effective AI interaction strategies.",
    skills: [
      "Prompt Writing",
    ],
    certificateUrl: "https://learn.kodekloud.com/learn/certificate/70c7bb17-5c79-4b8c-a160-d896be5002fd",
    color: "green",
  },

  /*{
    title: "Certification Name",
    organization: "Issuing Organization",
    date: "2026",
    credentialId: "CREDENTIAL-ID",
    description:
      "Briefly describe the certification and the technical areas covered.",
    skills: [
      "Technology",
      "Technology",
      "Technology",
    ],
    certificateUrl: "#",
    color: "purple",
  },*/
];

function Certifications() {
  return (
    <section
      id="certifications"
      className="section certifications-section"
    >
      <div className="container">

        {/* =====================================
            SECTION HEADER
        ===================================== */}

        <motion.div
          className="section-heading-wrapper certifications-heading"
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
            MY CREDENTIALS
          </span>

          <h2 className="section-title">
            Certifications
          </h2>

          <p className="section-subtitle">
            Professional certifications and courses that
            support my technical development.
          </p>
        </motion.div>

        {/* =====================================
            CERTIFICATION GRID
        ===================================== */}

        <div className="certifications-grid">

          {certifications.map(
            (certificate, index) => (
              <motion.article
                key={`${certificate.title}-${index}`}
                className={`certificate-card certificate-${certificate.color}`}
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

                <div className="certificate-glow" />

                {/* =================================
                    CARD TOP
                ================================= */}

                <div className="certificate-top">

                  <div className="certificate-icon">
                    <Award
                      size={26}
                      strokeWidth={2}
                    />
                  </div>

                </div>

                {/* =================================
                    CERTIFICATE CONTENT
                ================================= */}

                <div className="certificate-content">

                  <span className="certificate-organization">
                    {certificate.organization}
                  </span>

                  <h3>
                    {certificate.title}
                  </h3>

                  <div className="certificate-date">
                    <CalendarDays size={14} />

                    <span>
                      Issued {certificate.date}
                    </span>
                  </div>

                  <p className="certificate-description">
                    {certificate.description}
                  </p>

                  {/* =================================
                      SKILLS
                  ================================= */}

                  <div className="certificate-skills">

                    {certificate.skills.map(
                      (skill) => (
                        <span
                          key={skill}
                          className="certificate-skill"
                        >
                          {skill}
                        </span>
                      )
                    )}

                  </div>

                </div>

                {/* =================================
                    FOOTER
                ================================= */}

                <div className="certificate-footer">

                    <div
                        className={`credential ${
                            certificate.credentialId === "CERTIFIED"
                            ? "credential-certified"
                            : ""
                        }`}
                        >
                        <ShieldCheck size={14} />

                        <span>
                            {certificate.credentialId}
                        </span>
                    </div>

                  <a
                    href={certificate.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certificate-link"
                  >
                    View Certificate

                    <ExternalLink size={14} />
                  </a>

                </div>

              </motion.article>
            )
          )}

        </div>

        {/* =====================================
            BOTTOM NOTE
        ===================================== */}

        <motion.div
          className="certifications-note"
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
          <Award size={18} />

          <p>
            Continuously learning and expanding my
            technical knowledge through professional
            courses and certifications.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default Certifications;