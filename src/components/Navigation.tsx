import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import GoogleScholarIcon from './GoogleScholarIcon'

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#publications' },
    { name: 'Resume', href: '#resume' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-neural-bg/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-heading font-bold bg-gradient-to-r from-neural-teal to-neural-violet bg-clip-text text-transparent"
          >
            Priya
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.1 }}
                className="text-neural-text hover:text-neural-teal transition-colors duration-200 font-medium"
              >
                {item.name}
              </motion.a>
            ))}
            {/* Google Scholar Link */}
            <motion.a
              href="https://scholar.google.com/citations?user=fRREPooAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="text-neural-text hover:text-green-400 transition-colors duration-300"
              title="Google Scholar"
            >
              <GoogleScholarIcon size={20} />
              <span className="sr-only">Google Scholar</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-neural-text hover:text-neural-teal transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-neural-card/90 backdrop-blur-md rounded-lg mt-2 p-4"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-neural-text hover:text-neural-teal transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            {/* Google Scholar Link in Mobile Menu */}
            <a
              href="https://scholar.google.com/citations?user=fRREPooAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center py-2 text-neural-text hover:text-green-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <GoogleScholarIcon size={20} className="mr-2" />
              Google Scholar
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navigation