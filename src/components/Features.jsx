import React from 'react'
import FeatureCard from './FeatureCard'

export default function Features(){
  const items = [
    {title:'Food & Flea Stalls', desc:'A tribe without food and buyable items is nothing. Make the tribe fall for your taste and art.', icon:'🍔'},
    {title:'Experience Partners', desc:'Bring unique experiences, games, or activities to engage directly with festival attendees.', icon:'🎮'},
    {title:'Branding Partners', desc:'Collaborate as a branding partner and put your name at the heart of the event.', icon:'📢'}
  ]

  return (
    <section className="py-12 bg-tribePurple">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        {items.map((it,i)=> <FeatureCard key={i} {...it} />)}
      </div>
    </section>
  )
}
