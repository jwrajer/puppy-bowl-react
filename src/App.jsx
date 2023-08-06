import { useState, useEffect } from 'react'
import DisplayPlayers from './components/DisplayPlayers'
import './App.css'

// call api
// get list of players
// pass each button details
// look into routes w uniqie ids

function App() {
  const [playerList, setPlayerList] = useState([]);

  useEffect(() => {
    const fetchPlayerList = async() => {
      try {
        const response = await fetch (`https://fsa-puppy-bowl.herokuapp.com/api/2306-fsa-et-web-ft/players`);
        const data = await response.json();
        setPlayerList(data.data.players);
      } catch (err) {
        console.log(err)
      }
    }
    fetchPlayerList();
  }, [])

  return (
    <>
      <DisplayPlayers playerList={playerList}/>
    </>
  )
}

export default App
