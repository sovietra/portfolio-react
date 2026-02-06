import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { FileText, Download, ExternalLink, ChevronLeft, ChevronRight, ArrowLeft, ChevronUp } from 'lucide-react'
import AnimatedBackground from '../components/AnimatedBackground'

const DocumentDetailPage = () => {
  const { documentId } = useParams()
  const [currentPage, setCurrentPage] = useState(1)
  const [activeTabs, setActiveTabs] = useState({})
  const [showBackToTop, setShowBackToTop] = useState(false)

  // Hide music/chat buttons on mount, restore on unmount
  useEffect(() => {
    const musicBtn = document.querySelector('.music-float-btn')
    const chatBtn = document.querySelector('.chat-float-btn')
    if (musicBtn) musicBtn.style.display = 'none'
    if (chatBtn) chatBtn.style.display = 'none'
    return () => {
      const m = document.querySelector('.music-float-btn')
      const c = document.querySelector('.chat-float-btn')
      if (m) m.style.display = ''
      if (c) c.style.display = ''
    }
  }, [])

  // Back to Top
  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 500)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const setActiveTab = (sectionIndex, tabIndex) => {
    setActiveTabs(prev => ({ ...prev, [sectionIndex]: tabIndex }))
  }

  const documentsData = {
    'b1-k1-w1': {
      title: 'B1-K1-W1',
      subtitle: 'Analyseren - User Stories & Planning',
      pdfUrl: '/documents/b1-k1-w1.pdf',
      imageUrl: '/images/b1-k1-w1-showcase.jpg',
      imageAlt: 'B1-K1-W1 Showcase',
      description: 'Dit document behandelt het analyseren van eisen en wensen, en het vertalen hiervan naar user stories.',
      totalPages: 5,
      details: { type: 'Analyseren', date: '2025', author: 'Shanya Korver', competentie: 'Analyseren' },
      sections: [
        {
          title: 'Eisen en wensen',
          content: 'De eisen en wensen zijn volledig verwerkt in de user stories. Dit is terug te vinden in zowel het Trello board als het Behoefte Analyse document (BA).',
          subsections: [
            { label: 'Beoordelingseisen:', text: 'Volledig: De uitgangspunten, Technische en Functionele eisen wensen zijn bepaald en gedocumenteerd.' },
            { label: 'Bewijsstukken:', links: [{ text: 'Trello board | Recycle-inzamelapp Iris/TCZ', url: 'https://trello.com/b/gJxLvqho/recycle-inzamelapp-iris-tcz' }] }
          ]
        },
        {
          title: 'Planning',
          content: 'De Trello-planning laat zien welke functies wanneer worden uitgewerkt, gebaseerd op de belangrijkste onderdelen van het project.',
          subsections: [
            { label: 'Beoordelingseisen:', text: 'Volledig: Op basis van de Functionaliteit is een complete en realistische planning gemaakt.' },
            { label: 'Bewijsstuk:', links: [{ text: 'Trello board | Recycle-inzamelapp Iris/TCZ', url: 'https://trello.com/b/gJxLvqho/recycle-inzamelapp-iris-tcz' }] }
          ]
        },
        {
          title: 'Bewaken voortgang',
          content: 'De Trello-bord is goed bijgehouden, alle wijzigingen in de planning zijn duidelijk genoteerd.',
          subsections: [
            { label: 'Beoordelingseisen:', text: 'Volledig: De gestelde doelen en planningen zijn bewaakt.' },
            { label: 'Bewijsstuk:', links: [{ text: 'Trello board | Recycle-inzamelapp Iris/TCZ', url: 'https://trello.com/b/gJxLvqho/recycle-inzamelapp-iris-tcz' }] }
          ]
        }
      ]
    },
    'b1-k2-w1': {
      title: 'B1-K2-W1',
      subtitle: 'Communiceren - Afstemming & Afspraken',
      pdfUrl: '/documents/b1-k2-w1.pdf',
      imageUrl: '/images/b1-k2-w1-showcase.jpg',
      imageAlt: 'B1-K2-W1 Showcase',
      description: 'Document over professionele communicatie binnen projecten.',
      totalPages: 4,
      details: { type: 'Communiceren', date: '2025', author: 'Shanya Korver', competentie: 'Communiceren' }
    },
    'b1-k1-w2': {
      title: 'B1-K1-W2',
      subtitle: 'Ontwerpen - De Recycle Fabriek',
      pdfUrl: '/documents/b1-k1-w2-behoefteanalyse.pdf',
      imageUrl: '/images/b1-k1-w2-showcase.jpg',
      imageAlt: 'B1-K1-W2 Showcase',
      description: 'Plastic Barcodescanner project voor De Recycle Fabriek - Complete ontwerpdocumentatie.',
      totalPages: 4,
      details: { type: 'Ontwerpen', date: '2025', author: 'Shanya Korver', competentie: 'Ontwerpen' }
    },
    'b1-k2-w2': {
      title: 'B1-K2-W2',
      subtitle: 'Communiceren - Presenteren & Feedback',
      pdfUrl: '/documents/b1-k2-w2.pdf',
      imageUrl: '/images/b1-k2-w2-showcase.jpg',
      imageAlt: 'B1-K2-W2 Showcase',
      description: 'Document gericht op presentatie- en feedbackvaardigheden.',
      totalPages: 6,
      details: { type: 'Communiceren', date: '2025', author: 'Shanya Korver', competentie: 'Communiceren' }
    },
    'b1-k1-w3': {
      title: 'B1-K1-W3',
      subtitle: 'Realiseren - Code Quality & Versiebeheer',
      pdfUrl: '/documents/b1-k1-w3.pdf',
      imageUrl: '/images/b1-k1-w3-showcase.jpg',
      imageAlt: 'B1-K1-W3 Showcase',
      description: 'Realisatiedocument met focus op het implementeren van user stories binnen de geplande tijd.',
      totalPages: 10,
      details: { type: 'Realiseren', date: '2025', author: 'Shanya Korver', competentie: 'Realiseren' }
    },
    'b1-k2-w3': {
      title: 'B1-K2-W3',
      subtitle: 'Professioneel Handelen - Reflectie',
      pdfUrl: '/documents/b1-k2-w3.pdf',
      imageUrl: '/images/b1-k2-w3-showcase.jpg',
      imageAlt: 'B1-K2-W3 Showcase',
      description: 'Reflectiedocument over professioneel handelen.',
      totalPages: 5,
      details: { type: 'Professioneel Handelen', date: '2025', author: 'Shanya Korver', competentie: 'Professioneel Handelen' }
    },
    'b1-k1-w4': {
      title: 'B1-K1-W4',
      subtitle: 'Testen - Testplan & Rapportage',
      pdfUrl: '/documents/b1-k1-w4.pdf',
      imageUrl: '/images/b1-k1-w4-showcase.jpg',
      imageAlt: 'B1-K1-W4 Showcase',
      description: 'Testdocument met uitgebreide testcases en testplan die aansluiten op user stories.',
      totalPages: 7,
      details: { type: 'Testen', date: '2025', author: 'Shanya Korver', competentie: 'Testen' }
    },
    'b1-k1-w5': {
      title: 'B1-K1-W5',
      subtitle: 'Verbeteren - Verbetervoorstellen',
      pdfUrl: '/documents/b1-k1-w5.pdf',
      imageUrl: '/images/b1-k1-w5-showcase.jpg',
      imageAlt: 'B1-K1-W5 Showcase',
      description: 'Document met verbetervoorstellen vanuit verschillende invalshoeken.',
      totalPages: 6,
      details: { type: 'Verbeteren', date: '2025', author: 'Shanya Korver', competentie: 'Verbeteren' }
    }
  }

  const currentDoc = documentsData[documentId] || documentsData['b1-k1-w1']

  return (
    <>
      <AnimatedBackground />
      <div className="document-detail-page">
        <button className={`back-to-top-btn ${showBackToTop ? 'show' : ''}`} onClick={scrollToTop} aria-label="Back to top">
          <ChevronUp size={24} />
        </button>

        <div className="document-nav">
          <Link to="/documents" className="back-btn">
            <ArrowLeft size={20} />
            Terug naar Documenten
          </Link>
        </div>

        <div className="document-detail-header">
          <h1>{currentDoc.title}</h1>
          <p>{currentDoc.subtitle}</p>
        </div>

        <div className="document-detail-content">
          {!currentDoc.sections?.some(s => s.pdfUrl) && (
          <div className="document-viewer-section">
            <div className="document-header">
              <div className="document-title">
                <FileText size={24} />
                <div>
                  <h3>{currentDoc.title}</h3>
                  <p>{currentDoc.subtitle}</p>
                </div>
              </div>
              <div className="document-actions">
                <a href={currentDoc.pdfUrl} download className="doc-action-btn" title="Download PDF">
                  <Download size={20} />
                </a>
                <a href={currentDoc.pdfUrl} target="_blank" rel="noopener noreferrer" className="doc-action-btn" title="Open in new tab">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>

            <div className="pdf-viewer">
              <iframe src={`${currentDoc.pdfUrl}#page=${currentPage}`} title="Document Viewer" className="pdf-iframe" />
            </div>

            <div className="pdf-controls">
              <button onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))} disabled={currentPage === 1} className="pdf-nav-btn">
                <ChevronLeft size={20} /> Vorige
              </button>
              <span className="page-indicator">Pagina {currentPage} van {currentDoc.totalPages}</span>
              <button onClick={() => setCurrentPage(prev => Math.min(currentDoc.totalPages, prev + 1))} disabled={currentPage === currentDoc.totalPages} className="pdf-nav-btn">
                Volgende <ChevronRight size={20} />
              </button>
            </div>
          </div>
          )}

          <div className="document-info-section">
            {currentDoc.imageUrl && (
              <div className="showcase-image-container">
                <img src={currentDoc.imageUrl} alt={currentDoc.imageAlt} className="showcase-image" onError={(e) => { e.target.style.display = 'none' }} />
              </div>
            )}
            
            <div className="showcase-description">
              {currentDoc.sections ? (
                <div className="document-sections">
                  {currentDoc.sections.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="document-section">
                      <h3>{section.title}</h3>
                      {section.content && <p>{section.content}</p>}
                      {section.subsections && section.subsections.map((subsection, subIndex) => (
                        <div key={subIndex} className="document-subsection">
                          {subsection.label && <p className="subsection-label">{subsection.label}</p>}
                          {subsection.text && <p className="subsection-text">{subsection.text}</p>}
                          {subsection.links && (
                            <ul className="document-links">
                              {subsection.links.map((link, linkIndex) => (
                                <li key={linkIndex}>
                                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="trello-link">{link.text}</a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                  
                  <div className="showcase-details" style={{ marginTop: '3rem' }}>
                    <div className="detail-item"><span className="detail-label">Type:</span><span className="detail-value">{currentDoc.details.type}</span></div>
                    <div className="detail-item"><span className="detail-label">Datum:</span><span className="detail-value">{currentDoc.details.date}</span></div>
                    <div className="detail-item"><span className="detail-label">Auteur:</span><span className="detail-value">{currentDoc.details.author}</span></div>
                    {currentDoc.details.competentie && <div className="detail-item"><span className="detail-label">Competentie:</span><span className="detail-value">{currentDoc.details.competentie}</span></div>}
                    <div className="detail-item"><span className="detail-label">Pagina's:</span><span className="detail-value">{currentDoc.totalPages}</span></div>
                  </div>
                </div>
              ) : (
                <>
                  <h3>Over Dit Document</h3>
                  <p>{currentDoc.description}</p>
                  <div className="showcase-details">
                    <div className="detail-item"><span className="detail-label">Type:</span><span className="detail-value">{currentDoc.details.type}</span></div>
                    <div className="detail-item"><span className="detail-label">Datum:</span><span className="detail-value">{currentDoc.details.date}</span></div>
                    <div className="detail-item"><span className="detail-label">Auteur:</span><span className="detail-value">{currentDoc.details.author}</span></div>
                    {currentDoc.details.competentie && <div className="detail-item"><span className="detail-label">Competentie:</span><span className="detail-value">{currentDoc.details.competentie}</span></div>}
                    <div className="detail-item"><span className="detail-label">Pagina's:</span><span className="detail-value">{currentDoc.totalPages}</span></div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DocumentDetailPage