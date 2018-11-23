import React, { Component } from 'react'
import './HotelDetails.css'

class App extends Component {
  render() {
    return (
      <div className="HotelDetails">
        {/* Classes written using BEM style in this demo */}
        <header className="page-header">
          <a className="button" href="#">
            ‹ Back
          </a>
          <h1>
            Hotel Details
          </h1>
          <img src="http://placehold.it/80x80" height="40" width="40" />
        </header>
        <main>
          <img src="http://placehold.it/1920x1080" height="1080" width="1920" />
          <h1>
            Hilton Chicago
          </h1>
          <p>
            720 South Michigan Avenue
          </p>
          <p>
            Chicago, Illinois, 60605
          </p>
          <p>
            <a href="tel:13129224400">
              1-312-922-4400
            </a>
          </p>
          <ul>
            <li>
              <a href="#">
                Map
              </a>
            </li>
            <li>
              <a href="#">
                Map
              </a>
            </li>
            <li>
              <a href="#">
                Map
              </a>
            </li>
            <li>
              <a href="#">
                Map
              </a>
            </li>
          </ul>
        </main>
      </div>
    )
  }
}

export default App
