import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import CrystalList from "./Components/CrystalList";
import CrystalDetails from "./Components/CrystalDetails";
import CrystalForm from "./Components/CrystalForm";
import NavBar from "./Components/NavBar";
import EditCrystal from "./Components/EditCrystal";

function App() {
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
          </Routes>
        </main>
        <NavBar />
      </Router>
    </div>
  );
}

export default App;
