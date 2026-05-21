import './DemoReel.css'

function DemoReel() {
  return (
    <div className="demoreel-page">
      <div className="demoreel-header">
        <h1 className="demoreel-title">Demo Reel</h1>
        <p className="demoreel-year">2026</p>
      </div>

      <div className="video-container">
        <div className="video-wrapper">
          <iframe
            src="https://player.vimeo.com/video/1152759852?title=0&byline=0&portrait=0"
            title="Demo Reel 2026"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      {/* <p className="demoreel-subtitle">Rigging | TA Demo Reel - Eunsoo Baek</p> */}

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
