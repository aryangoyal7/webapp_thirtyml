import React, { useState, useEffect } from 'react';
import banner from '/banners/Thirtymllogo.png'

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentSlide === slides.length - 1) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide(currentSlide + 1);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentSlide, slides]);

  return (
    <div className="carousel">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`carousel__slide ${
            index === currentSlide ? 'active' : ''
          }`}
        >
          <img src={banner} alt={slide.title} />
          <h2>{slide.title}</h2>
          <p>{slide.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
