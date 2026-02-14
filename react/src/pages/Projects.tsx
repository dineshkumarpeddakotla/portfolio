import { useState } from 'react'
import '../styles/Projects.css'

const projectsData = [
  {
    id: 1,
    title: 'SafeSend Technologies – Tax & Compliance Platform',
    description: 'Designed and implemented automation frameworks using .NET Playwright and .NET Selenium for a tax compliance platform. Integrated UI and API tests into a unified hybrid framework and enabled continuous integration pipelines.',
    tools: [
      '.NET Playwright – cross-browser automation for modern web applications.',
      '.NET Selenium – robust framework for automating web interfaces.',
      'Generated detailed bug reports and weekly status reports using pipelines reports and Azure Boards and Test Plans for defect tracking and test case management.',
      'AKS & Azure DevOps – built CI/CD pipelines to accelerate releases.',
    ],
  },
  {
    id: 2,
    title: 'Optty Payment Aggregator – Blazeclan Technologies',
    description: 'Optty is a payment aggregator application that provides multiple payment methods for web applications.',
    tools: [
      'Developed automated test suites for websites to ensure quality and accuracy of software features.',
      'Integrated UI scripts and API scripts in a single hybrid framework and generated HTML reports with all logs.',
      'Generated detailed bug reports and weekly status reports using Jira and Zephyr for defect tracking and test case management.',
      'Performed functionality testing, retesting, regression testing and performance testing.',
      'Provided training and mentorship to teams on BDD, hybrid frameworks and best practices.',
    ],
  },
  {
    id: 3,
    title: 'Quantum Gaming Platform',
    description: 'Quantum Gaming is a platform hosting third-party games where performance and stability are critical.',
    tools: [
      'Identified APIs required for performance testing and created JMeter scripts.',
      'Executed load tests with a uniformly distributed load, monitored server performance and generated aggregated reports.',
      'Collaborated with the team to analyse performance results and recommend optimizations.',
    ],
  },
  {
    id: 4,
    title: 'Camilla Fashion E-Commerce & Order Management',
    description: 'Camilla is a fashion-based e-commerce application with an integrated order management and inventory adjustment system (NetSuite).',
    tools: [
      'Developed automated test suites for multiple websites to ensure quality and accuracy of software features.',
      'Integrated UI scripts and API scripts in a hybrid framework and generated HTML reports with all logs.',
      'Generated detailed bug reports, weekly status reports and used Asana for defect tracking and QASE for test case management.',
      'Analysed user requirements and performed functionality testing, retesting and regression testing.',
      'Rest Assured – automated API testing within the same framework.',
    ],
  },
  {
    id: 5,
    title: 'Ultra Tech – Test Automation',
    description: 'Ultra Tech project involved analysing requirements from SRS documents, designing and executing test cases and collaborating closely with development teams.',
    tools: [
      'Designed and executed test cases from functional specifications and participated in test case review meetings.',
      'Performed functionality testing, retesting and regression testing for critical features.',
      'Interacted with developers to discuss technical problems, tracked bugs and defects.',
      'Provided regular status reports to project stakeholders.',
    ],
  },
]

export default function Projects() {
  const [projectIndex, setProjectIndex] = useState(0)

  const handlePrevProject = () => {
    setProjectIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length)
  }

  const handleNextProject = () => {
    setProjectIndex((prev) => (prev + 1) % projectsData.length)
  }

  const currentProject = projectsData[projectIndex]

  return (
    <section className="projects section">
      <div className="container">
        <h2>Project Experience</h2>
        <div className="project-slider">
          <button className="project-nav prev" onClick={handlePrevProject} aria-label="Previous project">
            &#10094;
          </button>
          <div className="project-slides">
            <div className="project-slide active">
              <h3>{currentProject.title}</h3>
              <p>{currentProject.description}</p>
              <h4>Tools & Contributions</h4>
              <ul>
                {currentProject.tools.map((tool, idx) => (
                  <li key={idx}>{tool}</li>
                ))}
              </ul>
            </div>
          </div>
          <button className="project-nav next" onClick={handleNextProject} aria-label="Next project">
            &#10095;
          </button>
        </div>
      </div>
    </section>
  )
}
