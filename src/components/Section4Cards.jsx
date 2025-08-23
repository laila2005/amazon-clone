import React from 'react';

// Example images, replace with your own assets
import cleanser from '../assets/section4/cleanser.png';
import dancingCactus from '../assets/section4/dancing-cactus.png';
import dettolP from '../assets/section4/dettol-p.png';
import dettolS from '../assets/section4/dettol-s.png';
import drawingboard from '../assets/section4/drawingboard.png';
import girlmodel from '../assets/section4/girlmodel.png';
import hindi2models from '../assets/section4/hindi2models.png';
import hindi3models from '../assets/section4/hindi3models.png';
import jars from '../assets/section4/jars.png';
import masks from '../assets/section4/masks.png';
import spf from '../assets/section4/spf.png';
import toaster from '../assets/section4/toaster.png';
import twoModels from '../assets/section4/twoModels.png';
import UNO from '../assets/section4/UNO.png';
import bell from '../assets/section4/bell.png';
import carToy from '../assets/section4/carToy.png';

const cardData = [
  {
    title: "Best Sellers in Toys & Games",
    items: [
      { image: dancingCactus },
      { image: UNO },
      { image: carToy },
      { image: drawingboard },
    ],
    link: "#",
    customLayout: true,
  },
  {
    title: "Customers’ Most-Loved Products",
    items: [
      { image: masks },
      { image: bell },
      { image: jars },
      { image: toaster },
    ],
    link: "#",
  },
  {
    title: "Best Sellers in Beauty",
    items: [
      { image: spf },
      { image: cleanser },
      { image: dettolP },
      { image: dettolS },
    ],
    link: "#",
  },
  {
    title: "Latest styles | Dresses, kurta & more | 50% -...",
    items: [
      { image: twoModels },
      { image: girlmodel },
      { image: hindi2models },
      { image: hindi3models },
    ],
    link: "#",
  },
];

const cardSectionStyle = {
  width: '100%',
  background: '#44403B', /* Exact same background color as Cards.jsx */
  padding: '20px 0 40px 0', /* Same padding as Cards.jsx */
  position: 'relative',
  zIndex: 1,
  margin: 0,
};

const gridStyle = {
  width: '95%',
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '20px',
  paddingLeft: '20px', /* Match padding with Cards.jsx */
  paddingRight: '20px', /* Match padding with Cards.jsx */
  boxSizing: 'border-box',
  alignItems: 'stretch',
};

const cardStyle = {
  background: '#fff',
  boxShadow: '0 4px 16px rgba(0,0,0,0.12)', /* Same as Cards.jsx */
  borderRadius: '6px',
  padding: '18px', /* Same padding as Cards.jsx */
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  minHeight: '420px',
  width: '100%',
  boxSizing: 'border-box',
  transition: 'transform 0.3s, box-shadow 0.3s', /* Match transition with Cards.jsx */
};

export default function Section4Cards() {
  return (
    <div className="section-cards" style={cardSectionStyle}>
      <div className="card-grid" style={gridStyle}>
        {cardData.map((card, index) => (
          <div key={index} className="card-item" style={cardStyle}>
            <h2
              style={{
                fontSize: '1.2rem',
                fontWeight: 'bold',
                marginBottom: '16px',
                color: '#222',
                textAlign: 'left',
                width: '100%',
              }}
            >
              {card.title}
            </h2>

            {card.customLayout ? (
              <>
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginBottom: '18px',
                  }}
                >
                  <img
                    className="slider-img"
                    src={card.items[0].image}
                    alt={card.items[0].name}
                    style={{
                      width: '100%',
                      maxWidth: '120px',
                      height: 'auto',
                      maxHeight: '120px',
                      objectFit: 'contain',
                      borderRadius: '16px',
                      marginBottom: '1px',
                    }}
                  />
                  <div
                    style={{
                      fontSize: '1rem',
                      color: '#333',
                      textAlign: 'center',
                      marginTop: '0px',
                      lineHeight: '1.3',
                      fontWeight: '500',
                    }}
                  >
                    Storio Rechargeable Toys Talking Cactus Baby Toys for Kids Dancing Cactus Toys…
                    <br />
                    <span
                      style={{
                        fontWeight: 'bold',
                        color: 'rgba(0, 0, 0, 1)',
                        fontSize: '1.1rem',
                      }}
                    >
                      ₹319
                    </span>
                  </div>
                </div>

                <div
                  className="item-grid"
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: '12px',
                  }}
                >
                  {card.items.slice(0, 4).map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        textAlign: 'center',
                        padding: 0,
                        margin: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '22%',
                      }}
                    >
                      {idx === 0 ? (
                        <div
                          style={{
                            padding: '6px',
                            border: '2px solid rgba(31, 131, 148, 1)',
                            borderRadius: '14px',
                            background: '#f7fafc',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '8px',
                            boxShadow: '0 2px 8px rgba(31,131,148,0.08)',
                            width: '100%',
                          }}
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            style={{
                              width: '38px',
                              height: '60px',
                              objectFit: 'contain',
                              borderRadius: '10px',
                              border: '2px solid rgba(31, 131, 148, 1)',
                              background: '#fff',
                              boxShadow: '0 1px 4px rgba(31,131,148,0.10)',
                            }}
                          />
                        </div>
                      ) : (
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{
                            width: '100%',
                            height: '70px',
                            objectFit: 'contain',
                            borderRadius: '10px',
                            marginBottom: '1px',
                            border: '2px solid rgba(31, 131, 148, 1)',
                            background: '#fff',
                          }}
                        />
                      )}
                      <p
                        style={{
                          fontSize: '0.8rem',
                          color: '#555',
                          marginTop: '-6px',
                          textAlign: 'center',
                          padding: 0,
                        }}
                      >
                        {item.name}
                      </p>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div
                className="item-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '10px', /* Match gap with Cards.jsx */
                  width: '100%',
                  flexGrow: 1,
                  boxSizing: 'border-box',
                }}
              >
                {card.items.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center', /* Match alignItems with Cards.jsx */
                      padding: '4px', /* Match padding with Cards.jsx */
                    }}
                  >
                    <img
                      className="slider-img"
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: '100%',
                        maxWidth: '100px', /* Match maxWidth with Cards.jsx */
                        height: 'auto',
                        maxHeight: '100px', /* Match maxHeight with Cards.jsx */
                        objectFit: 'contain',
                        borderRadius: '0',
                      }}
                    />
                    <p
                      style={{
                        fontSize: '0.9rem', /* Match fontSize with Cards.jsx */
                        color: '#555',
                        marginTop: '6px', /* Match marginTop with Cards.jsx */
                        textAlign: 'center', /* Match textAlign with Cards.jsx */
                      }}
                    >
                      {index === cardData.length - 1
                        ? ['Kurta & sets', 'Tops', 'Dresses', 'Sarees'][idx]
                        : item.name}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {(index !== 0 && index !== 2) && (
              <a
                href={card.link}
                style={{
                  color: '#007185',
                  textDecoration: 'none',
                  marginTop: '12px', /* Match marginTop with Cards.jsx */
                  fontSize: '0.95rem',
                  alignSelf: 'flex-start',
                }}
              >
                {index === 1 ? 'Explore more' : 'See more'}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}