import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import styles from './Homecard.module.css';


const HomeCard = () => {
  return (
    <div className="container homecard-container">
        <h1>Top Concerns</h1>
        <div className="row homecard-row">
        <div className="col-lg-4 col-md-4 col-sm-12 card-col">
    <div className={styles.card}>
      <img
        src="/Assets/Acnescar.jpg" 
        alt="Card Image"
        className={styles.cardImage}
      />
      <div className={styles.overlay}>
        <h3 className={styles.overlayText}>Acne & Scars</h3>
        <button className={styles.ctaButton}>Book Now</button>
      </div>
    </div>
    </div>

    <div className="col-lg-4 col-md-4 col-sm-12 card-col">
    <div className={styles.card}>
      <img
        src="/Assets/Darkcircle.png" 
        alt="Card Image"
        className={styles.cardImage}
      />
      <div className={styles.overlay}>
        <h3 className={styles.overlayText}>Dark Circle</h3>
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
        <h3 className={styles.overlayText}>Your Overlay Text</h3>
        <button className={styles.ctaButton}>Learn More</button>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default HomeCard;
