import React from 'react';

const Cards = () => {
  const cardData = [
    {
      title: "Electronics",
      image: "https://via.placeholder.com/300x200?text=Electronics",
      link: "#"
    },
    {
      title: "Fashion",
      image: "https://via.placeholder.com/300x200?text=Fashion",
      link: "#"
    },
    {
      title: "Home & Kitchen",
      image: "https://via.placeholder.com/300x200?text=Home+%26+Kitchen",
      link: "#"
    },
    {
      title: "Books",
      image: "https://via.placeholder.com/300x200?text=Books",
      link: "#"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
        >
          <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-lg font-bold">{card.title}</h2>
            <a href={card.link} className="text-blue-500 hover:underline">Shop Now</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;