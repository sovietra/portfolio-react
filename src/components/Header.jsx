import { Menu, Moon, Sun, Globe, Clock, Download } from 'lucide-react'
import { useState, useEffect } from 'react'
import ShareButtons from './ShareButtons'
import QRCode from './QRCode'
import ThemeSwitcher from './ThemeSwitcher'

const Header = ({ 
  darkMode, 
  toggleDarkMode, 
  menuOpen, 
  toggleMenu, 
  activeSection, 
  isSticky, 
  scrollToSection,
  language,
  toggleLanguage,
  translations,
  theme,
  setTheme
}) => {
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const options = {
        timeZone: 'Europe/Amsterdam',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }
      const timeString = now.toLocaleTimeString('nl-NL', options)
      setCurrentTime(timeString)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <header className={`header ${isSticky ? 'sticky' : ''}`}>
      <div className="logo" onClick={() => scrollToSection('home')}>
        <img src="/images/logo.png" alt="Logo" className="logo-image" />
        <span className="logo-text">sovietra</span>
      </div>
      
      <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
        <a 
          className={activeSection === 'home' ? 'active' : ''} 
          onClick={() => scrollToSection('home')}
        >
          {translations.home}
        </a>
        <a 
          className={activeSection === 'about' ? 'active' : ''} 
          onClick={() => scrollToSection('about')}
        >
          {translations.about}
        </a>
        <a 
          className={activeSection === 'services' ? 'active' : ''} 
          onClick={() => scrollToSection('services')}
        >
          {translations.hobbies}
        </a>
        <a 
          className={activeSection === 'portfolio' ? 'active' : ''} 
          onClick={() => scrollToSection('portfolio')}
        >
          {translations.portfolio}
        </a>
        <a href="/documents">
          {translations.documents || 'Documents'}
        </a>
        <a 
          className={activeSection === 'contact' ? 'active' : ''} 
          onClick={() => scrollToSection('contact')}
        >
          {translations.contact}
        </a>
      </nav>

      <div className="timezone-display">
        <Clock size={18} />
        <span className="time-text">{currentTime}</span>
      </div>

      <a href="/cv/Shanya_Korver_CV.pdf" download className="cv-download-btn" title={translations.downloadCV}>
        <Download size={18} />
        <span>CV</span>
      </a>

      <ShareButtons translations={translations} />
      
      <QRCode translations={translations} />
      
      <ThemeSwitcher currentTheme={theme} setTheme={setTheme} translations={translations} />

      <div className="language-toggle" onClick={toggleLanguage} title={language === 'en' ? 'Switch to Dutch' : 'Schakel naar Engels'}>
        <Globe size={20} />
        <span className="language-text">{language === 'en' ? 'NL' : 'EN'}</span>
      </div>

      <div className="darkMode-icon" onClick={toggleDarkMode}>
        {darkMode ? <Sun size={24} /> : <Moon size={24} />}
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        <Menu size={36} />
      </div>
    </header>
  )
}

export default Header