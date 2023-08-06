import { useState } from 'react'
import NewPlayerForm from './NewPlayerForm'

const NewPlayerFormDisplay = () => {
  const [formDisplay, setFormDisplay] = useState(false)

  return (
    <>
      <button onClick={() => setFormDisplay(!formDisplay)}>New Player Form</button>
      {formDisplay ? <NewPlayerForm /> : null}
    </>
  )
}

export default NewPlayerFormDisplay