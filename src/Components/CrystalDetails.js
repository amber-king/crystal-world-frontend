import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import crystalsData from "../crystalsData";

const CrystalDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [crystal, setCrystal] = useState(null);

  useEffect(() => {
    if (crystalsData) {
      const selectedCrystal = crystalsData.find(
        (crystal) => crystal.id === parseInt(id)
      );

      if (selectedCrystal) {
        setCrystal(selectedCrystal);
      } else {
        console.error("Crystal not found");
      }
    }
  }, [id]);

  // TODO: code hor handle delete through connected running backend local running server
  const handleDelete = async () => {
    try {
      // a DELETE request to the local server's delete endpoint
      const response = await fetch(`http://localhost:3001/crystals/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // The crystal was successfully deleted on the server - this is logged in the server inspect console.log
        // ! BUT crystal will still appear when redirected back to all crystals b/c that link is connected to mock data NOT backend data tables

        console.log("Crystal deleted successfully");

        // removes the crystal from the UI locally
        // ! not needed since the mockdata will always show by default
        setCrystal(null);

        // Navigate back to the crystals list
        navigate("/crystals");
      } else {
        // Handle the case where the server responds with an error
        console.error("Error deleting crystal:", response.status);
      }
    } catch (error) {
      // Handle network errors or other unexpected errors
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

export default CrystalDetails;
