import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useParams, Link } from 'react-router-dom'

import fd_p01 from '../images/art/life_drawings/10Eunsoo_figuredrawings_Page_01.jpg'
import fd_p02 from '../images/art/life_drawings/10Eunsoo_figuredrawings_Page_02.jpg'
import fd_p03 from '../images/art/life_drawings/10Eunsoo_figuredrawings_Page_03.jpg'
import fd_p04 from '../images/art/life_drawings/10Eunsoo_figuredrawings_Page_04.jpg'
import fd_p05 from '../images/art/life_drawings/10Eunsoo_figuredrawings_Page_05.jpg'
import fd_p06 from '../images/art/life_drawings/10Eunsoo_figuredrawings_Page_06.jpg'
import fd_p07 from '../images/art/life_drawings/10Eunsoo_figuredrawings_Page_07.jpg'
import fd_p08 from '../images/art/life_drawings/10Eunsoo_figuredrawings_Page_08.jpg'

import fgd_01 from '../images/art/life_drawings/fgd_01.JPG'
import fgd_02 from '../images/art/life_drawings/fgd_02.JPG'
import fgd_03 from '../images/art/life_drawings/fgd_03.JPG'
import fgd_04 from '../images/art/life_drawings/fgd_04.JPG'
import fgd_05 from '../images/art/life_drawings/fgd_05.jpg'
import fgd_06 from '../images/art/life_drawings/fgd_06.jpg'
import fgd_07 from '../images/art/life_drawings/fgd_07.JPG'
import fgd_08 from '../images/art/life_drawings/fgd_08.JPG'
import fgd_09 from '../images/art/life_drawings/fgd_09.jpg'
import fgd_10 from '../images/art/life_drawings/fgd_10.jpg'
import fgd_11 from '../images/art/life_drawings/fgd_11.JPG'
import fgd_12 from '../images/art/life_drawings/fgd_12.JPG'
import fgd_13 from '../images/art/life_drawings/fgd_13.JPG'
import fgd_14 from '../images/art/life_drawings/fgd_14.JPG'
import fgd_15 from '../images/art/life_drawings/fgd_15.JPG'

import std_01 from '../images/art/life_drawings/still_drawing_01.png'

import untitled_01 from '../images/art/untitled/untitled_01.png'
import untitled_02 from '../images/art/untitled/untitled_02.png'
import untitled_03 from '../images/art/untitled/untitled_03.png'

import hell_01 from '../images/art/traditional_art/Hell_of_Sloth_01.png'
import hell_02 from '../images/art/traditional_art/Hell_of_Sloth_02.png'
import tied_in from '../images/art/traditional_art/tied_in.png'

import './ProjectDetail.css'

const artDetails = {
  'traditional-art': {
    title: 'Traditional Art',
    sliders: [
      {
        images: [hell_01, hell_02],
        caption: '나태지옥(2020) 28″x17″, Engraved on scratch paper',
      },
      { type: 'image', 
        src: tied_in, 
        caption: 'Tied In(2019) 16″x40″, Watercolor and ink on hard paper' 
      },
    ],
  },
  'untitled-series': {
    title: 'Untitled Series',
    sliders: [
      { type: 'image', 
        src: untitled_01,
        caption: 'Untitled(2020) 20″x13″, Oil pastel on paper',
      },
      { type: 'image', 
        src: untitled_02, 
        caption: 'Untitled(2020) 20″x30″, Acrylic and oil paint on canvas' 
      },
      // { type: 'image', 
      //   src: untitled_03, 
      //   caption: 'Untitled(2019) 20″x15″, Watercolor on paper' 
      // },
    ],
  },
  'life-drawings': {
    title: 'Life Drawings',
    sliders: [
      {
        images: [fd_p01, fd_p02, fd_p03, fd_p04, fd_p05, fd_p06, fd_p07, fd_p08],
        caption: 'Figure drawings(2020), Charcoal and pencils on paper',
      },
      {
        images: [fgd_01, fgd_02, fgd_03, fgd_04, fgd_05, fgd_06, fgd_07, fgd_08, fgd_09, fgd_10, fgd_11, fgd_12, fgd_13, fgd_14, fgd_15],
        caption: 'Figure drawings(2020), Pencils on paper',
      },
        {
        type: 'image',
        src: std_01,
        caption: 'Still Life Drawing(2020) 18″x24″, Pencils on paper',
      },
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

function ArtDetail() {
  const { id } = useParams()
  const art = artDetails[id]

  if (!art) {
    return (
      <div className="project-detail-page">
        <Link to="/art" className="detail-back">← Art</Link>
        <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Page not found.</p>
      </div>
    )
  }

  return (
    <div className="project-detail-page">
      <Link to="/art" className="detail-back">← Art</Link>

      <div className="detail-header">
        <h1 className="detail-title">{art.title}</h1>
      </div>

      <div className="detail-divider" />

      {art.sliders.map((slider, i) => {
        if (slider.type === 'image') {
          return <SingleImage key={i} src={slider.src} caption={slider.caption} />
        }
        return <ImageSlider key={i} images={slider.images} caption={slider.caption} />
      })}
    </div>
  )
}

export default ArtDetail
