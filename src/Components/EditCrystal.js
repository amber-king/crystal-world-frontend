import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditCrystal = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [crystal, setCrystal] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    color: "",
    transparency: "",
    luster_id: "",
    hardness: "",
  });

  const [lusterOptions, setLusterOptions] = useState([]);
  const [hardnessOptions, setHardnessOptions] = useState([]);

  useEffect(() => {
    fetchCrystal();
    fetchLusterOptions();
    fetchHardnessOptions();
  });

  const fetchCrystal = async () => {
    try {
      const response = await fetch(`http://localhost:3001/crystals/${id}`);
      const data = await response.json();
      setCrystal(data);
      setFormData({
        name: data.name,
        color: data.color,
        transparency: data.transparency,
        luster_id: data.luster_id,
        hardness: data.hardness,
      });
    } catch (error) {
      console.error("Error fetching crystal:", error);
    }
  };

  const fetchLusterOptions = async () => {
    try {
      const response = await fetch("http://localhost:3001/luster_options");
      const data = await response.json();
      setLusterOptions(data);
    } catch (error) {
      console.error("Error fetching luster options:", error);
    }
  };

  const fetchHardnessOptions = async () => {
    try {
      const response = await fetch("http://localhost:3001/hardness_options");
      const data = await response.json();
      setHardnessOptions(data);
    } catch (error) {
      console.error("Error fetching hardness options:", error);
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
      const response = await fetch(`http://localhost:3001/crystals/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate(`/crystals/${id}`);
      }
    } catch (error) {
      console.error("Error editing crystal:", error);
    }
  };

  if (!crystal) {
    return <div>Loading...</div>;
  }

  return (
    <div className="EditCrystal">
      <h2>Edit {crystal.name}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Crystal name here"
            required
          />
        </label>
        <label>
          Color:
          <input
            name="color"
            value={formData.color}
            onChange={handleChange}
            placeholder="Crystal color here"
            required
          />
        </label>
        <label>
          Transparency:
          <select
            name="transparency"
            value={formData.transparency}
            onChange={handleChange}
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
            name="luster_id"
            value={formData.luster_id}
            onChange={handleChange}
          >
            <option value="">Select Luster</option>
            {lusterOptions.map((luster) => (
              <option key={luster.id} value={luster.id}>
                {luster.option_name}
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
              <option key={hardness.id} value={hardness.rating}>
                {hardness.rating}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditCrystal;

