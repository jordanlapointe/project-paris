import React, { useContext } from 'react'
import { RoomContext, RoomContextProvider } from './RoomContext'
import RoomGuests from './RoomGuests'

function RoomForm () {
  const { state } = useContext(RoomContext)

  function handleSubmit (event) {
    event.preventDefault()
    console.log(state)
  }

  return (
    <form action="" onSubmit={ handleSubmit }>
      <ul>
        { state.rooms.map((room, index) => {
          const isFirstRoom = index === 0

          return <RoomGuests
            index={ index }
            key={ index }
            toggleable={ !isFirstRoom }
          />
        }) }
      </ul>
      <button>
        Save room configuration
      </button>
      <br />
      <small>
        Form data will log to your browser’s console.
      </small>
    </form>
  )
}

export default function RoomConfiguration () {
  return (
    <RoomContextProvider>
      <RoomForm />
    </RoomContextProvider>
  )
}
