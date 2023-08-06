const DisplayPlayers = ({ playerList }) => {
  return (
    <>
      {playerList.map((player) => {
        return <li>{player.name}</li>
      })}
    </>
  )
}

export default DisplayPlayers