import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import SolarSystem from './components/SolarSystem'
import Galaxies from './components/Galaxies'
import BlackHoles from './components/BlackHoles'
import Exoplanets from './components/Exoplanets'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-cosmic-gradient">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <SolarSystem />
              <Galaxies />
              <BlackHoles />
              <Exoplanets />
              <Contact />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  )
}

export default App
