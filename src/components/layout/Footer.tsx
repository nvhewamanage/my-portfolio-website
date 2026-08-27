import {
  Mail,
  ArrowUp,
  Heart,
} from "lucide-react";

import{
    FaGithub,
    FaLinkedin,
}from "react-icons/fa";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/",
    icon: FaLinkedin,
  },
  {
    name: "Email",
    href: "mailto:your.email@gmail.com",
    icon: Mail,
  },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      <div className="container">

        {/* =================================
            FOOTER TOP
        ================================= */}

        <div className="footer-top">

          {/* Brand */}

          <div className="footer-brand">

            <a
              href="#home"
              className="footer-logo"
            >
              VH<span>.</span>
            </a>

            <p>
              Software & Web Developer building
              modern, scalable and user-focused
              digital experiences.
            </p>

          </div>

          {/* Navigation */}

          <div className="footer-navigation">

            <span className="footer-heading">
              NAVIGATION
            </span>

            <div className="footer-links">

              <a href="#home">
                Home
              </a>

              <a href="#about">
                About
              </a>

              <a href="#experience">
                Experience
              </a>

              <a href="#skills">
                Skills
              </a>

              <a href="#projects">
                Projects
              </a>

              <a href="#certifications">
                Certifications
              </a>

              <a href="#contact">
                Contact
              </a>

            </div>

          </div>

          {/* Social */}

          <div className="footer-social-wrapper">

            <span className="footer-heading">
              CONNECT
            </span>

            <div className="footer-socials">

              {socialLinks.map((social) => {

                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target={
                      social.name === "Email"
                        ? undefined
                        : "_blank"
                    }
                    rel={
                      social.name === "Email"
                        ? undefined
                        : "noopener noreferrer"
                    }
                    aria-label={social.name}
                    className="footer-social"
                  >
                    <Icon size={16} />

                    <span>
                      {social.name}
                    </span>
                  </a>
                );

              })}

            </div>

          </div>

        </div>

        {/* =================================
            DIVIDER
        ================================= */}

        <div className="footer-divider" />

        {/* =================================
            FOOTER BOTTOM
        ================================= */}

        <div className="footer-bottom">

          <p>
            © {currentYear} Your Name.
            All rights reserved.
          </p>

          <p className="footer-made-with">
            Built with
            <Heart size={12} />
            React & TypeScript
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="footer-top-button"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </button>

        </div>

      </div>

    </footer>
  );
}

export default Footer;