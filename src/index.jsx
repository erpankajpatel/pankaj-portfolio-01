import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ErrorBoundary from './ErrorBoundary'
import './styles/themes.css'
import './styles/global.css'
import { SpeedInsights } from '@vercel/speed-insights/react'


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <ErrorBoundary>
    <App />
    <SpeedInsights />
    </ErrorBoundary>
  </React.StrictMode>
)
