import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import { Founder } from './components/Founder'
import Hero from './components/Hero'
import Mission from './components/Mission'
import Navbar from './components/Navbar'
import Values from './components/Values'

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <Founder />
      <About />
      <Mission />
      <Values />
      <Footer />
    </div>
  )
}

export default App
