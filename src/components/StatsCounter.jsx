import { useState, useEffect, useRef } from 'react'
import { Code, Coffee, Clock, Award } from 'lucide-react'

const StatsCounter = ({ translations }) => {
  const [counts, setCounts] = useState({
    projects: 0,
    experience: 0,
    hours: 0,
    coffee: 0
  })
  const [hasAnimated, setHasAnimated] = useState(false)
  const statsRef = useRef(null)

  const finalCounts = {
    projects: 7,
    experience: 1.5,
    hours: 600,
    coffee: 400
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          animateCounters()
          setHasAnimated(true)
        }
      },
      { threshold: 0.5 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  const animateCounters = () => {
    const duration = 2000
    const steps = 60
    const interval = duration / steps

    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setCounts({
        projects: Math.floor(finalCounts.projects * progress),
        experience: Math.floor(finalCounts.experience * progress),
        hours: Math.floor(finalCounts.hours * progress),
        coffee: Math.floor(finalCounts.coffee * progress)
      })

      if (currentStep >= steps) {
        setCounts(finalCounts)
        clearInterval(timer)
      }
    }, interval)
  }

  return (
    <section className="stats-counter" ref={statsRef}>
      <div className="stats-container">
        <div className="stat-box">
          <div className="stat-icon">
            <Code size={40} />
          </div>
          <div className="stat-number">{counts.projects}+</div>
          <div className="stat-label">{translations.projectsCompleted || "Projects Completed"}</div>
        </div>

        <div className="stat-box">
          <div className="stat-icon">
            <Award size={40} />
          </div>
          <div className="stat-number">{counts.experience}+</div>
          <div className="stat-label">{translations.yearsExperience || "Years Experience"}</div>
        </div>

        <div className="stat-box">
          <div className="stat-icon">
            <Clock size={40} />
          </div>
          <div className="stat-number">{counts.hours}+</div>
          <div className="stat-label">{translations.codingHours || "Coding Hours"}</div>
        </div>

        <div className="stat-box">
          <div className="stat-icon">
            <Coffee size={40} />
          </div>
          <div className="stat-number">{counts.coffee}+</div>
          <div className="stat-label">{translations.cupsOfCoffee || "3D Modeling"}</div>
        </div>
      </div>
    </section>
  )
}

export default StatsCounter