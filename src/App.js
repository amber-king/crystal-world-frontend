import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import CrystalList from "./Components/CrystalList";
import CrystalDetails from "./Components/CrystalDetails";
// import CrystalForm from "./Components/CrystalForm";
import NavBar from "./Components/NavBar";
import EditCrystal from "./Components/EditCrystal";

function App() {
  return (
    <div className="App">
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/crystals" element={<CrystalList />} />
            <Route path="/crystals/:id" element={<CrystalDetails />} />
            {/* <Route path="/add-crystal" element={<CrystalForm />} /> */}
            <Route path="/crystals/:id/edit" element={<EditCrystal />} />
          </Routes>
        </main>
        <NavBar />
      </Router>
    </div>
  );
}

export default App;
