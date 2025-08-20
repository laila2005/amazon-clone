import React, { useState, useEffect } from "react";
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
    <div style={{ position: "relative", width: "100%", height: "100vh", overflow: "visible", marginBottom: "25vh" }}>
      {/* Navbar */}
      <div
        className="nav-links"
        style={{
          width: "100%",
          background: "rgba(35, 47, 62, 1)",
          color: "#FFF",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "6px 10px",
          gap: "12px",
          fontSize: "0.85rem",
          fontFamily: "Arial, sans-serif",
          zIndex: 10,
        }}
      >
        {[
          "All",
          "Amazon mini TV",
          "Sell",
          "Best Sellers",
          "Today's Deals",
          "Mobiles",
          "Customer Service",
          "Prime",
          "Electronics",
          "Fashion",
          "New Releases",
          "Home & Kitchen",
          "Amazon Pay",
        ].map((item) => (
          <a
            key={item}
            href="#"
            style={{ color: "#FFF", textDecoration: "none", whiteSpace: "nowrap", padding: "0 0.5rem" }}
          >
            {item}
          </a>
        ))}
      </div>

      {/* Slideshow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
        }}
      >
        {/* Gradient overlay for smoother card transition */}
        <div 
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "30%",
            background: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 100%)",
            zIndex: 5,
            pointerEvents: "none"
          }}
        ></div>
        <img
          src={images[currentIndex]}
          alt="Slide"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.25s ease",
            transform:
              nextIndex !== null
                ? slideDirection === "right"
                  ? "translateX(-100%)"
                  : "translateX(100%)"
                : "translateX(0)",
            zIndex: 2,
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
              transition: "transform 0.25s ease",
              transform: "translateX(0)",
              zIndex: 3,
            }}
          />
        )}
      </div>

      {/* Cards */}
      <div
        className="hero-slider-cards card-grid"
        style={{
          position: "absolute",
          bottom: "-50%", /* Make cards overlap by positioning them halfway outside the hero section */
          left: "50%",
          transform: "translateX(-50%)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          width: "95%",
          maxWidth: "1200px",
          zIndex: 20, /* Increased z-index to ensure cards appear above gradient */
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        {cards.map((card) => (
          <div
            key={card.title}
            className="hero-card"
            style={{
              background: "#fff",
              boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              borderRadius: "8px",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
          >
            <h3
              style={{
                fontSize: "1.1rem",
                fontWeight: "bold",
                marginBottom: "12px",
                textAlign: "left",
              }}
            >
              {card.title}
            </h3>
            <div
              className="item-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "8px",
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
                  <img
                    className="slider-img"
                    src={img.src}
                    alt={img.subtitle}
                    style={{
                      width: "100px",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "0.8rem",
                      color: "#555",
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
                color: "#007185",
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