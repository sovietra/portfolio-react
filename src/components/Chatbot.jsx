import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Bot } from 'lucide-react'

const Chatbot = ({ translations, isOpen, setIsOpen, isMusicPlayerOpen }) => {
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: translations.chatbotWelcome || "Hi! I'm Shanya's assistant. Ask me anything about her work, skills, or projects! 👋"
    }
  ])
  const [input, setInput] = useState('')
  const messagesEndRef = useRef(null)

  console.log('Chatbot render - isOpen:', isOpen, 'isMusicPlayerOpen:', isMusicPlayerOpen)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const responses = {
    // Skills & Experience
    skills: "Shanya knows HTML, CSS, JavaScript, React, PHP, Blender (3D modeling), Photoshop, and Git. She's constantly learning new technologies!",
    experience: "Shanya has been coding for 2+ years, completed 6+ projects, and currently works at a supermarket while studying software development at Vista College.",
    education: "Shanya is studying Software Development at Vista College, learning web development, programming, and 3D modeling.",
    
    // Projects
    projects: "Shanya has worked on projects like Sepelin Kids website, Le Mans racing website, portfolio websites, and VISTA Karting. Check out the Portfolio section!",
    portfolio: "You can see all her projects in the Portfolio section. She's built websites using React, PHP, HTML/CSS and created 3D models in Blender.",
    '3d': "Shanya creates 3D models using Blender! Check out her Japanese Yakisoba Shop and Japanese House models in the 3D Models section.",
    blender: "Yes! Shanya uses Blender for 3D modeling. She's created Japanese-themed models and architectural designs.",
    
    // Contact
    contact: "You can reach Shanya through the contact form on this website, or connect via LinkedIn, GitHub, Instagram, or TikTok!",
    email: "Please use the contact form in the Contact section to send Shanya a message. She'll get back to you soon!",
    hire: "Shanya is available for opportunities! Use the contact form to discuss projects, internships, or job opportunities.",
    available: "Yes, Shanya is open to new opportunities! Feel free to reach out through the contact form.",
    
    // Personal
    age: "Shanya is 18 years old.",
    location: "Shanya is based in Rotterdam, Netherlands.",
    hobbies: "Shanya enjoys web development, 3D modeling, creating music (check her Soundcloud!), and image design.",
    music: "Shanya creates music! You can listen to her tracks on Soundcloud: soundcloud.com/7kru",
    
    // Tools & Tech
    tools: "Shanya uses VS Code, Git, Blender, Photoshop, and various web development frameworks like React and Vite.",
    react: "Yes! This portfolio is built with React and Vite. Shanya loves modern JavaScript frameworks.",
    php: "Shanya has experience with PHP and has built several PHP-based websites for school projects.",
    
    // General
    help: "I can answer questions about Shanya's skills, projects, experience, education, hobbies, or how to contact her. What would you like to know?",
    who: "Shanya Korver is an 18-year-old web developer and 3D artist from Rotterdam, studying Software Development at Vista College.",
    
    // Fun
    coffee: "Shanya has consumed 500+ cups of coffee while coding! ☕",
    github: "Check out Shanya's GitHub at github.com/sovietra to see her code and contributions!",

    // Goodbye
    bye: "Goodbye! Feel free to come back anytime if you have more questions about Shanya. Have a great day! 👋",

    // What does she do?
    what: "Shanya is a software developer and 3D artist. She mainly uses her free time to create web applications and 3D models while also making music.",
    
    default: "I'm not sure about that! Try asking about: skills, projects, experience, education, contact, 3D modeling, or hobbies. Or just say 'help'!"
  }

  const findResponse = (userInput) => {
    const input = userInput.toLowerCase()
    
    // Greeting
    if (input.match(/^(hi|hello|hey|yo|sup)/)) {
      return "Hello! 👋 Ask me anything about Shanya's work, skills, or projects!"
    }
    
    // Thanks
    if (input.match(/(thank|thanks|thx)/)) {
      return "You're welcome! Feel free to ask anything else! 😊"
    }
    
    // Find matching keyword
    for (const [key, response] of Object.entries(responses)) {
      if (input.includes(key)) {
        return response
      }
    }
    
    // Check for question words
    if (input.includes('what') || input.includes('how') || input.includes('where') || input.includes('when')) {
      return responses.default
    }
    
    return responses.default
  }

  const handleSend = () => {
    if (!input.trim()) return

    // Add user message
    const userMessage = { type: 'user', text: input }
    setMessages(prev => [...prev, userMessage])

    // Get bot response
    setTimeout(() => {
      const botResponse = { type: 'bot', text: findResponse(input) }
      setMessages(prev => [...prev, botResponse])
    }, 500)

    setInput('')
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend()
    }
  }

  const quickQuestions = [
    translations.chatQ1 || "What are your skills?",
    translations.chatQ2 || "Show me your projects",
    translations.chatQ3 || "How can I contact you?",
    translations.chatQ4 || "Tell me about 3D modeling"
  ]

  const handleQuickQuestion = (question) => {
    setInput(question)
    handleSend()
  }

  return (
    <>
      {/* Floating Chat Button - Hide when chatbot OR music player is open */}
      {!isOpen && !isMusicPlayerOpen && (
        <button 
          className="chat-float-btn"
          onClick={() => setIsOpen(true)}
          title={translations.openChat || "Chat with Assistant"}
          style={{
            position: 'fixed',
            bottom: '3rem',
            right: '3rem',
            left: 'auto',
            top: 'auto',
            zIndex: 99999
          }}
        >
          <MessageCircle size={24} />
          <span className="chat-notification">1</span>
        </button>
      )}

      {/* Chatbot Modal */}
      {isOpen && (
        <div 
          className="chatbot-modal"
          style={{
            position: 'fixed',
            bottom: '3rem',
            right: '3rem',
            left: 'auto',
            top: 'auto',
            zIndex: 99998
          }}
        >
          <div className="chatbot-header">
            <div className="chatbot-title">
              <Bot size={20} />
              <span>{translations.chatTitle || "Ask About Shanya"}</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="chatbot-close"
            >
              <X size={20} />
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.type}`}>
                {msg.type === 'bot' && <Bot size={18} className="chat-icon" />}
                <div className="chat-bubble">{msg.text}</div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {messages.length <= 1 && (
            <div className="chat-quick-questions">
              <p className="quick-q-title">{translations.quickQuestions || "Quick questions:"}</p>
              {quickQuestions.map((q, index) => (
                <button 
                  key={index}
                  className="quick-q-btn"
                  onClick={() => handleQuickQuestion(q)}
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          <div className="chatbot-input">
            <input
              type="text"
              placeholder={translations.chatPlaceholder || "Ask me anything..."}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button onClick={handleSend} className="chat-send-btn">
              <Send size={20} />
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Chatbot