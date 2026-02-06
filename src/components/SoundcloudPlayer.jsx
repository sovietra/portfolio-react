import { useState } from 'react'
import { Music, X, Volume2, VolumeX, ChevronUp } from 'lucide-react'

const SoundcloudPlayer = ({ translations, isOpen, setIsOpen, isChatbotOpen }) => {
  const [isMinimized, setIsMinimized] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  console.log('SoundcloudPlayer render - isOpen:', isOpen, 'isChatbotOpen:', isChatbotOpen)

  // Your Soundcloud tracks
  const tracks = [
    {
      title: "愛してる",
      url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1289419633&color=%23647c64&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"
    },
    {
      title: "05 Chels",
      url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2125307649&color=%23647c64&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"
    }
  ]

  const [currentTrack, setCurrentTrack] = useState(0)

  return (
    <>
      {/* Floating Music Button - Hide when music player OR chatbot is open */}
      {!isOpen && !isChatbotOpen && (
        <button 
          className="music-float-btn"
          onClick={() => setIsOpen(true)}
          title={translations.openMusicPlayer || "Open Music Player"}
          style={{
            position: 'fixed',
            bottom: '10rem',
            right: '3rem',
            left: 'auto',
            top: 'auto',
            zIndex: 99999
          }}
        >
          <Music size={24} />
          <span className="music-pulse"></span>
        </button>
      )}

      {/* Music Player Modal */}
      {isOpen && (
        <div 
          className={`music-player-modal ${isMinimized ? 'minimized' : ''}`}
          style={{
            position: 'fixed',
            bottom: '3rem',
            right: '3rem',
            left: 'auto',
            top: 'auto',
            zIndex: 99998
          }}
        >
          <div className="music-player-header">
            <div className="music-player-title">
              <Music size={20} />
              <span>{translations.musicPlayer || "Music I Create"}</span>
            </div>
            <div className="music-player-controls">
              <button 
                onClick={() => setIsMinimized(!isMinimized)}
                className="music-control-btn"
                title={isMinimized ? "Expand" : "Minimize"}
              >
                <ChevronUp size={18} style={{ transform: isMinimized ? 'rotate(180deg)' : 'none' }} />
              </button>
              <button 
                onClick={() => setIsOpen(false)}
                className="music-control-btn"
                title="Close"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <div className="music-player-content">
              <p className="music-player-subtitle">
                {translations.musicSubtitle || "Check out some beats I've created while coding"}
              </p>
              
              <div className="music-player-iframe">
                <iframe
                  width="100%"
                  height="166"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src={tracks[currentTrack].url}
                  title="Soundcloud Player"
                ></iframe>
              </div>

              {tracks.length > 1 && (
                <div className="music-track-selector">
                  {tracks.map((track, index) => (
                    <button
                      key={index}
                      className={`music-track-btn ${currentTrack === index ? 'active' : ''}`}
                      onClick={() => setCurrentTrack(index)}
                    >
                      {track.title}
                    </button>
                  ))}
                </div>
              )}

              <div className="music-player-footer">
                <a 
                  href="https://soundcloud.com/7kru" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="soundcloud-link"
                >
                  {translations.visitSoundcloud || "Visit My Soundcloud →"}
                </a>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default SoundcloudPlayer