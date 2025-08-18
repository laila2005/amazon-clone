import model from '../assets/model.png';
import womenShoes from '../assets/womenShoes.png';
import watch from '../assets/watch.png';
import fashionJewellery from '../assets/e37241c00bd9b438681a4c2e9d21dbd760daf192.png';

import carWheels from '../assets/car wheels.png';
import vacuumCleaner from '../assets/vaccume cleaner.png';
import headwear from '../assets/headwear.png';
import cleaningAccessories from '../assets/cleaningCar.png';

import bedsheets from '../assets/bed.png';
import curtains from '../assets/curttens.png';
import ironingBoard from '../assets/ironning.png';
import homeDecor from '../assets/decor.png';

import spinMops from '../assets/cleaning.png';
import bathroomHardware from '../assets/towel.png';
import hammersScrewdrivers from '../assets/hammer.png';
import extensionBoards from '../assets/electricity.png';
const cardData = [
  {
    title: "Automotive essentials| Up to 60% off",
    items: [
  { name: "Cleaning accessories", image: cleaningAccessories },
  { name: "Vacuum cleaner", image: vacuumCleaner },
  { name: "Headwear", image: headwear },
  { name: "Car wheels", image: carWheels },
    ],
    link: "#",
  },
  {
    title: "Up to 60% off | Styles for women",
    items: [
  { name: "Women’s Clothing", image: model },
  { name: "Footwear+Handbags", image: womenShoes },
  { name: "Watches", image: watch },
  { name: "Fashion jewellery", image: fashionJewellery },
    ],
    link: "#",
  },
  {
    title: "Starting ₹199 | Amazon Brands & more",
    items: [
      { name: "Starting $199| Bedsheets", image: bedsheets },
      { name: "Starting $199| Curtains", image: curtains },
      { name: "Minimum 40% off | Ironing board & more", image: ironingBoard },
      { name: "Up to 60% off | Home decor", image: homeDecor },
    ],
    link: "#",
  },
  {
    title: "Starting ₹99 | Home improvement essentials",
    items: [
      { name: "Spin mops, wipes & more", image: spinMops },
      { name: "Bathroom hardware & accessories", image: bathroomHardware  },
      { name: "Hammers, screwdrivers & more", image: hammersScrewdrivers },
      { name: "Extension boards, plugs & more", image: extensionBoards },
    ],
    link: "#",
  },
];

const cardSectionStyle = {
  width: '100vw',
  background: '#44403B',
  padding: '48px 0 32px 0',
  margin: 0,
};

const gridStyle = {
  width: '90vw',
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '24px',
};

const cardStyle = {
  background: '#fff',
  boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
  borderRadius: '0',
  padding: '88px 18px 18px 18px', // maximum top padding
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '320px',
  transition: 'box-shadow 0.3s',
};

function Cards() {
  return (
  <div style={{
    ...cardSectionStyle,
    paddingTop: '290px',
  paddingBottom: '0px', // tightest bottom padding
    marginTop: '-100px',
    position: 'relative',
    zIndex: 1
  }}>
      <div style={{
        ...gridStyle,
        gap: '24px',
        alignItems: 'stretch',
        minHeight: '340px',
      }}>
        {cardData.map((card, index) => (
          <div key={index} style={{
            ...cardStyle,
            padding: '18px',
            width: '270px', 
            height: '570px', 
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            margin: 0,
          }}>
            <h2 style={{
              fontSize: '1.35rem',
              paddingBottom: '16px',
              fontWeight: 'bold',
              marginBottom: '18px',
              color: '#222',
              letterSpacing: '0.5px',
              textAlign: 'left',
              width: '100%',
              height: '56px', // fixed height for title
              display: 'flex',
              alignItems: 'center',
            }}>{card.title}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0px 0px', rowGap: '0px', flexGrow: 1, width: '100%' }}>
              {card.items.map((item, idx) => (
                <div key={idx} style={{ textAlign: 'center', padding: 0, margin: 0 }}>
                  <img src={item.image} alt={item.name} style={{ width: '110px', height: '110px', objectFit: 'cover', borderRadius: '0', padding: 0, margin: 0 }} />
                  <p style={{ fontSize: '0.95rem', color: '#555', marginTop: 0, textAlign: 'center', padding: 0 }}>{item.name}</p>
                </div>
              ))}
            </div>
            <a href={card.link} style={{
              color: '#007185',
              textDecoration: 'none',
              marginTop: '12px',
              fontSize: '1.1rem',
              cursor: 'pointer',
              alignSelf: 'flex-start',
            }}>
              {(() => {
                if (index === 0) return 'See more';
                if (index === 1) return 'End of season sale';
                if (index === 2) return 'See more';
                if (index === 3) return 'Explore more';
                return 'See more';
              })()}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;