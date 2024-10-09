// components/Footer.js
import React from 'react';
import css from "./Footer.module.css"
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'; // Importing icons

const Footer = () => {
  return (
    <>
    <footer className="bg-light text-light py-5">
      <div className="container">
        <div className="row">
          {/* First Column - Explore */}
          <div className="col-md-4 Footer-col">
            <h5 className="text-dark">Explore</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-dark">Home</a></li>
              <li><a href="/treatments" className="text-dark">Treatments</a></li>
              <li><a href="/careers" className="text-dark">Careers</a></li>
              <li><a href="/about" className="text-dark">About</a></li>
              <li><a href="/contact" className="text-dark">Contact</a></li>
            </ul>
          </div>

          {/* Second Column - Keep in Touch */}
          <div className="col-md-4 Footer-col">
            <h5 className="text-dark">Keep in Touch</h5>
            <ul className="list-unstyled">
              <li>
                <FaEnvelope className="me-2 text-dark " /> 
                <a href="mailto:info@wootu.com" className="text-dark">info@wootu.com</a>
              </li>
              <li className="text-dark">
                <FaMapMarkerAlt className="me-2 " /> 
                123 Wootu Street, City, Country
              </li>
              <li className="text-dark">
                <FaPhone className="me-2" /> 
                +1 (234) 567-8900
              </li>
            </ul>
          </div>

          {/* Third Column - Operating Hours */}
          <div className="col-md-4 Footer-col">
            <h5 className="text-dark">Operating Hours</h5>
            <p className="mb-1 text-dark">From 9 AM to 9 PM</p>
            <p className="text-dark">Mon to Saturday</p>
          </div>
        </div>
        </div>
        </footer>
    
        <section className="copy-bg">
        <div className="container">
        <div className="row mt-4">
          <div className="col-md-6 text-start copy-row">
            <p className="mb-0 text-dark">&copy; 2024 Wootu. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-end copy-row">
            <a href="/terms" className="text-dark">Terms & Conditions </a>
          </div>
        </div>
      </div>
      </section>
 </>
  );
};

export default Footer;
