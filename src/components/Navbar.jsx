import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <Link to='/'>Home</Link>
      <Link to='player-list'>Player List</Link>
    </>
  )
}

export default Navbar