import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from "/src/contexts/AuthContext.jsx"

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

// Render app immediately
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
)

// Defer non-critical tasks
if ('requestIdleCallback' in window) {
  requestIdleCallback(() => {
    // Preload fonts and other non-critical resources
    if (window.location.hostname !== 'localhost') {
      // Add analytics or other tracking only when idle
    }
  })
}
