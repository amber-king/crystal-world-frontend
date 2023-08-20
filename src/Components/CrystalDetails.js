import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const CrystalDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const [crystal, setCrystal] = useState(null);

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
    fetchCrystal();
  });

  const fetchCrystal = async () => {
    try {
      const response = await fetch(`http://localhost:3001/crystals/${id}`);
      const data = await response.json();
      setCrystal(data);
    } catch (error) {
      console.error("Error fetching crystal:", error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:3001/crystals/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        navigate("/crystals"); // Use navigate to redirect after deletion
      }
    } catch (error) {
      console.error("Error deleting crystal:", error);
    }
  };

  if (!crystal) {
    return <div>Loading...</div>;
  }

  return (
    <div className="CrystalDetails">
      <h2>{crystal.name} Details</h2>
      <p>Transparency: {crystal.transparency}</p>
      <p>Luster: {lusterMapping[crystal.luster_id]}</p>
      <p>Hardness: {crystal.hardness}</p>
      <p>Color: {crystal.color}</p>

      <div className="actions">
        <Link to={`/crystals/${id}/edit`} className="action-button">
          Edit
        </Link>
        <button onClick={handleDelete} className="action-button">
          Delete
        </button>
      </div>
    </div>
  );
};

export default CrystalDetails;
