import React, { Component } from 'react'

const maxRoomCount = 4

class RoomGuests extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggled: !!this.props.toggleable
    }
  }

  handleToggle = event => {
    this.setState({
      toggled: !event.target.checked
    })
  }

  render() {
    const {
      index,
      toggleable = true
    } = this.props
    const { toggled } = this.state
    const indexFormatted = index + 1

    return (
      <li>
        { toggleable ? (
          <label>
            <input type="checkbox" onChange={ this.handleToggle } />
            Room { indexFormatted }
          </label>
        ) : (
          <h2>
            Room { indexFormatted }
          </h2>
        )}
        <label>
          Adults (18+)
        </label>
        <select disabled={ toggled }>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <label>
          Children (0–17)
        </label>
        <select disabled={ toggled }>
          <option>0</option>
          <option>1</option>
          <option>2</option>
        </select>
      </li>
    )
  }
}

export default RoomGuests
