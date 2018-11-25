import React, { Component } from 'react'
import './HotelDetails.css'

class App extends Component {
  render() {
    return (
      <div className="HotelDetails">
        {/* Classes written using BEM style in this demo */}
        <header className="page-header">
          <a className="button" href="#placeholder">
            ‹ Back
          </a>
          <h1 className="heading">
            Hotel Details
          </h1>
          <img alt="Hotel Company" src="http://placehold.it/80x80" height="40" width="40" />
        </header>
        <main className="page-content">
          <div className="page-content__inner-wrapper">
            <div className="content--reversed">
              <img alt="Hotel exterior" src="http://placehold.it/1920x1080" height="1080" width="1920" />
              <h1>
                Hilton Chicago
              </h1>
              <p>
                720 South Michigan Avenue<br />
                Chicago, Illinois, 60605<br />
                <a href="tel:13129224400">
                  1-312-922-4400
                </a>
              </p>
            </div>
            <ul className="nav-list">
              <li className="nav-list__item">
                <a className="nav-list__link" href="#placeholder">
                  Map
                </a>
              </li>
              <li className="nav-list__item">
                <a className="nav-list__link" href="#placeholder">
                  Photo Gallery
                </a>
              </li>
              <li className="nav-list__item">
                <a className="nav-list__link" href="#placeholder">
                  Amenities
                </a>
              </li>
            </ul>
          </div>
        </main>
      </div>
    )
  }
}

export default App
