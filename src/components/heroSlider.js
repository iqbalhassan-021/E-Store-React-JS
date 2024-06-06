import React from 'react';

const HeroSlider = () => {
  return (
    <div className="hero-slider" id="hero">
      <div className="hero-slider-container slide1" style={{backgroundImage:"url('/assets/images/slide2.jpg')"}}>
        <h1 className="signature">ISHA PRINTS</h1>
        <p>
          <strong>Wear Your Story, Share Your Style</strong>
        </p>
      </div>
    </div>
  );
};

export default HeroSlider;
