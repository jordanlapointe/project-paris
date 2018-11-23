import React from 'react'
import RoomGuests from './RoomGuests'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('RoomGuests', () => {
  it('renders the expected inputs', () => {
    const wrapperElement = mount(<RoomGuests />)
    const checkboxElements = wrapperElement.find('[type="checkbox"]')
    const selectElements = wrapperElement.find('select')

    expect(checkboxElements.length).toBe(1)
    expect(selectElements.length).toBe(2)
  })

  it('calls function when toggled', () => {
    const index = 2
    const toggleFunction = jest.fn()
    const wrapperElement = mount(<RoomGuests index={ index } onToggle={ toggleFunction } togglable={ true } />)
    const checkboxElement = wrapperElement.find(`#RoomGuests-${index + 1}-enabled`)

    checkboxElement.simulate('change')
    expect(toggleFunction).toHaveBeenCalled()
  })

  it('disables checkbox when not toggleable', () => {
    const index = 0
    const wrapperElement = mount(<RoomGuests index={ index } toggleable={ false } />)
    const checkboxElement = wrapperElement.find(`#RoomGuests-${index + 1}-enabled`)

    expect(checkboxElement.prop('disabled')).toEqual(true)
  })
})
