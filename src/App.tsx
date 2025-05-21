import './App.css'
import Experience from './components/Experience'
import Home from './components/Home'
import Navbar from './components/Navbar'
// @ts-ignore
import ScrollTop from './components/ScrollTop'
// @ts-ignore
import FinalContent from './components/FinalContent'

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <Experience />
      <FinalContent />
      <ScrollTop />
    </>
  )
}

export default App
