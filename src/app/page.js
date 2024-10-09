"use client";  // Mark the component as a Client Component

import { useEffect } from 'react';  // Correct import
import Image from "next/image";
import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "@/Components/Navbar/Navbar";
import '../app/globals.css';  // Keep all other necessary imports
import HeroSection from "../Components/HeroSection/HeroSection.js";
import HomeCard from '@/Components/HomeCard/Homecard';
import Carousel from '@/Components/Carousel/Carousel';
import Topservice from '@/Components/Topservices/Topservice';
import TrustContent from '@/Components/TrustContent/TrustContent';
import Testimonials from '@/Components/Testimonial/Testimonial';
import Footer from '@/Components/Footer/Footer';

export default function Home({ Component, pageProps }) {
  useEffect(() => {
    // Dynamically import Bootstrap JS for client-side functionality
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <div>
      <Navbar />
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
