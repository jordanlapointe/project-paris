import React, { Component } from 'react'
import './RoomGuests.css'

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
    const stateClass = toggled ? ' is-selected' : ''

    return (
      <li className={ 'RoomGuests' + stateClass }>
        <div className="RoomGuests-toggle">
          <input
            checked={ toggled }
            className="RoomGuests-toggleInput"
            disabled={ !toggleable }
            id={ `RoomGuests-${indexFormatted}-enabled` }
            onChange={ this.handleToggle }
            type="checkbox"
          />
          <label
            className="RoomGuests-toggleLabel"
            htmlFor={ `RoomGuests-${indexFormatted}-enabled` }
          >
            Room { indexFormatted }
          </label>
        </div>
        <div className="Layout RoomGuests-options">
          <div className="Layout-half">
            <label htmlFor={ `RoomGuests-${indexFormatted}-adultCount` }>
              Adults<br /> (18+)
            </label>
            <br />
            <select
              disabled={ !toggled }
              id={ `RoomGuests-${indexFormatted}-adultCount` }
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
          <div className="Layout-half">
            <label htmlFor={ `RoomGuests-${indexFormatted}-childrenCount` }>
              Children<br /> (0–17)
            </label>
            <br />
            <select
              disabled={ !toggled }
              id={ `RoomGuests-${indexFormatted}-childrenCount` }
            >
              <option>0</option>
              <option>1</option>
              <option>2</option>
            </select>
          </div>
        </div>
      </li>
    )
  }
}

export default RoomGuests
