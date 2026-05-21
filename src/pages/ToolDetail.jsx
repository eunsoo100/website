import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useParams, Link } from 'react-router-dom'
import './ToolDetail.css'
import autoRigPrep from '../images/tools/auto_rig_prep.png'
import autoRigBuild1 from '../images/tools/auto_rig_build1.png'
import autoRigBuild2 from '../images/tools/auto_rig_build2.png'

const toolDetails = {
  'biped-auto-rig-tool': {
    title: 'Biped Auto Rig Tool',
    date: 'March 2026',
    category: 'Rigging',
    tech: ['Python', 'Maya API', 'PySide2'],
    videoId: 'Ocj4uMys97Q',
    github: 'https://github.com/eunsoo100/biped_auto_rig',
    features: [
      {
        title: 'Build and Clean Up Skeleton',
        items: [
          'Import the template skeleton with perfect naming conventions to customize the joint placement',
          'Auto clean up the skeleton values with tri planar orientation and zeroed-out transforms for a clean rigging base',
        ],
        image: autoRigPrep,
      },
      {
        title: 'Modular Auto-Rig',
        items: [
          'Auto rig tool for each part : global, spine, neck(head), arms, hand, leg and foot',
          'Allows a seamless part integration',
        ],
        slider: [autoRigBuild1, autoRigBuild2],
      },
      {
        title: 'Advanced Ribbon Limbs & IK FK Spine Setup',
        items: [
          'NURBS ribbon setup for limbs',
          'Auto squash, stretch & volume for IK',
        ],
      },
      {
        title: 'Post Process Integration',
        items: [
          'Parent switch tool for dynamic Parent Switching, allows user to remove & select the parent controlls',
          'Smart mirroring, automated matrix & shape Sync',
        ],
      },
    ],
  },
  'scene-assembly-tool': {
    title: 'Scene Assembly Tool',
    date: 'February 2026',
    category: 'Pipeline',
    tech: ['Python', 'Maya API', 'PySide2', 'Maya Standalone'],
    videoId: '5eCgq7sjBVE',
    featureList: [
      'Strips all non-animation references from the scene and saves the result as the CLEAN animation file.',
      'Generates a new Lighting file that references the CLEAN animation file and the textured environment.',
      'Repairs broken references and removes junk nodes to ensure a stable production file.',
      'References animation and environment assets using standardized namespaces for pipeline consistency.',
      'Features batch processing with options for overwriting, skipping, or automatic versioning.',
    ],
  },
  'grid-fill-tool': {
    title: 'Grid Fill Tool',
    date: 'June 2025',
    category: 'Modelling',
    tech: ['Maya Python', 'Maya API'],
    videoId: 'NXUHHlqcyGE',
    featureList: [
      'Automatically fills open edge loops with a clean, quad-based grid to maintain professional topology.',
      'Includes Inset settings to create a boundary ring of faces.',
      'Features Advanced options for a fine adjustment.',
    ],
  },
}

function Lightbox({ images, initialIndex = 0, onClose }) {
  const [current, setCurrent] = useState(initialIndex)
  const multi = images.length > 1
  const prev = () => setCurrent(i => (i - 1 + images.length) % images.length)
  const next = () => setCurrent(i => (i + 1) % images.length)

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
        <button className="lightbox-nav lightbox-nav--prev" onClick={e => { e.stopPropagation(); prev() }} aria-label="Previous">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}
      <img src={images[current]} alt={`${current + 1}`} className="lightbox-img" onClick={e => e.stopPropagation()} />
      {multi && (
        <button className="lightbox-nav lightbox-nav--next" onClick={e => { e.stopPropagation(); next() }} aria-label="Next">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}
    </div>,
    document.body
  )
}

function ImageSlider({ images }) {
  const [current, setCurrent] = useState(0)
  const [lightbox, setLightbox] = useState(false)
  const prev = () => setCurrent(i => (i - 1 + images.length) % images.length)
  const next = () => setCurrent(i => (i + 1) % images.length)

  return (
    <>
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
        <span className="slider-count">{current + 1} / {images.length}</span>
      </div>
      {lightbox && (
        <Lightbox
          images={images}
          initialIndex={current}
          onClose={() => setLightbox(false)}
        />
      )}
    </>
  )
}

function MediaPlaceholder({ label }) {
  return (
    <div className="detail-placeholder">
      <span className="detail-placeholder-label">{label}</span>
    </div>
  )
}

function ToolDetail() {
  const { id } = useParams()
  const tool = toolDetails[id]

  if (!tool) {
    return (
      <div className="tool-detail-page">
        <Link to="/tool-development" className="detail-back">← Tool Development</Link>
        <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Page not found.</p>
      </div>
    )
  }

  return (
    <div className="tool-detail-page">
      <Link to="/tool-development" className="detail-back">← Tool Development</Link>

      <div className="detail-header">
        <div className="detail-title-row">
          <h1 className="detail-title">{tool.title}</h1>
          <span className="detail-date">{tool.date}</span>
        </div>
        <p className="detail-type">{tool.category}</p>
        <div className="detail-roles">
          {tool.tech.map((t, i) => (
            <span key={i} className="detail-role">{t}</span>
          ))}
        </div>
      </div>

      <div className="detail-divider" />

      <div className="detail-section">
        {tool.videoId ? (
          <div className="detail-video-wrapper">
            <iframe
              className="detail-video-iframe"
              src={`https://www.youtube.com/embed/${tool.videoId}`}
              title="Demo Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <MediaPlaceholder label="Demo Video" />
        )}
        {tool.github && (
          <a href={tool.github} target="_blank" rel="noopener noreferrer" className="detail-link-btn">
            GitHub →
          </a>
        )}
      </div>

      <div className="detail-divider" />

      {tool.features && tool.features.map((feature, i) => (
        <div key={i} className="detail-section">
          <h2 className="detail-section-heading">{feature.title}</h2>
          <ul className="tool-feature-list">
            {feature.items.map((item, j) => (
              <li key={j} className="tool-feature-item">{item}</li>
            ))}
          </ul>
          {feature.image && (
            <img src={feature.image} alt={feature.title} className="detail-section-img" />
          )}
          {feature.slider && <ImageSlider images={feature.slider} />}
        </div>
      ))}

      {tool.featureList && (
        <div className="detail-section">
          <h2 className="detail-section-heading">Features</h2>
          <ul className="tool-feature-list">
            {tool.featureList.map((item, i) => (
              <li key={i} className="tool-feature-item">{item}</li>
            ))}
          </ul>
        </div>
      )}

      {tool.sections && tool.sections.map((section, i) => (
        <div key={i} className="detail-section">
          <h2 className="detail-section-heading">{section.title}</h2>
          {section.image && (
            <MediaPlaceholder label="Image" />
          )}
          {section.note && (
            <p className="tool-feature-item">{section.note}</p>
          )}
        </div>
      ))}
    </div>
  )
}

export default ToolDetail
