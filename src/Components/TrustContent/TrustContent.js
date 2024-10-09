import 'bootstrap/dist/css/bootstrap.min.css';
// components/WhyYouCanTrustUs.js
import React from 'react';
import Image from 'next/image';
import css from "./TrustContent.module.css"

const TrustContent = () => {
  return (
    <section className="container py-5 trust-contanier">
        <div className="trust-title">
        <h2 >Why You Can Trust Us</h2>
        </div>
      <div className="row align-items-center trust-row">
        {/* Left Side: Image */}
        <div className="col-md-12 col-lg-6 trust-img">
          <Image
            src="/Assets/trust.png" // Replace with your image path
            alt="Why you can trust us"
            width={500} // Adjust width
            height={500} // Adjust height
        className="img-car"
          />
        </div>
        {/* Right Side: Content */}
        <div className="col-md-12 col-lg-5">
          
          <div className="trust-content"><strong className="trust-number">430K</strong> <p className="trust-para"> reviews shared by Wootu members</p></div>
          <hr />
          <div className="trust-content"><strong className="trust-number">2.8k</strong> <p className="trust-para"> patient questions answered by doctors</p></div>
          <hr />
          <div className="trust-content"><strong className="trust-number">87%</strong> <p className="trust-para"> of members say wootu helps them understand procedures</p></div>
        </div>
      </div>
    </section>
  );
};

export default TrustContent;
