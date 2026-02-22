import { Link } from 'react-router-dom'

const socialPosts = [
  {
    id: 1,
    type: 'Commitment',
    text: 'Congratulations to Tyler Rodriguez on his commitment to play D1 baseball! Tyler has been with the Cougs program since 12U. We are proud of you!',
    date: 'Feb 20, 2026',
    likes: 142,
  },
  {
    id: 2,
    type: 'Tournament',
    text: 'Cougs 16U take home the championship trophy at the Winter Classic! The boys went 5-0 on the weekend with dominant pitching and timely hitting.',
    date: 'Feb 15, 2026',
    likes: 98,
  },
  {
    id: 3,
    type: 'Game Recap',
    text: 'What a game! Cougs 14U come from behind with a 4-run 7th inning to walk it off against the Wildcats. That\'s Cougs baseball!',
    date: 'Feb 12, 2026',
    likes: 87,
  },
  {
    id: 4,
    type: 'Tryouts',
    text: 'Spring tryouts are coming! We are looking for dedicated athletes ages 9U-18U to join the Cougs family. Contact us for details.',
    date: 'Feb 10, 2026',
    likes: 64,
  },
  {
    id: 5,
    type: 'Player Spotlight',
    text: 'Shoutout to Marcus Webb for a monster performance on the mound — 7 IP, 12 K\'s, 0 ER. That\'s how you deal! Keep grinding.',
    date: 'Feb 8, 2026',
    likes: 115,
  },
  {
    id: 6,
    type: 'Program',
    text: 'Wrapping up another incredible season of Cougs Baseball. 18 Tournament Championships, 200+ games over .500 as a program, and 12 college commits this year alone.',
    date: 'Feb 5, 2026',
    likes: 203,
  },
]

function Home() {
  return (
    <div className="page home-page">
      <section className="hero">
        <div className="hero-overlay">
          <span className="hero-label">Est. 2005</span>
          <h1>COUGS</h1>
          <p className="hero-subtitle">Baseball</p>
          <p className="hero-tagline">Developing student-athletes into quality young men on and off the field.</p>
          <div className="hero-cta">
            <Link to="/join" className="btn btn-primary">Join the Cougs</Link>
            <Link to="/schedule" className="btn btn-secondary">View Schedule</Link>
          </div>
        </div>
      </section>

      <section className="stat-banner">
        <div className="stat-banner-inner">
          <div className="stat-banner-item">
            <span className="stat-banner-value">18</span>
            <span className="stat-banner-label">Championships</span>
          </div>
          <div className="stat-banner-item">
            <span className="stat-banner-value">200+</span>
            <span className="stat-banner-label">Games Over .500</span>
          </div>
          <div className="stat-banner-item">
            <span className="stat-banner-value">12</span>
            <span className="stat-banner-label">College Commits</span>
          </div>
          <div className="stat-banner-item">
            <span className="stat-banner-value">9U-18U</span>
            <span className="stat-banner-label">Age Groups</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="about-grid">
          <div className="about-text">
            <h2>About <span>Cougs Baseball</span></h2>
            <p>
              Cougs Baseball is a premier travel baseball organization dedicated to providing
              young athletes with top-tier training, competitive opportunities, and a passion
              for the game.
            </p>
            <p>
              We offer an inclusive environment that encourages skill development, teamwork,
              and sportsmanship. With expert coaching and a commitment to player development,
              Cougs Baseball prepares student-athletes for success at the next level.
            </p>
            <Link to="/join" className="btn btn-secondary">Learn More</Link>
          </div>
          <div className="about-image">
            <span className="about-image-icon">&#9918;</span>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Latest Updates</h2>
        <div className="social-grid">
          {socialPosts.map(post => (
            <div key={post.id} className="social-card">
              <div className="social-card-image">
                <span className="social-icon">&#9918;</span>
                <span className="social-card-badge">{post.type}</span>
              </div>
              <div className="social-card-body">
                <p>{post.text}</p>
                <div className="social-card-meta">
                  <span>{post.date}</span>
                  <span>{post.likes} likes</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Latest News</h2>
        <div className="news-grid">
          <article className="news-card">
            <div className="news-tag">Game Recap</div>
            <h3>Cougs 16U Win Winter Classic</h3>
            <p>The 16U squad went undefeated across five games to bring home the championship trophy with dominant pitching performances all weekend.</p>
            <span className="news-date">Feb 20, 2026</span>
          </article>
          <article className="news-card">
            <div className="news-tag">Commitment</div>
            <h3>Rodriguez Commits to D1 Program</h3>
            <p>Long-time Cougs player Tyler Rodriguez has committed to play Division 1 baseball, becoming the program&apos;s 12th college commit this year.</p>
            <span className="news-date">Feb 18, 2026</span>
          </article>
          <article className="news-card">
            <div className="news-tag">Tryouts</div>
            <h3>Spring Tryout Dates Announced</h3>
            <p>Tryouts for the upcoming spring season have been scheduled. We are looking for dedicated athletes ages 9U-18U to join the Cougs family.</p>
            <span className="news-date">Feb 15, 2026</span>
          </article>
        </div>
      </section>
    </div>
  )
}

export default Home
