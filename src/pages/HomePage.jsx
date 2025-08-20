import React from 'react';
import Navbar from '../components/Navbar';
import HeroSlider from '../components/HeroSlider';
import Cards from '../components/Cards';
import Section4Cards from '../components/Section4Cards';
import Slideshow from '../components/Slideshow';
import Slideshow3 from '../components/Slideshow3';
import Footer from '../components/Footer';
export default function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSlider />
      <Cards />
      <Slideshow />
      <Section4Cards />
      <Slideshow3 />
      <Footer />
      {/* Other homepage sections here */}
    </div>
  );
}