import React from 'react'
import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'
import { XcodeIcon, FigmaIcon, VSCodeIcon, GitHubIcon } from './ToolkitIcons'

const Toolkit = () => {
  const { skills } = portfolioData

  // Organize tools into categories matching reference
  const toolkitCategories = [
    {
      title: 'Development',
      tools: [
        { name: 'Xcode', icon: <XcodeIcon size={24} /> },
        { name: 'Figma', icon: <FigmaIcon size={24} /> },
        { name: 'VSCode', icon: <VSCodeIcon size={24} /> },
        { name: 'Android Studio', icon: <img src="/icons/toolkit/android-studio.svg" alt="Android Studio" style={{ width: '24px', height: '24px' }} /> },
        { name: 'Cursor', icon: <img src="/icons/toolkit/cursor.svg" alt="Cursor" style={{ width: '24px', height: '24px' }} /> },
        { name: 'GitHub', icon: <GitHubIcon size={24} /> }
      ]
    },
    {
      title: 'AI & Assistive Tools',
      tools: [
        { name: 'Claude Code', icon: <img src="/icons/toolkit/claude.svg" alt="Claude" style={{ width: '24px', height: '24px' }} /> },
        { name: 'ChatGPT', icon: <img src="/icons/toolkit/chatgpt.svg" alt="ChatGPT" className="chatgpt-icon" style={{ width: '24px', height: '24px' }} /> },
        { name: 'Gemini', icon: <img src="/icons/toolkit/gemini.svg" alt="Gemini" style={{ width: '24px', height: '24px' }} /> }
      ]
    }
  ]

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}>
      <h2 className="section-title" style={{ marginBottom: '1rem' }}>My Toolkit</h2>
      <p style={{
        fontSize: 'clamp(0.95rem, 2vw, 1.125rem)',
        color: 'var(--text-secondary)',
        marginBottom: '2rem',
        fontWeight: 400,
        lineHeight: '1.6'
      }}>
        A curated collection of tools I use to design, develop, and ship every day.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(250px, 100%), 1fr))',
        gap: '2rem 3rem',
        width: '100%'
      }}>
          {toolkitCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <h3 style={{
                fontSize: '1rem',
                fontWeight: 500,
                color: 'var(--text-primary)',
                marginBottom: '1rem',
                fontFamily: "'Space Grotesk', sans-serif"
              }}>
                {category.title}
              </h3>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem'
              }}>
                {category.tools.map((tool, toolIndex) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.3, delay: (catIndex * 0.1) + (toolIndex * 0.05) }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem'
                    }}
                  >
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '8px',
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-color)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      color: 'var(--text-primary)',
                      padding: '8px',
                      boxSizing: 'border-box'
                    }}>
                      <div style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        filter: 'var(--icon-filter, none)'
                      }}>
                        {tool.icon}
                      </div>
                    </div>
                    <span style={{
                      fontSize: '0.95rem',
                      color: 'var(--text-primary)',
                      fontWeight: 400,
                      fontFamily: "'Inter', sans-serif"
                    }}>
                      {tool.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
    </div>
  )
}

export default Toolkit
