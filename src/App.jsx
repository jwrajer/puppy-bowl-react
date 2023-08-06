import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import DisplayPlayers from './components/DisplayPlayers'
import DisplaySinglePlayer from './components/DisplaySinglePlayer'
import CreateNewPlayer from './components/newPlayerForm/CreateNewPlayer'
import Dashboard from './components/Dashboard'
import './App.css'


function App() {

  const [playerList, setPlayerList] = useState([]);
  const [singlePlayer, setSinglePlayer] = useState([]);

  const fetchPlayerList = async() => {
    try {
      const response = await fetch (`https://fsa-puppy-bowl.herokuapp.com/api/2306-fsa-et-web-ft/players`);
      const data = await response.json();
      setPlayerList(data.data.players);
      console.log(data.data.players)
    } catch (err) {
      console.log(err)
    }
  }
  
  useEffect(() => {
    fetchPlayerList();
  }, [])

  const addNewPlayerToList = async (newPlayer) => {
    try {
      const response = await fetch(
        'https://fsa-puppy-bowl.herokuapp.com/api/2306-fsa-et-web-ft/players',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newPlayer),
        }
      );
      const result = await response.json();
      console.log(result);
    } catch (err) {
      console.error(err);
    };
    fetchPlayerList();
  }

  return (
    <> 
      <Navbar />
      <CreateNewPlayer 
        addNewPlayerToList={addNewPlayerToList}
      />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='player-list' 
                element={<DisplayPlayers 
                          setSinglePlayer={setSinglePlayer}
                          playerList={playerList}
                        />}
        />
        <Route path='players/:id' element={<DisplaySinglePlayer singlePlayer={singlePlayer}/>} />
      </Routes>
    </>
  )
}

export default App
