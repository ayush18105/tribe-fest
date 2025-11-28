import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-tribeDark text-white py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h4 className="font-extrabold text-2xl">Beyond the Festival: Year-Round Engagement</h4>
        <p className="mt-2 text-sm">Tribe Fest is just the starting line. Attendees become part of Tribe & Co.'s year-long programming...</p>

        <div className="mt-6">
          <a className="inline-block px-6 py-3 bg-tribeYellow text-tribeDark font-bold rounded">JOIN THE MOVEMENT! CONTACT US</a>
        </div>

        <p className="mt-6 text-xs text-gray-300">Copyright @ Tribe Fest 2025 All rights reserved</p>
      </div>
    </footer>
  )
}
