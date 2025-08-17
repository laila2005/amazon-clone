import React from 'react';
import Navbar from '../components/Navbar';
import HeroSlider from '../components/HeroSlider';
import Cards from '../components/Cards';
import Slideshow from '../components/Slideshow';

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSlider />
      <Cards />
      <Slideshow />
      {/* Other homepage sections here */}
    </div>
  );
}