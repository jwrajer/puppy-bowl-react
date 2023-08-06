import { Link } from 'react-router-dom'

const DisplayPlayers = ({ playerList, setSinglePlayer }) => {
  return (
    <>
      {playerList.map((player) => {
        const altDescription = `picture of ${player.name}`
        const linkUrl = `/players/${player.name}`
        return (
          <section key={player.name}>
            <h2>{player.name}</h2>
            <img alt={altDescription}  src={player.imageUrl}/>
            <Link to={linkUrl}>
              <button onClick={() => setSinglePlayer(player)}>See Details</button>
            </Link>
          </section>
        )
      })}
    </>
  )
}

export default DisplayPlayers