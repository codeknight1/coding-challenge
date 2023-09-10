import React, { useState } from 'react';
import { motion } from 'framer-motion';

const cardData = [
  {
    id: 1,
    imageSrc: 'a.jpeg',
    title: 'To mallan how far',
    subtitle: 'Gamu ba text da za sa',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
  },
  {
    id: 2,
    imageSrc: 'images1.png',
    title: 'To mallan how far',
    subtitle: 'Gamu ba text da za sa',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
  },
  {
    id: 3,
    imageSrc: 'd.jpeg',
    title: 'To mallan how far',
    subtitle: 'Gamu ba text da za sa',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
  },
];

function CardSection() {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardId) => {
    setSelectedCard(selectedCard === cardId ? null : cardId);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {cardData.map((card) => (
        <motion.div
          key={card.id}
          className={`relative rounded-lg shadow-lg cursor-pointer transform ${
            selectedCard === card.id ? 'rotate-y-180' : 'rotate-y-0'
          } transition-transform duration-500`}
          onClick={() => handleCardClick(card.id)}
        >
          <div className="bg-white p-4">
            <img src={card.imageSrc} alt={`Image ${card.id}`} className="w-full" />
            <h2 className="text-xl font-semibold">{card.title}</h2>
            <h3 className="text-gray-600">{card.subtitle}</h3>
          </div>
          {selectedCard === card.id && (
            <div className="bg-white p-4 absolute inset-0">
              <p>{card.content}</p>
              <button
                onClick={() => handleCardClick(null)}
                className="absolute top-2 right-2 p-2 bg-gray-200 rounded-full"
              >
                Close
              </button>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}

export default CardSection;
