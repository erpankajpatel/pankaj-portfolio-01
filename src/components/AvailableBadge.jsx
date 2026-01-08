import React from 'react'
import { motion } from 'framer-motion'

const AvailableBadge = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.375rem',
        padding: '0.375rem 0.75rem',
        borderRadius: '16px',
        background: 'rgba(16, 185, 129, 0.15)',
        border: '1px solid rgba(16, 185, 129, 0.4)',
        color: '#059669',
        fontSize: '0.75rem',
        fontWeight: 500,
        fontFamily: "'Inter', sans-serif",
        overflow: 'hidden'
      }}
    >
      {/* Pulsing dot indicator */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [1, 0.6, 1]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          background: '#059669',
          flexShrink: 0,
          position: 'relative',
          zIndex: 1
        }}
      />
      {/* Ripple effect */}
      <motion.div
        animate={{
          scale: [1, 2.5, 1],
          opacity: [0.4, 0, 0.4]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeOut'
        }}
        style={{
          position: 'absolute',
          left: '0.625rem',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          background: '#059669',
          zIndex: 0
        }}
      />
      <span style={{ position: 'relative', zIndex: 1 }}>
        Available for work
      </span>
    </motion.div>
  )
}

export default AvailableBadge

