import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="site-header">
      <div className="site-header-inner">

        <img src="/Logo.png" alt="logo" className="site-logo" />

        <nav className="site-nav">

          <Link to="/" className="nav-link red">
            FEST
          </Link>

          <Link to="/showcase" className="nav-link cyan">
            SHOWCASE YOUR BRAND
          </Link>

          <Link to="/volunteer" className="nav-link red">
            VOLUNTEER
          </Link>

          <Link to="/team" className="nav-link red">
            TEAM
          </Link>

        </nav>

        <button className="login-pill">
          <span className="login-text">LOGIN</span>
          <span className="login-icon">👤</span>
        </button>

      </div>
    </header>
  );
};

export default Header;
