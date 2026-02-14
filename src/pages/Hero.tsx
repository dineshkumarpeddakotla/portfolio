import '../styles/Hero.css'

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1>Dinesh Kumar&nbsp;Peddakotla</h1>
        <p className="tagline">Test Automation Engineer – Java & .NET Playwright &amp; Selenium</p>
        <p className="summary">ISTQB certified QA engineer with over 4.5 years of experience in automation and manual testing. Proficient in developing and executing test plans, building hybrid frameworks using Selenium, Playwright and Rest Assured, and collaborating with cross-functional teams to deliver reliable software solutions.</p>
        <a href="#contact" className="cta-button">Get in touch</a>
      </div>
    </div>
  )
}
