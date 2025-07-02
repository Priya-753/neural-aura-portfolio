import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 95, color: "from-green-400 to-green-600" },
        { name: "C++", level: 85, color: "from-blue-400 to-blue-600" },
        { name: "JavaScript", level: 80, color: "from-yellow-400 to-orange-400" },
        { name: "SQL", level: 90, color: "from-indigo-400 to-indigo-600" },
        { name: "Java", level: 75, color: "from-red-400 to-red-600" },
        { name: "TypeScript", level: 70, color: "from-cyan-400 to-cyan-600" },
        { name: "Go", level: 65, color: "from-teal-400 to-teal-600" },
        { name: "Rust", level: 60, color: "from-purple-400 to-purple-600" },
        { name: "HTML/CSS", level: 80, color: "from-pink-400 to-pink-600" }
      ]
    },
    {
      title: "AI & Machine Learning Frameworks",
      skills: [
        { name: "TensorFlow", level: 88, color: "from-orange-400 to-yellow-500" },
        { name: "Keras", level: 85, color: "from-red-400 to-red-600" },
        { name: "PyTorch", level: 90, color: "from-purple-400 to-purple-600" },
        { name: "Hugging Face", level: 85, color: "from-pink-400 to-pink-600" },
        { name: "CrewAI", level: 80, color: "from-teal-400 to-teal-600" },
        { name: "MLflow", level: 75, color: "from-orange-300 to-orange-500" }
      ]
    },
    {
      title: "Computer Vision & RL",
      skills: [
        { name: "OpenCV", level: 92, color: "from-green-400 to-green-600" },
        { name: "YOLO", level: 88, color: "from-yellow-400 to-yellow-600" },
        { name: "Detectron2", level: 80, color: "from-indigo-400 to-indigo-600" },
        { name: "CUDA", level: 70, color: "from-green-500 to-teal-500" }
      ]
    },
    {
      title: "Web & Mobile Frameworks",
      skills: [
        { name: "React", level: 90, color: "from-blue-400 to-blue-600" },
        { name: "Next.js", level: 85, color: "from-gray-500 to-gray-700" },
        { name: "StreamLit", level: 80, color: "from-cyan-300 to-cyan-500" },
        { name: "Langchain", level: 75, color: "from-green-300 to-green-500" },
        { name: "Flutter", level: 60, color: "from-blue-300 to-blue-500" }
      ]
    },
    {
      title: "DevOps & Data Platforms",
      skills: [
        { name: "Docker", level: 85, color: "from-blue-400 to-blue-600" },
        { name: "Kubernetes", level: 80, color: "from-green-400 to-green-600" },
        { name: "AWS", level: 80, color: "from-orange-400 to-yellow-500" },
        { name: "Azure", level: 75, color: "from-blue-300 to-blue-500" },
        { name: "PostgreSQL", level: 75, color: "from-indigo-300 to-indigo-500" },
        { name: "Kafka", level: 70, color: "from-red-300 to-red-500" }
      ]
    },
    {
      title: "Tools & Utilities",
      skills: [
        { name: "Git", level: 90, color: "from-gray-600 to-gray-800" },
        { name: "Jupyter", level: 88, color: "from-orange-500 to-red-500" },
        { name: "Postman", level: 80, color: "from-red-300 to-red-500" },
        { name: "IsaacLab", level: 80, color: "from-indigo-400 to-indigo-600" },
        { name: "IsaacSim", level: 75, color: "from-blue-400 to-blue-600" },
        { name: "Docker", level: 80, color: "from-gray-400 to-gray-600" },
      ]
    }
  ];


  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-heading font-bold text-center mb-16">Skills & Expertise</h2>

          <div className="mb-4">
            {/* Interactive Skill Orbs */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-16"
            >
              <h3 className="text-2xl font-heading font-semibold text-center mb-8 text-neural-heading">
                Core Skills
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {['Deep Learning', 'Reinforcement Learning', 'Agentic AI', 'Dexterous Manipulation', 'Full Stack Development'].map((tech, index) => (
                  <motion.div
                    key={tech}
                    className="neural-card px-6 py-3 cursor-pointer"
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0 0 30px rgba(139, 92, 246, 0.4)",
                      y: -5
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <span className="text-neural-text font-medium">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <h3 className="text-2xl font-heading font-semibold text-center mb-8 text-neural-heading">
                Skills by Category
              </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                className="neural-card"
              >
                <h3 className="text-2xl font-heading font-semibold mb-6 text-neural-heading">
                  {category.title}
                </h3>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="relative">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-neural-text">{skill.name}</span>
                        <span className="text-sm text-neural-teal font-semibold">
                          {hoveredSkill === skill.name ? `${skill.level}%` : ''}
                        </span>
                      </div>

                      <div className="w-full bg-neural-bg rounded-full h-3 overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{
                            duration: 1,
                            delay: categoryIndex * 0.1 + skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                          onHoverStart={() => setHoveredSkill(skill.name)}
                          onHoverEnd={() => setHoveredSkill(null)}
                          whileHover={{
                            boxShadow: "0 0 20px rgba(79, 209, 197, 0.5)",
                            scale: 1.02
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills