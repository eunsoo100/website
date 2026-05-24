import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useParams, Link } from 'react-router-dom'
import env_ca001 from '../images/rewired/concept_01.jpg'
import env_ca002 from '../images/rewired/concept_02.jpg'
import env_ca003 from '../images/rewired/concept_03.jpg'
import env_ca004 from '../images/rewired/concept_04.jpg'
import env_ca005 from '../images/rewired/concept_05.png'
import char_ca001 from '../images/rewired/char_concept_02.png'
import char_ca002 from '../images/rewired/char_concept_03.jpeg'
import kiko_01 from '../images/rewired/kiko_01.png'
import kiko_02 from '../images/rewired/kiko_02.png'
import kiko_03 from '../images/rewired/kiko_03.png'
import kiko_04 from '../images/rewired/kiko_04.png'
import kiko_05 from '../images/rewired/kiko_05.png'
import kiko_06 from '../images/rewired/kiko_06.png'
import kiko_07 from '../images/rewired/kiko_07.png'
import kiko_08 from '../images/rewired/kiko_08.jpg'
import kiko_09 from '../images/rewired/kiko_09.jpg'
import kiko_10 from '../images/rewired/kiko_10.png'
import kiko_11 from '../images/rewired/kiko_11.png'
import bear_01 from '../images/rewired/bear_01.png'
import sb001 from '../images/those_who_see/those_who_see_storyBoard_001.png'
import sb002 from '../images/those_who_see/those_who_see_storyBoard_002.png'
import sb003 from '../images/those_who_see/those_who_see_storyBoard_003.png'
import cleoConceptArt from '../images/those_who_see/cleo_concept_art.png'
import game_ca001 from '../images/harvesture/character design.jpg'
import game_ca002 from '../images/harvesture/spring vege.jpg'
import game_ca003 from '../images/harvesture/summer vege.jpg'
import './ProjectDetail.css'

const projectDetails = {
  rewired: {
    title: 'Rewired',
    date: 'May 2026',
    type: 'Grad Film Project',
    roles: ['Director', 'Production & Pipeline Manager', 'Rigger', 'Concept Artist', 'Technical Artist'],
    password: 'eunsoo100',
    sections: [
      {
        media: [{ type: 'video', embedUrl: 'https://www.youtube.com/embed/hIPCRZhBz2I' }],
      },
      {
        type: 'slider',
        images: [env_ca002, env_ca005, env_ca001, env_ca003, env_ca004],
        caption: 'Environment concept art',
      },
      {
        type: 'slider',
        images: [char_ca001, char_ca002],
        caption: 'Character concept art',
      },
      {
        type: 'slider',
        images: [kiko_01, kiko_03, kiko_02, kiko_04, kiko_05, kiko_06, kiko_07, kiko_08, kiko_09, kiko_11, kiko_10],
        caption: 'Kiko concept sketches and model sheets (Newest to Oldest)',
      },
      {
        type: 'image',
        src: bear_01,
        caption: 'Bear concept sketch',
      },
    ],
  },
  'those-who-see': {
    title: 'Those Who See',
    date: 'April 2025',
    type: '3rd year film project | Rigging, Concept Art',
    roles: ['Rigger', 'Concept Artist'],
    comingSoon: false,
    description: [
      "This project was my first collaborative project with four other teamates!",
      "It's about a young girl who discovers a hidden cave beneath a utopian city and uncovers the horrifying truth that its perfection is built on a child's suffering. And she needs decide whether to stay or leave her home.",
      "Through this project, I came to understand the complexity of production, the importance of structured planning, and how critical communication really is. Dealing with pipeline issues that came up as assets moved between different departments also sparked my interest in problem-solving and tool building.",
    ],
    sections: [
      {
        media: [{ type: 'video', embedUrl: 'https://player.vimeo.com/video/1073754657?h=49b4c2b187&title=0&byline=0&portrait=0' }],
      },
      {
        type: 'slider',
        images: [sb001, sb002, sb003],
        caption: 'Excerpt from the storyboard',
      },
      {
        type: 'image',
        src: cleoConceptArt,
        caption: 'Cleo Concept art',
      },
    ],
  },
  'spare-time': {
    title: 'Spare Time!',
    date: 'December 2023',
    type: '2nd year short animation project',
    roles: ['Rigger', 'Technical Artist'],
    comingSoon: false,
    description: [
      "This is my very first 3D animation project! A cute little robot gets into the room though the window and enjoy its time reading books. There were many struggles due to my inexperience with the software and my lack of skills, but that's also what drew me into 3D :D",
    ],
    sections: [
      {
        media: [{ type: 'video', embedUrl: 'https://www.youtube.com/embed/vv2I5dJASNQ' }],
      },
    ],
  },
  'harvesture': {
    title: 'Harvesture',
    date: 'December 2021',
    type: '1st year game project',
    roles: ['Game Creator'],
    comingSoon: false,
    description: [
      "Harvesture is my very first project at Emily Carr! It's a 2D pixel-style farming game built in Unity, using 2D animation and C# scripts.",
      "Players run through the farm, collecting crops while dodging obstacles.",
      "You can download this game with the link below. Let's harvest!"
    ],
    downloadUrl: 'https://drive.google.com/file/d/1FUJOoVsrV68ML8mc8bHaZbva8BgvFaxy/view?usp=sharing',
    sections: [
      {
        media: [{ type: 'video', embedUrl: 'https://www.youtube.com/embed/ZvfQZ6LH9rU' }],
      },
      {
        type: 'slider',
        images: [game_ca001, game_ca002, game_ca003],
        caption: 'Game concept art',
      },
    ],
  }
}

