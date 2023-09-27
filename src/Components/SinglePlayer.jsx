import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function SinglePlayer() {
  const navigate = useNavigate();
  const { id } = useParams(); // Get the player ID from the route parameters
  const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT`;

  const [playerData, setPlayerData] = useState(null);

  useEffect(() => {
    // Fetch single player data when the component mounts
    const fetchSinglePlayer = async () => {
      try {
        const response = await fetch(`${APIURL}/players/${id}`);
        if (response.ok) {
          const playerData = await response.json();
          setPlayerData(playerData.data.player);
          console.log(playerData);
        } else {
          console.error(`Oh no, trouble fetching player #${id}!`);
        }
      } catch (err) {
        console.error(`Oh no, trouble fetching player #${id}!`, err);
      }
    };

    fetchSinglePlayer();
  }, [id]); // Fetch data whenever the ID changes

  return (
    <div>
      <button onClick={() => navigate("/")}>Go Back to All Players</button>
      {playerData ? (
        <div>
          <h2>Player Details</h2>
          <p>Name: {playerData.name}</p>
          <p>Breed: {playerData.breed}</p>
          {/* Display other player details here */}
        </div>
      ) : (
        <p>Loading player details...</p>
      )}
    </div>
  );
}
