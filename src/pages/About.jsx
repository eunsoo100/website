import resumePdf from '../documents/EunsooBaek_resume_202605.pdf'
import './About.css'

function About() {
  return (
    <div className="about-page">
      <h1 className="about-title">About Me</h1>

      <div className="about-body">
        <div className="about-bio">
          <p>Hello!</p>
          <p>I'm Eunsoo Baek, a 3D artist with a passion for character rigging, prop rigging and tool development! I enjoy solving complex rigging challenges and turning them into systems that feel natural and intuitive for artists to use.</p>
          <p>I find myself drawn to the intersection of art and technology, where scripting, automation, and custom tools come together to support expressive animation and improve production pipeline.</p>
          <p>I love collaborating with animators, artists, and developers, and I use feedback as a core part of refining my rigs, tools, and workflows.</p>
        </div>
    
        <div className="about-sidebar">
          <a href={resumePdf} target="_blank" rel="noreferrer" className="resume-btn">
            <span>Resume</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <div className="about-info-group">
            <p className="about-info-label">Location</p>
            <p className="about-info-degree">Vancouver, BC, Canada</p>
          </div>
          <div className="about-info-group">
            <p className="about-info-label">Education</p>
            <p className="about-info-school">Emily Carr University of Art + Design</p>
            <p className="about-info-detail">520 E 1st Ave, Vancouver, BC</p>
            <p className="about-info-detail">September 2021 – May 2026</p>
            <p className="about-info-degree">Bachelor of Media Arts, 3D Computer Animation</p>
          </div>

          <div className="about-info-group">
            <p className="about-info-label">Contacts</p>
            <a href="mailto:noeunsoo100@gmail.com" className="about-info-link">noeunsoo100@gmail.com</a>
            <a href="https://www.linkedin.com/in/eunsoo-baek" target="_blank" rel="noreferrer" className="about-info-link">linkedin.com/in/eunsoo-baek</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
