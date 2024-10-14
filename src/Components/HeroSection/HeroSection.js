import React, { useEffect, useState } from 'react';
import Image from 'next/image';  // For optimized images in Next.js
import 'bootstrap/dist/css/bootstrap.min.css';
import Heroimg from "../../../Public/Assets/Header.png";
import styles from './HeroSection.module.css';  // Custom styles for background
import axios from 'axios';
import 'animate.css/animate.min.css';
import { strapi_url,token } from '@/common/utils';



const HeroSection = () => {
  const [hero_text_1, setHero_text_1] = useState('')
  const [hero_text_2, setHero_text_2] = useState('')
  const [hero_image, setHero_image] = useState('')
  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get(`${strapi_url}/api/landing-pages?populate=*`);
        console.log(response?.data?.data[0].hero_image.url);
        setHero_text_1(response?.data?.data[0].hero_text_1)
        setHero_text_2(response?.data?.data[0].hero_text_2)
        setHero_image(response?.data?.data[0].hero_image.url)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className={`${styles.heroSection} d-flex align-items-center`} >
      <div className="container hero-section">
        <div className="row align-items-center">

          {/* Left Side - Text */}
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 hero-content animate__animated animate__rotateInUpLeft animate__delay-1s">
            <div className="empty-spce"></div>
            <h1 className="hero-title">{hero_text_1}</h1>
            <p className="lead">
              {hero_text_2}
            </p>

          </div>

          {/* Right Side - Image */}
          {hero_image && (<div className="col-lg-6 col-md-12 hero-image-section animate__animated animate__fadeInRightBig animate__delay-0.4s">
            <Image
              src={`${strapi_url}${hero_image}`}  // Replace with your image path
              alt="Hero Image"
              layout="responsive"
              className="hero-image"  // Bootstrap class for responsive images
              width={80}
              height={10}
            />
          </div>)
          }

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
