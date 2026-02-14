import '../styles/Navigation.css'

interface NavigationProps {
  onNavClick?: () => void
}

export default function Navigation({ onNavClick }: NavigationProps) {
  const handleNavClick = () => {
    if (onNavClick) {
      onNavClick()
    }
  }

  return (
    <header>
      <div className="container">
        <div className="logo">Dinesh&nbsp;Kumar</div>
        <nav>
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
