import React, { useState, useEffect } from 'react';
import './Carousel.css';

const CardCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    require('../images/card1.png'),
    require('../images/card-2.png'),
    require('../images/card3.png'),
    require('../images/card-4.png'),
    require('../images/card-5.png'),
    require('../images/card-6.png'), // Add the first slide again for cyclic behavior
  ];

  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  const goToNextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide + 1) % (slides.length)); // Remove 1 to stop at the last slide
  };

  const goToPrevSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide - 1 + (slides.length - 1)) % (slides.length - 1)); // Remove 1 to stop at the last slide
  };

  // Automatic slide change after 5 seconds
  useEffect(() => {
    const interval = setInterval(goToNextSlide, 3000);
    return () => clearInterval(interval);
  });

  return (
    <div className='card-container' name='Explore'>
    <div className='cards'>
      <h1 className='card-title'>Take A Look At Some Ancient Sites</h1>
      <div className="card-carousel">
        <div className="cards-container" style={{ transform: `translateX(-${activeSlide * 340}px)` }}>
          {slides.map((image, index) => (
            <div
              key={index}
              className={`card ${activeSlide === index ? 'active' : ''}`}
              onClick={() => handleSlideChange(index)}
            >
              <div className="card-image" style={{ backgroundImage: `url(${image})` }} />
            </div>
          ))}
        </div>
        <div className="arrows">
          <button className="arrow-left" onClick={goToPrevSlide}>
            &rarr;
          </button>
          <button className="arrow-right" onClick={goToNextSlide}>
            &rarr;
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CardCarousel;
