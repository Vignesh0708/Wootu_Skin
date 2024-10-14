"use client";  // Mark the component as a Client Component
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect } from 'react';  // Correct import
import Image from "next/image";
import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from '@/Components/Navbar/Navbar';
import '../app/globals.css';  // Keep all other necessary imports
import HeroSection from "../Components/HeroSection/HeroSection.js";
import HomeCard from '@/Components/HomeCard/Homecard';
import Carousel from '@/Components/Carousel/Carousel';
import Topservice from '@/Components/Topservices/Topservice';
import TrustContent from '@/Components/TrustContent/TrustContent';
import Testimonials from '@/Components/Testimonial/Testimonial';
import Footer from '@/Components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing style
      once: true, // Whether the animation should happen only once
    });
    // Dynamically import Bootstrap JS for client-side functionality
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <div>
      <CustomNavbar/>
      <HeroSection/>
      <HomeCard/>
     <Carousel/>
     <Topservice/>
     <TrustContent/>
     <Testimonials/>
     <Footer/>
    </div>
  );
}
