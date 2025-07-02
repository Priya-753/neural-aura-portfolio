import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, BookOpen, Twitter, BookOpenText,  } from 'lucide-react'

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/Priya-753',
      color: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/priya-tamilselvan/',
      color: 'hover:text-blue-400'
    },
    // {
    //   name: 'Google Scholar',
    //   icon: BookOpen,
    //   url: 'https://scholar.google.com/citations?user=priya-sharma',
    //   color: 'hover:text-green-400'
    // },
    {
      name: 'Medium',
      icon: BookOpenText,
      url: 'https://medium.com/@priya61197',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:priya.gatech@gmail.com',
      color: 'hover:text-red-400'
    }
  ]

  return (
    <footer className="section-padding bg-neural-bg border-t border-neural-teal/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h3 className="text-2xl font-heading font-bold mb-4 bg-gradient-to-r from-neural-teal to-neural-violet bg-clip-text text-transparent">
              Let's Connect
            </h3>
            <p className="text-neural-text max-w-2xl mx-auto">
              Interested in collaborating on AI/ML research, discussing projects, 
              or exploring opportunities? I'd love to hear from you.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center space-x-6 mb-8"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-neural-text ${link.color} transition-colors duration-300`}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <link.icon size={24} />
                <span className="sr-only">{link.name}</span>
              </motion.a>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="border-t border-neural-teal/20 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-neural-text text-sm">
                © 2024 Priyadarshini Tamilselvan. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 text-sm text-neural-text">
                <span>Built with</span>
                <div className="flex items-center space-x-2">
                  <span className="text-neural-teal font-medium">React</span>
                  <span>•</span>
                  <span className="text-neural-violet font-medium">Three.js</span>
                  <span>•</span>
                  <span className="text-neural-teal font-medium">Tailwind CSS</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer