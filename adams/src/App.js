import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Container from '@material-ui/core/Container'
import './App.scss'

const App= ()=> {


  return(
    <>
    <Header />
<Container maxWidth="xl">
    <About />
    <Skills />
    <Portfolio />
    <Contact />
</Container>
    </>
  )
}

export default App;