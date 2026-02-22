const teamsData = [
  {
    age: '18U',
    name: 'Cougs Varsity',
    coach: 'Coach Williams',
    league: 'Elite Division',
    season: 'Spring 2026',
    record: '22-6',
  },
  {
    age: '17U',
    name: 'Cougs Juniors',
    coach: 'Coach Martinez',
    league: 'Premier Division',
    season: 'Spring 2026',
    record: '19-8',
  },
  {
    age: '16U',
    name: 'Cougs 16U',
    coach: 'Coach Thompson',
    league: 'Premier Division',
    season: 'Spring 2026',
    record: '24-4',
  },
  {
    age: '15U',
    name: 'Cougs 15U',
    coach: 'Coach Davis',
    league: 'Select Division',
    season: 'Spring 2026',
    record: '18-9',
  },
  {
    age: '14U',
    name: 'Cougs 14U',
    coach: 'Coach Anderson',
    league: 'Select Division',
    season: 'Spring 2026',
    record: '20-7',
  },
  {
    age: '13U',
    name: 'Cougs 13U',
    coach: 'Coach Ramirez',
    league: 'Development Division',
    season: 'Spring 2026',
    record: '17-5',
  },
  {
    age: '12U',
    name: 'Cougs 12U',
    coach: 'Coach Patel',
    league: 'Development Division',
    season: 'Spring 2026',
    record: '21-3',
  },
  {
    age: '11U',
    name: 'Cougs 11U',
    coach: 'Coach Brooks',
    league: 'Rookie Division',
    season: 'Spring 2026',
    record: '34-5',
  },
  {
    age: '10U',
    name: 'Cougs 10U',
    coach: 'Coach Sullivan',
    league: 'Rookie Division',
    season: 'Spring 2026',
    record: '15-4',
  },
  {
    age: '9U',
    name: 'Cougs 9U',
    coach: 'Coach Nguyen',
    league: 'Introductory Division',
    season: 'Spring 2026',
    record: '12-3',
  },
]

function Teams() {
  return (
    <div className="page teams-page">
      <section className="page-header">
        <h1>Teams</h1>
        <p>Cougs Baseball teams from 9U to 18U</p>
      </section>

      <section className="section">
        <p className="teams-intro">
          Our program fields competitive travel baseball teams across all age groups.
          Each team is led by experienced coaches committed to developing well-rounded
          student-athletes.
        </p>
        <div className="teams-grid">
          {teamsData.map(team => (
            <div key={team.age} className="team-card">
              <div className="team-card-header">
                <div className="team-card-age">{team.age}</div>
                <div className="team-card-name">{team.name}</div>
              </div>
              <div className="team-card-body">
                <div className="team-card-detail">
                  <span className="team-card-detail-label">Head Coach</span>
                  <span className="team-card-detail-value">{team.coach}</span>
                </div>
                <div className="team-card-detail">
                  <span className="team-card-detail-label">League</span>
                  <span className="team-card-detail-value">{team.league}</span>
                </div>
                <div className="team-card-detail">
                  <span className="team-card-detail-label">Season</span>
                  <span className="team-card-detail-value">{team.season}</span>
                </div>
                <div className="team-card-detail">
                  <span className="team-card-detail-label">Record</span>
                  <span className="team-card-detail-value">{team.record}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Teams
