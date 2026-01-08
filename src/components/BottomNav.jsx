import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle from './ThemeToggle'
import { portfolioData } from '../data/portfolioData'
import { FaBars, FaTimes } from 'react-icons/fa'

const BottomNav = () => {
  const [activeItem, setActiveItem] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const isScrollingProgrammaticallyRef = useRef(false)
  const scrollEndTimeoutRef = useRef(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    let scrollTimeout = null

    const handleScroll = () => {
      // Clear any pending timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout)
      }

      // Skip updating if we're in the middle of a programmatic scroll
      if (isScrollingProgrammaticallyRef.current) {
        return
      }

      // Debounce the scroll handler
      scrollTimeout = setTimeout(() => {
        const sections = ['hero', 'experience', 'projects', 'recommendations', 'toolkit-talks', 'opensource', 'contact']
        const scrollY = window.scrollY
        const windowHeight = window.innerHeight
        const viewportCenter = scrollY + windowHeight / 2

        let activeSection = ''
        let minDistance = Infinity

        // Find the section closest to the viewport center
        for (const sectionId of sections) {
          const element = document.getElementById(sectionId)
          if (element) {
            const rect = element.getBoundingClientRect()
            const elementTop = scrollY + rect.top
            const elementBottom = elementTop + rect.height
            const elementCenter = elementTop + rect.height / 2

            // Check if viewport center is within this section
            if (viewportCenter >= elementTop && viewportCenter <= elementBottom) {
              activeSection = sectionId
              break
            }

            // Calculate distance to section center for fallback
            const distance = Math.abs(viewportCenter - elementCenter)
            if (distance < minDistance) {
              minDistance = distance
              activeSection = sectionId
            }
          }
        }

        if (activeSection) {
          setActiveItem(activeSection)
        }
      }, 100) // Debounce scroll events
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial check
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimeout) {
        clearTimeout(scrollTimeout)
      }
      if (scrollEndTimeoutRef.current) {
        clearTimeout(scrollEndTimeoutRef.current)
      }
    }
  }, [])

  const navItems = [
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Work', href: '#projects', id: 'projects' },
    { name: 'Recommendations', href: '#recommendations', id: 'recommendations' },
    { name: 'Tools', href: '#toolkit-talks', id: 'toolkit-talks' },
    { name: 'Open Source', href: '#opensource', id: 'opensource' },
    { name: 'Contact', href: '#contact', id: 'contact' },
    { name: 'Blog', href: portfolioData.personal.social.medium, id: 'blog', isExternal: true }
  ]

  const scrollToSection = (href, itemId) => {
    const element = document.querySelector(href)
    if (element) {
      // Mark that we're scrolling programmatically
      isScrollingProgrammaticallyRef.current = true
      
      // Set active item immediately on click - this gives instant feedback
      if (itemId) {
        setActiveItem(itemId)
      }
      
      // Calculate offset to account for fixed header/nav
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - offset

      // Use window.scrollTo for more control
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      
      // Re-enable scroll detection after smooth scroll completes
      // Smooth scroll typically takes ~500-800ms depending on distance
      const scrollDuration = Math.min(800, Math.abs(window.scrollY - offsetPosition) * 0.5)
      
      if (scrollEndTimeoutRef.current) {
        clearTimeout(scrollEndTimeoutRef.current)
      }
      
      scrollEndTimeoutRef.current = setTimeout(() => {
        isScrollingProgrammaticallyRef.current = false
        // Final sync - ensure correct section is active
        const scrollY = window.scrollY
        const windowHeight = window.innerHeight
        const viewportCenter = scrollY + windowHeight / 2
        const rect = element.getBoundingClientRect()
        const elementTop = scrollY + rect.top
        const elementBottom = elementTop + rect.height
        
        if (viewportCenter >= elementTop && viewportCenter <= elementBottom) {
          setActiveItem(itemId)
        }
      }, scrollDuration + 100)
    }
    
    if (isMobile) {
      setIsOpen(false)
    }
  }

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        style={{
          position: 'fixed',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1000,
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '50px',
          padding: '0.75rem 1.5rem',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          display: isMobile ? 'none' : 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          maxWidth: '90vw',
          overflowX: 'auto',
          overflowY: 'hidden',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
        className="bottom-nav"
      >
        <style>{`
          .bottom-nav::-webkit-scrollbar {
            display: none;
          }
          [data-theme="dark"] .bottom-nav {
            background: rgba(0, 0, 0, 0.3);
            border: 1px solid rgba(255, 255, 255, 0.1);
          }
        `}</style>
        {navItems.map((item) => (
          <motion.a
            key={item.name}
            href={item.href}
            onClick={(e) => {
              if (!item.isExternal) {
                e.preventDefault()
                scrollToSection(item.href, item.id)
              }
            }}
            target={item.isExternal ? "_blank" : undefined}
            rel={item.isExternal ? "noopener noreferrer" : undefined}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              color: activeItem === item.id ? '#ffffff' : 'var(--text-secondary)',
              textDecoration: 'none',
              fontWeight: activeItem === item.id ? 600 : 400,
              fontSize: '0.875rem',
              padding: '0.5rem 1rem',
              borderRadius: '25px',
              transition: 'all 0.3s ease',
              fontFamily: "'Inter', sans-serif",
              whiteSpace: 'nowrap',
              position: 'relative',
              border: activeItem === item.id ? '1px solid #6366f1' : '1px solid transparent'
            }}
          >
            {activeItem === item.id && (
              <motion.div
                layoutId="activeTab"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'var(--active-nav-bg, #6366f1)',
                  borderRadius: '25px',
                  zIndex: -1,
                  boxShadow: 'var(--active-nav-shadow, 0 2px 8px rgba(99, 102, 241, 0.3))'
                }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            )}
            <span style={{ position: 'relative', zIndex: 1 }}>
              {item.name}
            </span>
          </motion.a>
        ))}
        <div style={{
          width: '1px',
          height: '24px',
          background: 'var(--border-color)',
          margin: '0 0.5rem'
        }} />
        <ThemeToggle />
      </motion.nav>

      {/* Mobile Navigation - Floating Collapsible */}
      {isMobile && (
        <>
          {/* Toggle Button */}
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
            onClick={() => setIsOpen(!isOpen)}
            style={{
              position: 'fixed',
              bottom: '1.5rem',
              right: '1.5rem',
              zIndex: 1001,
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: 'var(--active-nav-bg, #6366f1)',
              backdropFilter: 'blur(20px)',
              border: '1px solid var(--border-color)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: 'var(--active-nav-shadow, 0 4px 20px rgba(99, 102, 241, 0.4))',
              color: '#ffffff',
              fontSize: '1.25rem'
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </motion.button>

          {/* Collapsible Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                style={{
                  position: 'fixed',
                  bottom: '5rem',
                  right: '1.5rem',
                  zIndex: 1000,
                  background: 'var(--bg-card)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '20px',
                  padding: '1rem',
                  boxShadow: 'var(--shadow-lg)',
                  minWidth: '200px',
                  maxWidth: '90vw'
                }}
                className="mobile-nav"
              >
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}>
                  {navItems.map((item) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        if (!item.isExternal) {
                          e.preventDefault()
                          scrollToSection(item.href, item.id)
                        }
                      }}
                      target={item.isExternal ? "_blank" : undefined}
                      rel={item.isExternal ? "noopener noreferrer" : undefined}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        color: activeItem === item.id ? '#ffffff' : 'var(--text-primary)',
                        textDecoration: 'none',
                        fontWeight: activeItem === item.id ? 600 : 400,
                        fontSize: '0.9rem',
                        padding: '0.75rem 1rem',
                        borderRadius: '12px',
                        transition: 'all 0.2s ease',
                        fontFamily: "'Inter', sans-serif",
                        background: activeItem === item.id ? 'var(--active-nav-bg, #6366f1)' : 'transparent',
                        border: activeItem === item.id ? '1px solid var(--active-nav-bg, #6366f1)' : '1px solid transparent',
                        boxShadow: activeItem === item.id ? 'var(--active-nav-shadow, 0 2px 8px rgba(99, 102, 241, 0.3))' : 'none'
                      }}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                  <div style={{
                    height: '1px',
                    background: 'var(--border-color)',
                    margin: '0.5rem 0'
                  }} />
                  <div style={{
                    padding: '0.75rem 1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                    <span style={{
                      fontSize: '0.85rem',
                      color: 'var(--text-secondary)',
                      fontFamily: "'Inter', sans-serif"
                    }}>
                      Theme
                    </span>
                    <ThemeToggle />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </>
  )
}

export default BottomNav
