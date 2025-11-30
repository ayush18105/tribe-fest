// src/App.jsx
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/hero";
import Showcase from "./pages/showcase";
import Volunteer from "./pages/volunteer";
import Team from "./pages/team";

function App() {
  return (
    <div className="w-full min-h-screen bg-[#6C00B2] overflow-x-hidden">
      <Header />

      <Routes>
        {/* HOME (only Hero) */}
        <Route path="/" element={<Hero />} />

        {/* Showcase page */}
        <Route path="/showcase" element={<Showcase />} />

        {/* Volunteer page */}
        <Route path="/volunteer" element={<Volunteer />} />

        {/* Team page */}
        <Route path="/team" element={<Team />} />
      </Routes>
    </div>
  );
}

export default App;
