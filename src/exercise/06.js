// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, {useState} from 'react'

function UsernameForm({onSubmitUsername}) {
  const username = React.useRef()
  const [value, setValue] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(value)
  }

  function handleChange(event) {
    const value = event.target.value
    setValue(value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          value={value}
          onChange={handleChange}
          ref={username}
          type="text"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
