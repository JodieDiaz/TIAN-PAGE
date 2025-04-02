// app/components/Hero.jsx

import React from "react";
import VideoCarousel from "./VideoCarousel";

const Hero = () => {
  return (
    <section className="hero">
      <div className="video-container">
        <VideoCarousel />
      </div>
    </section>
  );
};

export default Hero;
