import React from 'react'

export default function FeatureCard({title, desc, icon}) {
  return (
    <div className="rounded-lg p-6 bg-tribePurple/80 text-center shadow-lg">
      <div className="h-24 flex items-center justify-center mb-4">
        <div className="w-20 h-20 bg-tribeYellow rounded-full flex items-center justify-center text-tribeDark font-bold">{icon}</div>
      </div>
      <h4 className="font-extrabold text-lg">{title}</h4>
      <p className="mt-2 text-sm">{desc}</p>
    </div>
  )
}
