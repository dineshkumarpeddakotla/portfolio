import '../styles/Education.css'

export default function Education() {
  return (
    <section className="education section">
      <div className="container">
        <h2>Education &amp; Certifications</h2>
        
        <div className="education-item">
          <h3>B.Tech in Computer Science</h3>
          <span className="period">2019</span>
          <p>Hindustan Institute of Technology and Science – CGPA&nbsp;8.07</p>
        </div>

        <div className="education-item">
          <h3>Certifications</h3>
          <p>ISTQB Foundation Level</p>
          <p>AWS Cloud Practitioner</p>
          <p>Azure Fundamentals (AZ-900)</p>
        </div>

        <div className="education-item">
          <h3>Trainings Conducted</h3>
          <ul style={{ marginLeft: '1.5rem' }}>
            <li>Hybrid Framework with Selenium – Trained QA teams on building robust automation frameworks and implementing SonarLint for code quality assurance.</li>
            <li>AI in Automation Development – Conducted training on leveraging AI tools for script development and using Playwright-specific methods for framework stabilization.</li>
          </ul>
        </div>

        <div className="education-item">
          <h3>Key Learning & Achievements</h3>
          <ul style={{ marginLeft: '1.5rem' }}>
            <li><strong>Project Value Adds:</strong> Identified pain areas in functional testing and created tools to significantly reduce manual testing efforts.</li>
            <li><strong>Implementation Support:</strong> Successfully implemented BDD with integrated UI and API automation in a unified framework across multiple projects.</li>
            <li><strong>Delivery Excellence:</strong> Proactively handled project requirements and delivered comprehensive testing solutions during critical phases.</li>
            <li><strong>Domain Expertise:</strong> Built deep knowledge in E-commerce and ERP domains, enhancing team capabilities.</li>
            <li><strong>Cross-Functional Collaboration:</strong> Coordinated with developers, project managers and system analysts to resolve technical issues, debug features and provide creative solutions.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
