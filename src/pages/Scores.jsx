import { useEffect } from 'react'

function Scores() {
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
    <div className="page scores-page">
      <section className="page-header">
        <h1>Scores & Schedule</h1>
        <p>Track the Cougs all season long</p>
      </section>

      <section className="section">
        <h2 className="section-title">Schedule</h2>
        <div className="gc-widget-wrapper">
          <div id="gc-schedule-widget-ll2g"></div>
        </div>
      </section>
    </div>
  )
}

export default Scores
