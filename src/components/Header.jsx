import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

function Header() {
  const [hidden, setHidden] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setHidden(y > lastY.current && y > 60)
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header${hidden ? ' hidden' : ''}`}>
      <NavLink to="/" className="header-brand">
        <span className="header-name">Eunsoo Baek</span>
        <span className="header-role">3D Rigging · Technical Artist</span>
      </NavLink>
    </header>
  )
}

export default Header
