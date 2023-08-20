import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import the Link component
// import axios from 'axios';
// import './CrystalList.css'; // Add your own CSS for styling

const CrystalList = () => {
  const [crystals, setCrystals] = useState([]);

  // Define the luster mapping object
  const lusterMapping = {
    1: "Vitreous",
    2: "Pearly",
    3: "Metallic",
    4: "Greasy",
    5: "Resinous",
    6: "Dull",
    7: "Silky",
    8: "Adamantine",
    9: "Waxy",
  };

  useEffect(() => {
    fetchCrystals();
  }, []);

  const fetchCrystals = async () => {
    try {
      const response = await fetch("http://localhost:3001/crystals/"); // Replace with your API endpoint
      const data = await response.json();
      setCrystals(data);
    } catch (error) {
      console.error("Error fetching crystals:", error);
    }
  };

  return (
    <div className="CrystalList">
      <h2>All Crystals</h2>
      <div className="card-container">
        {crystals.map((crystal) => (
          <Link
            to={`/crystals/${crystal.id}`}
            key={crystal.id}
            className="card-link"
          >
            <div className="card">
              <h3>{crystal.name}</h3>
              <p>Transparency: {crystal.transparency}</p>
              <p>Luster: {lusterMapping[crystal.luster_id]}</p>{" "}
              {/* Display luster name */}
              <p>Hardness: {crystal.hardness}</p>
              <p>Color: {crystal.color}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CrystalList;
