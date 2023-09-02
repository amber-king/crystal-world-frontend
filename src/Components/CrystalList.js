import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import the Link component
import crystalsData from "../crystalsData"; // import of mock data

const CrystalList = () => {
  const [crystals, setCrystals] = useState(crystalsData);

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

  useEffect(() => {}, []);

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
