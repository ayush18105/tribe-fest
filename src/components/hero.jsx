import React from "react";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-inner">

        <h1 className="hero-yo">YO!</h1>

        <h2 className="hero-line1">
          <span className="white">FLAUNT YOUR </span>
          <span className="green">BRAND </span>
          <span className="white">AT </span>
          <span className="red">INDIA'S</span>
        </h2>

        <h2 className="hero-line2">LARGEST CLUB &amp; COMMUNITY FESTIVAL!</h2>

        <div className="cta-wrap">
          <button className="cta-button">BOOK YOUR STALL</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
