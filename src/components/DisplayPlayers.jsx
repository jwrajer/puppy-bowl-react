import { Link, useParams } from 'react-router-dom'

const DisplayPlayers = ({ playerList, setSinglePlayer }) => {
  return (
    <section id='player-list'>
      {playerList.map((player) => {

        const altDescription = `picture of ${player.name}`
        const linkUrl = `/players/${player.id}`

        return (
          <section key={player.name} className='player-cards'>
            <h2>{player.name}</h2>
            <img alt={altDescription}  src={player.imageUrl}/>
            <section>
              <Link to={linkUrl}>
                <button>See Details</button>
              </Link>
            </section>
          </section>
        )
      })}
    </section>
  )
}

export default DisplayPlayers