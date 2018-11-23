import React from 'react'
import RoomConfiguration from './RoomConfiguration'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('RoomConfiguration', () => {
  it('renders an unordered list', () => {
    const wrapperElement = mount(<RoomConfiguration />)
    const ulElements = wrapperElement.find('ul')
    const liElements = wrapperElement.find('li')

    expect(ulElements.length).toBe(1)
    expect(liElements.length).toBe(4)
  })
})