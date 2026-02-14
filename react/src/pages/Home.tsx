import { Link } from 'react-router-dom'
import '../styles/Home.css'

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to My Portfolio</h1>
        <p>Hi, I'm Dinesh Kumar, a passionate developer and designer.</p>
        <p>I create beautiful and functional web experiences.</p>
        <div className="cta-buttons">
          <Link to="/projects" className="btn btn-primary">
            View My Work
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  )
}
