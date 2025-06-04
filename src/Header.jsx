import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <p><Link to="/">Parchi D'Italia</Link></p>
      <nav>
        {/* Hamburger solo su mobile */}
        <button
          className="menu-toggle"
          aria-label="Apri menu"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
        <div className={`nav-links${open ? " open" : ""}`}>
          <Link to="/"><button id="btn-home" className="header-btn" onClick={() => setOpen(false)}>Home</button></Link>
          <Link to="/attivita"><button id="btn-attivita" className="header-btn" onClick={() => setOpen(false)}>Attività</button></Link>
          <Link to="/parchi"><button id="btn-parchi" className="header-btn" onClick={() => setOpen(false)}>Parchi</button></Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;