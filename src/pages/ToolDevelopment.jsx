import { Link } from 'react-router-dom'
import './ToolDevelopment.css'
import autoRigThumb from '../images/tools/auto_rig_thumbnail.png'
import gridFillThumb from '../images/tools/grid_fill_thumbnail.png'
import sceneAssemblyThumb from '../images/tools/scene_assembly_thumbnail.png'

const tools = [
  {
    title: 'Biped Auto Rig Tool',
    category: 'Rigging',
    description: 'A Maya auto-rigging tool for biped human that builds independent, modular rigs for maximum flexibility. It supports a data-driven workflow which allows the rig information to be fully restored even after the UI is closed.',
    thumb: autoRigThumb,
    id: 'biped-auto-rig-tool',
  },
  {
    title: 'Scene Assembly Tool',
    category: 'Pipeline',
    description: 'A pipeline tool that cleans animation files and auto-assembles a ready-to-render lighting scene, runs as a standalone batch process outside of Maya.',
    thumb: sceneAssemblyThumb,
    id: 'scene-assembly-tool',
  },
  {
    title: 'Grid Fill Tool',
    category: 'Modelling',
    description: 'A Maya modeling tool that accelerates quad-based workflows by collapsing repetitive retopology steps into a single click, keeping edge flow clean without breaking artist focus.',
    thumb: gridFillThumb,
    id: 'grid-fill-tool',
  },
]

function ToolCard({ tool }) {
  const inner = (
    <>
      <div className="tool-thumb">
        <img src={tool.thumb} alt={tool.title} className="tool-thumb-img" />
      </div>
      <div className="tool-body">
        <div className="tool-header">
          <h2 className="tool-title">{tool.title}</h2>
          <span className="tool-category">{tool.category}</span>
        </div>
        <p className="tool-description">{tool.description}</p>
      </div>
    </>
  )

  if (tool.id) {
    return (
      <Link to={`/tool-development/${tool.id}`} className="tool-card tool-card--link">
        {inner}
      </Link>
    )
  }
  return <div className="tool-card">{inner}</div>
}

function ToolDevelopment() {
  return (
    <div className="tool-dev-page">
      <h1 className="page-title-sm">Tool Development</h1>
      <div className="tool-list">
        {tools.map((tool, i) => (
          <ToolCard key={i} tool={tool} />
        ))}
      </div>
    </div>
  )
}

export default ToolDevelopment
