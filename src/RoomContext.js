import React, { createContext, useReducer } from 'react'

const RoomContext = createContext()

const initialState = {
  rooms: [
    {
      adultCount: 1,
      childCount: 0,
      selected: true
    },
    {
      adultCount: 1,
      childCount: 0,
      selected: false
    },
    {
      adultCount: 1,
      childCount: 0,
      selected: false
    },
    {
      adultCount: 1,
      childCount: 0,
      selected: false
    }
  ]
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'adult-count-change':
      state.rooms[action.payload.index].adultCount = action.payload.count
      return state
    case 'child-count-change':
      state.rooms[action.payload.index].childCount = action.payload.count
      return state
    case 'room-toggle':
      return setRoomsSelected(state, action.payload)
    default:
      return state
  }
}

function RoomContextProvider (props) {
  const [ state, dispatch ] = useReducer(reducer, initialState)
  const value = { state, dispatch }

  return (
    <RoomContext.Provider value={ value }>{ props.children }</RoomContext.Provider>
  )
}

function setRoomsSelected (state, { index, checked }) {
  const roomCount = checked ? index : index - 1
  const rooms = state.rooms.map((room, index) => {
    const selected = index <= roomCount

    return { ...room, selected }
  })

  return { ...state, rooms }
}

export { RoomContext, RoomContextProvider }