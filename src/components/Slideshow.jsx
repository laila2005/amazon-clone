import React, { useState, useEffect } from "react";
import styles from './Slideshow.module.css';
import scrollbarStyles from './SlideshowScrollbar.module.css';
// Custom chevron icons instead of lucide-react
import { attachTouchHandlers } from './slideshowTouchHandler';
import slider1 from '../assets/slider1 (1).png';
import slider2 from '../assets/slider1 (2).png';
import slider3 from '../assets/slider1 (3).png';
import slider4 from '../assets/slider1 (4).png';
import slider5 from '../assets/slider1 (5).png';
import slider6 from '../assets/slider1 (6).png';
import slider7 from '../assets/slider1 (7).png';
import slider8 from '../assets/slider1 (8).png';

const images = [
  slider1,
  slider2,
  slider3,
  slider4,
  slider5,
  slider6,
  slider7,
  slider8,
  slider1,
  slider2,
  slider3,
  slider4,
  slider5,
  slider6,
  slider7,
  slider8
];

export default function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    
    // Attach touch handlers for mobile devices
    const cleanupTouchHandlers = attachTouchHandlers(scrollRef);
    
    // Cleanup on component unmount
    return () => {
      if (cleanupTouchHandlers) cleanupTouchHandlers();
    };
  }, [currentIndex]);

  // Add touch scroll support
  const handleMouseDown = (e) => {
    if (!scrollRef.current) return;
    
    const slider = scrollRef.current;
    let startX = e.pageX - slider.offsetLeft;
    let scrollLeft = slider.scrollLeft;
    
    const handleMouseMove = (e) => {
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2; // Scroll speed multiplier
      slider.scrollLeft = scrollLeft - walk;
    };
    
    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };
  
  return (
    <div style={{ background: '#fff', width: '100%', minHeight: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 0 }}>
      <div className="slideshow-container" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',
        width: '95%',
        maxWidth: '1200px',
        paddingLeft: '20px', /* Match padding with Cards.jsx */
        paddingRight: '20px', /* Match padding with Cards.jsx */
        boxSizing: 'border-box'
      }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', margin: '0 0 24px 0', textAlign: 'left', color: '#222', width: '100%', padding: 0 }}>
          Best Sellers in Clothing & Accessories
        </h2>
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          style={{
            display: 'flex',
            overflowX: 'auto',
            scrollBehavior: 'smooth',
            width: '100%',
            whiteSpace: 'nowrap',
            alignItems: 'center',
            paddingBottom: '12px',
            boxSizing: 'border-box',
            justifyContent: 'flex-start',
            paddingLeft: '0px', /* Remove extra padding */
            paddingRight: '0px', /* Remove extra padding */
          }}
          className={styles['slideshow-scroll'] + ' ' + scrollbarStyles['slideshow-scroll'] + ' slideshow-items'}
        >
          {images.map((img, index) => (
            <img
              key={index}
              className="slider-img"
              src={img}
              alt={`Slide ${index}`}
              style={{
                width: '172px',
                height: 'auto',
                maxHeight: '225px',
                objectFit: 'contain',
                marginRight: '15px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
                background: '#fff',
                borderRadius: '8px',
              }}
            />
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="slider-nav-button slider-prev"
        >
          {/* Custom ChevronLeft */}
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="slider-nav-button slider-next"
        >
          {/* Custom ChevronRight */}
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </div>
  );
}