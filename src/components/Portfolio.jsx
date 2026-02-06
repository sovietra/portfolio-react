import { ExternalLink } from 'lucide-react'

const Portfolio = ({ translations }) => {
  const portfolioItems = [
    {
      id: 1,
      title: translations.sprint3Title,
      description: translations.sprint3Desc,
      image: "/images/portfolio1.jpg",
      link: "http://127.0.0.1:5502/sepelin%20kids.html"
    },
    {
      id: 2,
      title: translations.sprint7Title,
      description: translations.sprint7Desc,
      image: "/images/portfolio2.jpg",
      link: "http://localhost/sprint7/project.24.heures.du.mans/index.html"
    },
    {
      id: 3,
      title: translations.levensverhaalTitle,
      description: translations.levensverhaalDesc,
      image: "/images/portfolio3.jpg",
      link: "https://eduofficenl-my.sharepoint.com/:w:/r/personal/517274_vistacollege_nl/_layouts/15/Doc.aspx?sourcedoc=%7BECF45FAB-2D4E-4462-972F-7231396000B6%7D&file=Levensverhaal%20.docx&action=default&mobileredirect=true"
    },
    {
      id: 4,
      title: translations.sprint42Title,
      description: translations.sprint42Desc,
      image: "/images/portfolio4.jpg",
      link: "http://127.0.0.1:5501/Website/HTML%20en%20CSS/portfolio.html#Study"
    },
    {
      id: 5,
      title: translations.sprint7phpTitle,
      description: translations.sprint7phpDesc,
      image: "/images/portfolio5.jpg",
      link: "https://sovietra.github.io/HBO-Quiz-Keuzedeel/"
    },
    {
      id: 6,
      title: translations.vistaTitle,
      description: translations.vistaDesc,
      image: "/images/portfolio6.jpg",
      link: "https://sovietra.github.io/vista-karting/"
    }
  ]

  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">
        {translations.latestProject} <span>{translations.latestProjectSpan}</span>
      </h2>

      <div className="portfolio-container">
        {portfolioItems.map((item) => (
          <div key={item.id} className="portfolio-box">
            <img src={item.image} alt={item.title} />
            <div className="portfolio-layer">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Portfolio