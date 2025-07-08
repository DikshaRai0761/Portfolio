import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import CSS file

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo">Diksha's Portfolio</h1>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li className="option">
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li className="option">
            <Link to="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li className="option">
            <Link to="/projects" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
          </li>
          <li className="option">
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>

          {/* ✅ Resume Download Button */}
          <li className="option">
            <a
  href="/Diksha_Rai_Resume.pdf"
  download="Diksha_Rai_Resume.pdf"
  className="resume-btn"
  onClick={() => setIsOpen(false)}
>
  📄 Resume
</a>

          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
