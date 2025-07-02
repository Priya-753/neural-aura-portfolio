import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Calendar, Users, Award } from 'lucide-react'

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedPublication, setSelectedPublication] = useState<any>(null)

  const projects = [
    {
      title: "LLMs for Neologisms",
      authors: ["Priyadarshini Tamilselvan"],
      venue: "Python, Hugging Face",
      year: "2024",
      abstract: "This project explores fine-tuning five different language models for neologism sentiment analysis. The trained models are integrated into an ensemble.",
      image: 'images/sentimentanalysis.png',
      link: "https://github.com/infinite-void/llm-ensemble-for-neologism",
      citations: 0,
      type: "Project"
    },
    {
      title: "Text To SQL using Multi-Agent Systems",
      authors: ["Priyadarshini Tamilselvan"],
      venue: "StreamLit, Langchain, CrewAI",
      year: "2024",
      abstract: "Demonstrates a Natural Language → SQL system, allowing users to input NL queries and receive SQL commands to retrieve data from a database.",
      image: 'images/texttosql.png',
      link: "https://github.com/Priya-753/TextToSQL/tree/master",
      citations: 0,
      type: "Project"
    },
    {
      title: "GPT-2 from Scratch",
      authors: ["Priyadarshini Tamilselvan"],
      venue: "Python, PyTorch",
      year: "2023",
      abstract: "Implemented GPT-2 from scratch in Python & PyTorch—multi-head attention, positional encodings, feed-forward layers—and validated with OpenAI’s pre-trained weights for comparable text-generation results.",
      image: 'images/gpt2.png',
      link: "https://github.com/Priya-753/GPT2",
      citations: 0,
      type: "Project"
    },
    {
      title: "HealthCare AI Toolkit",
      authors: ["Priyadarshini Tamilselvan"],
      venue: "Python, React",
      year: "2023",
      abstract: "An AI toolkit assisting dental back-office operations: appointment scheduling, SOAP note generation, diagnosis assistance, and insurance claims processing.",
      image: 'images/healthcarecopilot.png',
      link: "https://github.com/Priya-753/Healthcare-Toolkit-AI",
      citations: 0,
      type: "Project"
    },
    {
      title: "2048 (React)",
      authors: ["Priyadarshini Tamilselvan"],
      venue: "React",
      year: "2023",
      abstract: "A classic sliding-tile puzzle game where players combine matching tiles to reach 2048, built in React.",
      image: 'images/react2048.png',
      link: "https://priya-753.github.io/2048-in-react/",
      citations: 0,
      type: "Project"
    },
    {
      title: "Document Scanner",
      authors: ["Priyadarshini Tamilselvan"],
      venue: "Python, OpenCV",
      year: "2023",
      abstract: "A Python-based document scanner that detects and extracts documents from images using OpenCV, saving results to a specified directory.",
      image: 'images/documentScanner.png',
      link: "https://github.com/Priya-753/Document-Scanner",
      citations: 0,
      type: "Project"
    },
    {
      title: "Sudoku Solver",
      authors: ["Priyadarshini Tamilselvan"],
      venue: "Python, OpenCV, TensorFlow",
      year: "2023",
      abstract: "A Python-based solver that processes Sudoku puzzle images and solves them using OpenCV and PySudoku.",
      image: 'images/sudokuSolver.png',
      link: "https://github.com/Priya-753/Sudoku-Solver",
      citations: 0,
      type: "Project"
    },
    {
      title: "Object Detection (YOLO)",
      authors: ["Priyadarshini Tamilselvan"],
      venue: "Python, OpenCV, YOLO",
      year: "2023",
      abstract: "A Python script that processes images to detect objects using the YOLOv3 model with OpenCV, saving detection results.",
      image: 'images/yoloObjectDetection.png',
      link: "https://github.com/Priya-753/YOLO-Object-Detection",
      citations: 0,
      type: "Project"
    }
  ];
  
  const blogs = [
    {
      title: "Optimising SQLs",
      venue: "Medium",
      date: "July 30, 2023",
      type: "Blog Post",
      link: "https://medium.com/@priya61197/supercharge-your-sql-skills-a-developers-journey-to-optimal-performance-c9d5b223c9a7"
    },
    {
      title: "AI Agents",
      venue: "Medium",
      date: "February 2025",
      type: "Blog Post",
      link: "https://medium.com/@priya61197/ai-agents-56c94b3cbdbe"
    },
    {
      title: "Reinforcement Learning",
      venue: "Medium",
      date: "April 2025",
      type: "Blog Post",
      link: "https://medium.com/@priya61197/reinforcement-learning-8b48b7d84ba3"
    }
  ];
  

  return (
    <section id="publications" className="section-padding bg-neural-bg/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-heading font-bold text-center mb-16">Projects & Blogs</h2>
          
          {/* Publications */}
          <div className="mb-16">
            <h3 className="text-2xl font-heading font-semibold mb-8 text-neural-heading">Recent Projects</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((pub, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="neural-card cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => setSelectedPublication(pub)}
                >
                  <div className="relative mb-4 overflow-hidden rounded-lg">
                    <img 
                      src={pub.image} 
                      alt={pub.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-neural-teal text-neural-bg px-2 py-1 rounded text-sm font-medium">
                      {pub.type}
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-heading font-semibold mb-2 text-neural-heading line-clamp-2">
                    {pub.title}
                  </h4>
                  
                  <p className="text-sm text-neural-teal mb-2">
                    {pub.authors.join(', ')}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-neural-text mb-3">
                    <span className="font-medium">{pub.venue}</span>
                    <span>{pub.year}</span>
                  </div>
                  
                  <p className="text-neural-text text-sm line-clamp-3 mb-4">
                    {pub.abstract}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <a 
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neural-teal hover:text-neural-violet transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Talks */}
          <div>
            <h3 className="text-2xl font-heading font-semibold mb-8 text-neural-heading">Recent Blogs</h3>
            <div className="space-y-4">
              {blogs.map((talk, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="neural-card"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <h4 className="text-lg font-heading font-semibold text-neural-heading mb-2">
                        {talk.title}
                      </h4>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-neural-text">
                        <span className="font-medium text-neural-teal">{talk.venue}</span>
                        <div className="flex items-center space-x-1">
                          <Calendar size={14} />
                          <span>{talk.date}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="inline-block bg-neural-violet/20 text-neural-violet px-3 py-1 rounded-full text-sm font-medium">
                        {talk.type}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Publication Modal */}
      <AnimatePresence>
        {selectedPublication && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPublication(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="neural-card max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedPublication.image} 
                alt={selectedPublication.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              
              <h3 className="text-2xl font-heading font-bold mb-4 text-neural-heading">
                {selectedPublication.title}
              </h3>
              
              <div className="flex items-center space-x-2 mb-4 text-neural-teal">
                <Users size={16} />
                <span>{selectedPublication.authors.join(', ')}</span>
              </div>
              
              <div className="flex items-center justify-between mb-6 text-neural-text">
                <span className="font-medium">{selectedPublication.venue} {selectedPublication.year}</span>
                <div className="flex items-center space-x-1">
                  <Award size={16} />
                  <span>{selectedPublication.citations} citations</span>
                </div>
              </div>
              
              <p className="text-neural-text leading-relaxed mb-6">
                {selectedPublication.abstract}
              </p>
              
              <div className="flex justify-between items-center">
                <button
                  onClick={() => setSelectedPublication(null)}
                  className="px-4 py-2 bg-neural-card border border-neural-teal/20 rounded-lg text-neural-text hover:bg-neural-teal/10 transition-colors"
                >
                  Close
                </button>
                <a
                  href={selectedPublication.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neural-button flex items-center space-x-2"
                >
                  <span>Read Paper</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects