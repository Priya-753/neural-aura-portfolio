import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initGA } from './utils/analytics'

// Initialize Google Analytics if measurement ID is provided
if (import.meta.env.VITE_GA_ID) {
  initGA(import.meta.env.VITE_GA_ID)
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)