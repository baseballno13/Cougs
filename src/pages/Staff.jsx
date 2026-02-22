const staffData = [
  {
    name: 'Mike Williams',
    role: 'Program Director & Head Coach',
    bio: 'Coach Williams founded Cougs Baseball and has over 20 years of coaching experience. He oversees all program operations and leads the 18U squad.',
  },
  {
    name: 'Carlos Martinez',
    role: 'Director of Player Development',
    bio: 'Former minor league pitcher with 10+ years of coaching experience. Coach Martinez runs the Cougs player development program and skills assessments.',
  },
  {
    name: 'David Thompson',
    role: 'Head Coach — 16U',
    bio: 'A former college standout who brings a passion for teaching the fundamentals of the game. Specializes in pitching development and game strategy.',
  },
  {
    name: 'James Davis',
    role: 'Head Coach — 15U',
    bio: 'Coach Davis has coached travel baseball for 8 years and focuses on building strong team culture and competitive mindset in young athletes.',
  },
  {
    name: 'Ryan Anderson',
    role: 'Head Coach — 14U',
    bio: 'A lifelong baseball man with a background in college recruiting. Coach Anderson helps connect Cougs players with collegiate opportunities.',
  },
  {
    name: 'Luis Ramirez',
    role: 'Head Coach — 13U',
    bio: 'Coach Ramirez brings energy and enthusiasm to the field every day. He focuses on skill development and ensuring every player improves throughout the season.',
  },
  {
    name: 'Arun Patel',
    role: 'Head Coach — 12U',
    bio: 'With a background in athletic training, Coach Patel emphasizes proper mechanics and injury prevention alongside competitive development.',
  },
  {
    name: 'Kevin Brooks',
    role: 'Head Coach — 11U',
    bio: 'Coach Brooks is passionate about introducing young players to competitive baseball while making sure they love the game. His 11U team posted a 34-5 record.',
  },
  {
    name: 'Sean Sullivan',
    role: 'Hitting Coordinator',
    bio: 'A former professional baseball player, Coach Sullivan coordinates hitting instruction across all age groups with a data-driven approach to player improvement.',
  },
  {
    name: 'Tom Nguyen',
    role: 'Pitching Coordinator',
    bio: 'Coach Nguyen oversees pitching development for the entire program. He utilizes modern analytics and biomechanics to develop arms safely and effectively.',
  },
]

function Staff() {
  return (
    <div className="page staff-page">
      <section className="page-header">
        <h1>Staff</h1>
        <p>Meet the coaches behind Cougs Baseball</p>
      </section>

      <section className="section">
        <p className="staff-intro">
          Our coaching staff is made up of experienced baseball professionals dedicated to
          developing young athletes. Each coach brings unique expertise and a shared
          commitment to excellence.
        </p>
        <div className="staff-grid">
          {staffData.map(person => (
            <div key={person.name} className="staff-card">
              <div className="staff-card-photo">
                <span className="staff-card-photo-icon">&#9918;</span>
              </div>
              <div className="staff-card-info">
                <h3 className="staff-card-name">{person.name}</h3>
                <p className="staff-card-role">{person.role}</p>
                <p className="staff-card-bio">{person.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Staff
