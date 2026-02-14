import { useState } from 'react'
import '../styles/SendMessage.css'

interface SendMessageProps {
  onClose?: () => void
}

export default function SendMessage({ onClose }: SendMessageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    setError('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('https://formspree.io/f/mgvzlwvw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _honey: ''
        })
      })

      if (response.ok) {
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
        setSubmitted(true)
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          setSubmitted(false)
          if (onClose) {
            onClose()
          }
        }, 5000)
      } else {
        setError('Failed to send message. Please try again.')
      }
    } catch (err) {
      setError('Error sending message. Please check your connection and try again.')
      console.error('Form submission error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="send-message section">
      <div className="container">
        <div className="send-message-header">
          <h2>Send Me a Message</h2>
          {onClose && (
            <button className="close-button" onClick={onClose} title="Go back">
              ✕
            </button>
          )}
        </div>
        
        <div className="message-container">
          <div className="form-wrapper">
            {submitted && (
              <div className="success-message">
                ✓ Thank you! Your message has been sent successfully. I'll get back to you soon!
              </div>
            )}

            {error && (
              <div className="error-message">
                ✕ {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  disabled={loading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  disabled={loading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Message subject"
                  disabled={loading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Write your message here..."
                  rows={6}
                  disabled={loading}
                />
              </div>

              <button type="submit" className="submit-button" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
              </button>
              {onClose && (
                <button type="button" className="back-button" onClick={onClose} disabled={loading}>
                  ← Go Back to Portfolio
                </button>
              )}
            </form>
          </div>

          <div className="contact-info-card">
            <h3>Get in Touch</h3>
            
            <div className="info-item">
              <span className="icon">✉️</span>
              <div>
                <p className="label">Email</p>
                <a href="mailto:dineshkumar.icon@gmail.com">dineshkumar.icon@gmail.com</a>
              </div>
            </div>

            <div className="info-item">
              <span className="icon"></span>
              <div>
                <p className="label">Location</p>
                <p>Anantapur, Andhra Pradesh, India</p>
              </div>
            </div>

            <div className="info-item">
              <span className="icon">💼</span>
              <div>
                <p className="label">Connect With Me</p>
                <div className="social-links-vertical">
                  <a href="https://www.linkedin.com/in/dineshkumarpeddakotla" target="_blank" rel="noopener noreferrer" className="social-link">
                    <span>LinkedIn</span>
                  </a>
                  <a href="https://github.com/dineshkumarpeddakotla" target="_blank" rel="noopener noreferrer" className="social-link">
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="response-time">
              <p>📧 I usually respond within 24-48 hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
