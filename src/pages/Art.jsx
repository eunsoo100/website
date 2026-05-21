import { Link } from 'react-router-dom'
import lifeDrawingsThumb from '../images/art/life_drawings/still_drawing_01.png'
import untitledThumb from '../images/art/untitled/untitled_01.png'
import traditionalArtThumb from '../images/art/traditional_art/Hell_of_Sloth_01.png'
import './Art.css'

const artworks = [
  { id: 'childrens-book', title: "Children's Book", locked: true },
  { id: 'traditional-art', title: 'Traditional Art', hasPage: true, thumb: traditionalArtThumb, thumbStyle: { transform: 'scale(1.8)',objectPosition: '80% 80%'}  },
  { id: 'life-drawings', title: 'Life Drawings', hasPage: true, thumb: lifeDrawingsThumb, thumbStyle: { transform: 'scale(1.2)', objectPosition: '65% 10%' } },
  { id: 'untitled-series', title: 'Untitled Series', hasPage: true, thumb: untitledThumb, thumbStyle: { transform: 'scale(1.2)' } },
]

function LockIcon() {
  return (
    <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}

function ArtCard({ artwork }) {
  const inner = (
    <>
      <div className="art-thumb">
        {artwork.thumb && (
          <img src={artwork.thumb} alt={artwork.title} className="art-thumb-img" style={artwork.thumbStyle} />
        )}
        {artwork.locked && (
          <div className="art-thumb-lock">
            <LockIcon />
          </div>
        )}
      </div>
      <p className="art-title">{artwork.title}</p>
    </>
  )

  if (artwork.locked || !artwork.hasPage) {
    return <div className="art-card">{inner}</div>
  }
  return (
    <Link to={`/art/${artwork.id}`} className="art-card art-card--link">
      {inner}
    </Link>
  )
}

function Art() {
  return (
    <div className="art-page">
      <h1 className="page-title-sm">Art</h1>
      <div className="art-grid">
        {artworks.map(a => (
          <ArtCard key={a.id} artwork={a} />
        ))}
      </div>
    </div>
  )
}

export default Art
