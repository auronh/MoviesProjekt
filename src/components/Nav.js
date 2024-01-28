import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="/">FilmaDB</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item active" aria-current="page">
                <Link to="/filmat" className="nav-link">Filmat</Link>
              </li>
            </ul>
          </div>
        </div>
    </nav>
    
  )
}

export default Nav