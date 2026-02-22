import { NavLink } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo">
          <span className="logo-icon">C</span>
          <span className="logo-text">COUGS</span>
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
            <NavLink to="/scores" onClick={() => setMenuOpen(false)}>
              Scores
            </NavLink>
          </li>
          <li>
            <NavLink to="/stats" onClick={() => setMenuOpen(false)}>
              Stats
            </NavLink>
          </li>
          <li>
            <NavLink to="/fans" onClick={() => setMenuOpen(false)}>
              Fans
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
