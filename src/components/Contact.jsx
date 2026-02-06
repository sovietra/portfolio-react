import { useState } from 'react'
import { User, Mail, MessageSquare, Send } from 'lucide-react'
import emailjs from '@emailjs/browser'

const Contact = ({ translations }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Clear any previous status
    setStatus('')
    
    // Validate - name, email, and message are required (subject is optional)
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error')
      setTimeout(() => setStatus(''), 3000)
      return
    }

    setLoading(true)

    try {
      // Replace these with your EmailJS credentials
      const serviceId = 'service_dkpqvut'
      const templateId = 'template_6g8zb89'
      const publicKey = 't8FBvfHZsYHlLnD1d'

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || 'No Subject',
        message: formData.message,
        to_name: 'Shanya Korver'
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('Email error:', error)
      setStatus('error')
    } finally {
      setLoading(false)
      setTimeout(() => setStatus(''), 5000)
    }
  }

  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        {translations.contactMe} <span>{translations.contactMeSpan}</span>
      </h2>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="input-row">
          <div className="input-group">
            <User className="input-icon" size={20} />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={translations.yourName}
              required
            />
          </div>
          <div className="input-group">
            <Mail className="input-icon" size={20} />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={translations.yourEmail}
              required
            />
          </div>
        </div>

        <div className="input-group">
          <MessageSquare className="input-icon" size={20} />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder={translations.subject}
          />
        </div>

        <div className="input-group">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={translations.yourMessage}
            rows="10"
            required
          />
        </div>
        
        <button type="submit" className="btn" disabled={loading}>
          <Send size={20} />
          {loading ? translations.sending : translations.sendMessage}
        </button>

        {status === 'success' && (
          <div className="form-message success">{translations.messageSent}</div>
        )}
        {status === 'error' && (
          <div className="form-message error">{translations.messageError}</div>
        )}
      </form>
    </section>
  )
}

export default Contact