function Lightbox({ images, initialIndex = 0, onClose }) {
  const [current, setCurrent] = useState(initialIndex)
  const multi = images.length > 1

  useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') setCurrent(i => (i - 1 + images.length) % images.length)
      if (e.key === 'ArrowRight') setCurrent(i => (i + 1) % images.length)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, images.length])

  return createPortal(
    <div className="lightbox-overlay" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="Close">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {multi && (
        <button className="lightbox-nav lightbox-nav--prev" onClick={e => { e.stopPropagation(); setCurrent(i => (i - 1 + images.length) % images.length) }} aria-label="Previous">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}
      <img src={images[current]} alt={`${current + 1}`} className="lightbox-img" onClick={e => e.stopPropagation()} />
      {multi && (
        <button className="lightbox-nav lightbox-nav--next" onClick={e => { e.stopPropagation(); setCurrent(i => (i + 1) % images.length) }} aria-label="Next">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}
    </div>,
    document.body
  )
}

function PasswordGate({ password, onUnlock }) {
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    if (value === password) {
      onUnlock()
    } else {
      setError(true)
      setValue('')
    }
  }

  return (
    <div className="password-gate">
      <form onSubmit={handleSubmit} className="password-form">
        <p className="password-label">Password required</p>
        <div className="password-input-row">
          <input
            type="password"
            value={value}
            onChange={e => { setValue(e.target.value); setError(false) }}
            className={`password-input${error ? ' password-input--error' : ''}`}
            placeholder="Enter password"
            autoFocus
          />
          <button type="submit" className="password-submit">→</button>
        </div>
        {error && <p className="password-error">Incorrect password</p>}
      </form>
    </div>
  )
}

function SingleImage({ src, caption }) {
  const [lightbox, setLightbox] = useState(false)
  return (
    <div className="detail-section">
      <div className="slider-wrapper">
        <img src={src} alt={caption || ''} className="slider-img" onClick={() => setLightbox(true)} />
      </div>
      {caption && <p className="detail-media-caption">{caption}</p>}
      {lightbox && <Lightbox images={[src]} initialIndex={0} onClose={() => setLightbox(false)} />}
    </div>
  )
}

function ImageSlider({ images, caption }) {
  const [current, setCurrent] = useState(0)
  const [lightbox, setLightbox] = useState(false)
  const prev = () => setCurrent(i => (i - 1 + images.length) % images.length)
  const next = () => setCurrent(i => (i + 1) % images.length)

  return (
    <div className="detail-section">
      <div className="slider-wrapper">
        <img
          src={images[current]}
          alt={`Slide ${current + 1}`}
          className="slider-img"
          onClick={() => setLightbox(true)}
        />
        <button className="slider-btn slider-btn--prev" onClick={prev} aria-label="Previous">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button className="slider-btn slider-btn--next" onClick={next} aria-label="Next">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      <div className="slider-footer">
        {caption && <p className="detail-media-caption">{caption}</p>}
        <span className="slider-count">{current + 1} / {images.length}</span>
      </div>
      {lightbox && (
        <Lightbox
          images={images}
          initialIndex={current}
          onClose={() => setLightbox(false)}
        />
      )}
    </div>
  )
}

