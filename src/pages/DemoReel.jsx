import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './DemoReel.css'
import kikoThumb from '../images/rigs/kiko_thumbnail.png'
import rewiredThumb from '../images/rewired/rewired_thumbnail.png'
import autoRigThumb from '../images/tools/auto_rig_thumbnail_low.png'
import haetaeThumb from '../images/rigs/haetae_thumbnail.png'
import tobiThumb from '../images/rigs/T0B1_thumbnail.png'

function DemoReel() {
  const location = useLocation()

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const section = params.get('section')
    if (section) {
      const el = document.getElementById(section)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [location.search])

  return (
    <div className="demoreel-page">
      <div className="demoreel-section">
        <div className="demoreel-header">
          <h2 className="demoreel-title demoreel-title--sm">Demo Reel</h2>
          <p className="demoreel-year">2026</p>
        </div>
        <div className="video-wrapper">
          <iframe
            src="https://player.vimeo.com/video/1152759852?title=0&byline=0&portrait=0"
            title="Demo Reel 2026"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="rig-shortcut-row">
          <Link to="/rigs/kiko" className="rig-shortcut">
            <img src={kikoThumb} alt="Kiko" className="rig-shortcut-thumb" />
            <div className="rig-shortcut-text">
              <span className="rig-shortcut-label">Featured Rig</span>
              <span className="rig-shortcut-name">Kiko →</span>
            </div>
          </Link>
          <Link to="/projects/rewired" className="rig-shortcut">
            <img src={rewiredThumb} alt="Rewired" className="rig-shortcut-thumb" />
            <div className="rig-shortcut-text">
              <span className="rig-shortcut-label">Project</span>
              <span className="rig-shortcut-name">Rewired →</span>
            </div>
          </Link>
          <Link to="/rigs/haetae" className="rig-shortcut">
            <img src={haetaeThumb} alt="Haetae" className="rig-shortcut-thumb" />
            <div className="rig-shortcut-text">
              <span className="rig-shortcut-label">Featured Rig</span>
              <span className="rig-shortcut-name">Haetae →</span>
            </div>
          </Link>
          <Link to="/rigs/tobi" className="rig-shortcut">
            <img src={tobiThumb} alt="T0B1" className="rig-shortcut-thumb" />
            <div className="rig-shortcut-text">
              <span className="rig-shortcut-label">Featured Rig</span>
              <span className="rig-shortcut-name">T0B1 →</span>
            </div>
          </Link>
        </div>
      </div>

      <div className="demoreel-section" id="ta" style={{ scrollMarginTop: 'calc(var(--header-height) + 24px)' }}>
        <div className="demoreel-header">
          <h2 className="demoreel-title demoreel-title--sm">Technical Artist Demo Reel</h2>
          <p className="demoreel-year">2026</p>
        </div>
        <div className="video-wrapper">
          <iframe
            src="https://player.vimeo.com/video/1197454510?title=0&byline=0&portrait=0"
            title="Technical Artist Demo Reel 2026"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="rig-shortcut-row">
          <Link to="/tool-development" className="rig-shortcut">
            <img src={autoRigThumb} alt="Tool Development" className="rig-shortcut-thumb" />
            <div className="rig-shortcut-text">
              <span className="rig-shortcut-label">Tools</span>
              <span className="rig-shortcut-name">Tool Development →</span>
            </div>
          </Link>
        </div>
      </div>

      <div className="demoreel-info">
        <div className="info-group">
          <p className="info-label">Contacts</p>
          <a href="mailto:noeunsoo100@gmail.com" className="info-item">noeunsoo100@gmail.com</a>
          <a href="https://www.linkedin.com/in/eunsoo-baek" target="_blank" rel="noreferrer" className="info-item">linkedin.com/in/eunsoo-baek</a>
        </div>

        <div className="info-group">
          <p className="info-label">Projects</p>
          <p className="info-item">Rewired (2026)</p>
          <p className="info-item">Mr. Kim and Haetae (2026)</p>
        </div>

        <div className="info-group">
          <p className="info-label">Software</p>
          <p className="info-item">Maya</p>
          <p className="info-item">Python</p>
          <p className="info-item">Houdini</p>
          <p className="info-item">Visual Studio Code</p>
        </div>
      </div>
    </div>
  )
}

export default DemoReel
