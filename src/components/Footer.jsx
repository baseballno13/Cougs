function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>COUGS</h3>
          <p>Home of the Cougars. Pride, passion, and perseverance.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/scores">Scores</a></li>
            <li><a href="/stats">Stats</a></li>
            <li><a href="/fans">Fan Zone</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#" aria-label="Twitter">Twitter</a>
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="Facebook">Facebook</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Cougs. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
