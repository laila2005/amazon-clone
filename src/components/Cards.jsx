import React from "react";
import model from "../assets/model.png";
import womenShoes from "../assets/womenShoes.png";
import watch from "../assets/watch.png";
import fashionJewellery from "../assets/e37241c00bd9b438681a4c2e9d21dbd760daf192.png";
import carWheels from "../assets/car wheels.png";
import vacuumCleaner from "../assets/vaccume cleaner.png";
import headwear from "../assets/headwear.png";
import cleaningAccessories from "../assets/cleaningCar.png";
import bedsheets from "../assets/bed.png";
import curtains from "../assets/curttens.png";
import ironingBoard from "../assets/ironning.png";
import homeDecor from "../assets/decor.png";
import spinMops from "../assets/cleaning.png";
import bathroomHardware from "../assets/towel.png";
import hammersScrewdrivers from "../assets/hammer.png";
import extensionBoards from "../assets/electricity.png";

const cardData = [
  {
    title: "Automotive essentials| Up to 60% off",
    items: [
      { name: "Cleaning accessories", image: cleaningAccessories },
      { name: "Vacuum cleaner", image: vacuumCleaner },
      { name: "Headwear", image: headwear },
      { name: "Car wheels", image: carWheels },
    ],
    link: "See more",
  },
  {
    title: "Up to 60% off | Styles for women",
    items: [
      { name: "Women’s Clothing", image: model },
      { name: "Footwear+Handbags", image: womenShoes },
      { name: "Watches", image: watch },
      { name: "Fashion jewellery", image: fashionJewellery },
    ],
    link: "End of season sale",
  },
  {
    title: "Starting ₹199 | Amazon Brands & more",
    items: [
      { name: "Starting ₹199 | Bedsheets", image: bedsheets },
      { name: "Starting ₹199 | Curtains", image: curtains },
      { name: "Minimum 40% off | Ironing board & more", image: ironingBoard },
      { name: "Up to 60% off | Home decor", image: homeDecor },
    ],
    link: "See more",
  },
  {
    title: "Starting ₹99 | Home improvement essentials",
    items: [
      { name: "Spin mops, wipes & more", image: spinMops },
      { name: "Bathroom hardware & accessories", image: bathroomHardware },
      { name: "Hammers, screwdrivers & more", image: hammersScrewdrivers },
      { name: "Extension boards, plugs & more", image: extensionBoards },
    ],
    link: "Explore more",
  },
];

function Cards() {
  return (
    <div
      style={{
        width: "100%",
        background: "#44403B", /* Exact same background color as HeroSlider */
        padding: "20px 0 40px 0", /* Added small top padding for better spacing */
        position: "relative",
        zIndex: 1,
        marginTop: "0px", /* No gap for seamless connection */
        boxShadow: "none", /* Removed shadow for a smoother connection */
      }}
    >
      <div
        className="card-grid"
        style={{
          width: "95%",
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          alignItems: "stretch",
          paddingLeft: "20px", /* Match padding with hero slider cards */
          paddingRight: "20px", /* Match padding with hero slider cards */
          boxSizing: "border-box" /* Ensure padding is included in width calculation */
        }}
      >
        {cardData.map((card, index) => (
          <div
            key={index}
            className="card-item"
            style={{
              background: "#fff",
              boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
              borderRadius: "6px",
              padding: "18px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              minHeight: "420px",
            }}
          >
            {/* Title */}
            <h2
              style={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                marginBottom: "16px",
                color: "#222",
                textAlign: "left",
                width: "100%",
              }}
            >
              {card.title}
            </h2>

            {/* Item Grid */}
            <div
              className="item-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "10px",
                width: "100%",
                flexGrow: 1,
                boxSizing: "border-box",
              }}
            >
              {card.items.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "4px",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: "100%",
                      maxWidth: "100px",
                      height: "auto",
                      maxHeight: "100px",
                      objectFit: "contain",
                    }}
                  />
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "#555",
                      marginTop: "6px",
                      textAlign: "center",
                    }}
                  >
                    {item.name}
                  </p>
                </div>
              ))}
            </div>

            {/* Link */}
            <a
              href="#"
              style={{
                color: "#007185",
                textDecoration: "none",
                marginTop: "12px",
                fontSize: "0.95rem",
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
}

export default Cards;