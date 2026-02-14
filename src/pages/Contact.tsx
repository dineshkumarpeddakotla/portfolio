import '../styles/Contact.css'

interface ContactProps {
  onSendMessage?: () => void
}

export default function Contact({ onSendMessage }: ContactProps) {
  return (
    <section className="contact section">
      <div className="container">
        <h2>Contact</h2>
        <div className="contact-content">
          <div className="contact-details">
            <p><strong>Email:</strong> dineshkumar.icon@gmail.com</p>
            <p><strong>Location:</strong> Anantapur, Andhra Pradesh, India</p>
            <button onClick={onSendMessage} className="cta-button secondary">Send a message</button>

            <div className="social-links">
              <a href="https://www.linkedin.com/in/dineshkumarpeddakotla" target="_blank" rel="noopener noreferrer" title="LinkedIn profile">
                <img src="/images/linkedin.png" alt="LinkedIn" />
              </a>
              <a href="https://github.com/dineshkumarpeddakotla" target="_blank" rel="noopener noreferrer" title="GitHub profile">
                <img src="/images/github.png" alt="GitHub" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
