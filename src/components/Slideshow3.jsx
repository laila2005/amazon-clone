import React, { useState, useEffect } from "react";
import styles from './Slideshow.module.css';
import scrollbarStyles from './SlideshowScrollbar.module.css';
import { ChevronLeft, ChevronRight } from "lucide-react";
import slider1 from '../assets/slideshow/slider (1).png';
import slider2 from '../assets/slideshow/slider (2).png';
import slider3 from '../assets/slideshow/slider (3).png';
import slider4 from '../assets/slideshow/slider (4).png';
import slider5 from '../assets/slideshow/slider (5).png';
import slider6 from '../assets/slideshow/slider (6).png';

const images = [
  slider1,
  slider2,
  slider3,
  slider4,
  slider5,
  slider6,

  slider1,
  slider2,
  slider3,
  slider4,
  slider5,
  slider6,
];

export default function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const scrollRef = React.useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: currentIndex * 178,
        behavior: 'smooth',
      });
    }
  }, [currentIndex]);

  return (
  <div style={{ background: '#44403B', width: '100%', minHeight: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 0 }}>
      <div style={{
          position: 'relative',
          width: '90vw',
          maxWidth: '90vw',
          margin: '40px auto 32px auto',
          transform: 'translateX(8px)',
  background: '#fff',
  borderRadius: '0',
  boxShadow: 'none',
  border: 'none',
  padding: '10',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  alignContent: 'center',
      }}>
  <h2 style={{ fontSize: '2rem', fontWeight: 'bold', margin: '8px 0 24px 0', textAlign: 'left', color: '#000', width: '100%', paddingLeft: '32px' }}>
    <span
      style={{
        fontFamily: 'Noto Serif Gujarati',
        fontWeight: 700,
        fontStyle: 'bold',
        fontSize: '22px',
        lineHeight: '100%',
        letterSpacing: '0%',
      }}
    >Min. 50% off | Unique kitchen finds | Amazon Brands & more</span>
    <span style={{
      fontFamily: 'Noto Serif Gujarati',
      fontWeight: 400,
      fontStyle: 'normal',
      fontSize: '16px',
      lineHeight: '100%',
      letterSpacing: '0%',
      marginLeft: '16px'
    }}><a>See all</a></span>
  </h2>
  <div
    ref={scrollRef}
    style={{
      display: 'flex',
      overflowX: 'auto',
      scrollBehavior: 'smooth',
      width: '100%',
      whiteSpace: 'nowrap',
      alignItems: 'center',
      paddingBottom: '12px',
      boxSizing: 'border-box',
      justifyContent: 'center',
      paddingLeft: 0,
      paddingRight: 0,
    }}
    className={styles['slideshow-scroll'] + ' ' + scrollbarStyles['slideshow-scroll']}
  >
    {images.map((img, index) => (
      <img
        key={index}
        src={img}
        alt={`Slide ${index}`}
        style={{
          width: '172px',
          height: '225px',
          objectFit: 'contain',
          marginRight: '15px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
          background: '#fff',
        }}
      />
    ))}
  </div>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          style={{
            position: 'absolute',
            top: '50%',
            left: '0',
            transform: 'translateY(-50%)',
            background: '#fff',
            border: '2px solid #888',
            padding: '0',
            borderRadius: '5px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
            zIndex: 20,
            cursor: 'pointer',
            height: '64px',
            width: '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#44403B',
            opacity: 0.9,
          }}
        >
          <ChevronLeft size={32} />
        </button>
        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          style={{
            position: 'absolute',
            top: '50%',
            right: '0',
            transform: 'translateY(-50%)',
            background: '#fff',
            border: '2px solid #888',
            padding: '0',
            borderRadius: '5px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
            zIndex: 20,
            cursor: 'pointer',
            height: '64px',
            width: '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#44403B',
            opacity: 0.9,
          }}
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  );
}
