import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./Footer.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail, SiLeetcode } from "react-icons/si"; // Added LeetCode icon

const Footer = () => {
  const links = {
    linkedIn: "https://www.linkedin.com/in/diksha-rai-553a92297",
    github: "https://github.com/DikshaRai0761",
    leetcode: "https://leetcode.com/u/Diksha_rai123/",
    email: "diksharai07610761@gmail.com",
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Copyright */}
        <p className="footer-text">&copy; {new Date().getFullYear()} Diksha. All Rights Reserved.</p>

        {/* Navigation Links */}
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Social Links */}
        <div className="footer-socials">
          
          <a href={links.linkedIn} id="linkedin-text">
            <FaLinkedin/>
            <p>LinkedIn</p>
          </a>

          <a href={links.github} id="github-text">
            <FaGithub/>
            <p>GitHub</p>
          </a>

          <a href={links.leetcode} id="leetcode-text">
            <SiLeetcode/>
            <p>LeetCode</p>
          </a>

          <a href={`mailto:${links.email}`} id="email-text">
            <SiGmail/>
            <p>Email</p>
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;