const DisplaySinglePlayer = ({ singlePlayer }) => {
  return (
    <>
      <h1>{singlePlayer.name}</h1>
      <h2>{singlePlayer.breed}</h2>
      <h3>{singlePlayer.status}</h3>
      <img alt='player' src={singlePlayer.imageUrl} />

    </>
  )
}

export default DisplaySinglePlayer