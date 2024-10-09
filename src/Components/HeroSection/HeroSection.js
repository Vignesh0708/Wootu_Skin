import React from 'react';
import Image from 'next/image';  // For optimized images in Next.js
import 'bootstrap/dist/css/bootstrap.min.css';
import Heroimg from "../../../Public/Assets/Header.png";
import styles from './HeroSection.module.css';  // Custom styles for background

const HeroSection = () => {
  return (
    <section className={`${styles.heroSection} d-flex align-items-center`} >
      <div className="container hero-section">
        <div className="row align-items-center">
          
          {/* Left Side - Text */}
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 hero-content">
            <div className="empty-spce"></div>
            <h1 className="hero-title">Your Journey to Clear, Beautiful Skin Begins Today</h1>
            <p className="lead">
            Personalized skin treatments for every need, backed by science.
            </p>
            
          </div>

          {/* Right Side - Image */}
          <div className="col-lg-6 col-md-12 ">
            <Image 
              src={Heroimg}  // Replace with your image path
              alt="Hero Image"
              layout="responsive"
             
              className="hero-image"  // Bootstrap class for responsive images
            />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
