import { Link } from 'react-router-dom'

function Join() {
  return (
    <div className="page join-page">
      <section className="page-header">
        <h1>Join the Cougs</h1>
        <p>Become part of the Cougs Baseball family</p>
      </section>

      <section className="section">
        <p className="join-intro">
          Cougs Baseball is always looking for dedicated, hard-working athletes who love
          the game. We field teams from 9U through 18U and provide a competitive environment
          focused on player development, sportsmanship, and preparing student-athletes for
          the next level.
        </p>

        <div className="join-cta-banner">
          <h2>Spring 2026 Tryouts</h2>
          <p>
            Tryouts are open to all players ages 9-18. Come showcase your skills
            and see what Cougs Baseball is all about.
          </p>
          <Link to="/schedule" className="btn btn-primary">View Schedule</Link>
        </div>

        <div className="join-details-grid">
          <div className="join-detail-card">
            <div className="join-detail-card-icon">&#9918;</div>
            <h3>Tryout Process</h3>
            <p>
              All tryouts take place at our home field. Players are evaluated on hitting,
              fielding, throwing, and baseball IQ. Reach out to a Cougs coach to schedule
              a private workout or attend our open tryout dates.
            </p>
          </div>
          <div className="join-detail-card">
            <div className="join-detail-card-icon">&#127942;</div>
            <h3>Competitive Play</h3>
            <p>
              Our teams compete in elite travel baseball tournaments and league play
              throughout the region. We play a full schedule that prepares our athletes
              for high school and collegiate baseball.
            </p>
          </div>
          <div className="join-detail-card">
            <div className="join-detail-card-icon">&#127891;</div>
            <h3>College Recruiting</h3>
            <p>
              We actively help our players get recruited. With 12 college commits this
              year alone, our coaching staff has the connections and knowledge to guide
              athletes through the recruiting process.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">What We Stand For</h2>
        <div className="join-values">
          <div className="join-value-item">
            <h4>Development</h4>
            <p>Every player gets better every season through structured training and quality coaching.</p>
          </div>
          <div className="join-value-item">
            <h4>Competition</h4>
            <p>We compete at the highest level and prepare our athletes for the next stage of their career.</p>
          </div>
          <div className="join-value-item">
            <h4>Character</h4>
            <p>We develop quality young men who represent themselves, their families, and the Cougs with pride.</p>
          </div>
          <div className="join-value-item">
            <h4>Community</h4>
            <p>The Cougs family extends beyond the field. We build lasting relationships through the game of baseball.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Join
