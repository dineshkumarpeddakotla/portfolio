import '../styles/FloatingNav.css'

interface FloatingNavProps {
  visible: boolean
}

export default function FloatingNav({ visible }: FloatingNavProps) {
  return (
    <div className={`floating-nav ${visible ? 'visible' : ''}`}>
      <a href="#about" title="About"><span>About</span></a>
      <a href="#skills" title="Skills"><span>Skills</span></a>
      <a href="#experience" title="Experience"><span>Experience</span></a>
      <a href="#projects" title="Projects"><span>Projects</span></a>
      <a href="#education" title="Education"><span>Education</span></a>
      <a href="#contact" title="Contact"><span>Contact</span></a>
    </div>
  )
}
