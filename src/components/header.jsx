import React from "react";

const Header = () => {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <img src="/Logo.png" alt="logo" className="site-logo" />

        <nav className="site-nav">
          <a className="nav-link red">FEST</a>
          <a className="nav-link cyan">SHOWCASE YOUR BRAND</a>
          <a className="nav-link red">VOLUNTEER</a>
          <a className="nav-link red">TEAM</a>
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
