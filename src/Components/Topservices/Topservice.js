import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import styles from '../HomeCard/Homecard.module.css';
import "../../app/globals.css";


const Topservice = () => {
  return (
    <div className="container homecard-container">
        <h1 className="card-title">Top Services</h1>
        <div className="row homecard-row">
        <div className="col-lg-4 col-md-4 col-sm-12 card-col">
    <div className={styles.card}>
      <img
        src="/Assets/Hydrafacial.jpg" 
        alt="Card Image"
        className={styles.cardImage}
      />
      <div className={styles.overlay}>
        <h3 className={styles.overlayText}>Hydra Facial</h3>
        <button className={styles.ctaButton}>Book Now</button>
      </div>
    </div>
    </div>

    <div className="col-lg-4 col-md-4 col-sm-12 card-col">
    <div className={styles.card}>
      <img
        src="/Assets/Micro Needling.jpg" 
        alt="Card Image"
        className={styles.cardImage}
      />
      <div className={styles.overlay}>
        <h3 className={styles.overlayText}>Micro Needling</h3>
        <button className={styles.ctaButton}>Book Now</button>
      </div>
    </div>
    </div>

    <div className="col-lg-4 col-md-4 col-sm-12 card-col">
    <div className={styles.card}>
      <img
        src="/Assets/Botox.jpg"
        alt="Card Image"
        className={styles.cardImage}
      />
      <div className={styles.overlay}>
        <h3 className={styles.overlayText}>Botox</h3>
        <button className={styles.ctaButton}>Learn More</button>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Topservice;
