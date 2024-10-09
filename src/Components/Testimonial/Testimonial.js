import 'bootstrap/dist/css/bootstrap.min.css';
// components/WhyYouCanTrustUs.js
import React from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa'; 

const Testimonials = () => {
    return (
      <section className="testimonial">
        <div className="container py-5">
        <div className="row">
          {/* Testimonial Card 1 */}
          <div className="col-md-4">
            <div className="card h-100 text-center p-4">
              <p className="card-text">
                "Wootu's service was exceptional. The team provided amazing support, and the doctors were very responsive!"
              </p>
              <div className="mb-3">
                {/* 5-star rating */}
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} color="#FFD700" />
                ))}
              </div>
              <h5 className="card-title">- John Doe</h5>
            </div>
          </div>
  
          {/* Testimonial Card 2 */}
          <div className="col-md-4">
            <div className="card h-100 text-center p-4">
              <p className="card-text">
                "I got all the answers I needed, and the platform helped me understand the procedures better."
              </p>
              <div className="mb-3">
                {/* 5-star rating */}
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} color="#FFD700" />
                ))}
              </div>
              <h5 className="card-title">- Jane Smith</h5>
            </div>
          </div>
  
          {/* Testimonial Card 3 */}
          <div className="col-md-4">
            <div className="card h-100 text-center p-4">
              <p className="card-text">
                "Great experience! Wootu's doctors were very informative, and the process was smooth."
              </p>
              <div className="mb-3">
                {/* 5-star rating */}
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} color="#FFD700" />
                ))}
              </div>
              <h5 className="card-title">- Sarah Lee</h5>
            </div>
          </div>
        </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;