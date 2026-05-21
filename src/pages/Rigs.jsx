import './Rigs.css'
import kikoThumb from '../images/rigs/kiko_thumbnail.png'
import tobiThumb from '../images/rigs/T0B1_thumbnail.png'
import haetaeThumb from '../images/rigs/haetae_thumbnail.png'

const rigs = [
  {
    id: 'kiko',
    title: 'Kiko',
    type: 'Biped Human Rig',
    tags: ['Rewired'],
    thumb: kikoThumb,
  },
  {
    id: 'tobi',
    title: 'T0B1',
    type: 'Robot Rig',
    tags: ['Rewired'],
    thumb: tobiThumb,
  },
  {
    id: 'haetae',
    title: 'Haetae',
    type: 'Quadruped Rig',
    tags: ['Mr.Kim and Haetae'],
    thumb: haetaeThumb,
  },
]

function RigCard({ rig }) {
  return (
    <div className="rig-card">
      <div className="rig-thumb">
        {rig.thumb && <img src={rig.thumb} alt={rig.title} className="rig-thumb-img" />}
        <div className="rig-wip">
          <div className="rig-wip-box" />
          <span className="rig-wip-text">Work in Progress</span>
        </div>
      </div>
      <div className="rig-meta">
        <h2 className="rig-title">{rig.title}</h2>
        <p className="rig-type">{rig.type}</p>
        {rig.tags.length > 0 && (
          <div className="rig-tags">
            {rig.tags.map((tag, i) => (
              <span key={i} className="rig-tag">{tag}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function Rigs() {
  return (
    <div className="rigs-page">
      <h1 className="page-title-sm">Rigs</h1>
      <div className="rigs-grid">
        {rigs.map(r => (
          <RigCard key={r.id} rig={r} />
        ))}
      </div>
    </div>
  )
}

export default Rigs
