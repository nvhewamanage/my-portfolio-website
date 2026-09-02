import {
  ArrowUp,
  Mail,
} from "lucide-react";

import{
    FaGithub,
    FaLinkedin,
}from "react-icons/fa";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/nvhewamanage",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/viduranga-hewamanage/",
    icon: FaLinkedin,
  },
  {
    name: "Email",
    href: "mailto:navodhviduranga2002@gmail.com",
    icon: Mail,
  },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* =====================================
            LEFT — COPYRIGHT
        ===================================== */}

        <div className="footer-left">

          <p className="footer-copyright">
            © {currentYear}{" "}
            <span>Viduranga Hewamanage</span>.
            All rights reserved.
          </p>

          <p className="footer-tagline">
            Building the future, one line of code at a time.
          </p>

        </div>


        {/* =====================================
            CENTER — BACK TO TOP
        ===================================== */}

        <div className="footer-center">

          <span className="footer-back-title">
            Back to top
          </span>

          <button
            type="button"
            className="footer-back-button"
            onClick={handleBackToTop}
            aria-label="Back to top"
          >
            <ArrowUp size={24} strokeWidth={1.8} />
          </button>

        </div>


        {/* =====================================
            RIGHT — SOCIAL LINKS
        ===================================== */}

        <div className="footer-right">

          <span className="footer-follow-title">
            Follow me
          </span>

          <div className="footer-socials">

            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.href}
                  className="footer-social"
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
                >
                  <Icon
                    size={21}
                    strokeWidth={1.8}
                  />
                </a>
              );
            })}

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;