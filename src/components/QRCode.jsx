import { useState } from 'react'
import { QrCode as QrIcon, X } from 'lucide-react'

const QRCode = ({ translations }) => {
  const [showQR, setShowQR] = useState(false)
  const portfolioUrl = window.location.href
  
  // Using QR Code API
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(portfolioUrl)}`

  return (
    <>
      <button 
        className="qr-code-btn"
        onClick={() => setShowQR(true)}
        title={translations.showQR || "Show QR Code"}
      >
        <QrIcon size={20} />
      </button>

      {showQR && (
        <div className="qr-modal" onClick={() => setShowQR(false)}>
          <div className="qr-content" onClick={(e) => e.stopPropagation()}>
            <button className="qr-close" onClick={() => setShowQR(false)}>
              <X size={24} />
            </button>
            <h3>{translations.scanQR || "Scan to view portfolio"}</h3>
            <div className="qr-image">
              <img src={qrCodeUrl} alt="Portfolio QR Code" />
            </div>
            <p className="qr-url">{portfolioUrl}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default QRCode