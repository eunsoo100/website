import './Art.css'

const artworks = [
  { id: 'childrens-book', title: "Children's Book", locked: true },
  { id: 'fine-art', title: 'Fine Art' },
  { id: 'life-drawings', title: 'Life Drawings' },
  { id: 'untitled-series', title: 'Untitled Series' },
]

function LockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}

function ArtCard({ artwork }) {
  return (
    <div className="art-card">
      <div className="art-thumb">
        {artwork.locked && (
          <div className="art-thumb-lock">
            <LockIcon />
          </div>
        )}
      </div>
      <p className="art-title">{artwork.title}</p>
    </div>
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
