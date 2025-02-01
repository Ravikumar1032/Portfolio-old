import React, { useState } from 'react';
import '../styles/Header.css';
import NavbarDp from "../Images/Nav-dp.jpeg"
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header dark-background d-flex flex-column ${isMenuOpen ? 'header-show' : ''}`}>
      {/* Toggle Button d-xxl-none */}
      <h2><i className={`header-toggle bi ${isMenuOpen ? 'bi-x' : 'bi-list'}`} onClick={toggleMenu}></i></h2>

      {/* Profile Section */}
      <div className="profile-img ms-5">
      {/* https://www.codingnepalweb.com/10-profile-card-template-designs-html-css/ */}
        <img src={NavbarDp} alt="Profile" className="img-fluid rounded-circle" />
      </div>

      {/* Logo */}
      <a href="index.html" className="logo">
        <h3 className="sitename"><b>Ravi Kumar</b></h3>
      </a>

      {/* Social Links */}
      <div className="social-links">
        <a href="#twitter" className="twitter"><i className="bi bi-twitter"></i></a>
        <a href="#facebook" className="facebook"><i className="bi bi-facebook"></i></a>
        <a href="#instagram" className="instagram"><i className="bi bi-instagram"></i></a>
        {/* <a href="#twitter" className="google-plus"><i className="bi bi-skype"></i></a> */}
        <a href="#linkedin" className="linkedin"><i className="bi bi-linkedin"></i></a>
      </div>

      {/* Navbar */}
      <nav id="navmenu"  className={`navmenu ${isMenuOpen ? 'menu-open' : ''}`}>
        <ul>
          <li><a href="#hero" className="active"><i className="bi bi-house navicon"></i> Home</a></li>
          <li><a href="#about"><i className="bi bi-person navicon"></i> About</a></li>
          <li><a href="#resume"><i className="bi bi-file-earmark-text navicon"></i> Resume</a></li>
          <li><a href="#portfolio"><i className="bi bi-images navicon"></i> Portfolio</a></li>
          <li><a href="#services"><i className="bi bi-hdd-stack navicon"></i> Services</a></li>
          <li><a href="#contact"><i className="bi bi-envelope navicon"></i> Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
