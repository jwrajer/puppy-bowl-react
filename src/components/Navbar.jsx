import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <section id='navbar'>
      <section id='links'>
        <Link to='/'>Home</Link>
        <Link to='player-list'>Player List</Link>
      </section>
    </section>
  )
}

export default Navbar