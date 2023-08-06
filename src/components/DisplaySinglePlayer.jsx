import { useEffect, useState } from 'react'
import { useParams, Link } from "react-router-dom"

const DisplaySinglePlayer = ({ fetchPlayerList }) => {

  const [singlePlayer, setSinglePlayer] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchSinglePlayer = async () => {
      try {
        const response = await fetch (`https://fsa-puppy-bowl.herokuapp.com/api/2306-fsa-et-web-ft/players/${id}`);
        const data = await response.json();
        setSinglePlayer(data.data.player);
      } catch (err) {
        console.log(err)
      }
    }
    fetchSinglePlayer();

  }, [])

  const removePlayer = async() => {
    confirm(`Are you sure you want to delete ${singlePlayer.name}?`)
    try {
      const response = await fetch(
        `https://fsa-puppy-bowl.herokuapp.com/api/2306-fsa-et-web-ft/players/${id}`,
        {
          method: 'DELETE',
        }
      );
      const result = await response.json();
      console.log(result);
    } catch (err) {
      console.error(err);
    }

    fetchPlayerList();
  }

  return (
    <section className='player-card'>
      <section className='player-info'>
        <h1>{singlePlayer.name}</h1>
        <h2>{singlePlayer.breed}</h2>
        <h3>{singlePlayer.status}</h3>
      </section>
      <section className='player-image'>
        <img alt='player' src={singlePlayer.imageUrl} />
      </section>
      <section>
        <Link to='/player-list'>
          <button onClick={() => removePlayer()}>Delete Puppy</button>
        </ Link>
      </section>
    </section>
  )
}

export default DisplaySinglePlayer