import React from "react";

const Volunteer = () => {
  return (
    <main className="bg-[#6C00B2] min-h-screen text-white pb-20">
      <div className="max-w-[1400px] mx-auto px-0 pt-10">

        {/* IMAGE + TOP TITLE */}
        <div className="relative w-full flex justify-center">

          {/* EXACT IMAGE SIZE */}
          <img
            src="/vc.png"
            alt="volunteers"
            className="w-[900px] object-contain"
          />

          {/* TITLE EXACT TOP */}
          <div className="absolute top-[0px]">
            <div className="bg-[#FF1414] rounded-[14px] px-14 py-4 shadow-[0_8px_20px_rgba(0,0,0,0.45)]">
              <h1 className="text-[48px] font-extrabold tracking-wide">
                VOLUNTEER WITH US
              </h1>
            </div>
          </div>
        </div>

        {/* GAP EXACT (same as screenshot) */}
        <div className="h-[40px]"></div>

        {/* CARD WRAPPER WITH STACKED BORDERS */}
        <div className="relative w-[92%] mx-auto">

          {/* STACKED BORDERS EXACT */}
          <div className="absolute -left-[6px] -top-[6px] w-full h-full border-[5px] border-[#F7D03D] rounded-[8px]"></div>
          <div className="absolute -left-[12px] -top-[12px] w-full h-full border-[5px] border-[#FF6A00] rounded-[8px]"></div>
          <div className="absolute -left-[18px] -top-[18px] w-full h-full border-[5px] border-[#00FF7A] rounded-[8px]"></div>

          {/* MAIN BLUE CARD EXACT SIZE AND RADIUS */}
          <div
            className="relative bg-[#0F7FB0] rounded-[8px] px-[40px] py-[40px]"
            style={{
              border: "5px solid black",
            }}
          >
            <h2 className="text-[48px] font-extrabold leading-[52px] mb-[20px]">
              Lend the Tribe a Hand
            </h2>

            {/* DIVIDER EXACT */}
            <div className="border-b-[4px] border-black mb-[24px]"></div>

            <p className="text-[22px] font-semibold leading-[30px] mb-[22px]">
              You don’t need to know every single club’s lore. But a passion for
              bringing people together? For fostering authentic connections?
            </p>

            <p className="text-[22px] font-semibold leading-[30px] mb-[22px]">
              That surely helps. We’re looking for you if you are ready to go
              the extra mile as a volunteer to spark connections and create
              unforgettable moments.
            </p>

            <p className="text-[22px] font-semibold leading-[30px] mb-[25px]">
              Ready to unleash your inner community leader?
            </p>

            {/* CTA BUTTON EXACT SIZE AND COLOR */}
            <a
              className="inline-block bg-[#FF1414] text-[#FFF7DA] font-extrabold
              text-[22px] px-[22px] py-[10px] rounded-[6px]"
              href="#"
            >
              Fill Up The Volunteer Form Now
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Volunteer;
