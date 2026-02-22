import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Scores from './pages/Scores'
import Stats from './pages/Stats'
import Fans from './pages/Fans'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scores" element={<Scores />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/fans" element={<Fans />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
