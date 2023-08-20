// import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";

// const CrystalForm = () => {
//   const history = useHistory();

//   const [formData, setFormData] = useState({
//     // Initialize form data fields here
//     name: "",
//     transparency: "",
//     luster_id: "",
//     hardness: "",
//     color: "",
//   });

//   const [lusterOptions, setLusterOptions] = useState([]);
//   const [hardnessOptions, setHardnessOptions] = useState([]);

//   useEffect(() => {
//     fetchLusterOptions();
//     fetchHardnessOptions();
//   }, []);

//   const fetchLusterOptions = async () => {
//     try {
//       const response = await fetch("http://localhost:3001/luster_options");
//       const data = await response.json();
//       setLusterOptions(data);
//     } catch (error) {
//       console.error("Error fetching luster options:", error);
//     }
//   };

//   const fetchHardnessOptions = async () => {
//     try {
//       const response = await fetch("http://localhost:3001/hardness_options");
//       const data = await response.json();
//       setHardnessOptions(data);
//     } catch (error) {
//       console.error("Error fetching hardness options:", error);
//     }
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await fetch("http://localhost:3001/crystals", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         history.push("/crystals"); // Redirect to crystals list after creation
//       }
//     } catch (error) {
//       console.error("Error creating crystal:", error);
//     }
//   };

//   return (
//     <div className="NewCrystal">
//       <h2>Create a New Crystal</h2>
//       <form onSubmit={handleSubmit}>
//         {/* Other input fields */}
//         <label>
//           Luster:
//           <select
//             name="luster_id"
//             value={formData.luster_id}
//             onChange={handleChange}
//           >
//             <option value="">Select Luster</option>
//             {lusterOptions.map((luster) => (
//               <option key={luster.id} value={luster.id}>
//                 {luster.option_name}
//               </option>
//             ))}
//           </select>
//         </label>
//         <label>
//           Hardness:
//           <select
//             name="hardness"
//             value={formData.hardness}
//             onChange={handleChange}
//           >
//             <option value="">Select Hardness</option>
//             {hardnessOptions.map((hardness) => (
//               <option key={hardness.id} value={hardness.rating}>
//                 {hardness.rating}
//               </option>
//             ))}
//           </select>
//         </label>
//         <button type="submit">Create</button>
//       </form>
//     </div>
//   );
// };

// export default CrystalForm;
