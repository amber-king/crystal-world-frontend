// TODO: general navbar - located at the bottom of screen with all buttons to different pages of the site

// Imports
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>
          <a href="/">Home 🏠</a>
        </li>
        <li>
          <a href="/vocabulary">Vocabulary 📖</a>
        </li>
        <li>
          <a href="/crystals">All Crystals💎</a>
        </li>

        <li>
          <a href="/crystalform">Let's Add A 💎</a>
        </li>
        <li>
          <a href="/about">Who's the Site Developer?...🤔</a>
        </li>
      </ul>
    </nav>
  );
};

// Exports
export default Navbar;
