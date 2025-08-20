import React from 'react';
import Navbar from '../components/Navbar';
import HeroSlider from '../components/HeroSlider';
import Cards from '../components/Cards';
import Section4Cards from '../components/Section4Cards';
import Slideshow from '../components/Slideshow';
import Slideshow3 from '../components/Slideshow3';
import Footer from '../components/footer';
import styles from './HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className="main-content" style={{ 
        width: "100%", 
        overflow: "hidden",
        paddingTop: "100px" /* Add padding to account for fixed navbar + categories */
      }}>
        <HeroSlider />
        <Cards />
        <Slideshow />
        <Section4Cards />
        <Slideshow3 />
        <Footer />
        {/* Other homepage sections here */}
      </div>
    </>
  );
}