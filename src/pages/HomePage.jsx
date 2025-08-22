import React from 'react';
import HeroSlider from '../components/HeroSlider';
import Cards from '../components/Cards';
import Section4Cards from '../components/Section4Cards';
import Slideshow from '../components/Slideshow';
import Slideshow3 from '../components/Slideshow3';

export default function HomePage() {

  return (
    <>
      <div className="main-content" style={{ 
        width: "100%", 
        overflow: "hidden"
      }}>
        <HeroSlider />
        <Cards />
        <Slideshow />
        <Section4Cards />
        <Slideshow3 />
        
        {/* Other homepage sections here */}
      </div>
    </>
  );
}