import React from "react";

export default function Volunteer() {
  return (
    <div className="min-h-screen bg-[#6800B0] text-white px-10 py-16">

      <h1 className="text-4xl font-extrabold mb-6">Volunteer Team</h1>

      <p className="text-lg max-w-3xl leading-relaxed">
        Join the Tribe Fest volunteer team and be part of India’s largest
        community festival. Work with creators, artists, brands and youth-driven
        activities. Gain experience, certificates and lots of fun!
      </p>

      <div className="mt-10 bg-[#FFD800] text-black p-6 rounded-xl max-w-xl">
        <h2 className="text-2xl font-bold">What You Get?</h2>
        <ul className="mt-3 space-y-2 text-lg">
          <li>• Official Volunteer Certificate</li>
          <li>• Experience in event management</li>
          <li>• Food + Access inside venue</li>
          <li>• Meet influencers & creators</li>
        </ul>
      </div>

    </div>
  );
}
