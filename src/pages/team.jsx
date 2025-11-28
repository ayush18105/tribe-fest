import React from "react";

export default function Team() {
  return (
    <div className="min-h-screen bg-[#6800B0] text-white px-10 py-16">

      <h1 className="text-4xl font-extrabold mb-6">Our Team</h1>

      <p className="text-lg max-w-3xl leading-relaxed">
        Tribe Fest is built by passionate creators, designers, organizers and
        community builders working year-round to deliver India’s largest club &
        community festival.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-10">

        <div className="bg-[#8CE04A] text-black p-6 rounded-xl text-center font-bold">
          <h2 className="text-xl">Founder</h2>
          <p className="mt-2">Tribe & Co.</p>
        </div>

        <div className="bg-[#FFD800] text-black p-6 rounded-xl text-center font-bold">
          <h2 className="text-xl">Core Team</h2>
          <p className="mt-2">Operations • Creators • Design</p>
        </div>

        <div className="bg-[#FF1E1E] text-white p-6 rounded-xl text-center font-bold">
          <h2 className="text-xl">Community Managers</h2>
          <p className="mt-2">Youth & Volunteers</p>
        </div>

      </div>

    </div>
  );
}
