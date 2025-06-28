import './App.css'
import Experience from './components/Experience'
import Home from './components/Home'
import Navbar from './components/Navbar'
// @ts-ignore
import ScrollTop from './components/ScrollTop'
import FinalContent from './components/FinalContent'
import Projects from './components/Projects'
import TechSkills from './components/TechSkills'

function App() {

  return (
    <main className='w-full'>
        <Navbar />
        <Home />
        <TechSkills />
        <Experience />
        <Projects />
        <FinalContent />
        <ScrollTop />

    </main>

  )
}

export default App
