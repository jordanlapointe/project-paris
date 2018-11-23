import React, { Component } from 'react'
import HotelDetails from './HotelDetails'
import RoomConfiguration from './RoomConfiguration'
import './App.css'
import './Layout.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showConfiguratorDemo: true
    }
  }

  toggleDemo = () => {
    this.setState({
      showConfiguratorDemo: !this.state.showConfiguratorDemo
    })
  }

  render() {
    return (
      <div className="App">
        <a href="javascript://" onClick={ this.toggleDemo }>
          { this.state.showConfiguratorDemo ?
            'Show hotel page demo'
          :
            'Show configurator demo'
          }
        </a>
        { this.state.showConfiguratorDemo ? (
          <RoomConfiguration />
        ) : (
          <HotelDetails />
        ) }
      </div>
    )
  }
}

export default App
