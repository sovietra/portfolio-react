import { useState } from 'react'
import { Share2, Twitter, Linkedin, Facebook, Link, Check } from 'lucide-react'

const ShareButtons = ({ translations }) => {
  const [showShare, setShowShare] = useState(false)
  const [copied, setCopied] = useState(false)

  const shareUrl = window.location.href
  const shareTitle = "Check out Shanya Korver's Portfolio"

  const handleShare = (platform) => {
    let url = ''
    
    switch(platform) {
      case 'twitter':
        url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`
        break
      case 'linkedin':
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
        break
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
        break
      default:
        return
    }
    
    window.open(url, '_blank', 'width=600,height=400')
  }

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="share-container">
      <button 
        className="share-toggle-btn"
        onClick={() => setShowShare(!showShare)}
        title={translations.sharePortfolio || "Share Portfolio"}
      >
        <Share2 size={20} />
      </button>

      {showShare && (
        <div className="share-dropdown">
          <button onClick={() => handleShare('twitter')} className="share-btn twitter">
            <Twitter size={18} />
            <span>Twitter</span>
          </button>
          <button onClick={() => handleShare('linkedin')} className="share-btn linkedin">
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </button>
          <button onClick={() => handleShare('facebook')} className="share-btn facebook">
            <Facebook size={18} />
            <span>Facebook</span>
          </button>
          <button onClick={copyLink} className="share-btn copy">
            {copied ? <Check size={18} /> : <Link size={18} />}
            <span>{copied ? (translations.copied || "Copied!") : (translations.copyLink || "Copy Link")}</span>
          </button>
        </div>
      )}
    </div>
  )
}

export default ShareButtons