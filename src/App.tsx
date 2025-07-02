import React from 'react'
import { motion } from 'framer-motion'
import NeuralBackground from './components/NeuralBackground'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Publications'
import Footer from './components/Footer'
import ChatBot from './components/ChatBot'
import Navigation from './components/Navigation'
import Resume from './components/Resume'

function App() {
  return (
    <div className="min-h-screen bg-neural-bg relative overflow-x-hidden">
      <NeuralBackground />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Resume />
      </main>
      <Footer />
      <ChatBot />
    </div>
  )
}

export default App