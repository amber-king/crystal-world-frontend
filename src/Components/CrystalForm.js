// TODO: http://localhost:3000/crystalform - allows user to add a new crystal w/ new form

// Imports
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CrystalForm = () => {
  const navigate = useNavigate(); // Hook to handle navigation

  const [formData, setFormData] = useState({
    name: "",
    color: "",
    transparency: "",
    luster_name: "",
    hardness: "",
    healing_features: "",
  }); // state to handle fields for the new crystal form

  // Defining the luster and hardness options - same data as in the backend
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

  // handle for adding/ making a copy of formatted new crystal
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // POST of a new crystal submit handle
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // calls a POST request to all crystal page
      const response = await fetch("http://localhost:3001/crystals/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // POST is all good - return back to all crystals page - otherwise return error
      if (response.ok) {
        navigate("/crystals"); //navigation back to the home page
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  // return of full submit form for one crystal
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

// Exports

export default CrystalForm;
