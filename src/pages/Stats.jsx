import { useState } from 'react'

const teamStats = {
  pointsPerGame: 39.6,
  pointsAllowed: 21.0,
  totalYards: 4850,
  turnovers: 8,
  thirdDownPct: '48.2%',
  redZonePct: '82.5%',
}

const playerStats = [
  { name: 'Jake Mitchell', position: 'QB', gp: 15, stat1Label: 'Pass Yds', stat1: 3420, stat2Label: 'TDs', stat2: 28, stat3Label: 'Rating', stat3: 142.5 },
  { name: 'DeShawn Carter', position: 'RB', gp: 15, stat1Label: 'Rush Yds', stat1: 1285, stat2Label: 'TDs', stat2: 14, stat3Label: 'YPC', stat3: 5.8 },
  { name: 'Chris Nakamura', position: 'WR', gp: 15, stat1Label: 'Rec Yds', stat1: 1102, stat2Label: 'TDs', stat2: 11, stat3Label: 'Rec', stat3: 78 },
  { name: 'Tyler Rodriguez', position: 'WR', gp: 14, stat1Label: 'Rec Yds', stat1: 845, stat2Label: 'TDs', stat2: 7, stat3Label: 'Rec', stat3: 62 },
  { name: 'Marcus Webb', position: 'LB', gp: 15, stat1Label: 'Tackles', stat1: 98, stat2Label: 'Sacks', stat2: 8.5, stat3Label: 'FF', stat3: 3 },
  { name: 'Andre Williams', position: 'CB', gp: 15, stat1Label: 'INTs', stat1: 6, stat2Label: 'PDs', stat2: 14, stat3Label: 'Tackles', stat3: 45 },
  { name: 'Jamal Brooks', position: 'DE', gp: 15, stat1Label: 'Sacks', stat1: 11, stat2Label: 'TFL', stat2: 16, stat3Label: 'Tackles', stat3: 52 },
  { name: 'Ryan O\'Brien', position: 'K', gp: 15, stat1Label: 'FG%', stat1: '88.5', stat2Label: 'Long', stat2: 52, stat3Label: 'Points', stat3: 112 },
]

function Stats() {
  const [view, setView] = useState('team')

  return (
    <div className="page stats-page">
      <section className="page-header">
        <h1>Stats</h1>
        <p>Cougs by the numbers</p>
      </section>

      <section className="section">
        <div className="tabs">
          <button className={`tab ${view === 'team' ? 'active' : ''}`} onClick={() => setView('team')}>
            Team Stats
          </button>
          <button className={`tab ${view === 'players' ? 'active' : ''}`} onClick={() => setView('players')}>
            Player Stats
          </button>
        </div>

        {view === 'team' && (
          <>
            <div className="stats-grid">
              <div className="stat-card highlight">
                <span className="stat-value">{teamStats.pointsPerGame}</span>
                <span className="stat-label">Points Per Game</span>
              </div>
              <div className="stat-card">
                <span className="stat-value">{teamStats.pointsAllowed}</span>
                <span className="stat-label">Points Allowed</span>
              </div>
              <div className="stat-card">
                <span className="stat-value">{teamStats.totalYards.toLocaleString()}</span>
                <span className="stat-label">Total Yards</span>
              </div>
              <div className="stat-card">
                <span className="stat-value">{teamStats.turnovers}</span>
                <span className="stat-label">Turnovers</span>
              </div>
              <div className="stat-card">
                <span className="stat-value">{teamStats.thirdDownPct}</span>
                <span className="stat-label">3rd Down %</span>
              </div>
              <div className="stat-card highlight">
                <span className="stat-value">{teamStats.redZonePct}</span>
                <span className="stat-label">Red Zone %</span>
              </div>
            </div>

            <div className="comparison-bar-section">
              <h3>Scoring Comparison</h3>
              <div className="comparison-row">
                <span className="comparison-label">Points Scored</span>
                <div className="comparison-bar-track">
                  <div className="comparison-bar cougs-bar" style={{ width: '75%' }}></div>
                </div>
                <span className="comparison-value">{teamStats.pointsPerGame}</span>
              </div>
              <div className="comparison-row">
                <span className="comparison-label">Points Allowed</span>
                <div className="comparison-bar-track">
                  <div className="comparison-bar opp-bar" style={{ width: '40%' }}></div>
                </div>
                <span className="comparison-value">{teamStats.pointsAllowed}</span>
              </div>
            </div>
          </>
        )}

        {view === 'players' && (
          <div className="players-table-wrapper">
            <table className="players-table">
              <thead>
                <tr>
                  <th>Player</th>
                  <th>Pos</th>
                  <th>GP</th>
                  <th>Stat 1</th>
                  <th>Stat 2</th>
                  <th>Stat 3</th>
                </tr>
              </thead>
              <tbody>
                {playerStats.map((player, i) => (
                  <tr key={i}>
                    <td className="player-name">{player.name}</td>
                    <td><span className="pos-badge">{player.position}</span></td>
                    <td>{player.gp}</td>
                    <td>
                      <div className="stat-cell">
                        <span className="stat-cell-value">{player.stat1}</span>
                        <span className="stat-cell-label">{player.stat1Label}</span>
                      </div>
                    </td>
                    <td>
                      <div className="stat-cell">
                        <span className="stat-cell-value">{player.stat2}</span>
                        <span className="stat-cell-label">{player.stat2Label}</span>
                      </div>
                    </td>
                    <td>
                      <div className="stat-cell">
                        <span className="stat-cell-value">{player.stat3}</span>
                        <span className="stat-cell-label">{player.stat3Label}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  )
}

export default Stats
