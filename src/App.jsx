import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import DisplayPlayers from './components/DisplayPlayers'
import DisplaySinglePlayer from './components/DisplaySinglePlayer'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import './App.css'


function App() {
  const [playerList, setPlayerList] = useState([]);
  const [singlePlayer, setSinglePlayer] = useState([]);

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

  useEffect(() => {
    console.log(singlePlayer);
  }, [singlePlayer])


  return (
    <> 
      <Navbar />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='player-list' 
                element={<DisplayPlayers 
                          setSinglePlayer={setSinglePlayer}
                          playerList={playerList}
                        />}
        />
        <Route path='players/:name' element={<DisplaySinglePlayer singlePlayer={singlePlayer}/>} />
      </Routes>
    </>
  )
}

export default App
