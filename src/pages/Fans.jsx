import { useState } from 'react'

const pollOptions = [
  { id: 1, label: 'Wildcats', votes: 42 },
  { id: 2, label: 'Bulldogs', votes: 28 },
  { id: 3, label: 'Eagles', votes: 35 },
  { id: 4, label: 'Sharks', votes: 15 },
]

const fanPhotos = [
  { id: 1, caption: 'Tailgate crew representing!', author: 'CougarFan99' },
  { id: 2, caption: 'Face paint game strong', author: 'PaintedPaw' },
  { id: 3, caption: 'The student section going wild', author: 'PackMentality' },
  { id: 4, caption: 'Three generations of Cougs fans', author: 'LegacyCougar' },
  { id: 5, caption: 'Away game road trip', author: 'RoadWarrior22' },
  { id: 6, caption: 'Best sign of the season', author: 'SignKing' },
]

const chants = [
  { title: 'The Cougar Howl', text: 'When the Cougs score, stand up and howl! Let the stadium shake with Cougar pride!' },
  { title: 'Defense Chant', text: 'D-FENCE! D-FENCE! Lock it down, Cougs! Nothing gets through the wall!' },
  { title: 'Victory March', text: 'We are the Cougs, mighty and proud! Marching to victory, cheering out loud!' },
]

function Fans() {
  const [votes, setVotes] = useState(pollOptions)
  const [voted, setVoted] = useState(false)
  const [selectedChant, setSelectedChant] = useState(null)

  const totalVotes = votes.reduce((sum, opt) => sum + opt.votes, 0)

  function handleVote(id) {
    if (voted) return
    setVotes(prev => prev.map(opt => opt.id === id ? { ...opt, votes: opt.votes + 1 } : opt))
    setVoted(true)
  }

  return (
    <div className="page fans-page">
      <section className="page-header">
        <h1>Fan Zone</h1>
        <p>Where the Cougar pack comes together</p>
      </section>

      <section className="section">
        <h2 className="section-title">Fan Poll</h2>
        <div className="poll-card">
          <h3>Who will be our toughest opponent this season?</h3>
          <div className="poll-options">
            {votes.map(opt => (
              <button
                key={opt.id}
                className={`poll-option ${voted ? 'poll-voted' : ''}`}
                onClick={() => handleVote(opt.id)}
                disabled={voted}
              >
                <span className="poll-option-label">{opt.label}</span>
                {voted && (
                  <div className="poll-bar-container">
                    <div
                      className="poll-bar"
                      style={{ width: `${Math.round((opt.votes / totalVotes) * 100)}%` }}
                    ></div>
                    <span className="poll-pct">{Math.round((opt.votes / totalVotes) * 100)}%</span>
                  </div>
                )}
              </button>
            ))}
          </div>
          {voted && <p className="poll-total">{totalVotes} total votes</p>}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Fan Gallery</h2>
        <div className="gallery-grid">
          {fanPhotos.map(photo => (
            <div key={photo.id} className="gallery-card">
              <div className="gallery-placeholder">
                <span className="gallery-icon">&#128247;</span>
              </div>
              <div className="gallery-info">
                <p className="gallery-caption">{photo.caption}</p>
                <span className="gallery-author">@{photo.author}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Game Day Chants</h2>
        <div className="chants-list">
          {chants.map((chant, i) => (
            <div key={i} className="chant-card">
              <button
                className="chant-header"
                onClick={() => setSelectedChant(selectedChant === i ? null : i)}
              >
                <span>{chant.title}</span>
                <span className={`chant-arrow ${selectedChant === i ? 'open' : ''}`}>&#9660;</span>
              </button>
              {selectedChant === i && (
                <div className="chant-body">
                  <p>{chant.text}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="section merch-banner">
        <div className="merch-content">
          <h2>Rep the Cougs</h2>
          <p>Check out the latest Cougs gear and show your pride on game day.</p>
          <button className="btn btn-primary">Shop Merch</button>
        </div>
      </section>
    </div>
  )
}

export default Fans
