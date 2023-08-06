import { useState } from 'react'

const NewPlayerForm = () => {

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
    console.log(newPlayer)
  }

  return (
    <section className='new-player-form'>
      <form onSubmit={formHandler}>
        <input
          placeholder='Name'
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
          <input
            placeholder='Breed'
            value={breed}
            onChange={(event) => setBreed(event.target.value)}
            />
        <input
          placeholder='Image URL'
          value={imageUrl}
          onChange={(event) => setImageUrl(event.target.value)}
        />
        <label>
          <input
            type='radio'
            value='bench'
            checked={status === 'bench'}
            onChange={(event) => setStatus(event.target.value)}
          />
         Bench
        </label>
        <label>
          <input
            type='radio'
            value='field'
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