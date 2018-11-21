import React, { Component } from 'react'

class RoomGuests extends Component {
  handleToggle = event => {
    const {
      index,
      onToggle
    } = this.props

    onToggle(index, event.target.checked)
  }

  render() {
    const {
      index,
      toggled = false,
      toggleable = true
    } = this.props

    const indexFormatted = index + 1

    return (
      <li>
        { toggleable ? (
          <label>
            <input checked={ toggled } type="checkbox" onChange={ this.handleToggle }  />
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
        <select disabled={ !toggled }>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <label>
          Children (0–17)
        </label>
        <select disabled={ !toggled }>
          <option>0</option>
          <option>1</option>
          <option>2</option>
        </select>
      </li>
    )
  }
}

export default RoomGuests
