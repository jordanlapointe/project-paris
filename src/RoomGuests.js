import React, { useContext } from 'react'
import { RoomContext } from './RoomContext'
import * as styled from './RoomGuests.css.js'

export default function RoomGuests(props) {
  const {
    index,
    toggleable = true
  } = props
  const {
    state,
    dispatch
  } = useContext(RoomContext)
  const { selected } = state.rooms[index]
  const indexFormatted = index + 1
  const stateClass = selected ? ' is-selected' : ''

  function handleToggle (event) {
    dispatch({ type: 'room-toggle', payload: { index, checked: event.target.checked } })
  }

  function handleAdultCountChange (event) {
    dispatch({ type: 'adult-count-change', payload: { index, count: event.target.value } })
  }

  function handleChildCountChange (event) {
    dispatch({ type: 'child-count-change', payload: { index, count: event.target.value } })
  }

  return (
    <styled.Wrapper className={ stateClass }>
      <styled.Toggle>
        <styled.ToggleInput
          checked={ selected }
          disabled={ !toggleable }
          id={ `RoomGuests-${indexFormatted}-enabled` }
          onChange={ handleToggle }
          type="checkbox"
        />
        <styled.ToggleLabel
          className="RoomGuests-toggleLabel"
          htmlFor={ `RoomGuests-${indexFormatted}-enabled` }
        >
          Room { indexFormatted }
        </styled.ToggleLabel>
      </styled.Toggle>
      <styled.Options>
        <styled.Option>
          <label htmlFor={ `RoomGuests-${indexFormatted}-adultCount` }>
            Adults<br /> (18+)
          </label>
          <br />
          <select
            disabled={ !selected }
            id={ `RoomGuests-${indexFormatted}-adultCount` }
            onChange={ handleAdultCountChange }
            value={ state.rooms[index].adultCount }
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </styled.Option>
        <styled.Option>
          <label htmlFor={ `RoomGuests-${indexFormatted}-childrenCount` }>
            Children<br /> (0–17)
          </label>
          <br />
          <select
            disabled={ !selected }
            id={ `RoomGuests-${indexFormatted}-childrenCount` }
            onChange={ handleChildCountChange }
            value={ state.rooms[index].childCount }
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </styled.Option>
      </styled.Options>
    </styled.Wrapper>
  )
}
