import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import './App.scss'

const App= ()=> {


  return(
    <div className="container">
      <Header />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default App;