import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Cougs Baseball</h3>
          <p>Premier travel baseball. Developing student-athletes into quality young men on and off the field since 2005.</p>
        </div>
        <div className="footer-section">
          <h4>Navigation</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/teams">Teams</Link></li>
            <li><Link to="/staff">Staff</Link></li>
            <li><Link to="/schedule">Schedule</Link></li>
            <li><Link to="/join">Join Cougs</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="Twitter">Twitter</a>
            <a href="#" aria-label="Facebook">Facebook</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2026 Cougs Baseball. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
