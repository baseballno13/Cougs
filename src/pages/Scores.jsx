import { useState } from 'react'

const gamesData = {
  recent: [
    { id: 1, date: 'Feb 20', opponent: 'Panthers', home: true, cougsScore: 45, oppScore: 17, result: 'W' },
    { id: 2, date: 'Feb 15', opponent: 'Hawks', home: false, cougsScore: 28, oppScore: 31, result: 'L' },
    { id: 3, date: 'Feb 10', opponent: 'Bears', home: true, cougsScore: 38, oppScore: 21, result: 'W' },
    { id: 4, date: 'Feb 05', opponent: 'Tigers', home: true, cougsScore: 52, oppScore: 14, result: 'W' },
    { id: 5, date: 'Jan 30', opponent: 'Wolves', home: false, cougsScore: 34, oppScore: 28, result: 'W' },
    { id: 6, date: 'Jan 25', opponent: 'Lions', home: true, cougsScore: 41, oppScore: 20, result: 'W' },
    { id: 7, date: 'Jan 20', opponent: 'Rams', home: false, cougsScore: 24, oppScore: 27, result: 'L' },
    { id: 8, date: 'Jan 15', opponent: 'Stallions', home: true, cougsScore: 55, oppScore: 10, result: 'W' },
  ],
  upcoming: [
    { id: 9, date: 'Feb 25', opponent: 'Wildcats', home: true, time: '7:00 PM' },
    { id: 10, date: 'Mar 02', opponent: 'Bulldogs', home: false, time: '3:30 PM' },
    { id: 11, date: 'Mar 08', opponent: 'Eagles', home: true, time: '6:00 PM' },
    { id: 12, date: 'Mar 14', opponent: 'Sharks', home: false, time: '5:00 PM' },
    { id: 13, date: 'Mar 20', opponent: 'Falcons', home: true, time: '7:30 PM' },
  ],
}

function Scores() {
  const [tab, setTab] = useState('recent')

  const wins = gamesData.recent.filter(g => g.result === 'W').length
  const losses = gamesData.recent.filter(g => g.result === 'L').length

  return (
    <div className="page scores-page">
      <section className="page-header">
        <h1>Scores</h1>
        <p>Track the Cougs all season long</p>
      </section>

      <section className="section">
        <div className="record-banner">
          <div className="record-stat">
            <span className="record-number">{wins}</span>
            <span className="record-label">Wins</span>
          </div>
          <div className="record-divider"></div>
          <div className="record-stat">
            <span className="record-number">{losses}</span>
            <span className="record-label">Losses</span>
          </div>
          <div className="record-divider"></div>
          <div className="record-stat">
            <span className="record-number">{Math.round((wins / (wins + losses)) * 100)}%</span>
            <span className="record-label">Win Rate</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="tabs">
          <button
            className={`tab ${tab === 'recent' ? 'active' : ''}`}
            onClick={() => setTab('recent')}
          >
            Recent Results
          </button>
          <button
            className={`tab ${tab === 'upcoming' ? 'active' : ''}`}
            onClick={() => setTab('upcoming')}
          >
            Upcoming Games
          </button>
        </div>

        {tab === 'recent' && (
          <div className="scores-list">
            {gamesData.recent.map(game => (
              <div key={game.id} className={`score-card ${game.result === 'W' ? 'win' : 'loss'}`}>
                <div className="score-result">{game.result}</div>
                <div className="score-teams">
                  <span className="score-cougs">Cougs</span>
                  <span className="score-vs">vs</span>
                  <span className="score-opponent">{game.opponent}</span>
                </div>
                <div className="score-final">
                  <span className={game.result === 'W' ? 'score-winner' : ''}>{game.cougsScore}</span>
                  <span className="score-dash">-</span>
                  <span className={game.result === 'L' ? 'score-winner' : ''}>{game.oppScore}</span>
                </div>
                <div className="score-meta">
                  <span>{game.date}</span>
                  <span>{game.home ? 'Home' : 'Away'}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === 'upcoming' && (
          <div className="scores-list">
            {gamesData.upcoming.map(game => (
              <div key={game.id} className="score-card upcoming">
                <div className="score-result upcoming-badge">TBD</div>
                <div className="score-teams">
                  <span className="score-cougs">Cougs</span>
                  <span className="score-vs">vs</span>
                  <span className="score-opponent">{game.opponent}</span>
                </div>
                <div className="score-time">{game.time}</div>
                <div className="score-meta">
                  <span>{game.date}</span>
                  <span>{game.home ? 'Home' : 'Away'}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

export default Scores
