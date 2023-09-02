import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CrystalForm = ({ useBackend, crystalId }) => {
  const navigate = useNavigate(); // Hook to handle navigation

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
    if (crystalId) {
      // Fetch data for editing if an ID is provided
      fetchCrystalData(crystalId);
    }
  }, [crystalId]);

  const fetchCrystalData = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/crystals/${id}`);
      if (response.ok) {
        const data = await response.json();
        setFormData(data);
      } else {
        console.error(`Error fetching crystal data: ${response.status}`);
      }
    } catch (error) {
      console.error("Error fetching crystal data:", error);
    }
  };

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
      if (useBackend) {
        // Send a POST request to your backend API if creating a new crystal
        // or a PUT request if editing an existing one
        const method = crystalId ? "PUT" : "POST";
        const apiUrl = crystalId
          ? `http://localhost:3001/crystals/${crystalId}`
          : "http://localhost:3001/crystals/";

        const response = await fetch(apiUrl, {
          method,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          console.error("Error submitting form:", response.status);
          return;
        }
      } else {
        // Update the mock data if not using the backend
        // Handle mock data updates based on whether you are creating or editing
        // This is a placeholder; you should replace it with your logic
        if (crystalId) {
          // Editing an existing crystal
          // Update the mock data based on the crystalId
        } else {
          // Creating a new crystal
          // Update the mock data by adding the new crystal
        }
      }

      // Simulate API call or data processing
      // You can replace this with your actual API call
      // For this example, we will just navigate back to the home page
      navigate("/crystals");
      console.log(`Crystal ${crystalId ? "updated" : "created"} successfully!`);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="CrystalForm">
      <h2>Add a New Crystal</h2>
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
          Healing Properties:
          <textarea
            name="healing_features"
            value={formData.healing_features}
            onChange={handleChange}
            rows="4"
            cols="50"
            required
          />
        </label>

        <div className="form-buttons">
          <button type="submit">Save</button>
          <Link to="/crystals" className="cancel-button">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default CrystalForm;
