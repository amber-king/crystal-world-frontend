import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import crystalsData from "../crystalsData"

const EditCrystal = ({useBackend}) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [crystal, setCrystal] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    color: "",
    transparency: "",
    luster_name: "",
    hardness: "",
    healing_features: "",
  });

  // Define the luster and hardness options directly in the component
  const lusterOptions = [
    "Vitreous",
    "Pearly",
    "Metallic",
    "Dull",
    "Adamantine",
    "Greasy",
    "Waxy",
    "Silky",
    "Resinous",
  ];

  const hardnessOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];


  useEffect(() => {
    const fetchData = async () => {
      try {
        let data;
        if (useBackend) {
          // Fetch crystal data from your backend API by replacing this URL with your actual API endpoint
          const response = await fetch(`http://localhost:3001/crystals/${id}`);
          if (response.ok) {
            data = await response.json();
          } else {
            console.error(`Error fetching crystal data: ${response.status}`);
            return;
          }
        } else {
          // Use mock data for testing - crystals data obj array of data used here
          data = crystalsData.find((crystal) => crystal.id === parseInt(id));
        }

        setCrystal(data);
        setFormData({
          name: data.name,
          color: data.color,
          transparency: data.transparency,
          luster_name: data.luster_name,
          hardness: data.hardness,
          healing_features: data.healing_features,
        });
      } catch (error) {
        console.error("Error fetching crystal data:", error);
      }
    };

    fetchData();
  }, [id, useBackend]);


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`http://localhost:3001/crystals/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Crystal edited successfully!");
        navigate(`/crystals/${id}`);
      }
    } catch (error) {
      console.error("Error editing crystal - no backend connected:", error);
    }
  };

  if (!crystal) {
    return <div>Loading...</div>;
  }

  return (
    <div className="EditCrystal">
      <h2>Edit {crystal?.name}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Color:
          <input
            type="text"
            name="color"
            value={formData.color}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Transparency:
          <select
            name="transparency"
            value={formData.transparency}
            onChange={handleChange}
            required
          >
            <option value="">Select Transparency</option>
            <option value="transparent">Transparent</option>
            <option value="opaque">Opaque</option>
            <option value="translucent">Translucent</option>
          </select>
        </label>
        <label>
          Luster:
          <select
            name="luster_name"
            value={formData.luster_name}
            onChange={handleChange}
          >
            <option value="">Select Luster</option>
            {lusterOptions.map((luster) => (
              <option key={luster} value={luster}>
                {luster}
              </option>
            ))}
          </select>
        </label>
        <label>
          Hardness:
          <select
            name="hardness"
            value={formData.hardness}
            onChange={handleChange}
          >
            <option value="">Select Hardness</option>
            {hardnessOptions.map((hardness) => (
              <option key={hardness} value={hardness}>
                {hardness}
              </option>
            ))}
          </select>
        </label>
        <label>
          Healing Features:
          <textarea
            name="healing_features"
            value={formData.healing_features}
            onChange={handleChange}
            rows="4"
            cols="50"
          />
        </label>
        <div className="form-buttons">
          <button type="submit">Save</button>
          <button
            className="cancel-button"
            onClick={() => navigate(`/crystals/${id}`)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditCrystal;
