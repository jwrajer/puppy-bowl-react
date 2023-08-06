const DisplayPlayers = ({ playerList, fetchSinglePlayer, usePlayerState }) => {
  console.log(playerList);
  return (
    <>
      {playerList.map((player) => {
        const altDescription = `picture of ${player.name}`
        return (
          <section key={player.name}>
            <h2>{player.name}</h2>
            <img alt={altDescription}  src={player.imageUrl}/>
            <button onClick={() => usePlayerState(player)}>See Details</button>
          </section>
        )
      })}
    </>
  )
}

export default DisplayPlayers