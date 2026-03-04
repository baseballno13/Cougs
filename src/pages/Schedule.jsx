import { useEffect } from 'react'

const tournamentSchedule = [
  {
    date: '2/21',
    location: 'Waco',
    links: [
      { label: 'Bracket', url: 'https://play.fivetoolyouth.org/events/lt-winter-warm-up-pap-riverbend-park-waco-02-21-2026/10u-d3-' },
    ],
  },
  {
    date: '2/28',
    location: 'Clifton',
    links: [
      { label: 'Bracket', url: 'https://www.quickscores.com/Orgs/ExtraMsg.php?OrgDir=stsbthub&ExtraMsgID=17784' },
    ],
  },
  {
    date: '3/28',
    location: 'Parsons Ranch',
    links: [
      { label: 'Bracket', url: 'https://parsonssportsranch.leagueapps.com/tournaments/4823745/schedule' },
    ],
  },
  {
    date: '4/11',
    location: 'Temple or Parsons',
    links: [
      { label: 'Parsons Ranch', url: 'https://parsonssportsranch.leagueapps.com/tournaments/4823751/schedule' },
      { label: 'Crossroads Clash', url: 'https://www.playncs.com/baseball/Events/WhosComing/11627/crossroads-clash' },
    ],
  },
  {
    date: '4/25',
    location: 'Glen Rose, Temple, or Parsons',
    links: [
      { label: 'Parsons Ranch', url: 'https://parsonssportsranch.leagueapps.com/tournaments/4823783/schedule' },
      { label: 'STSBT Hub', url: 'https://www.quickscores.com/Orgs/ExtraMsg.php?OrgDir=stsbthub&ExtraMsgID=17806' },
      { label: 'April Slugfest', url: 'https://www.playncs.com/baseball/Events/WhosComing/12327/april-slugfest-pap' },
    ],
  },
  {
    date: '5/1',
    location: 'Rocker B',
    links: [
      { label: 'Bracket', url: 'https://rockerbranch.leagueapps.com/tournaments/4846078/schedule' },
    ],
  },
  {
    date: '5/16',
    location: 'Brownwood, Temple, or Gatesville',
    links: [
      { label: 'STSBT Hub', url: 'https://www.quickscores.com/Orgs/ExtraMsg.php?OrgDir=stsbthub&ExtraMsgID=17812' },
      { label: 'Temple Mayhem', url: 'https://www.playncs.com/baseball/Events/WhosComing/12144/temple-mayhem' },
    ],
  },
  {
    date: '5/30',
    location: 'Parsons Ranch',
    links: [
      { label: 'Bracket', url: 'https://parsonssportsranch.leagueapps.com/tournaments/4823827/schedule' },
    ],
  },
  {
    date: '6/11',
    location: 'Parsons Ranch World Series',
    links: [
      { label: 'Bracket', url: 'https://parsonssportsranch.leagueapps.com/tournaments/4823846/schedule' },
    ],
  },
]

function Schedule() {
  useEffect(() => {
    if (window.GC && window.GC.team && window.GC.team.schedule) {
      window.GC.team.schedule.init({
        target: "#gc-schedule-widget-ll2g",
        widgetId: "0b513f7d-6f30-4e38-8326-f8e29312b1c6",
        maxVerticalGamesVisible: 4,
      })
    }
  }, [])

  return (
    <div className="page schedule-page">
      <section className="page-header">
        <h1>Schedule</h1>
        <p>Follow the Cougs all season long</p>
      </section>

      <section className="section">
        <p className="schedule-intro">
          View our upcoming games, scores, and full season schedule powered by GameChanger.
        </p>
        <div className="gc-widget-wrapper">
          <div id="gc-schedule-widget-ll2g"></div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title section-title-center">2026 Cougs Baseball Tournament Schedule</h2>
        <div className="tournament-schedule">
          {tournamentSchedule.map((event, index) => (
            <div key={index} className="tournament-row">
              <div className="tournament-date">{event.date}</div>
              <div className="tournament-location">{event.location}</div>
              <div className="tournament-links">
                {event.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tournament-link"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Schedule
