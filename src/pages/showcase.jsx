import React from "react";

// TribeFest - "Showcase Your Brand" single-file React component
// Tailwind CSS is used for styling. This file is a complete page component
// that you can drop into a React app (Vite/CRA) with Tailwind configured.

export default function TribeFestShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF7F0] via-[#FFF0E6] to-[#FFF7EA] text-gray-900">
      {/* Top nav */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-[#FF6B6B] to-[#FFB86B] flex items-center justify-center text-white font-bold">TF</div>
          <div>
            <h1 className="text-xl font-bold">Tribe Fest</h1>
            <p className="text-xs text-gray-600">India's Largest Club & Community Festival</p>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <a className="hover:text-[#FF6B6B]" href="#book">Book Your Stall</a>
          <a className="hover:text-[#FF6B6B]" href="#fest">Fest</a>
          <a className="hover:text-[#FF6B6B]" href="#showcase">Showcase Your Brand</a>
          <a className="hover:text-[#FF6B6B]" href="#volunteer">Volunteer Team</a>
        </nav>
        <a href="#book" className="inline-block px-4 py-2 rounded-md bg-[#FF6B6B] text-white text-sm font-semibold shadow-md">Book Now</a>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">A tribe without food and buyable items is nothing.</h2>
          <p className="mt-6 text-lg text-gray-700">Make the tribe fall for your taste and art. Bring unique experiences, games, or activities and engage directly with festival attendees.</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <div className="bg-white/80 border border-gray-200 rounded-lg p-4 w-44">
              <div className="text-2xl font-bold">10,000–15,000</div>
              <div className="text-xs text-gray-500">Footfall / day</div>
            </div>
            <div className="bg-white/80 border border-gray-200 rounded-lg p-4 w-44">
              <div className="text-2xl font-bold">Direct Access</div>
              <div className="text-xs text-gray-500">to Youth & Communities</div>
            </div>
            <div className="bg-white/80 border border-gray-200 rounded-lg p-4 w-44">
              <div className="text-2xl font-bold">20,000+</div>
              <div className="text-xs text-gray-500">YO! Reach</div>
            </div>
          </div>

          <div className="mt-8 flex gap-3">
            <a href="#contact" className="px-5 py-3 rounded-md bg-[#FF8A5B] text-white font-semibold shadow">Join the Movement</a>
            <a href="#zones" className="px-5 py-3 rounded-md border border-[#FF8A5B] text-[#FF8A5B] font-semibold">Check Zones</a>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl p-6 bg-white shadow-2xl">
            <img alt="Tribe Fest sample" src="https://images.unsplash.com/photo-1506152983151-0a6f0b3f3d7b?auto=format&fit=crop&w=1200&q=60" className="w-full h-64 object-cover rounded-xl" />
            <div className="mt-4">
              <h3 className="text-xl font-bold">Flaunt your brand at India's largest club & community festival!</h3>
              <p className="text-sm text-gray-600 mt-2">Food & Flea stalls • Experience partners • Branding partners</p>
            </div>
          </div>

          {/* small badges */}
          <div className="absolute -bottom-4 left-6 flex gap-3">
            <div className="bg-white p-2 rounded-lg shadow text-xs">Food & Flea</div>
            <div className="bg-white p-2 rounded-lg shadow text-xs">Experience Partners</div>
            <div className="bg-white p-2 rounded-lg shadow text-xs">Branding</div>
          </div>
        </div>
      </section>

      {/* Immersive Zones */}
      <section id="zones" className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold">Checkout Our Immersive Zones</h3>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="p-6 bg-white rounded-xl shadow">
            <h4 className="font-semibold">Otaku Village</h4>
            <p className="text-sm text-gray-600 mt-2">Anime, gaming & K-pop paradise. Find collectibles, merch & fandom vibes.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h4 className="font-semibold">Music & Live Stage</h4>
            <p className="text-sm text-gray-600 mt-2">Local bands, DJs & open-mic acts to keep the energy up.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h4 className="font-semibold">Experience Arcade</h4>
            <p className="text-sm text-gray-600 mt-2">Interactive games, VR experiences & brand activations.</p>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-[#FFF8F3] border border-[#FFE6D8] rounded-xl p-8 shadow">
          <h3 className="text-2xl font-bold">Join the Movement! Contact Us</h3>
          <p className="text-sm text-gray-600 mt-2">
            To know more about how your brand can participate and collaborate with Tribe Fest 2k25, fill out the form below or write to us at{" "}
            <span className="font-medium">hello@thetribefest.com</span>
          </p>

          <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className="p-3 rounded-lg border border-gray-200" placeholder="Company / Brand name*" />
            <input className="p-3 rounded-lg border border-gray-200" placeholder="Contact person*" />
            <input className="p-3 rounded-lg border border-gray-200" placeholder="Email*" />
            <input className="p-3 rounded-lg border border-gray-200" placeholder="Phone*" />
            <textarea className="col-span-1 md:col-span-2 p-3 rounded-lg border border-gray-200" rows={4} placeholder="Tell us about your activation / stall idea" />
            <div className="col-span-1 md:col-span-2 flex gap-3">
              <button type="button" className="px-5 py-3 rounded-md bg-[#FF6B6B] text-white font-semibold">Submit</button>
              <a href="mailto:hello@thetribefest.com" className="px-5 py-3 rounded-md border border-[#FF6B6B] text-[#FF6B6B] font-semibold">Email Us</a>
            </div>
          </form>
        </div>
      </section>

      {/* Media & Promotions */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h4 className="text-lg font-bold">Promotions & Media</h4>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
          <div className="p-4 bg-white rounded-lg shadow text-center text-sm">Indian Express</div>
          <div className="p-4 bg-white rounded-lg shadow text-center text-sm">Times of India</div>
          <div className="p-4 bg-white rounded-lg shadow text-center text-sm">Divya Bhaskar</div>
          <div className="p-4 bg-white rounded-lg shadow text-center text-sm">Radio & Billboards</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6 items-start">
          <div>
            <h5 className="font-bold">Tribe Fest</h5>
            <p className="text-sm text-gray-600 mt-2">Beyond the Festival: year-round engagement and community meetups.</p>
          </div>

          <div>
            <h6 className="font-semibold">Contact</h6>
            <p className="text-sm text-gray-600 mt-2">hello@thetribefest.com</p>
            <p className="text-sm text-gray-600">Ahmedabad, India</p>
          </div>

          <div>
            <h6 className="font-semibold">Quick Links</h6>
            <ul className="text-sm text-gray-600 mt-2 space-y-2">
              <li>Book Stall</li>
              <li>Volunteer</li>
              <li>Partners</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-6 py-6 text-center text-sm text-gray-500">
          Copyright © Tribe Fest 2025. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
