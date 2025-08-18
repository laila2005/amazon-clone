import React, { useState, useEffect } from 'react';
import slideshow1 from '../assets/slideshow1.jpg';
import slideshow2 from '../assets/slideshow2.jpg';
import slideshow3 from '../assets/slideshow3.jpg';
import pic1 from '../assets/pic1.png';
import pic2 from '../assets/pic2.png';
import pic3 from '../assets/pic3.png';
import pic4 from '../assets/pic4.png';
import washingMachine from '../assets/washingMachine.png';
import Refrigetor from '../assets/Refrigetor.png';
import microwave from '../assets/microwave.png';
import airCondiconer from '../assets/air condiconer.png';
import boat from '../assets/boat.png';
import boult from '../assets/boult.png';
import noise from '../assets/noise.png';
import zebronics from '../assets/zebronics.png';
import shoes from '../assets/shoes.png';
import pengoine from '../assets/pengoine.png';
import organizers from '../assets/organizers.png';
import jars from '../assets/jars.png';



const HeroSlider = () => {
  const images = [slideshow1, slideshow2, slideshow3]; // Add more images as needed
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(null);
  const [nextIndex, setNextIndex] = useState(null);
  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (currentIndex + 1) % images.length;
      setSlideDirection('left');
      setNextIndex(newIndex);
      setTimeout(() => {
        setCurrentIndex(newIndex);
        setSlideDirection(null);
        setNextIndex(null);
      }, 250);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
  <div style={{position: 'relative', width: '100vw', height: '100vh', maxWidth: '100vw', maxHeight: '100vh', background: '#fff', overflow: 'visible', left: 0, top: 0, zIndex: 2}}>
      {/* Slideshow Images */}
      <div style={{ position: 'absolute', left: 0, top: 0, width: '100vw', height: '100vh', overflow: 'hidden' }}>
        {/* Current image (slides out) */}
        <img
          src={images[currentIndex]}
          alt="Slide"
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100vw',
            height: '100vh',
            objectFit: 'cover',
            display: 'block',
            margin: 0,
            padding: 0,
            transition: 'transform 0.25s cubic-bezier(0.4, 0.2, 0.2, 1)',
            transform:
              nextIndex !== null
                ? (slideDirection === 'right'
                    ? 'translateX(-100vw)'
                    : 'translateX(100vw)')
                : 'translateX(0)',
            zIndex: 2,
          }}
        />
        {/* Next image (slides in from opposite side) */}
        {nextIndex !== null && (
          <img
            src={images[nextIndex]}
            alt="Slide"
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: '100vw',
              height: '100vh',
              objectFit: 'cover',
              display: 'block',
              margin: 0,
              padding: 0,
              transition: 'transform 0.25s cubic-bezier(0.4, 0.2, 0.2, 1)',
              transform:
                slideDirection === 'right'
                  ? 'translateX(0)'
                  : 'translateX(0)',
              zIndex: 3,
            }}
          />
        )}
      </div>

      {/* Slideshow Arrows */}
      <button
        onClick={() => {
          setSlideDirection('left');
          setTimeout(() => {
            setCurrentIndex((currentIndex - 1 + images.length) % images.length);
            setSlideDirection(null);
          }, 600);
        }}
        style={{
          position: 'absolute',
          top: '20%',
          left: '24px',
          transform: 'translateY(-50%)',
          zIndex: 20,
          background: 'none',
          border: 'none',
          color: 'black',
          cursor: 'pointer',
          outline: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="28" y1="8" x2="12" y2="20" stroke="black" stroke-width="2" stroke-linecap="round"/>
          <line x1="12" y1="20" x2="28" y2="32" stroke="black" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>
      <button
        onClick={() => {
          setSlideDirection('right');
          setTimeout(() => {
            setCurrentIndex((currentIndex + 1) % images.length);
            setSlideDirection(null);
          }, 600);
        }}
        style={{
          position: 'absolute',
          top: '20%',
          right: '24px',
          transform: 'translateY(-50%)',
          zIndex: 20,
          background: 'none',
          border: 'none',
          color: 'black',
          cursor: 'pointer',
          outline: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="12" y1="8" x2="28" y2="20" stroke="black" stroke-width="2" stroke-linecap="round"/>
          <line x1="28" y1="20" x2="12" y2="32" stroke="black" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>

      {/* Cards Overlay (4 cards per row, each with 4 images) */}
      <div style={{
        position: 'absolute',
        bottom: '-120px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '24px',
        width: '90vw',
        zIndex: 10,
        padding: '0 16px',
      }}>
        {[{
          title: 'Revamp your home in style',
          images: [
            pic1,
            pic2,
            pic3,
            pic4,
          ],
        }, {
          title: 'Appliances for your home| Up to 55% off',
          images: [
           airCondiconer,
           Refrigetor,
           microwave,
           washingMachine,
          ],
        }, {
          title: 'Starting $149 | Headphones',
          images: [
           boat,
           boult,
           noise,
           zebronics,
          ],
        }, {
          title: 'Starting $99| Amazon Brands & more',
          images: [
            organizers,
            jars,
            pengoine,
            shoes,
          ],
        }].map(card => (
          <div key={card.title} style={{
            background: '#fff',
            boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
            borderRadius: '0',
            padding: '18px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100%',
          }}>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 'bold', marginBottom: '14px', color: '#222', letterSpacing: '0.5px', textAlign: 'left', width: '100%' }}>{card.title}</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px', marginBottom: '10px' }}>
              {card.images.map((img, idx) => {
                let subtitle = `Photo ${idx + 1}`;
                if (card.title === 'Revamp your home in style' && idx === 0) {
                  subtitle = 'Cushion covers, bedsheets & more';
                } else if (card.title === 'Revamp your home in style' && idx === 1) {
                  subtitle = 'Figurines, vases & more';
                } else if (card.title === 'Revamp your home in style' && idx === 2) {
                  subtitle = 'Home storage';
                } else if (card.title === 'Revamp your home in style' && idx === 3) {
                  subtitle = 'Lighting solutions';
                } else if (card.title === 'Appliances for your home| Up to 55% off' && idx === 0) {
                  subtitle = 'Air Conditioners';
                } else if (card.title === 'Appliances for your home| Up to 55% off' && idx === 1) {
                  subtitle = 'Refrigerators';
                } else if (card.title === 'Appliances for your home| Up to 55% off' && idx === 2) {
                  subtitle = 'Microwabes';
                } else if (card.title === 'Appliances for your home| Up to 55% off' && idx === 3) {
                  subtitle = 'Washing machines';
                } else if (card.title === 'Starting $149 | Headphones' && idx === 0) {
                  subtitle = 'Starting ₹249| boAt';
                } else if (card.title === 'Starting $149 | Headphones' && idx === 1) {
                  subtitle = 'Starting ₹349| boult';
                } else if (card.title === 'Starting $149 | Headphones' && idx === 2) {
                  subtitle = 'Starting ₹649| Noise';
                } else if (card.title === 'Starting $149 | Headphones' && idx === 3) {
                  subtitle = 'Starting ₹149| Zebronics';
                } else if (card.title === 'Starting $99| Amazon Brands & more' && idx === 0) {
                  subtitle = 'Staring ₹299|Home storage &...';
                } else if (card.title === 'Starting $99| Amazon Brands & more' && idx === 1) {
                  subtitle = 'Up to 60% off |Storage &racks';
                } else if (card.title === 'Starting $99| Amazon Brands & more' && idx === 2) {
                  subtitle = 'Staring ₹99|Toys & games';
                } else if (card.title === 'Starting $99| Amazon Brands & more' && idx === 3) {
                  subtitle = 'Up to 60% off| Jackets,dresses &...';
                }
                return (
                  <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img src={img} alt={card.title + ' ' + (idx+1)} style={{ width: '110px', height: '100px', objectFit: 'cover', borderRadius: '0' }} />
                    <span style={{ fontSize: '0.85rem', color: '#555', marginTop: '4px', textAlign: 'center' }}>{subtitle}</span>
                  </div>
                );
              })}
            </div>
            <a href="#" style={{
              color: '#007185',
              textDecoration: 'none',
              marginTop: 'auto', // push to bottom
              fontSize: '1rem',
              cursor: 'pointer',
              alignSelf: 'flex-start', // align to left
              paddingBottom: '8px', // space from bottom
            }}>
              {(() => {
                if (card.title === 'Revamp your home in style') return 'Explore all';
                if (card.title === 'Appliances for your home| Up to 55% off') return 'See more';
                if (card.title === 'Starting $149 | Headphones') return 'See all offers';
                if (card.title === 'Starting $99| Amazon Brands & more') return 'Shop now';
                return 'See more';
              })()}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;