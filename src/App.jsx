import { useState, useEffect } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Timeline from './components/Timeline'
import StatsCounter from './components/StatsCounter'
import ScrollProgress from './components/ScrollProgress'
import GitHubActivity from './components/GitHubActivity'
import ModelViewer from './components/ModelViewer'
import AnimatedBackground from './components/AnimatedBackground'
import './App.css'
import SoundcloudPlayer from './components/SoundcloudPlayer'
import Chatbot from './components/Chatbot'
import Collabotics from './components/Collabotics'


// Translation data
const translations = {
  en: {
    // Header
    home: "Home",
    about: "About",
    hobbies: "Hobbies",
    portfolio: "Portfolio",
    contact: "Contact",
    
    // Home section
    portfolioTitle: "Portfolio",
    myName: "Shanya Korver",
    homeDescription: "In this portfolio website I'm gonna show you what I've made over the years and what I'm currently doing.",
    
    // Professions
    webDeveloper: "Web Developer",
    modeler3D: "3D Modeler",
    webDesigner: "Web Designer",
    imageDesigner: "Image Designer",
    
    // About section
    aboutMe: "About",
    aboutMeSpan: "Me",
    aboutMeSubtitle: "Here I tell a little about myself",
    aboutDescription: "My name is Shanya Korver and I'm 18 years old. I currently work in a supermarket restocking things for almost 2 years.",
    readMore: "Read More",
    
    // Services/Hobbies
    myHobbies: "My",
    myHobbiesSpan: "Hobbies",
    webDevelopment: "Web Development",
    
    // Portfolio
    latestProject: "Latest",
    latestProjectSpan: "Project",
    sprint3Title: "Sprint 3",
    sprint3Desc: "Website gemaakt voor Sepelin Kids.",
    sprint7Title: "Sprint 7",
    sprint7Desc: "24 Hr Le mans website zonder PHP (Oud).",
    levensverhaalTitle: "Levensverhaal",
    levensverhaalDesc: "Begin van 2023 heb ik over mezelf verteld en wat ik doe.",
    sprint42Title: "Laventec",
    sprint42Desc: "Barcode scanner made for Laventec",
    sprint7phpTitle: "HBO Quiz",
    sprint7phpDesc: "HBO Quiz made for Zuyd.",
    vistaTitle: "VISTA Karting",
    vistaDesc: "Hier hebben we een project gemaakt voor VISTA Karting.",
    
    // Footer
    copyright: "Copyright © Shanya Korver 2026",
    
    // Skills
    mySkills: "My",
    mySkillsSpan: "Skills",
    
    // Contact
    contactMe: "Contact",
    contactMeSpan: "Me",
    yourName: "Your Name",
    yourEmail: "Your Email",
    subject: "Subject",
    yourMessage: "Your Message",
    sendMessage: "Send Message",
    sending: "Sending...",
    messageSent: "✅ Message sent successfully!",
    messageError: "❌ Please fill in all required fields",
    downloadCV: "Download CV",
    
    // Timeline
    myJourney: "My",
    myJourneySpan: "Journey",
    supermarketJob: "Supermarket Employee",
    supermarket: "Supermarket",
    supermarketDesc: "Restocking products and customer service for almost 2 years.",
    education: "Software Development",
    educationDesc: "Learning web development, programming, and 3D modeling.",
    firstProject: "First React Project",
    projectDesc: "Built my first portfolio website using React and Vite.",
    collaboticsInternship: "Software Development Internship",
    collaboticsDesc: "Internship at Collabotics focusing on software development and real-world projects.",
    
    // Stats
    projectsCompleted: "Projects Completed",
    yearsExperience: "Years Experience",
    codingHours: "Coding Hours",
    cupsOfCoffee: "Cups of Coffee",
    
    // Share & QR
    sharePortfolio: "Share Portfolio",
    copied: "Copied!",
    copyLink: "Copy Link",
    showQR: "Show QR Code",
    scanQR: "Scan to view portfolio",
    changeTheme: "Change Theme",
    
    // GitHub
    githubActivity: "GitHub",
    githubActivitySpan: "Activity",
    visitGithub: "Visit My GitHub",
    
    // 3D Models
    my3DModels: "My 3D",
    my3DModelsSpan: "Models",
    clickDrag: "Click & Drag to rotate",
    scrollZoom: "Scroll to zoom",
    uploadModels: "Upload your .glb or .gltf 3D models",
    modelInstructions: "Or use Sketchfab embed links",
    model1Desc: "My first 3D creation",
    model2Desc: "Character design",

  // Music Player
  openMusicPlayer: "Open Music Player",
  musicPlayer: "Music I Create",
  musicSubtitle: "Check out some beats I've created while coding",
  visitSoundcloud: "Visit My Soundcloud →",

  // Chatbot
  openChat: "Chat with Assistant",
  chatTitle: "Ask About Shanya",
  chatbotWelcome: "Hi! I'm Shanya's assistant. Ask me anything about her work, skills, or projects! 👋",
  quickQuestions: "Quick questions:",
  chatQ1: "What are your skills?",
  chatQ2: "Show me your projects",
  chatQ3: "How can I contact you?",
  chatQ4: "Tell me about 3D modeling",
  chatPlaceholder: "Ask me anything..."
  },
  nl: {
    // Header
    home: "Home",
    about: "Over",
    hobbies: "Hobbies",
    portfolio: "Portfolio",
    contact: "Contact",
    
    // Home section
    portfolioTitle: "Portfolio",
    myName: "Shanya Korver",
    homeDescription: "In deze portfolio website ga ik je laten zien wat ik door de jaren heen heb gemaakt en waar ik momenteel mee bezig ben.",
    
    // Professions
    webDeveloper: "Web Ontwikkelaar",
    modeler3D: "3D Modelleur",
    webDesigner: "Web Designer",
    imageDesigner: "Afbeelding Designer",
    
    // About section
    aboutMe: "Over",
    aboutMeSpan: "Mij",
    aboutMeSubtitle: "Hier vertel ik een beetje over mezelf",
    aboutDescription: "Mijn naam is Shanya Korver en ik ben 18 jaar oud. Ik werk momenteel al bijna 2 jaar in een supermarkt met het bijvullen van producten.",
    readMore: "Lees Meer",
    
    // Services/Hobbies
    myHobbies: "Mijn",
    myHobbiesSpan: "Hobbies",
    webDevelopment: "Web Ontwikkeling",
    
    // Portfolio
    latestProject: "Laatste",
    latestProjectSpan: "Project",
    sprint3Title: "Sprint 3",
    sprint3Desc: "Website gemaakt voor Sepelin Kids.",
    sprint7Title: "Sprint 7",
    sprint7Desc: "24 Hr Le mans website zonder PHP (Oud).",
    levensverhaalTitle: "Levensverhaal",
    levensverhaalDesc: "Begin van 2023 heb ik over mezelf verteld en wat ik doe.",
    sprint42Title: "LavenTec",
    sprint42Desc: "Barcode scanner gemaakt voor LavenTec",
    sprint7phpTitle: "HBO Quiz",
    sprint7phpDesc: "HBO Keuzendeel Quiz",
    vistaTitle: "VISTA Karting",
    vistaDesc: "Hier hebben we een project gemaakt voor VISTA Karting.",
    
    // Footer
    copyright: "Copyright © Shanya Korver 2026",
    
    // Skills
    mySkills: "Mijn",
    mySkillsSpan: "Vaardigheden",
    
    // Contact
    contactMe: "Contact",
    contactMeSpan: "Mij",
    yourName: "Jouw Naam",
    yourEmail: "Jouw Email",
    subject: "Onderwerp",
    yourMessage: "Jouw Bericht",
    sendMessage: "Verstuur Bericht",
    sending: "Versturen...",
    messageSent: "✅ Bericht succesvol verzonden!",
    messageError: "❌ Vul alstublieft alle verplichte velden in",
    downloadCV: "Download CV",
    
    // Timeline
    myJourney: "Mijn",
    myJourneySpan: "Reis",
    supermarketJob: "Supermarkt Medewerker",
    supermarket: "Supermarkt",
    supermarketDesc: "Producten bijvullen en klantenservice voor bijna 2 jaar.",
    education: "Software Ontwikkeling",
    educationDesc: "Web development, programmeren en 3D modelleren aan het leren.",
    firstProject: "Eerste React Project",
    projectDesc: "Mijn eerste portfolio website gebouwd met React en Vite.",
    collaboticsInternship: "Software Development Stage",
    collaboticsDesc: "Stage bij Collabotics met focus op software ontwikkeling en praktijkprojecten.",
    
    // Stats
    projectsCompleted: "Projecten Voltooid",
    yearsExperience: "Jaar Ervaring",
    codingHours: "Programmeer Uren",
    cupsOfCoffee: "Koppen Koffie",
    
    // Share & QR
    sharePortfolio: "Deel Portfolio",
    copied: "Gekopieerd!",
    copyLink: "Kopieer Link",
    showQR: "Toon QR Code",
    scanQR: "Scan om portfolio te bekijken",
    changeTheme: "Verander Thema",
    
    // GitHub
    githubActivity: "GitHub",
    githubActivitySpan: "Activiteit",
    visitGithub: "Bezoek Mijn GitHub",
    
    // 3D Models
    my3DModels: "Mijn 3D",
    my3DModelsSpan: "Modellen",
    clickDrag: "Klik & Sleep om te draaien",
    scrollZoom: "Scroll om te zoomen",
    uploadModels: "Upload je .glb of .gltf 3D modellen",
    modelInstructions: "Of gebruik Sketchfab embed links",
    model1Desc: "Mijn eerste 3D creatie",
    model2Desc: "Karakter ontwerp",

    // Music Player
    openMusicPlayer: "Open Muziek Speler",
    musicPlayer: "Mijn Muziek",
    musicSubtitle: "Luister naar beats die ik heb gemaakt tijdens het programmeren",
    visitSoundcloud: "Bezoek Mijn Soundcloud →",

    // Chatbot
      openChat: "Chat met Assistent",
      chatTitle: "Vraag Over Shanya",
      chatbotWelcome: "Hoi! Ik ben Shanya's assistent. Vraag me alles over haar werk, vaardigheden of projecten! 👋",
      quickQuestions: "Snelle vragen:",
      chatQ1: "Wat zijn je vaardigheden?",
      chatQ2: "Toon me je projecten",
      chatQ3: "Hoe kan ik contact opnemen?",
      chatQ4: "Vertel over 3D modelleren",
      chatPlaceholder: "Vraag me iets..."
  }
}

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isSticky, setIsSticky] = useState(false)
  const [language, setLanguage] = useState('en')
  const [theme, setTheme] = useState('green')
  const [musicPlayerOpen, setMusicPlayerOpen] = useState(false)
  const [chatbotOpen, setChatbotOpen] = useState(false)

  const t = translations[language]

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      
      setIsSticky(scrollY > 100)
      
      const sections = ['home', 'about', 'services', 'skills', 'portfolio', 'contact']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offset = element.offsetTop - 150
          const height = element.offsetHeight
          if (scrollY >= offset && scrollY < offset + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => { setMenuOpen(!menuOpen) }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'nl' : 'en')
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  return (
    <div className={`${darkMode ? 'dark-mode' : ''} theme-${theme}`}>
      <AnimatedBackground />
      <ScrollProgress />
      <Header 
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        menuOpen={menuOpen}
        toggleMenu={toggleMenu}
        activeSection={activeSection}
        isSticky={isSticky}
        scrollToSection={scrollToSection}
        language={language}
        toggleLanguage={toggleLanguage}
        translations={t}
        theme={theme}
        setTheme={setTheme}
      />
      <Home translations={t} />
      <StatsCounter translations={t} />
      <Collabotics />
      <About translations={t} />
      <Timeline translations={t} />
      <Services translations={t} />
      <Skills translations={t} />
      <Portfolio translations={t} />
      <ModelViewer translations={t} />
      <GitHubActivity translations={t} />
      <Contact translations={t} />
      <Footer scrollToSection={scrollToSection} translations={t} />
      <SoundcloudPlayer 
        translations={t}
        isOpen={musicPlayerOpen}
        setIsOpen={setMusicPlayerOpen}
      />
      <Chatbot 
        translations={t}
        isOpen={chatbotOpen}
        setIsOpen={setChatbotOpen}
      />
    </div>
  )
}

export default App
