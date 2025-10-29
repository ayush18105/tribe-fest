import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="main-header">
      <div className="logo">
        <img src="/logo.png" alt="Tribe Fest Logo" />
      </div>

      <nav className={`nav-links ${open ? "active" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>Fest</Link>
        <Link to="/showcase" onClick={() => setOpen(false)}>Showcase Your Brand</Link>
        <Link to="/volunteer" onClick={() => setOpen(false)}>Volunteer</Link>
        <Link to="/team" onClick={() => setOpen(false)}>Team</Link>
      </nav>

      <div className="menu-toggle" onClick={() => setOpen(!open)}>☰</div>

      <style jsx="true">{`
        .main-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 25px;
          background-color: #0f172a; /* dark blue bg like PDF */
          color: white;
          font-family: 'Arial', sans-serif;
        }
        .logo img {
          height: 50px;
        }
        .nav-links {
          display: flex;
          gap: 20px;
        }
        .nav-links a {
          color: #fcd34d; /* gold/yellow text color */
          text-decoration: none;
          font-weight: bold;
        }
        .nav-links a:hover {
          color: #f87171; /* light red hover */
        }
        .menu-toggle {
          display: none;
          font-size: 28px;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          .nav-links {
            position: absolute;
            top: 70px;
            left: 0;
            right: 0;
            flex-direction: column;
            background-color: #0f172a;
            display: none;
            padding: 20px;
            gap: 15px;
          }
          .nav-links.active {
            display: flex;
          }
          .menu-toggle {
            display: block;
          }
        }
      `}</style>
    </header>
  );
}
