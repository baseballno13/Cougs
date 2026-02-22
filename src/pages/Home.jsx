import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="page home-page">
      <section className="hero">
        <div className="hero-overlay">
          <h1>COUGS</h1>
          <p className="hero-subtitle">Pride. Passion. Perseverance.</p>
          <div className="hero-cta">
            <Link to="/scores" className="btn btn-primary">View Scores</Link>
            <Link to="/fans" className="btn btn-secondary">Join the Pack</Link>
          </div>
        </div>
      </section>

      <section className="section highlights">
        <h2 className="section-title">Season Highlights</h2>
        <div className="card-grid">
          <div className="card">
            <div className="card-accent"></div>
            <h3>12-3</h3>
            <p>Season Record</p>
          </div>
          <div className="card">
            <div className="card-accent"></div>
            <h3>Conference Champs</h3>
            <p>2025 Season Title</p>
          </div>
          <div className="card">
            <div className="card-accent"></div>
            <h3>8 Game Streak</h3>
            <p>Current Win Streak</p>
          </div>
        </div>
      </section>

      <section className="section upcoming">
        <h2 className="section-title">Upcoming Games</h2>
        <div className="game-list">
          <div className="game-item">
            <div className="game-date">
              <span className="month">FEB</span>
              <span className="day">25</span>
            </div>
            <div className="game-details">
              <span className="game-opponent">vs. Wildcats</span>
              <span className="game-location">Home - Cougar Stadium</span>
            </div>
            <span className="game-time">7:00 PM</span>
          </div>
          <div className="game-item">
            <div className="game-date">
              <span className="month">MAR</span>
              <span className="day">02</span>
            </div>
            <div className="game-details">
              <span className="game-opponent">@ Bulldogs</span>
              <span className="game-location">Away - Bulldog Arena</span>
            </div>
            <span className="game-time">3:30 PM</span>
          </div>
          <div className="game-item">
            <div className="game-date">
              <span className="month">MAR</span>
              <span className="day">08</span>
            </div>
            <div className="game-details">
              <span className="game-opponent">vs. Eagles</span>
              <span className="game-location">Home - Cougar Stadium</span>
            </div>
            <span className="game-time">6:00 PM</span>
          </div>
        </div>
      </section>

      <section className="section news">
        <h2 className="section-title">Latest News</h2>
        <div className="news-grid">
          <article className="news-card">
            <div className="news-tag">Game Recap</div>
            <h3>Cougs Dominate in Home Opener</h3>
            <p>The Cougars came out firing on all cylinders with a commanding 45-17 victory in front of a packed Cougar Stadium.</p>
            <span className="news-date">Feb 20, 2026</span>
          </article>
          <article className="news-card">
            <div className="news-tag">Roster</div>
            <h3>Star Recruit Signs with Cougs</h3>
            <p>Top-rated recruit Marcus Johnson has committed to the Cougars, bolstering the squad for next season.</p>
            <span className="news-date">Feb 18, 2026</span>
          </article>
          <article className="news-card">
            <div className="news-tag">Community</div>
            <h3>Fan Appreciation Night Announced</h3>
            <p>Join us March 15 for Fan Appreciation Night with giveaways, meet-and-greets, and post-game fireworks.</p>
            <span className="news-date">Feb 15, 2026</span>
          </article>
        </div>
      </section>
    </div>
  )
}

export default Home