function MediaPlaceholder({ label, type, embedUrl }) {
  if (embedUrl) {
    return (
      <div className="detail-video-wrapper">
        <iframe
          src={embedUrl}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="detail-video-iframe"
        />
      </div>
    )
  }
  return (
    <div className={`detail-placeholder${type === 'video' ? ' detail-placeholder--video' : ''}`}>
      {label && <span className="detail-placeholder-label">{label}</span>}
    </div>
  )
}

function ProjectDetail() {
  const { id } = useParams()
  const project = projectDetails[id]
  const [unlocked, setUnlocked] = useState(false)

  if (!project) {
    return (
      <div className="project-detail-page">
        <Link to="/projects" className="detail-back">← Projects</Link>
        <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Project not found.</p>
      </div>
    )
  }

  if (project.password && !unlocked) {
    return (
      <div className="project-detail-page">
        <Link to="/projects" className="detail-back">← Projects</Link>
        <div className="detail-header">
          <div className="detail-title-row">
            <h1 className="detail-title">{project.title}</h1>
            <span className="detail-date">{project.date}</span>
          </div>
          <p className="detail-type">{project.type}</p>
          <div className="detail-roles">
            {project.roles.map((role, i) => (
              <span key={i} className="detail-role">{role}</span>
            ))}
          </div>
        </div>
        <div className="detail-divider" />
        <PasswordGate password={project.password} onUnlock={() => setUnlocked(true)} />
      </div>
    )
  }

  return (
    <div className="project-detail-page">
      <Link to="/projects" className="detail-back">← Projects</Link>

      <div className="detail-header">
        <div className="detail-title-row">
          <h1 className="detail-title">{project.title}</h1>
          <span className="detail-date">{project.date}</span>
        </div>
        <p className="detail-type">{project.type}</p>
        <div className="detail-roles">
          {project.roles.map((role, i) => (
            <span key={i} className="detail-role">{role}</span>
          ))}
        </div>
      </div>

      <div className="detail-divider" />

      {project.sections && project.sections
        .filter(s => s.media?.some(m => m.type === 'video'))
        .map((section, i) => (
          <div key={i} className="detail-section">
            <div className="detail-media-grid">
              {section.media.map((m, j) => (
                <MediaPlaceholder key={j} label={m.label} type={m.type} embedUrl={m.embedUrl} />
              ))}
            </div>
          </div>
        ))}

      {project.description && (
        <div className="detail-description-block">
          {project.description.map((p, i) => (
            <p key={i} className="detail-description">{p}</p>
          ))}
          {project.downloadUrl && (
            <a
              href={project.downloadUrl}
              target="_blank"
              rel="noreferrer"
              className="detail-download-btn"
            >
              Download Game
            </a>
          )}
        </div>
      )}

      {project.sections && project.sections
        .filter(s => !s.media?.some(m => m.type === 'video'))
        .map((section, i) => {
          if (section.type === 'slider') {
            return <ImageSlider key={i} images={section.images} caption={section.caption} />
          }
          if (section.type === 'image') {
            return <SingleImage key={i} src={section.src} caption={section.caption} />
          }
          return (
            <div key={i} className="detail-section">
              {section.heading && (
                <h2 className="detail-section-heading">{section.heading}</h2>
              )}
              {section.media && (
                <div className={`detail-media-grid${section.media.length > 1 ? ' detail-media-grid--multi' : ''}`}>
                  {section.media.map((m, j) => (
                    <MediaPlaceholder key={j} label={m.label} type={m.type} embedUrl={m.embedUrl} />
                  ))}
                </div>
              )}
              {section.caption && (
                <p className="detail-media-caption">{section.caption}</p>
              )}
              {section.body && (
                <p className="detail-section-body">{section.body}</p>
              )}
            </div>
          )
        })}
    </div>
  )
}

export default ProjectDetail
