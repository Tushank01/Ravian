import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';


const CoFounder = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const coFounders = [
    {
      id: 1,
      name: 'Lokesh',
      image: 'https://i.pinimg.com/564x/38/e7/17/38e7170df8b0b4f8a67d3ea72a14eef1.jpg',
      description:
        'The Founder ',
    },
    {
      id: 2,
      name: 'Dheeraj Gupta',
      image: 'https://i.pinimg.com/564x/f1/8e/dd/f18edd1d04f6710ccb78b6b0f0cab551.jpg',
      description:
        'The Founder',
    },
  ];

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="flex flex-col items-center justify-center max-h-screen">
      <div className="flex flex-col md:flex-row items-center shadow-lg p-6 rounded-lg max-w-4xl w-full h-96">
        <img
          src={coFounders[currentSlide].image}
          alt={coFounders[currentSlide].name}
          className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover mx-4"
        />
        <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left overflow-hidden">
          <h2 className="text-3xl font-bold">{coFounders[currentSlide].name}</h2>
          <p className="mt-2 text-gray-700 line-clamp-3">{coFounders[currentSlide].description}</p>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        {coFounders.map((coFounder, index) => (
          <div
            key={coFounder.id}
            className={`w-3 h-3 rounded-full mx-1 cursor-pointer ${
              index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'
            }`}
            onClick={() => handleSlideChange(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CoFounder;