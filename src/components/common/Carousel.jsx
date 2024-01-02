// Carousel.jsx
import React, { useState } from 'react';
import styled from 'styled-components';

const StyledCarousel = styled.div`
  overflow: hidden;
  width: 100%;
  max-width: 600px;
`;

const StyledCarouselContainer = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

const StyledCarouselItem = styled.div`
  flex: 0 0 100%;
`;

const Carousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  return (
    <StyledCarousel>
      <StyledCarouselContainer
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <StyledCarouselItem key={index}>
            <img src={image} alt={`Slide ${index + 1}`} style={{ width: '100%' }} />
          </StyledCarouselItem>
        ))}
      </StyledCarouselContainer>
      <button onClick={prevSlide}>Previous</button>
      <button onClick={nextSlide}>Next</button>
    </StyledCarousel>
  );
};

export default Carousel;
