import { Link } from 'react-router-dom'
import rewiredThumb from '../images/rewired/rewired_thumbnail.png'
import thoseWhoSeeThumb from '../images/those_who_see/those_who_see_thumbnail.png'
import spareTimeThumb from '../images/spare_time/spare_time_thumbnail.png'
import harvestureThumb from '../images/harvesture/harvesture_thumbnail.png'
import './Projects.css'

const projects = [
  {
    id: 'rewired',
    title: 'Rewired',
    date: 'May 2026',
    type: 'Grad Film Project',
    roles: ['Director', 'Production & Pipeline Manager', 'Rigger', 'Concept Artist', 'Technical Artist'],
    thumb: rewiredThumb,
    comingSoon: false,
    locked: true,
  },
  {
    id: 'those-who-see',
    title: 'Those Who See',
    date: 'April 2025',
    type: '3rd Year Film Project',
    roles: ['Rigger', 'Concept Artist'],
    thumb: thoseWhoSeeThumb,
    comingSoon: false,
    locked: false,
  },
  {
    id: 'spare-time',
    title: 'Spare Time!',
    date: 'December 2023',
    type: '2nd Year Short Animation Project',
    roles: ['Rigger', 'Technical Artist'],
    thumb: spareTimeThumb,
    comingSoon: false,  
    locked: false,
  },
  {
    id: 'harvesture',
    title: 'Harvesture',
    date: 'December 2021',
    type: '1st Year Game Project',
    roles: ['Game Creator'],
    thumb: harvestureThumb,
    comingSoon: false,
    locked: false,
  },
]

function LockIcon() {
  return (
    <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}

function CardInner({ project }) {
  return (
    <>
      <div className="project-thumb">
        {project.thumb && (
          <img src={project.thumb} alt={project.title} className="project-thumb-img" />
        )}
        {project.comingSoon && (
          <span className="project-coming-soon">Coming Soon</span>
        )}
        {project.locked && (
          <div className="project-thumb-lock">
            <LockIcon />
          </div>
        )}
      </div>
      <div className="project-meta">
        <div className="project-header">
          <h2 className="project-title">{project.title}</h2>
          <span className="project-date">{project.date}</span>
        </div>
        <p className="project-type">{project.type}</p>
        <div className="project-roles">
          {project.roles.map((role, i) => (
            <span key={i} className="project-role">{role}</span>
          ))}
        </div>
      </div>
    </>
  )
}

function ProjectCard({ project }) {
  if (project.comingSoon) {
    return (
      <div className="project-card">
        <CardInner project={project} />
      </div>
    )
  }
  return (
    <Link to={`/projects/${project.id}`} className="project-card project-card--link">
      <CardInner project={project} />
    </Link>
  )
}

function Projects() {
  return (
    <div className="projects-page">
      <h1 className="page-title-sm">Projects</h1>
      <div className="projects-grid">
        {projects.map(p => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  )
}

export default Projects
