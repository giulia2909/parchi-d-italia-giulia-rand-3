import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <p className="footer-center">&copy; 2025 Parchi D'Italia</p>
      <nav>
        <div className="footer-links">
          <Link to="#"><button id="btn-privacy" className="footer-btn">Privacy</button></Link>
          <Link to="#"><button id="btn-whoweare" className="footer-btn">Chi siamo</button></Link>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;