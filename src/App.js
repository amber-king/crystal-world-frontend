// TODO: holds all routes & toggle dark mode - light mode button functionality

// Imports
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";

// Pages
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import VocabularyPage from "./Pages/VocabularyPage";

// Componenets
import CrystalList from "./Components/CrystalList";
import CrystalDetails from "./Components/CrystalDetails";
import CrystalForm from "./Components/CrystalForm";
import NavBar from "./Components/NavBar";
import EditCrystal from "./Components/EditCrystal";

function App() {
  // TODO: dark mode functionality - via a toggle button found on the top of every page on the site
  // light mode - a off white setting & dark mode - a light grey setting
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode");
    setDarkMode(isDarkMode === "true");
  }, []);

  useEffect(() => {
    // Apply dark mode CSS class to the root element
    document.documentElement.classList.toggle("dark-mode", darkMode);

    // Save the dark mode preference to local storage
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  //  return with all routes for application & hookes on dark mode toggle button
  return (
    <div className={`App ${darkMode ? "dark-mode" : "light-mode"}`}>
      <button
        className={`dark-mode-toggle-button ${
          darkMode ? "light-mode" : "dark-mode"
        }`}
        onClick={toggleDarkMode}
      >
        {darkMode ? "Switch to Light Mode 💡" : "Switch to Dark Mode 🌚"}
      </button>

      <Router>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/crystals" element={<CrystalList />} />
            <Route path="/crystals/:id" element={<CrystalDetails />} />
            <Route path="/crystalform" element={<CrystalForm />} />
            <Route path="/crystals/:id/edit" element={<EditCrystal />} />
            <Route path="/vocabulary" element={<VocabularyPage />} />
          </Routes>
        </main>
        <NavBar />
      </Router>
    </div>
  );
}

export default App;
