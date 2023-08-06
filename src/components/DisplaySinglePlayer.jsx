import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"

const DisplaySinglePlayer = () => {

  const [singlePlayer, setSinglePlayer] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchSinglePlayer = () => {
      try {
        console.log(id);
      } catch (err) {
        console.log(err)
      }
    }
    fetchSinglePlayer();

  }, [])

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

    </section>
  )
}

export default DisplaySinglePlayer