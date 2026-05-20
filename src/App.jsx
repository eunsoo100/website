import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import DemoReel from './pages/DemoReel'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Rigs from './pages/Rigs'
import ToolDevelopment from './pages/ToolDevelopment'
import Art from './pages/Art'
import About from './pages/About'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="body-layout">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<DemoReel />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/rigs" element={<Rigs />} />
            <Route path="/tool-development" element={<ToolDevelopment />} />
            <Route path="/art" element={<Art />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
