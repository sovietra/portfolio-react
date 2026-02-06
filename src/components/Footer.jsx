const Footer = ({ scrollToSection, translations }) => {
  return (
    <footer className="footer">
      <div className="footer-text">
        <p>{translations.copyright}</p>
      </div>

      <div className="footer-iconTop">
        <a onClick={() => scrollToSection('home')}>↑</a>
      </div>
    </footer>
  )
}

export default Footer