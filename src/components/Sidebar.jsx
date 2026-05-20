import { useLayoutEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Sidebar.css'

const navItems = [
  { label: 'Demo Reel', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Rigs', to: '/rigs' },
  { label: 'Tool Development', to: '/tool-development' },
  { label: 'Art', to: '/art' },
  { label: 'About Me', to: '/about' },
]

function Sidebar() {
  const location = useLocation()
  const linkRefs = useRef([])
  const [indicator, setIndicator] = useState({ top: 0, height: 0 })

  useLayoutEffect(() => {
    const activeIndex = navItems.findIndex(({ to }) =>
      to === '/' ? location.pathname === '/' : location.pathname === to
    )
    const el = linkRefs.current[activeIndex]
    if (el) {
      setIndicator({ top: el.offsetTop, height: el.offsetHeight })
    }
  }, [location.pathname])

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <div
          className="sidebar-indicator"
          style={{ top: indicator.top, height: indicator.height }}
        />
        {navItems.map(({ label, to }, i) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            ref={el => { linkRefs.current[i] = el }}
            className={({ isActive }) =>
              isActive ? 'sidebar-link active' : 'sidebar-link'
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <a href="mailto:langker11@gmail.com" className="sidebar-contact">Email</a>
        <a href="https://www.linkedin.com/in/eunsoo-baek" target="_blank" rel="noreferrer" className="sidebar-contact">LinkedIn</a>
      </div>
    </aside>
  )
}

export default Sidebar
