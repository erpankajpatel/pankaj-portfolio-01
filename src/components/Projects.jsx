import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'
import ProjectModal from './ProjectModal'
import { FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const { projects } = portfolioData
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <>
      <section id="projects" style={{
        padding: 'clamp(3rem, 6vw, 5rem) 1.5rem',
        background: 'var(--bg-primary)'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{
            maxWidth: '1400px',
            margin: '0 auto'
          }}
        >
          <h2 className="section-title" style={{ marginBottom: '3rem' }}>Work</h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(175px, 100%), 1fr))',
            gap: '1.5rem',
            width: '100%'
          }}>
            {projects.slice(0, 4).map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  cursor: 'pointer',
                  width: '100%',
                  maxWidth: '100%'
                }}
                onClick={() => openModal(project)}
              >
                <div
                  className="card"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius, 8px)',
                    overflow: 'hidden',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {/* Image Section - Square aspect ratio */}
                  <div style={{
                    width: '100%',
                    aspectRatio: '1',
                    overflow: 'hidden',
                    background: 'var(--bg-secondary)',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {project.image ? (
                      <picture>
                        <source
                          srcSet={`${project.image.replace(/\.(jpg|jpeg|png)$/i, '.webp')} 1x, ${project.image.replace(/\.(jpg|jpeg|png)$/i, '@2x.webp')} 2x`}
                          type="image/webp"
                        />
                        <img
                          src={project.image}
                          alt={project.name}
                          loading="lazy"
                          decoding="async"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block',
                            opacity: 0.6,
                            filter: 'grayscale(30%) brightness(0.85)',
                            transition: 'opacity 0.3s ease, filter 0.3s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.opacity = '0.8'
                            e.target.style.filter = 'grayscale(15%) brightness(0.9)'
                          }}
                          onMouseLeave={(e) => {
                            const theme = document.documentElement.getAttribute('data-theme')
                            e.target.style.opacity = theme === 'light' ? '0.6' : '0.7'
                            e.target.style.filter = theme === 'light' ? 'grayscale(30%) brightness(0.85)' : 'grayscale(20%) brightness(0.9)'
                          }}
                          onError={(e) => {
                            e.target.style.display = 'none'
                            e.target.parentElement.innerHTML = `
                              <div style="
                                width: 100%;
                                height: 100%;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                background: var(--bg-secondary);
                                color: var(--text-muted);
                                font-size: 1.5rem;
                              ">
                                📱
                              </div>
                            `
                          }}
                        />
                      </picture>
                    ) : (
                      <div style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'var(--bg-secondary)',
                        color: 'var(--text-muted)',
                        fontSize: '1.5rem'
                      }}>
                        📱
                      </div>
                    )}
                  </div>

                  {/* Content Section - Below image */}
                  <div style={{
                    padding: '0.75rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.25rem'
                  }}>
                    <h3 style={{
                      fontSize: '0.875rem',
                      fontWeight: 400,
                      color: 'var(--text-primary)',
                      letterSpacing: '-0.01em',
                      marginBottom: '0.125rem',
                      fontFamily: "'Space Grotesk', sans-serif",
                      lineHeight: '1.3'
                    }}>
                      {project.name}
                    </h3>
                    <p style={{
                      fontSize: '0.7rem',
                      color: 'var(--text-secondary)',
                      lineHeight: '1.4',
                      fontWeight: 400
                    }}>
                      {project.period || 'Mobile App'}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  )
}

export default Projects
