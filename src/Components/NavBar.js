import React from "react";

// import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>
          <a href="/">🏠</a>
        </li>
        <li>
          <a href="/crystals">💎</a>
        </li>
        <li>
          <a href="/crystalform">Let's Add A 💎</a>
        </li>
        <li>
          <a href="/about">About & More...🤔</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
