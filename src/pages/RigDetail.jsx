import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import './ProjectDetail.css'
import kikoWalkCycle from '../images/kiko_rig/kiko_walk_cycle.gif'
import kikoFaceDef from '../images/kiko_rig/kiko_face_def_v3_compressed.gif'
import armDef from '../images/kiko_rig/arm_def_v001.gif'
import kneeDefFront from '../images/kiko_rig/knee_def_front_v001.gif'
import kneeDefSide from '../images/kiko_rig/knee_def_side_v001.gif'
import hipDefFront from '../images/kiko_rig/hip_def_front_v001.gif'
import hipDefSide from '../images/kiko_rig/hip_def_side_v001.gif'
import shoulderFrJnt from '../images/kiko_rig/shoulder_def_fr_jnt_v001.gif'
import shoulderFrClean from '../images/kiko_rig/shoulder_def_fr_clean_v001.gif'
import shoulderBkClean from '../images/kiko_rig/shoulder_def_bk_clean_v001.gif'
import kikoStill001 from '../images/kiko_rig/kiko_still_002.png'
import kikoStill002 from '../images/kiko_rig/kiko_still_001.png'
import kikoStill003 from '../images/kiko_rig/kiko_still_003.png'
import kikoStill004 from '../images/kiko_rig/kiko_still_004.png'
import kikoStill006 from '../images/kiko_rig/kiko_still_005.png'
import kikoStill007 from '../images/kiko_rig/kiko_still_006.png'
import kikoStill008 from '../images/kiko_rig/kiko_still_007.png'
import kikoStill005 from '../images/kiko_rig/kiko_still_008.png'

const kikoStills = [kikoStill001, kikoStill002, kikoStill003, kikoStill004, kikoStill005, kikoStill006, kikoStill007, kikoStill008]

const rigDetails = {
  kiko: {
    title: 'Kiko',
    production: 'Rewired',
    type: 'Biped Human Rig',
    roles: [],
    stills: kikoStills,
    heroGif: kikoWalkCycle,
    description: [
      'Kiko is the main character of the short animated film "Rewired". She is a scavenger girl who wonders around the wasteland collecting the scraps.',
      'The biggest challenge working on this rig was to manage multiple props on her body and make them follow the body.',
    ],
    sections: [
      {
        heading: 'Key Features',
        videoId: 'gFaIVJKaPx8',
        keyFeatures: [
          'Stretchable Limbs & Spine',
          'Knee Lock Attribute',
          'Foot Roll Attributes',
          'IK/FK Hybrid Spine',
          'Breathing Controls',
          'Posable Props & Clothes',
        ],
      },
      {
        heading: 'Rig Components',
        subsections: [
          {
            gif: kikoFaceDef,
            body: 'Joint Based Face Rig + Face Blendshapes',
          },
        ],
      },
      {
        heading: 'Deformation & Skinning',
        subsections: [
          {
            gif: armDef,
            body: 'Blendshape based corrective shape',
          },
          {
            gifsVertical: [kneeDefFront, kneeDefSide],
            gifAlts: ['Knee deformation front', 'Knee deformation side'],
            body: 'Blendshape based corrective shape',
          },
          {
            gifsVertical: [hipDefFront, hipDefSide],
            gifAlts: ['Hip deformation front', 'Hip deformation side'],
            body: 'Blendshape based corrective shape',
          },
          {
            slider: {
              gifs: [shoulderFrJnt, shoulderFrClean, shoulderBkClean],
              alts: ['Front — With Joints', 'Front — Clean', 'Back — Clean'],
            },
            body: 'Corrective joints + blendshape system for arms and shoulders deformation.',
          },
        ],
      },
      { heading: 'Technical Notes' },
    ],
  },
}

function slugify(text) {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
}

function RigSlider({ gifs, alts, onLightbox }) {
  const [idx, setIdx] = useState(0)
  const prev = () => setIdx(i => (i - 1 + gifs.length) % gifs.length)
  const next = () => setIdx(i => (i + 1) % gifs.length)
  return (
    <div>
      <div className="slider-wrapper">
        <img
          src={gifs[idx]}
          alt={alts?.[idx] ?? ''}
          className="slider-img"
          onClick={() => onLightbox(gifs[idx])}
        />
        <button className="slider-btn slider-btn--prev" onClick={prev}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button className="slider-btn slider-btn--next" onClick={next}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
      <div className="slider-footer">
        <span className="slider-count">{alts?.[idx]}</span>
        <span className="slider-count">{idx + 1} / {gifs.length}</span>
      </div>
    </div>
  )
}

