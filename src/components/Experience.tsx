import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      title: "Research Intern",
      company: "IBM",
      location: "Yorktown Heights, NY",
      period: "May 2025 - Aug 2025",
      "description": "Worked at IBM Research on building intelligent systems to automate DataOps workflows using large language models, agents, and composable data services.",
      "highlights": [
        {
          "description": "Built an Agentic DataOps platform integrating tools like Question Generation, Text-to-SQL (IBM Granite NL2Insights), and view creation to streamline data product generation."
        },
        {
          "description": "Developed a plug-and-play framework for connecting diverse data sources (Postgres, Snowflake, BigQuery, Kafka) into an agent-controlled pipeline."
        },
        {
          "description": "Prototyped a human-in-the-loop and fully autonomous system configuration for metric-driven decision-making in enterprise data workflows."
        }
      ],
      link: "https://research.ibm.com/artificial-intelligence"
    },
    {
      title: "MS in Computer Science",
      company: "Georgia Institute of Technology",
      location: "Atlanta, GA",
      period: "Aug 2024 - Dec 2025",
      description: "Pursuing a master's degree with a focus on Artificial Intelligence, Computer Vision, and a specialization in Machine Learning to advance expertise in cutting-edge technologies and their applications.",
      highlights: [
        { description: "Working at PAIR Lab under Prof. Animesh Garg in Reinforcement Learning for Dexterous Manipulation" },
        { description: "TA for Aritificial Intelligence Fall 2024/2025" },
        { description: "TA for Knowledge Based AI Spring 2025" }
      ],
      link: "https://www.gatech.edu"
    },
    {
      title: "Software Development Engineer II",
      company: "Dealsplus Pvt Ltd",
      location: "UK",
      period: "Dec 2022 - July 2024",
      description: "Developed a visualization system for private equity ownership data, reducing visualization time by 70% and increasing accuracy by 40%, which led to a 30% rise in new client contracts and earned the highest annual bonus.",
      highlights: [
        { description: "Reduced data visualization time by 70%" },
        { description: "Increased accuracy by 40%" },
        { description: "Drove a 30% increase in new client contracts" },
        { description: "Awarded highest annual performance bonus" }
      ],
      link: "https://www.dealsplus.com"
    },
    {
      title: "Co-Founder & CTO",
      company: "Avinya Technologies",
      location: "Bengaluru, India",
      period: "Mar 2021 - Dec 2022",
      description: "Led development of a highly efficient POS and inventory management system in Phase 1, scaling to a SaaS product in Phase 2 that drove retail expansion, operational efficiency, and stakeholder transparency.",
      highlights: [
        { description: "Enabled 70% expansion in retail outlets with only 25% workforce increase" },
        { description: "Reduced overstocking and working capital needs by 35% with ML-driven demand forecasts" },
        { description: "Built an Android POS system reducing transaction time by 42%" },
        { description: "Automated bank reconciliation, cutting manual effort by 60%" },
      ],
      link: ""
    },
    {
      title: "Intern & Member of Technical Staff, Risk Tech Team",
      company: "D.E. Shaw & Co",
      location: "Hyderabad, India",
      period: "Dec 2018 - Mar 2021",
      description: "Built web applications and APIs to analyze macroeconomic impacts on investments, optimized performance, and led migration from Python 2 to 3 within the risk-tech domain.",
      highlights: [
        { description: "Improved decision-making efficiency by 35% with new analysis features" },
        { description: "Reduced portfolio comparison time by 20% via optimized workflows" },
        { description: "Enhanced REST API performance, cutting response times by 25%" },
        { description: "Unified risk management workflows, boosting operational efficiency by 20%" }
      ],
      link: "https://www.deshaw.com"
    },
    {
      title: "Bachelor of Engineering in CSE",
      company: "PSG College Of Technology",
      location: "Coimbatore, India",
      period: "June 2015 - May 2019",
      description: "Completed a Bachelor's degree in Computer Science and Engineering, gaining a solid foundation in core principles and honing technical skills.",
      highlights: [
        { description: "Featured as the top 1% in Mobile Application Development in NPTEL", "link": "https://archive.nptel.ac.in/noc/courses/noc17/SEM2/noc17-cs40/" }
      ],
      link: "https://www.psgtech.edu"
    }
  ];


  return (
    <section id="experience" className="section-padding bg-neural-bg/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-heading font-bold text-center mb-16">Experience</h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="neural-card hover:scale-105 transition-transform duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-heading font-semibold text-neural-heading mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-neural-teal mb-2">
                      <span className="font-medium text-lg">{exp.company}</span>
                      {exp.link && (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-neural-violet transition-colors"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-neural-text mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-neural-text mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-neural-heading">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-neural-text">
                        <span className="text-neural-teal mt-1">•</span>
                        <span>{highlight.description}</span>
                        {highlight.link && <a
                          href={highlight.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-neural-violet transition-colors"
                        >
                          <ExternalLink size={16} />
                        </a>}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience