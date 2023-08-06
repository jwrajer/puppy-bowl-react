import { useState } from 'react'

const NewPlayerForm = ({ addNewPlayerToList, formDisplay, setFormDisplay }) => {

  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [status, setStatus] = useState(undefined)

  const formHandler = (event) => {
    event.preventDefault();
    const newPlayer = {
      name,
      breed,
      imageUrl,
      status
    }
    confirm(`Is this the player you would like to submit?\nPlayer:${name}\nBreed:${breed}\nStatus:${status}`);
    addNewPlayerToList(newPlayer);
  setFormDisplay(!formDisplay);
  }

  return (
    <section className='new-player-form'>
      <form onSubmit={formHandler}>
        <input
          required
          placeholder='Name'
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
          <input
            required
            placeholder='Breed'
            value={breed}
            onChange={(event) => setBreed(event.target.value)}
            />
        <input
          required
          placeholder='Image URL'
          value={imageUrl}
          onChange={(event) => setImageUrl(event.target.value)}
        />
        <label>
          <input
            required
            type='radio'
            value='bench'
            name='status'
            checked={status === 'bench'}
            onChange={(event) => setStatus(event.target.value)}
          />
         Bench
        </label>
        <label>
          <input
            required
            type='radio'
            value='field'
            name='status'
            checked={status === 'field'}
            onChange={(event) => setStatus(event.target.value)}
          />
         On-Field
        </label>
        <button>Submit</button>
      </form>
    </section>
  )
}

export default NewPlayerForm