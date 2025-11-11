import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Left Section */}
        <div className="footer-about">
          <h3>Bin-Baz Memorial Academy</h3>
          <p>
            Committed to nurturing disciplined, knowledgeable, and morally upright students
            through quality education and strong values.
          </p>

          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">YouTube</a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/mission">Our Mission</a></li>
            <li><a href="/vision">Our Vision</a></li>
            <li><a href="/admission">Admissions</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Right Section - Contact Form */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Email Address" required />
            <textarea placeholder="Your Message" rows="4" required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Bin-Baz Memorial Academy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
