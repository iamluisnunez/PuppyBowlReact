export default async function fetchAllPlayers() {
  // Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
  const cohortName = "2109-UNF-HY-WEB-PT";
  // Use the APIURL variable for fetch requests
  const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT`;

  try {
    const response = await fetch(`${APIURL}/players`);
    const playersData = await response.json();
    console.log(playersData);
    let players = playersData.data.players;
    console.log(players);
    return players;
  } catch (err) {
    console.error("Uh oh, trouble fetching players!", err);
  }
}
