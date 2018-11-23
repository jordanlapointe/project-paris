import React, { Component } from 'react'
import RoomGuests from './RoomGuests'

const maxRoomCount = 4

class RoomConfiguration extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numberOfAdditionalRooms: 0
    }
  }

  handleRoomChange = (roomIndex, checked) => {
    const newRoomCount = checked ? roomIndex : roomIndex - 1

    this.setState({
      numberOfAdditionalRooms: newRoomCount
    })
  }

  render() {
    return (
      <ul>
        { [...Array(maxRoomCount).keys()].map(index => {
          const isFirstRoom = index === 0
          const isToggled = index <= this.state.numberOfAdditionalRooms

          return <RoomGuests
            index={ index }
            key={ index }
            onToggle={ this.handleRoomChange }
            toggled={ isToggled }
            toggleable={ !isFirstRoom }
          />
        }) }
      </ul>
    )
  }
}

export default RoomConfiguration
