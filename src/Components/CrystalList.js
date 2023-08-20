import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './CrystalList.css'; // Add your own CSS for styling

const CrystalList = () => {
  const [crystals, setCrystals] = useState([]);

  useEffect(() => {
    fetchCrystals();
  }, []);

  const fetchCrystals = async () => {
    try {
      const response = await axios.get('/api/crystals'); // Replace with your API endpoint
      setCrystals(response.data);
    } catch (error) {
      console.error('Error fetching crystals:', error);
    }
  };

  return (
    <div className="CrystalList">
      <h2>All Crystals</h2>
      <div className="card-container">
        {crystals.map(crystal => (
          <div key={crystal.id} className="card">
            <h3>{crystal.name}</h3>
            <p>Transparency: {crystal.transparency}</p>
            <p>Luster: {crystal.luster}</p> {/* Display luster name */}
            <p>Hardness: {crystal.hardness}</p>
            <p>Color: {crystal.color}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CrystalList;
