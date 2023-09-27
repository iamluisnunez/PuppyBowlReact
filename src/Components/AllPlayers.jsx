import { useState, useEffect } from "react";
import fetchAllPlayers from "../AjaxHelper";
import { useNavigate } from "react-router-dom";

export default function AllPlayers() {
  const [allPlayers, setAllPlayers] = useState([]);
  const navigate = useNavigate();
  const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT`;

  useEffect(() => {
    async function fetchData() {
      const data = await fetchAllPlayers();
      if (data) {
        setAllPlayers(data);
      }
    }
    fetchData();
  }, []);
  const handleDeletePlayer = async (playerId) => {
    try {
      // Make a DELETE request to your API to delete the player by ID
      // Replace API_ENDPOINT with your actual API endpoint
      const response = await fetch(`${APIURL}/players/${playerId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // If the player was successfully deleted, remove it from the list
        setAllPlayers((prevPlayers) =>
          prevPlayers.filter((player) => player.id !== playerId)
        );
      }
    } catch (error) {
      console.error(`Error deleting player with ID ${playerId}:`, error);
    }
  };
  return (
    <div>
      {allPlayers.map((player) => {
        return (
          <div key={player.id}>
            {console.log(player.id)}
            <h4>{player.name}</h4>
            <button onClick={() => navigate(`/singlePlayer/${player.id}`)}>
              View Player
            </button>
            <button
              onClick={() => handleDeletePlayer(player.id)}
              className="btn btn-danger"
            >
              Delete Puppy
            </button>
          </div>
        );
      })}
    </div>
  );
}
