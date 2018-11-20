import React, { Component } from 'react'
import RoomGuests from './RoomGuests'

const maxRoomCount = 4

class RoomConfiguration extends Component {
  render() {
    return (
      <ul>
        { [...Array(maxRoomCount).keys()].map(index => {
          const isFirstRoom = index === 0

          return <RoomGuests index={index} toggleable={!isFirstRoom} />
        }) }
      </ul>
    )
  }
}

export default RoomConfiguration
