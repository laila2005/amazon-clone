import React from 'react';
import Navbar from '../components/Navbar';
import HeroSlider from '../components/HeroSlider';
import Cards from '../components/Cards';

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSlider />
      <Cards />
      {/* Other homepage sections here */}
    </div>
  );
}