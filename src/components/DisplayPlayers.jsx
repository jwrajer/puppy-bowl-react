const DisplayPlayers = ({ playerList }) => {
  console.log(playerList);
  return (
    <>
      {playerList.map((player) => {
        const altDescription = `picture of ${player.name}`
        return (
          <section key={player.name}>
            <h2>{player.name}</h2>
            <img alt={altDescription}  src={player.imageUrl}/>
          </section>
        )
      })}
    </>
  )
}

export default DisplayPlayers