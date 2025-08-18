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
      {  image: UNO },
      { image: carToy },
      { image: drawingboard },
    ],
    link: "#",
    customLayout: true,
  },
  {
    title: "Customers’ Most-Loved Products",
    items: [
      {  image: masks },
      {  image: bell },
      {  image: jars },
      {  image: toaster },
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
      { name: "Kurta & sets", image: twoModels },
      { name: "Tops", image: girlmodel },
      { name: "Dresses", image: hindi2models },
      { name: "Sarees", image:  hindi3models},
    ],
    link: "#",
  },
];

const cardSectionStyle = {
  width: '100vw',
  background: '#44403B',
  padding: '4px 0 32px 0',
  margin: 0,
};

const gridStyle = {
  width: '90vw',
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '12px 25px',
  paddingLeft: '32px',
  paddingRight: '32px',
};

const cardStyle = {
  background: '#fff',
  boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
  borderRadius: '0',
  padding: '18px 24px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '320px',
  width: 'calc((90vw - 3 * 24px) / 4)',
  boxSizing: 'border-box',
  transition: 'box-shadow 0.3s',
};

export default function Section4Cards() {
  return (
    <div style={cardSectionStyle}>
      <div style={gridStyle}>
        {cardData.map((card, index) => (
          <div key={index} style={cardStyle}>
            <h2 style={{
              fontSize: '1.35rem',
              paddingBottom: '16px',
              fontWeight: 'bold',
              marginBottom: '18px',
              color: '#222',
              letterSpacing: '0.5px',
              textAlign: 'left',
              width: '100%',
              height: '56px',
              display: 'flex',
              alignItems: 'center',
            }}>{card.title}</h2>
            {card.customLayout ? (
              <>
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '18px' }}>
                  <img src={card.items[0].image} alt={card.items[0].name} style={{ width: '120px', height: '120px', objectFit: 'contain', borderRadius: '16px', marginBottom: '1px' }} />
                  <div style={{ fontSize: '1rem', color: '#333', textAlign: 'center', marginTop: '0px', lineHeight: '1.3', fontWeight: '500' }}>
                    Storio Rechargeable Toys Talking Cactus Baby Toys for Kids Dancing Cactus Toys…<br />
                    <span style={{ fontWeight: 'bold', color: 'rgba(0, 0, 0, 1)', fontSize: '1.1rem' }}>₹319</span>
                  </div>
                </div>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', gap: '12px' }}>
                  {card.items.slice(0, 4).map((item, idx) => (
                    <div key={idx} style={{ textAlign: 'center', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '22%' }}>
                      {idx === 0 ? (
                        <div style={{ padding: '6px', border: '2px solid rgba(31, 131, 148, 1)', borderRadius: '14px', background: '#f7fafc', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px', boxShadow: '0 2px 8px rgba(31,131,148,0.08)', width: '100%' }}>
                          <img src={item.image} alt={item.name} style={{ width: '38px', height: '60px', objectFit: 'contain', borderRadius: '10px', border: '2px solid rgba(31, 131, 148, 1)', background: '#fff', boxShadow: '0 1px 4px rgba(31,131,148,0.10)' }} />
                        </div>
                      ) : (
                        <img src={item.image} alt={item.name} style={{ width: '100%', height: '70px', objectFit: 'contain', borderRadius: '10px', marginBottom: '1px', border: '2px solid rgba(31, 131, 148, 1)', background: '#fff' }} />
                      )}e
                      <p style={{ fontSize: '0.8rem', color: '#555', marginTop: '-6px', textAlign: 'center', padding: 0 }}>{item.name}</p>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', columnGap: '14px', rowGap: '8px', flexGrow: 1, width: '100%' }}>
                {card.items.map((item, idx) => (
                  <div key={idx} style={{ textAlign: 'left', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <img src={item.image} alt={item.name} style={{ width: '110px', height: '110px', objectFit: 'contain', borderRadius: '0', padding: 0, margin: 0, marginBottom: '10px' }} />
                    <p style={{ fontSize: '0.95rem', color: '#555', margin: '0', marginTop: '1px', textAlign: 'left', padding: '0', fontWeight: '500' }}>{item.name}</p>
                  </div>
                ))}
              </div>
            )}
            {(index !== 0 && index !== 2) && (
              <a href={card.link} style={{
                color: '#007185',
                textDecoration: 'none',
                marginTop: '12px',
                fontSize: '1.1rem',
                cursor: 'pointer',
                alignSelf: 'flex-start',
              }}>
                {index === 1 ? 'Explore more' : 'See more'}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
