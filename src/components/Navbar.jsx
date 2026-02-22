import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo">
          <span className="logo-icon">CB</span>
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
            <NavLink to="/teams" onClick={() => setMenuOpen(false)}>
              Team
            </NavLink>
          </li>
          <li>
            <NavLink to="/staff" onClick={() => setMenuOpen(false)}>
              Staff
            </NavLink>
          </li>
          <li>
            <NavLink to="/schedule" onClick={() => setMenuOpen(false)}>
              Schedule
            </NavLink>
          </li>
          <li>
            <NavLink to="/history" onClick={() => setMenuOpen(false)}>
              History
            </NavLink>
          </li>
          <li className="nav-cta-item">
            <NavLink to="/login" onClick={() => setMenuOpen(false)}>
              Log In
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
