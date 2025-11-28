// src/App.jsx
import Header from "./components/Header";
import Hero from "./components/hero";
import Showcase from "./pages/showcase"; // <-- ensure this exact path

function App() {
  return (
    <div className="w-full min-h-screen bg-[#6C00B2] overflow-x-hidden">
      <Header />
      <Hero />

      {/* show the showcase section we added */}
      <section id="showcase">
        <Showcase />
      </section>
    </div>
  );
}

export default App;
