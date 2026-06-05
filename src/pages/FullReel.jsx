import { Link } from 'react-router-dom'
import './FullReel.css'

function FullReel() {
  return (
    <div className="fullreel-page">
      <Link to="/" className="fullreel-back">← Reels</Link>

      <div className="fullreel-header">
        <h1 className="fullreel-title">Rigging | TA Demo Reel</h1>
        <p className="fullreel-year">2026</p>
      </div>

      <div className="fullreel-wrapper">
        <iframe
          src="https://player.vimeo.com/video/1198679345?title=0&byline=0&portrait=0"
          title="Demo Reel 2026 — Full Version"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>

      <div className="fullreel-info">
        <div className="fullreel-info-group">
          <p className="fullreel-info-label">Contacts</p>
          <a href="mailto:noeunsoo100@gmail.com" className="fullreel-info-item">noeunsoo100@gmail.com</a>
          <a href="https://www.linkedin.com/in/eunsoo-baek" target="_blank" rel="noreferrer" className="fullreel-info-item">linkedin.com/in/eunsoo-baek</a>
        </div>
        <div className="fullreel-info-group">
          <p className="fullreel-info-label">Projects</p>
          <p className="fullreel-info-item">Rewired (2026)</p>
          <p className="fullreel-info-item">Mr. Kim and Haetae (2026)</p>
        </div>
        <div className="fullreel-info-group">
          <p className="fullreel-info-label">Software</p>
          <p className="fullreel-info-item">Maya</p>
          <p className="fullreel-info-item">Python</p>
          <p className="fullreel-info-item">Houdini</p>
          <p className="fullreel-info-item">Visual Studio Code</p>
        </div>
      </div>
    </div>
  )
}

export default FullReel
