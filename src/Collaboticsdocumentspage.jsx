import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FileText, ArrowRight, ArrowLeft, ChevronUp } from 'lucide-react'

const CollaboticsDocumentsPage = () => {
  const [showBackToTop, setShowBackToTop] = useState(false)

  // Hide music/chat buttons when this component mounts
  useEffect(() => {
    const musicBtn = document.querySelector('.music-float-btn')
    const chatBtn = document.querySelector('.chat-float-btn')
    
    if (musicBtn) musicBtn.style.display = 'none'
    if (chatBtn) chatBtn.style.display = 'none'
    
    return () => {
      const musicBtn = document.querySelector('.music-float-btn')
      const chatBtn = document.querySelector('.chat-float-btn')
      
      if (musicBtn) musicBtn.style.display = ''
      if (chatBtn) chatBtn.style.display = ''
    }
  }, [])

  // Back to Top Button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const documents = [
    { id: 'collabotics-doc-1', title: 'Collabotics Project 1', category: 'Development', tags: ['React', 'Node.js', 'API'], pages: 12 },
    { id: 'collabotics-doc-2', title: 'Collabotics Project 2', category: 'Design', tags: ['UI/UX', 'Figma', 'Prototyping'], pages: 8 },
    { id: 'collabotics-doc-3', title: 'Collabotics Project 3', category: 'Testing', tags: ['QA', 'Automation', 'Jest'], pages: 15 },
    // Add more Collabotics documents here
  ]

  return (
    <div className="documents-page">
      {/* Back to Top Button ONLY */}
      <button 
        className={`back-to-top-btn ${showBackToTop ? 'show' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <ChevronUp size={24} />
      </button>

      <Link to="/" className="back-to-portfolio">
        <ArrowLeft size={20} />
        Terug naar Portfolio
      </Link>

      <div className="documents-page-header">
        <h1>Collabotics Documenten</h1>
        <p>Project documentatie voor Collabotics</p>
      </div>

      <div className="documents-grid">
        {documents.map((doc) => (
          <Link to={`/collabotics-documents/${doc.id}`} key={doc.id} className="document-card">
            <div className="document-card-header">
              <FileText size={32} />
              <h3>{doc.title}</h3>
            </div>
            <div className="document-category">{doc.category}</div>
            <div className="document-tags">
              {doc.tags.map((tag, index) => (
                <span key={index} className="document-tag">{tag}</span>
              ))}
            </div>
            <div className="document-card-footer">
              <span>{doc.pages} pagina's</span>
              <ArrowRight size={20} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CollaboticsDocumentsPage