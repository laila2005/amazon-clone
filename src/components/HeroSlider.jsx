import React, { useState, useEffect } from "react";
import "./heroSlider.css"; // Import specific styles for the HeroSlider
import slideshow1 from "../assets/slideshow1.jpg";
import slideshow2 from "../assets/slideshow2.jpg";
import slideshow3 from "../assets/slideshow3.jpg";
import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.png";
import pic3 from "../assets/pic3.png";
import pic4 from "../assets/pic4.png";
import washingMachine from "../assets/washingMachine.png";
import Refrigetor from "../assets/Refrigetor.png";
import microwave from "../assets/microwave.png";
import airCondiconer from "../assets/air condiconer.png";
import boat from "../assets/boat.png";
import boult from "../assets/boult.png";
import noise from "../assets/noise.png";
import zebronics from "../assets/zebronics.png";
import shoes from "../assets/shoes.png";
import pengoine from "../assets/pengoine.png";
import organizers from "../assets/organizers.png";
import jars from "../assets/jars.png";

const HeroSlider = () => {
  const images = [slideshow1, slideshow2, slideshow3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(null);
  const [nextIndex, setNextIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (currentIndex + 1) % images.length;
      setSlideDirection("left");
      setNextIndex(newIndex);
      setTimeout(() => {
        setCurrentIndex(newIndex);
        setSlideDirection(null);
        setNextIndex(null);
      }, 250);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  const cards = [
    {
      title: "Revamp your home in style",
      images: [
        { src: pic1, subtitle: "Cushion covers, bedsheets & more" },
        { src: pic2, subtitle: "Figurines, vases & more" },
        { src: pic3, subtitle: "Home storage" },
        { src: pic4, subtitle: "Lighting solutions" },
      ],
      link: "Explore all",
    },
    {
      title: "Appliances for your home| Up to 55% off",
      images: [
        { src: airCondiconer, subtitle: "Air Conditioners" },
        { src: Refrigetor, subtitle: "Refrigerators" },
        { src: microwave, subtitle: "Microwaves" },
        { src: washingMachine, subtitle: "Washing machines" },
      ],
      link: "See more",
    },
    {
      title: "Starting $149 | Headphones",
      images: [
        { src: boat, subtitle: "Starting ₹249 | boAt" },
        { src: boult, subtitle: "Starting ₹349 | Boult" },
        { src: noise, subtitle: "Starting ₹649 | Noise" },
        { src: zebronics, subtitle: "Starting ₹149 | Zebronics" },
      ],
      link: "See all offers",
    },
    {
      title: "Starting $99| Amazon Brands & more",
      images: [
        { src: organizers, subtitle: "Starting ₹299 | Home storage & more" },
        { src: jars, subtitle: "Up to 60% off | Storage racks" },
        { src: pengoine, subtitle: "Starting ₹99 | Toys & games" },
        { src: shoes, subtitle: "Up to 60% off | Jackets, dresses & more" },
      ],
      link: "Shop now",
    },
  ];

  return (
    <div className="hero-slider" style={{ 
      position: "relative", 
      width: "100%", 
      height: "auto", 
      overflow: "hidden", 
      marginBottom: "0", /* No bottom margin for seamless connection */
      backgroundColor: "#44403B", /* Added #44403B background color for the area underneath cards */
    }}>
      {/* Slideshow */}
      <div
        style={{
          position: "relative",
          width: "100%", 
          height: "50vh", /* Adjusted height */
          minHeight: "300px", /* Minimum height to ensure visibility */
          maxHeight: "600px", /* Maximum height to look good on large screens */
          overflow: "hidden",
          marginTop: "0px", /* Remove margin since we have padding in HomePage */
        }}
      >
        {/* Bottom gradient overlay that blends with the dark background */}
        <div 
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "35%", /* Increased height for even more gradual transition */
            background: "linear-gradient(to bottom, rgba(68, 64, 59, 0) 0%, #44403B 95%)", /* Exact #44403B color match */
            zIndex: 5,
            pointerEvents: "none"
          }}
        ></div>
        
        {/* Left Arrow */}
        <button
          onClick={() => {
            setSlideDirection("right");
            setNextIndex((currentIndex - 1 + images.length) % images.length);
            setTimeout(() => {
              setCurrentIndex((currentIndex - 1 + images.length) % images.length);
              setSlideDirection(null);
              setNextIndex(null);
            }, 250);
          }}
          className="slider-nav-button slider-prev"
        >
          <svg width="45" height="45" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 19L8 12L15 5" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        {/* Right Arrow */}
        <button
          onClick={() => {
            setSlideDirection("left");
            setNextIndex((currentIndex + 1) % images.length);
            setTimeout(() => {
              setCurrentIndex((currentIndex + 1) % images.length);
              setSlideDirection(null);
              setNextIndex(null);
            }, 250);
          }}
          className="slider-nav-button slider-next"
        >
          <svg width="45" height="45" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 5L16 12L9 19" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <img
          src={images[currentIndex]}
          alt="Slide"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center center",
            transition: "transform 0.25s ease",
            transform:
              nextIndex !== null
                ? slideDirection === "right"
                  ? "translateX(-100%)"
                  : "translateX(100%)"
                : "translateX(0)",
            zIndex: 2,
            display: "block", /* Ensure proper display */
          }}
        />
        {nextIndex !== null && (
          <img
            src={images[nextIndex]}
            alt="Slide"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center center",
              transition: "transform 0.25s ease",
              transform: "translateX(0)",
              zIndex: 3,
              display: "block", /* Ensure proper display */
            }}
          />
        )}
      </div>

      {/* Cards */}
      <div
        className="hero-slider-cards card-grid"
        style={{
          position: "relative",
          margin: "-80px auto 30px auto", /* Negative margin to overlap with slider */
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", /* Changed to auto-fill for better responsiveness */
          gap: "20px", /* Same horizontal gap as Cards.jsx */
          width: "95%",
          maxWidth: "1200px",
          zIndex: 10,
          padding: "20px", /* Even padding all around */
          boxSizing: "border-box",
          background: "transparent", /* Transparent background to show gradient below */
        }}
      >
        {cards.map((card) => (
          <div
            key={card.title}
            className="hero-card"
            style={{
              background: "#fff", /* White background for cards */
              boxShadow: "0 4px 16px rgba(0,0,0,0.12)", 
              padding: "18px", 
              display: "flex",
              flexDirection: "column",
              borderRadius: "8px", /* Slightly more rounded corners */
              transition: "transform 0.3s, box-shadow 0.3s",
              minHeight: "420px",
              height: "100%", /* Fill available height */
              cursor: "pointer", /* Indicate clickable */
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.12)';
            }}
          >
            <h3
              style={{
                fontFamily: "Noto Serif Gujarati, serif",
                fontWeight: 700,
                fontSize: "22px",
                lineHeight: "100%",
                letterSpacing: "0%",
                fontStyle: "normal",
                marginBottom: "16px",
                textAlign: "left",
                color: "#232F3E", /* Reverted to original dark blue color */
              }}
            >
              {card.title}
            </h3>
            <div
              className="item-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "10px", /* Match the 10px gap from Cards.jsx item-grid */
                marginBottom: "10px",
              }}
            >
              {card.images.map((img, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div style={{
                    width: "100%", 
                    height: "120px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden"
                  }}>
                    <img
                      className="slider-img"
                      src={img.src}
                      alt={img.subtitle}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                        maxHeight: "100%",
                        objectFit: "contain",
                        borderRadius: "0",
                      }}
                    />
                  </div>
                  <span
                    style={{
                      fontSize: "0.8rem",
                      color: "#555", /* Reverted to original color */
                      marginTop: "4px",
                      textAlign: "center",
                    }}
                  >
                    {img.subtitle}
                  </span>
                </div>
              ))}
            </div>
            <a
              href="#"
              style={{
                color: "#007185", /* Reverted to original Amazon blue link color */
                textDecoration: "none",
                marginTop: "auto",
                fontSize: "0.9rem",
                alignSelf: "flex-start",
              }}
            >
              {card.link}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
