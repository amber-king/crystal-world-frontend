// TODO: http://localhost:3000/crystals - shows all crystals - both pre-made and added in alongside edits of the crystals

// Import
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 

const CrystalList = () => {
  const [crystals, setCrystals] = useState([]); // state to handle all crystal data array

  // Define the luster options mapping object
  const lusterMapping = {
    Vitreous: "Vitreous",
    Pearly: "Pearly",
    Metallic: "Metallic",
    Dull: "Dull",
    Adamantine: "Adamantine",
    Greasy: "Greasy",
    Waxy: "Waxy",
    Silky: "Silky",
    Resinous: "Resinous",
  };

  // ensures the fetchCrystals function is called once after the component in initially renders
  useEffect(() => {
    fetchCrystals();
  }, []);

  // fetchs all crystals - otherwise return an error
  const fetchCrystals = async () => {
    try {
      const response = await fetch("https://crystal-world-backend-f03cc002ba51.herokuapp.com//crystals/"); // Replace with your API endpoint
      const data = await response.json();
      setCrystals(data);
    } catch (error) { 
      console.error("Error fetching crystals:", error);
    }
  };

  // returns crystals cards with fetech data
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
              <p>Luster: {lusterMapping[crystal.luster_name]}</p>{" "}
              <p>Hardness: {crystal.hardness}</p>
              <p>Color: {crystal.color}</p>
              <p>Healing Properties: {crystal.healing_features}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

// Exports
export default CrystalList;
