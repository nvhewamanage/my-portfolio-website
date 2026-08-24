import { useState } from "react";
import {
  Menu,
  X,
  Mail,
} from "lucide-react";

import {
  FaGithub, 
  FaLinkedin 
} from "react-icons/fa";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container navbar-container">

        {/* Logo */}
        <a href="#home" className="navbar-logo">
          <span className="logo-bracket">&lt;</span>
          <span>V</span>
          <span className="logo-bracket">/&gt;</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="nav-link"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Desktop Hire Button */}
        <a href="#contact" className="hire-button">
          Let's Talk
        </a>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="mobile-nav">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="mobile-nav-link"
              onClick={closeMenu}
            >
              {item.name}
            </a>
          ))}

          <a
            href="#contact"
            className="mobile-hire-button"
            onClick={closeMenu}
          >
            Hire Me
          </a>

          <div className="mobile-social-links">
            <a href="#" aria-label="GitHub">
              <FaGithub size={20} />
            </a>

            <a href="#" aria-label="LinkedIn">
              <FaLinkedin size={20} />
            </a>

            <a href="#" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;