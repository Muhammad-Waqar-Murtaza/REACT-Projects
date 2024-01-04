import React from "react";
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Waqar Murtaza</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Portfolio
            </a>
          </li>

          <li>
            <a href="#contact" className="footer__link">
              Contact
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="https://github.com/Muhammad-Waqar-Murtaza" className="footer__social-link" target="_blank">
            <i class="bx bxl-github"></i>
          </a>
          <a href="https://linkedin.com/in/muhammad-waqar-murtaza" className="footer__social-link" target="_blank">
            <i class="bx bxl-linkedin"></i>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61554999250058" className="footer__social-link" target="_blank">
            <i class="bx bxl-facebook"></i>
          </a>
        </div>

        <span className="footer__copy">&#169; Waqar Murtaza. All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
