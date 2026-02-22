import { NavLink } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo">
          <span className="logo-icon">CB</span>
          <span className="logo-text">COUGS BASEBALL</span>
        </NavLink>

        <button
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li>
            <NavLink to="/" end onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/schedule" onClick={() => setMenuOpen(false)}>
              Schedule
            </NavLink>
          </li>
          <li>
            <NavLink to="/teams" onClick={() => setMenuOpen(false)}>
              Teams
            </NavLink>
          </li>
          <li>
            <NavLink to="/staff" onClick={() => setMenuOpen(false)}>
              Staff
            </NavLink>
          </li>
          <li>
            <NavLink to="/join" onClick={() => setMenuOpen(false)}>
              Join Cougs
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
