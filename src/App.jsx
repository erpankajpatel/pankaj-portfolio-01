import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import BottomNav from './components/BottomNav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import ToolkitAndTalks from './components/ToolkitAndTalks'
import OpenSource from './components/OpenSource'
import Recommendations from './components/Recommendations'
import Contact from './components/Contact'

function App() {
  return (
    <ThemeProvider>
      <div className="App" style={{ minHeight: '100vh', background: 'var(--bg-primary)', color: 'var(--text-primary)', paddingBottom: '100px' }}>
        <Hero />
        <Experience />
        <Recommendations />
        <Projects />
        <ToolkitAndTalks />
        <OpenSource />
        <Contact />
        <BottomNav />
      </div>
    </ThemeProvider>
  )
}

export default App
