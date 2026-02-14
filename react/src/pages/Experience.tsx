import '../styles/Experience.css'

const experienceData = [
  {
    id: 1,
    title: 'QA Engineer – SafeSend Technologies (Thomson Reuters)',
    period: 'Mar 2025 – present',
    items: [
      'Architect and implement end-to-end automation frameworks using .NET Playwright and .NET Selenium for tax and compliance applications.',
      'Integrate UI and API tests into a unified hybrid framework and embed test suites into CI/CD pipelines with AKS and Azure DevOps.',
      'Collaborate closely with development and business teams to analyse requirements, design test strategies and ensure comprehensive coverage.',
      'Provide training and mentorship on BDD, hybrid frameworks and automation best practices.',
    ],
  },
  {
    id: 2,
    title: 'QA Engineer – Blazeclan Technologies',
    period: 'Aug 2021 – Feb 2025',
    items: [
      'Developed automated test suites for web applications, integrating UI and API tests using hybrid frameworks built with Selenium, Cucumber, TestNG and Rest Assured.',
      'Generated detailed bug reports and weekly status reports using Jira and Zephyr, ensuring timely defect tracking and transparency.',
      'Implemented HTML reporting for test execution and maintained test repositories and defect management workflows.',
      'Performed functional, regression and performance testing across e-commerce, ERP and gaming domains.',
    ],
  },
]

export default function Experience() {
  return (
    <section className="experience section">
      <div className="container">
        <h2>Experience</h2>
        {experienceData.map((exp) => (
          <div key={exp.id} className="experience-item">
            <h3>{exp.title}</h3>
            <span className="period">{exp.period}</span>
            <ul>
              {exp.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
