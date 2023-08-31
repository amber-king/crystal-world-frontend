// TODO: http://localhost:3000/crystals/${id}/edit - allows user to edit crystal via edit button
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditCrystal = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [crystal, setCrystal] = useState(null); // state for the selected crystal modification
  const [formData, setFormData] = useState({
    name: "",
    color: "",
    transparency: "",
    luster_name: "",
    hardness: "",
    healing_features: "",
  }); // state for edit modification

  // Define the luster name and hardness options - based on backend data
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

  // fetchs selected crystal data w/ edit form to modify form -
  useEffect(() => {
    const fetchCrystal = async () => {
      try {
        const response = await fetch(`https://crystal-world-backend-f03cc002ba51.herokuapp.com//crystals/${id}`);
        const data = await response.json();
        setCrystal(data);
        setFormData({
          name: data.name,
          color: data.color,
          transparency: data.transparency,
          luster_name: data.luster_name,
          hardness: data.hardness,
        });
      } catch (error) {
        console.error("Error fetching crystal:", error);
      }
    };

    fetchCrystal();
  }, [id]);

  // handles the update change via edit form

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // PUT/UPDATE/sends updated crystal information
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

      // if update is good - user is navigated back to the selected crystal details - otherwise return an error
      if (response.ok) {
        navigate(`/crystals/${id}`);
      }
    } catch (error) {
      console.error("Error editing crystal:", error);
    }
  };

  // loading page of crystal is not present
  if (!crystal) {
    return <div>Loading...</div>;
  }

  // return with edit form - similiar to crystal new form for adding a crystal
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

// Exports

export default EditCrystal;
