import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import NewPlayerForm from "./Components/NewPlayerForm";
import AllPlayers from "./Components/AllPlayers";
import SinglePlayer from "./Components/SinglePlayer";
import NewPuppyForm from "./Components/NewPuppyForm";
import fetchAllPlayers from "./AjaxHelper"; // Adjust the path accordingly
import { useNavigate } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          All Players
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/navbar" className="nav-link">
                To Navbar
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/newpuppy" className="nav-link">
                Add New Puppy
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/singlePlayer/:id" className="nav-link">
                To Single Player
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<AllPlayers />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/new-player" element={<NewPlayerForm />} />
        <Route path="/singlePlayer/:id" element={<SinglePlayer />} />
        <Route path="/newpuppy" element={<NewPuppyForm />} />
      </Routes>
    </>
  );
}

export default App;
