import React from 'react'

export default function Carousel(){
  return (
    <section className="py-10 bg-tribeGreen">
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-lg overflow-hidden relative">
          <img src="/placeholder-collage.jpg" alt="collage" className="w-full object-cover h-64 md:h-96"/>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-tribeYellow text-tribeDark font-bold px-6 py-2 rounded">OTAKU VILLAGE — Anime, gaming & k-pop paradise</div>
        </div>
      </div>
    </section>
  )
}
