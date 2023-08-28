// TODO: http://localhost:3001/crystals/${id} - shows the one crystal & allows edit & delete options

// Imports
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const CrystalDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // hook to handle naviagtion

  const [crystal, setCrystal] = useState(null); // state to hold crystal - if present to edit

  // fetchs the one crystal
  useEffect(() => {
    const fetchCrystal = async () => {
      try {
        const response = await fetch(`http://localhost:3001/crystals/${id}`);
        const data = await response.json();
        setCrystal(data);
      } catch (error) {
        console.error("Error fetching crystal:", error);
      }
    };

    fetchCrystal(); // Call the fetchCrystal function inside useEffect
  }, [id]); // Add id to the dependency array

  // handle to delete one crystal
  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:3001/crystals/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        navigate("/crystals");
      }
    } catch (error) {
      console.error("Error deleting crystal:", error);
    }
  };

  // displays loading if there is NO crystal
  if (!crystal) {
    return <div>Loading...</div>;
  }

  // return with all needed crystal details w/ edit & delete button
  return (
    <div className="CrystalDetails">
      <h2>{crystal.name} Details</h2>
      <p>Transparency: {crystal.transparency}</p>
      <p>Luster: {crystal.luster_name}</p> <p>Hardness: {crystal.hardness}</p>
      <p>Color: {crystal.color}</p>
      <p>Healing Properties: {crystal.healing_features}</p>
      <div className="actions">
        <button
          onClick={() => navigate(`/crystals/${id}/edit`)}
          className="action-button"
        >
          Edit
        </button>
        <button onClick={handleDelete} className="action-button">
          Delete
        </button>
      </div>
    </div>
  );
};

// Exports

export default CrystalDetails;
