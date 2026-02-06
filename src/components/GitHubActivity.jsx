import { Github } from 'lucide-react'

const GitHubActivity = ({ translations }) => {
  const githubUsername = "sovietra" // Your GitHub username

  return (
    <section className="github-activity" id="github">
      <h2 className="heading">
        {translations.githubActivity || "GitHub"} <span>{translations.githubActivitySpan || "Activity"}</span>
      </h2>

      <div className="github-container">
        <div className="github-stats">
          <img 
            src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=default&hide_border=true&bg_color=f1eae2&title_color=647C64&icon_color=647C64&text_color=333`}
            alt="GitHub Stats"
            className="github-stat-card"
          />
          <img 
            src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&theme=default&hide_border=true&background=f1eae2&ring=647C64&fire=647C64&currStreakLabel=647C64&sideNums=333&currStreakNum=333&dates=333&sideLabels=333`}
            alt="GitHub Streak"
            className="github-stat-card"
          />
        </div>

        <div className="github-contribution">
          <img 
            src={`https://ghchart.rshah.org/647C64/${githubUsername}`}
            alt="GitHub Contribution Graph"
            className="github-contribution-chart"
          />
        </div>

        <a 
          href={`https://github.com/${githubUsername}`}
          target="_blank"
          rel="noopener noreferrer"
          className="github-profile-btn"
        >
          <Github size={20} />
          {translations.visitGithub || "Visit My GitHub"}
        </a>
      </div>
    </section>
  )
}

export default GitHubActivity