import { Briefcase, GraduationCap, Code } from 'lucide-react'

const Timeline = ({ translations }) => {
  const timelineData = [
    {
      id: 1,
      icon: <Briefcase size={24} />,
      title: translations.supermarketJob,
      company: translations.supermarket,
      date: "2023 - Present",
      description: translations.supermarketDesc
    },
    {
      id: 2,
      icon: <GraduationCap size={24} />,
      title: translations.education,
      company: "Vista College",
      date: "2023 - Present",
      description: translations.educationDesc
    },
    {
      id: 3,
      icon: <Code size={24} />,
      title: translations.firstProject,
      company: "Personal Project",
      date: "2024",
      description: translations.projectDesc
    },
    {
      id: 4,
      icon: <Briefcase size={24} />,
      title: translations.collaboticsInternship,
      company: "Collabotics",
      date: "2026 - Present",
      description: translations.collaboticsDesc
    }
  ]

  return (
    <section className="timeline" id="timeline">
      <h2 className="heading">
        {translations.myJourney} <span>{translations.myJourneySpan}</span>
      </h2>

      <div className="timeline-container">
        {timelineData.map((item, index) => (
          <div key={item.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-dot">
              {item.icon}
            </div>
            <div className="timeline-content">
              <div className="timeline-date">{item.date}</div>
              <h3>{item.title}</h3>
              <h4>{item.company}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Timeline