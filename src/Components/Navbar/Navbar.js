"use client";  // This makes the Navbar component a Client Component

import { useEffect } from 'react';  // Only keep this correct import
import Link from 'next/link';
import Image from 'next/image';
import bootstrap from 'bootstrap';
import css from "./Navbar.css";
import logo from "../../../Public/Assets/Wootlogo.png"

const Navbar = () => {
// Navbar.js

useEffect(() => {
  if (typeof document !== 'undefined') {
    // Code that interacts with the DOM or uses the document object
  }
}, []);


  return (
    <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid">
        {/* Left side logo */}
       
        <Link href="/" className="navbar-brand">
          <Image src={logo} alt="Logo" width={100}  />
        </Link>

        {/* Mobile toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Right side content */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/" className="nav-link active">Home</Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link">Treatments</Link>
            </li>
            <li className="nav-item">
              <Link href="/services" className="nav-link">Careers</Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
