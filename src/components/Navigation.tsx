import { useState } from 'react'
import '../styles/Navigation.css'

interface NavigationProps {
  onNavClick?: () => void
}

export default function Navigation({ onNavClick }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = () => {
    if (onNavClick) {
      onNavClick()
    }
    setIsMenuOpen(false)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header>
      <div className="container">
        <div className="logo">Dinesh&nbsp;Kumar</div>
        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#about" onClick={handleNavClick}>About</a></li>
            <li><a href="#skills" onClick={handleNavClick}>Skills</a></li>
            <li><a href="#experience" onClick={handleNavClick}>Experience</a></li>
            <li><a href="#projects" onClick={handleNavClick}>Projects</a></li>
            <li><a href="#education" onClick={handleNavClick}>Education</a></li>
            <li><a href="#contact" onClick={handleNavClick}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