function RigDetail() {
  const { id } = useParams()
  const rig = rigDetails[id]
  const [lightboxSrc, setLightboxSrc] = useState(null)
  const [activeIdx, setActiveIdx] = useState(0)

  if (!rig) {
    return (
      <div className="project-detail-page">
        <Link to="/rigs" className="detail-back">← Rigs</Link>
        <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Page not found.</p>
      </div>
    )
  }

  const scrollToSection = (i) => {
    const el = document.getElementById(slugify(rig.sections[i].heading))
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveIdx(i)
    }
  }

  return (
    <div className="project-detail-page">
      <Link to="/rigs" className="detail-back">← Rigs</Link>

      <div className="detail-header">
        <div className="detail-title-row">
          <h1 className="detail-title">{rig.title}</h1>
        </div>
        <p className="detail-type">{rig.type}</p>
        <div className="detail-roles">
          <span className="detail-role">{rig.production}</span>
          {rig.roles.map((role, i) => (
            <span key={i} className="detail-role">{role}</span>
          ))}
        </div>
      </div>

      <div className="detail-divider" />

      {rig.stills && (
        <div className="rig-stills-block">
          <div className="rig-stills-tile">
            {rig.stills.map((src, i) => (
              <img key={i} src={src} alt={`${rig.title} still ${i + 1}`} className="rig-still-img" />
            ))}
          </div>
          <p className="rig-stills-caption">Film stills from <em>Rewired</em> (2026)</p>
        </div>
      )}

      {rig.heroGif && (
        <div className="detail-section">
          <img src={rig.heroGif} alt={`${rig.title} walk cycle`} className="rig-hero-gif" />
        </div>
      )}

      {rig.description && (
        <div className="detail-description-block">
          {rig.description.map((para, i) => (
            <p key={i} className="detail-description">{para}</p>
          ))}
        </div>
      )}

      <nav className="rig-toc">
        {rig.sections.map((section, i) => (
          <button
            key={i}
            className={`rig-toc-link${activeIdx === i ? ' rig-toc-link--active' : ''}`}
            onClick={() => scrollToSection(i)}
          >
            {section.heading}
          </button>
        ))}
      </nav>

      <div className="rig-sections">
          {rig.sections.map((section, i) => (
            <div
              key={i}
              id={slugify(section.heading)}
              className="detail-section"
              style={{ scrollMarginTop: 'calc(var(--header-height) + 32px)' }}
            >
              <h2 className="detail-section-heading">{section.heading}</h2>

              {section.videoId && (
                <div className="detail-video-wrapper">
                  <iframe
                    className="detail-video-iframe"
                    src={`https://www.youtube.com/embed/${section.videoId}`}
                    title={`${rig.title} rig demo`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}

              {section.keyFeatures && (
                <ul className="tool-feature-list">
                  {section.keyFeatures.map((feat, j) => (
                    <li key={j} className="tool-feature-item">{feat}</li>
                  ))}
                </ul>
              )}

              {section.subsections && section.subsections.map((sub, j) => (
                <div key={j} className="rig-subsection">
                  {sub.heading && <h3 className="rig-subsection-heading">{sub.heading}</h3>}
                  {sub.gif && (
                    <img src={sub.gif} alt={sub.heading ?? ''} className="rig-subsection-gif" />
                  )}
                  {sub.gifs && (
                    <div className="rig-subsection-gif-grid">
                      {sub.gifs.map((g, k) => (
                        <img
                          key={k}
                          src={g}
                          alt={sub.gifAlts?.[k] ?? ''}
                          className="rig-subsection-gif"
                          style={{ cursor: 'zoom-in' }}
                          onClick={() => setLightboxSrc(g)}
                        />
                      ))}
                    </div>
                  )}
                  {sub.gifsVertical && (
                    <div className="rig-subsection-gif-stack">
                      {sub.gifsVertical.map((g, k) => (
                        <img
                          key={k}
                          src={g}
                          alt={sub.gifAlts?.[k] ?? ''}
                          className="rig-subsection-gif"
                          style={{ cursor: 'zoom-in' }}
                          onClick={() => setLightboxSrc(g)}
                        />
                      ))}
                    </div>
                  )}
                  {sub.slider && (
                    <RigSlider
                      gifs={sub.slider.gifs}
                      alts={sub.slider.alts}
                      onLightbox={setLightboxSrc}
                    />
                  )}
                  {sub.body && (
                    <p className="detail-section-body">{sub.body}</p>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

      {lightboxSrc && (
        <div className="lightbox-overlay" onClick={() => setLightboxSrc(null)}>
          <button className="lightbox-close" onClick={() => setLightboxSrc(null)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <img
            src={lightboxSrc}
            alt=""
            className="lightbox-img"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}

export default RigDetail
