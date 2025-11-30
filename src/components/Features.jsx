import React from "react";

const Features = () => {
  return (
    <section className="w-full bg-[#6C00B2] py-[120px]">
      <div className="max-w-[1600px] mx-auto px-10">

        {/* Force 3 columns on desktop, stack on very small screens */}
        <div className="grid grid-cols-3 sm:grid-cols-1 gap-16 items-start text-center">

          {/* CARD 1 */}
          <div className="flex flex-col items-center">
            <div className="w-[420px] h-[420px] flex items-center justify-center mb-8">
              <img src="/stall.png" alt="stall" className="max-w-full max-h-full object-contain" />
            </div>

            <div className="bg-[#FF1414] px-14 py-6 rounded-[20px] mb-6">
              <h3 className="font-extrabold text-[#A1FF6B] text-[56px] leading-tight">FOOD & FLEA<br/>STALLS</h3>
            </div>

            <p className="text-white font-extrabold text-[22px] leading-tight max-w-[420px]">
              A TRIBE WITHOUT FOOD AND BUYABLE ITEMS IS NOTHING.
              MAKE THE TRIBE FALL FOR YOUR TASTE AND ART.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="flex flex-col items-center">
            <div className="w-[420px] h-[420px] flex items-center justify-center mb-8">
              <img src="/experience .png" alt="experience" className="max-w-full max-h-full object-contain" />
            </div>

            <div className="bg-[#FF1414] px-14 py-6 rounded-[20px] mb-6">
              <h3 className="font-extrabold text-[#A1FF6B] text-[56px] leading-tight">EXPERIENCE<br/>PARTNERS</h3>
            </div>

            <p className="text-white font-extrabold text-[22px] leading-tight max-w-[420px]">
              BRING UNIQUE EXPERIENCES, GAMES, OR ACTIVITIES AND
              ENGAGE DIRECTLY WITH FESTIVAL ATTENDEES.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="flex flex-col items-center">
            <div className="w-[420px] h-[420px] flex items-center justify-center mb-8">
              <img src="/branding.png" alt="branding" className="max-w-full max-h-full object-contain" />
            </div>

            <div className="bg-[#FF1414] px-14 py-6 rounded-[20px] mb-6">
              <h3 className="font-extrabold text-[#A1FF6B] text-[56px] leading-tight">BRANDING<br/>PARTNERS</h3>
            </div>

            <p className="text-white font-extrabold text-[22px] leading-tight max-w-[420px]">
              COLLABORATE AS A BRANDING PARTNER AND PUT YOUR NAME AT THE HEART OF THE EVENT.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
