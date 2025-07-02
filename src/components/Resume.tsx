import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Download, FileText, Eye, Calendar, MapPin } from 'lucide-react'

const Resume: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = 'public/resume/resume.pdf'
    link.download = 'Priyadarshini_Tamilselvan_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handlePreview = () => {
    window.open('public/resume/resume.pdf', '_blank')
  }

  const resumeHighlights = [
    {
      category: "Experience",
      items: [
        "5+ years in SWE & ML/AI",
        "Research @ IBM",
        "Ex D.E. Shaw"
      ]
    },
    {
      category: "Education",
      items: [
        "M.S. Computer Science - Georgia Tech",
        "Specialized in AI"
      ]
    }
  ]

  return (
    <section id="resume" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-heading font-bold text-center mb-16">Resume</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Resume Preview Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="neural-card text-center"
            >
              <div className="mb-6">
                <div className="w-32 h-40 mx-auto bg-gradient-to-br from-neural-teal/20 to-neural-violet/20 rounded-lg border-2 border-neural-teal/30 flex items-center justify-center mb-4 relative overflow-hidden">
                  <FileText size={48} className="text-neural-teal" />
                  <div className="absolute inset-0 bg-gradient-to-t from-neural-bg/50 to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <div className="h-1 bg-neural-teal/50 rounded mb-1" />
                    <div className="h-1 bg-neural-violet/50 rounded mb-1" />
                    <div className="h-1 bg-neural-teal/30 rounded" />
                  </div>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">
                  Priya Tamilselvan - Resume
                </h3>
                <p className="text-neural-text text-sm mb-4">
                  ML/AI Research Engineer
                </p>
                <div className="flex items-center justify-center space-x-4 text-sm text-neural-text mb-6">
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>Updated June 2025</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FileText size={14} />
                    <span>PDF Format</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <motion.button
                  onClick={handleDownload}
                  className="neural-button w-full flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download size={20} />
                  <span>Download Resume</span>
                </motion.button>
                
                <motion.button
                  onClick={handlePreview}
                  className="w-full bg-neural-card border border-neural-teal/20 text-neural-text py-3 px-6 rounded-full hover:bg-neural-teal/10 transition-all duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Eye size={20} />
                  <span>Preview Resume</span>
                </motion.button>
              </div>
            </motion.div>
            
            {/* Resume Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-heading font-semibold mb-4">Resume Highlights</h3>
                <p className="text-neural-text leading-relaxed">
                  My comprehensive resume showcases my journey in software engineering and ML/AI, 
                  from academic research to industry accomplishments. Download to see detailed 
                  project descriptions, technical skills, and professional achievements.
                </p>
              </div>
              
              {resumeHighlights.map((section, index) => (
                <motion.div
                  key={section.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="neural-card"
                >
                  <h4 className="text-lg font-heading font-semibold mb-3 text-neural-heading">
                    {section.category}
                  </h4>
                  <ul className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-2 text-neural-text">
                        <span className="text-neural-teal mt-1 text-sm">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
                className="bg-gradient-to-r from-neural-teal/10 to-neural-violet/10 border border-neural-teal/20 rounded-xl p-6"
              >
                <div className="flex items-center space-x-2 mb-3">
                  <MapPin size={20} className="text-neural-teal" />
                  <span className="font-semibold text-neural-heading">Available for</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-neural-text">
                    <span className="text-neural-teal">•</span> Full-time roles
                  </div>
                  <div className="text-neural-text">
                    <span className="text-neural-violet">•</span> Consulting projects
                  </div>
                  <div className="text-neural-text">
                    <span className="text-neural-teal">•</span> Research collaborations
                  </div>
                  <div className="text-neural-text">
                    <span className="text-neural-violet">•</span> Speaking engagements
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Resume