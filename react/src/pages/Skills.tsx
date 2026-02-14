import { useState } from 'react'
import '../styles/Skills.css'

const skillCards = [
  {
    id: 1,
    title: 'Tools & Frameworks',
    icon: '/images/tools.png',
    items: [
      'Selenium, Rest Assured, Cypress, Postman',
      'Cucumber, TestNG, Reqnroll, Playwright, .NET',
      'JMeter, Appium, Extent Reports, NUnit',
    ],
  },
  {
    id: 2,
    title: 'Languages & Databases',
    icon: '/images/languages.png',
    items: [
      'Java, JavaScript, JSON, C# .Net',
      'SQL',
    ],
  },
  {
    id: 3,
    title: 'CI/CD & Tools',
    icon: '/images/cicd.png',
    items: [
      'Jenkins, Azure DevOps, AKS',
      'Maven, Gradle, Git, GitLab, Bitbucket, Azure Repos',
    ],
  },
  {
    id: 4,
    title: 'Testing & Methodologies',
    icon: '/images/testing.png',
    items: [
      'Reqnroll, Cucumber, Data-driven, Keyword & Hybrid frameworks',
      'BDD, Agile model',
      'Functional, Regression, System & Smoke testing',
    ],
  },
  {
    id: 5,
    title: 'Management & Version Control',
    icon: '/images/management.png',
    items: [
      'JIRA, Asana, QASE, Zephyr',
      'Test case & defect tracking',
    ],
  },
  {
    id: 6,
    title: 'Domain & IDE',
    icon: '/images/domain.png',
    items: [
      'E-commerce, ERP, Taxation, Gaming, Payment Gateway',
      'IntelliJ, Eclipse, VS Code, Visual Studio',
      'Linux & Windows, GitHub Copilot, Browserstack',
    ],
  },
]

const tools = [
  {
    name: 'Selenium',
    description: 'Selenium is an open-source framework that automates web browsers across different platforms and programming languages. It allows testers to simulate user interactions and verify UI behaviour.',
  },
  {
    name: 'Rest Assured',
    description: 'Rest Assured is a Java library for testing RESTful APIs. It simplifies the creation of HTTP requests and assertions, enabling efficient validation of API responses.',
  },
  {
    name: 'Cypress',
    description: 'Cypress is a JavaScript-based end-to-end testing framework for modern web applications. It provides automatic waiting, real-time reloads and an intuitive API for writing robust tests.',
  },
  {
    name: 'Postman',
    description: 'Postman is a versatile tool for API development and testing. It enables users to send requests, manage environments and automate tests through collections and scripting.',
  },
  {
    name: 'Cucumber',
    description: 'Cucumber supports behaviour-driven development by allowing test scenarios to be written in human-readable Gherkin language. It bridges the gap between business and technical teams.',
  },
  {
    name: 'TestNG',
    description: 'TestNG is a testing framework for Java inspired by JUnit and NUnit. It introduces annotations, grouping, parallel execution and flexible configuration for automated tests.',
  },
  {
    name: 'Playwright',
    description: 'Playwright is an open-source automation library for web applications that supports multiple languages and browsers. It enables reliable end-to-end tests with modern async APIs.',
  },
  {
    name: 'JMeter',
    description: 'Apache JMeter is an open-source tool for performance and load testing. It simulates heavy user traffic to measure system responsiveness and stability under stress.',
  },
  {
    name: 'Appium',
    description: 'Appium is an open-source framework for automating native, hybrid and mobile web applications on iOS and Android. It leverages WebDriver protocols to drive mobile devices.',
  },
  {
    name: 'Reqnroll',
    description: 'Reqnroll is a BDD automation framework for .NET that integrates with SpecFlow for business-readable specifications. It enables seamless collaboration between technical and non-technical team members.',
  },
  {
    name: 'Azure DevOps',
    description: 'Azure DevOps is a comprehensive suite of tools for CI/CD pipelines, test management and release orchestration. It integrates seamlessly with Azure services for end-to-end automation and monitoring.',
  },
]

export default function Skills() {
  const [toolIndex, setToolIndex] = useState(0)

  const handlePrevTool = () => {
    setToolIndex((prev) => (prev - 1 + tools.length) % tools.length)
  }

  const handleNextTool = () => {
    setToolIndex((prev) => (prev + 1) % tools.length)
  }

  return (
    <section className="skills section">
      <div className="container">
        <h2>Technical&nbsp;Skills</h2>
        <div className="skills-grid">
          {skillCards.map((card) => (
            <div key={card.id} className="skill-card">
              <img src={card.icon} alt={`${card.title} icon`} />
              <h3>{card.title}</h3>
              <ul>
                {card.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="tool-slider">
          <button className="tool-nav prev" onClick={handlePrevTool} aria-label="Previous tool">
            &#10094;
          </button>
          <div className="tool-slides">
            <div className="tool-slide active">
              <h4>{tools[toolIndex].name}</h4>
              <p>{tools[toolIndex].description}</p>
            </div>
          </div>
          <button className="tool-nav next" onClick={handleNextTool} aria-label="Next tool">
            &#10095;
          </button>
        </div>
      </div>
    </section>
  )
}
