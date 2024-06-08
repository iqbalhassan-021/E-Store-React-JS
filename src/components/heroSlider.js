import React from 'react';

const HeroSlider = () => {
  const siteName = "ISHA PRINTS";
  const siteSlogan = "Wear Your Story, Share Your Style";
  const heroImage = "/assets/images/slide2.jpg";
  return (
    <div className="hero-slider" id="hero">
       <div className="hero-slider-container slide1" style={{ backgroundImage: `url(${heroImage})` }}>
        <h1 className="signature">
          {siteName ? ( <span>{siteName}</span> ) : (<span>The site name will be here</span>) }

        </h1>
        <p>
          <strong>
          {siteSlogan ? ( <span>{siteSlogan}</span> ) : (<span>The site Slogan will be here</span>) }
          </strong>
        </p>
      </div>
    </div>
  );
};

export default HeroSlider;
