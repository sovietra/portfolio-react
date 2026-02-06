import { useState } from 'react'
import { Palette } from 'lucide-react'

const ThemeSwitcher = ({ currentTheme, setTheme, translations }) => {
  const [showThemes, setShowThemes] = useState(false)

  const themes = [
    { name: 'Forest Green', value: 'green', color: '#647C64' },
    { name: 'Ocean Blue', value: 'blue', color: '#596464' },
    { name: 'Dark Purple', value: 'orange', color: '#5c4854' },
    { name: 'Dark Red', value: 'purple', color: '#5a3d3f' },
    { name: 'Dark Pink', value: 'pink', color: '#6f5260' }
  ]

  return (
    <div className="theme-switcher">
      <button 
        className="theme-toggle-btn"
        onClick={() => setShowThemes(!showThemes)}
        title={translations.changeTheme || "Change Theme"}
      >
        <Palette size={20} />
      </button>

      {showThemes && (
        <div className="theme-dropdown">
          {themes.map((theme) => (
            <button
              key={theme.value}
              className={`theme-option ${currentTheme === theme.value ? 'active' : ''}`}
              onClick={() => {
                setTheme(theme.value)
                setShowThemes(false)
              }}
            >
              <div 
                className="theme-color-preview" 
                style={{ background: theme.color }}
              ></div>
              <span>{theme.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default ThemeSwitcher