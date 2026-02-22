import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Schedule from './pages/Schedule'
import Teams from './pages/Teams'
import Staff from './pages/Staff'
import Join from './pages/Join'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/join" element={<Join />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
