import { useState, useEffect } from 'react'
import NewPlayerForm from './NewPlayerForm'

const CreateNewPlayer = ({ addNewPlayerToList }) => {

  const [formDisplay, setFormDisplay] = useState(false)

  return (
    <>
      <button onClick={() => setFormDisplay(!formDisplay)}>New Player Form</button>
      {formDisplay ? <NewPlayerForm formDisplay={formDisplay} setFormDisplay={setFormDisplay} addNewPlayerToList={addNewPlayerToList}/> : null}
    </>
  )
}

export default CreateNewPlayer