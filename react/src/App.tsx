import { useState } from 'react'
import Navigation from './components/Navigation'
import Hero from './pages/Hero'
import About from './pages/About'
import Skills from './pages/Skills'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Education from './pages/Education'
import Contact from './pages/Contact'
import SendMessage from './pages/SendMessage'
import './App.css'

function App() {
  const [showSendMessage, setShowSendMessage] = useState(false)

  const handleOpenSendMessage = () => {
    setShowSendMessage(true)
    window.scrollTo(0, 0)
  }

  const handleCloseSendMessage = () => {
    setShowSendMessage(false)
  }

  if (showSendMessage) {
    return (
      <>
        <Navigation onNavClick={handleCloseSendMessage} />
        <main>
          <SendMessage onClose={handleCloseSendMessage} />
        </main>
      </>
    )
  }

  return (
    <>
      <Navigation />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="contact">
          <Contact onSendMessage={handleOpenSendMessage} />
        </section>
      </main>
    </>
  )
}

export default App
