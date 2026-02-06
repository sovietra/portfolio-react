import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FileText, ArrowRight, ArrowLeft, ChevronUp } from 'lucide-react'
import AnimatedBackground from '../components/AnimatedBackground'

const DocumentsPage = () => {
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
    { id: 'b1-k1-w1', title: 'B1-K1-W1', category: 'Analyseren', tags: ['User Stories', 'Planning', 'Trello'], pages: 5 },
    { id: 'b1-k2-w1', title: 'B1-K2-W1', category: 'Communiceren', tags: ['Afstemming', 'Afspraken', 'Voortgang'], pages: 4 },
    { id: 'b1-k1-w2', title: 'B1-K1-W2', category: 'Ontwerpen', tags: ['Functioneel', 'Technisch', 'Behoefteanalyse'], pages: 4 },
    { id: 'b1-k2-w2', title: 'B1-K2-W2', category: 'Communiceren', tags: ['Presenteren', 'Feedback', 'Vragen'], pages: 6 },
    { id: 'b1-k1-w3', title: 'B1-K1-W3', category: 'Realiseren', tags: ['Code Quality', 'Versiebeheer', 'User Stories'], pages: 10 },
    { id: 'b1-k2-w3', title: 'B1-K2-W3', category: 'Professioneel Handelen', tags: ['Reflectie', 'Feedback', 'Houding'], pages: 5 },
    { id: 'b1-k1-w4', title: 'B1-K1-W4', category: 'Testen', tags: ['Testplan', 'Testcases', 'Rapportage'], pages: 7 },
    { id: 'b1-k1-w5', title: 'B1-K1-W5', category: 'Verbeteren', tags: ['Verbetervoorstellen', 'Analyse', 'Aanbevelingen'], pages: 6 }
  ]

  return (
    <>
      <AnimatedBackground />
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
          <h1>Mijn Documenten</h1>
          <p>Portfolio documenten voor Software Development niveau 4</p>
        </div>

        <div className="documents-grid">
          {documents.map((doc) => (
            <Link to={`/documents/${doc.id}`} key={doc.id} className="document-card">
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
    </>
  )
}

export default DocumentsPage