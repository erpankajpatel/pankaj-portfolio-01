import React from 'react'
import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'
import { FaLinkedin, FaQuoteLeft } from 'react-icons/fa'

const Recommendations = () => {
  const { recommendations } = portfolioData

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  return (
    <section id="recommendations" style={{
      padding: 'clamp(3rem, 6vw, 5rem) 1.5rem',
      background: 'var(--bg-secondary)'
    }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        style={{
          maxWidth: '1400px',
          margin: '0 auto'
        }}
      >
        <h2 className="section-title" style={{ marginBottom: '2rem' }}>People I've Worked With Say</h2>

        <>
          <style dangerouslySetInnerHTML={{
            __html: `
              .recommendations-grid {
                column-count: 1;
                column-gap: 1.5rem;
                width: 100%;
              }
              @media (min-width: 640px) {
                .recommendations-grid {
                  column-count: 2;
                }
              }
              @media (min-width: 1024px) {
                .recommendations-grid {
                  column-count: 3;
                }
              }
              .recommendations-grid > * {
                display: inline-block;
                width: 100%;
                break-inside: avoid;
                page-break-inside: avoid;
                margin-bottom: 1.5rem;
              }
            `
          }} />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="recommendations-grid"
          >
          {recommendations.map((rec, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              style={{
                display: 'inline-block',
                width: '100%',
                marginBottom: '1.5rem'
              }}
            >
              <div
                className="card"
                style={{
                  padding: '1.5rem',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius, 12px)',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--text-primary)'
                  e.currentTarget.style.boxShadow = 'var(--shadow-lg)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)'
                  e.currentTarget.style.boxShadow = 'var(--shadow-sm)'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '1.25rem',
                  left: '1.25rem',
                  fontSize: '1.75rem',
                  color: 'var(--text-muted)',
                  opacity: 0.25
                }}>
                  <FaQuoteLeft />
                </div>

                <p style={{
                  fontSize: '0.95rem',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)',
                  marginBottom: '1.5rem',
                  paddingTop: '0.75rem',
                  fontStyle: 'italic',
                  fontWeight: 400
                }}>
                  "{rec.text}"
                </p>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border-color)',
                  marginTop: 'auto'
                }}>
                  <div>
                    <h4 style={{
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      marginBottom: '0.25rem'
                    }}>
                      {rec.name}
                    </h4>
                    {rec.position && (
                      <p style={{
                        fontSize: '0.85rem',
                        color: 'var(--text-muted)',
                        fontWeight: 400,
                        marginBottom: rec.company ? '0.125rem' : '0'
                      }}>
                        {rec.position}
                      </p>
                    )}
                    {rec.company && (
                      <p style={{
                        fontSize: '0.85rem',
                        color: 'var(--text-muted)',
                        fontWeight: 400
                      }}>
                        {rec.company}
                      </p>
                    )}
                  </div>
                  {rec.linkedinUrl && rec.linkedinUrl !== '#' && (
                    <motion.a
                      href={rec.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.15, opacity: 0.8 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        fontSize: '1.25rem',
                        color: 'var(--text-primary)',
                        transition: 'all 0.3s ease',
                        flexShrink: 0,
                        marginLeft: '1rem'
                      }}
                      aria-label="LinkedIn Profile"
                    >
                      <FaLinkedin />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
          </motion.div>
        </>
      </motion.div>
    </section>
  )
}

export default Recommendations

