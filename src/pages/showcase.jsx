import React from "react";

const Showcase = () => {
  return (
    <section className="showcase-root">
      <div className="showcase-inner">

        {/* SLANTED ROOF */}
        <div className="roof-wrap">
          <div className="roof-main">
            <div className="roof-line">SHOWCASE TO THE PRESENT</div>
            <div className="roof-line">AND THE FUTURE OF THE CITY!</div>
          </div>
          <div className="roof-strip" />
        </div>

        {/* YELLOW PANELS */}
        <div className="panel-wrap">
          <div className="panel-left">
            <div className="panel-content">
              <div className="small-title">DIRECT ACCESS TO</div>
              <div className="big-num">20,000+</div>
              <div className="small-title">YOUTH</div>
            </div>
          </div>

          <div className="panel-right">
            <div className="panel-content">
              <div className="big-num">10,000–15,000</div>
              <div className="foot-text">FOOTFALL/DAY</div>
            </div>

            {/* character image (public/character.png) */}
            <img src="/15.png" alt="character" className="panel-character" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Showcase;
