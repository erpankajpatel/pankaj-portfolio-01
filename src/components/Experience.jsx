import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'
import ExperienceModal from './ExperienceModal'
import { FaInfoCircle } from 'react-icons/fa'

const Experience = () => {
  const { experience } = portfolioData
  const [selectedExperience, setSelectedExperience] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const openModal = (exp) => {
    setSelectedExperience(exp)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedExperience(null)
  }

  return (
    <>
      <section id="experience" style={{
        padding: 'clamp(3rem, 6vw, 5rem) 1.5rem',
        background: 'var(--bg-secondary)'
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
          <h2 className="section-title" style={{ marginBottom: '3rem' }}>Experiences</h2>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem'
          }}>
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  cursor: 'pointer'
                }}
                onClick={() => openModal(exp)}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    alignItems: isMobile ? 'flex-start' : 'flex-start',
                    gap: isMobile ? '0.75rem' : '2rem',
                    padding: isMobile ? '1rem' : '1.5rem',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius, 8px)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--text-primary)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-color)'
                  }}
                >
                  {/* Date/Period - Left side */}
                  <div style={{
                    minWidth: isMobile ? 'auto' : '120px',
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)',
                    fontWeight: 400,
                    fontFamily: "'Inter', sans-serif"
                  }}>
                    {exp.startDate} - {exp.endDate === 'Present' ? (
                      <span style={{
                        background: 'linear-gradient(135deg, var(--text-primary) 0%, #6366f1 50%, var(--text-primary) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        fontWeight: 500
                      }}>
                        Present
                      </span>
                    ) : exp.endDate}
                  </div>

                  {/* Content - Right side */}
                  <div style={{
                    flex: 1,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    gap: '1rem'
                  }}>
                    <div style={{ flex: 1 }}>
                      <h3 style={{
                        fontSize: '1.125rem',
                        fontWeight: 400,
                        color: 'var(--text-primary)',
                        letterSpacing: '-0.01em',
                        marginBottom: '0.25rem',
                        fontFamily: "'Space Grotesk', sans-serif"
                      }}>
                        {exp.position}
                      </h3>
                      <p style={{
                        fontSize: '0.875rem',
                        color: 'var(--text-secondary)',
                        fontWeight: 400
                      }}>
                        {exp.company}
                      </p>
                    </div>
                    <motion.div
                      initial={{ opacity: 0.5, scale: 0.9 }}
                      whileHover={{ opacity: 1, scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: 'var(--text-secondary)',
                        fontSize: '0.75rem',
                        fontWeight: 400,
                        fontFamily: "'Inter', sans-serif",
                        flexShrink: 0
                      }}
                    >
                      <FaInfoCircle style={{ fontSize: '0.875rem' }} />
                      <span>More info</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <ExperienceModal
        experience={selectedExperience}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  )
}

export default Experience
