import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import the Link component


const CrystalList = () => {
  const [crystals, setCrystals] = useState([]);

  // Define the luster mapping object
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

  useEffect(() => {
    fetchCrystals();
  }, []);

  const fetchCrystals = async () => {
    try {
      const response = await fetch("http://localhost:3001/crystals/"); 
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

export default CrystalList;
