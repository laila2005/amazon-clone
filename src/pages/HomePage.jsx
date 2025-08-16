import React from 'react';
import Navbar from '../components/Navbar';
import HeroSlider from '../components/HeroSlider';

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSlider />
      {/* Other homepage sections here */}
    </div>
  );
}