import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import DemoReel from './pages/DemoReel'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Rigs from './pages/Rigs'
import RigDetail from './pages/RigDetail'
import ToolDevelopment from './pages/ToolDevelopment'
import ToolDetail from './pages/ToolDetail'
import Art from './pages/Art'
import ArtDetail from './pages/ArtDetail'
import About from './pages/About'
import './App.css'

function App() {
  return (
    <HashRouter>
      <Header />
      <div className="body-layout">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<DemoReel />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/rigs" element={<Rigs />} />
            <Route path="/rigs/:id" element={<RigDetail />} />
            <Route path="/tool-development" element={<ToolDevelopment />} />
            <Route path="/tool-development/:id" element={<ToolDetail />} />
            <Route path="/art" element={<Art />} />
            <Route path="/art/:id" element={<ArtDetail />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  )
}

export default App
