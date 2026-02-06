const Skills = ({ translations }) => {
  const skills = [
    { name: "HTML", level: 80 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 20 },
    { name: "React", level: 40 },
    { name: "PHP", level: 50 },
    { name: "Blender", level: 30 },
    { name: "Photoshop", level: 75 },
    { name: "C#", level: 20 }
  ]

  return (
    <section className="skills" id="skills">
      <h2 className="heading">
        {translations.mySkills} <span>{translations.mySkillsSpan}</span>
      </h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-box">
            <div className="skill-info">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percentage">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div 
                className="skill-progress" 
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills