import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <img 
        className="hero-image-left" 
        src="https://api.builder.io/api/v1/image/assets/TEMP/3921ad46f3649bc3886ace21b2d7a917f9512410?width=1274" 
        alt="Creative workspace" 
      />
      
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="title-decorative">C</span>
          <span className="title-main">REATIVE PLAYGROUND</span>
        </h1>
        
        <h2 className="hero-subtitle">FOR EVERYBODY</h2>
        
        <button className="cta-button">
          <span className="button-label">LET'S PLAY</span>
          <svg className="button-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#0D0E10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <p className="hero-description">
          I'M PASSIONATE ABOUT HELPING FEMALE CREATIVES AND DREAMERS BRING THEIR VISION TO LIFE. I OFFER SOULFUL, FEMININE, AND TIMELESS SERVICES THAT HELPS YOU CREATE THE LIFE AND BUSINESS YOU LOVE.
        </p>
      </div>
      
      <img 
        className="hero-image-bottom" 
        src="https://api.builder.io/api/v1/image/assets/TEMP/e429537586ecb0a2eed3f95be5f3dffb8622c393?width=476" 
        alt="Portrait" 
      />
    </section>
  );
};

export default Hero;
