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
      title: "Research Engineer",
      company: "IBM Research",
      location: "Yorktown Heights, NY",
      period: "May 2025 - Aug 2025",
      "description": "Worked at IBM Research on building intelligent systems to automate DataOps workflows using large language models, agents, and composable data services.",
      "highlights": [
        {
          "description": "Built a production-ready agentic DataOps platform with CrewAI, MCP tools, and ReAct planning that automates data-product creation from natural language input using question generation, Text-to-SQL (IBM Granite NL2Insights), and dynamic views.",
          "link": "https://drive.google.com/file/d/12SYl0EyWHVnOtN6dzxVn5U3HqxbKJKiI/view"
        },
        {
          "description": "Developed a metric-driven orchestration agent that reasons over data quality metrics and autonomously selects tools to improve schema coverage, query efficiency, and product usability."
        },
        {
          "description": "Engineered a human- and agent-operable dashboard to manage multi-agent conversations and workflows, leveraging asyncio and task queues for concurrent and distributed orchestration."
        },
        {
          "description": "Built a plug-and-play integration layer supporting PostgreSQL, SQLite, and BigQuery, fully containerized with Docker for seamless deployment."
        }
      ],
      link: "https://research.ibm.com/artificial-intelligence"
    },
    {
      title: "MS in Computer Science",
      company: "Georgia Institute of Technology",
      location: "Atlanta, GA",
      period: "Aug 2024 - Dec 2025",
      description: "Pursuing a master's degree with a focus on Artificial Intelligence and a specialization in Machine Learning to advance expertise in cutting-edge technologies and their applications.",
      highlights: [
        { description: "Working at Database Lab under Prof. Joy Arulraj in Question Answering for Textbooks using RAG" },
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
        { description: "Developed graph model to represent complex private equity ownership data, increasing rendering speed from 1.8s to 0.5s (-72%) at 10k+ nodes/edges, driving a 40% client acquisition boost, adding $1M in revenue." },
        { description: "Led implementation of automated ownership data extraction using Azure Document Intelligence, 24 pages/min with precision/recall 92%/89%, reducing manual review time by 40%." },
        { description: "Optimized database queries, increasing data retrieval efficiency by 38%, enabling faster, more accurate cap table outputs for improved decision-making." },
        { description: "Designed the org's testing framework (unit + E2E), automating critical workflows (deploy time 20 to 8 mins) to minimize regressions (< 3% rollback) and accelerate development cycles." },
      ],
      link: "https://www.dealsplus.com"
    },
    {
      title: "Co-Founder & Senior Technical Member",
      company: "Avinya Technologies",
      location: "Bengaluru, India",
      period: "Mar 2021 - Dec 2022",
      description: "Led development of a highly efficient POS and inventory management system in Phase 1, scaling to a SaaS product in Phase 2 that drove retail expansion, operational efficiency, and stakeholder transparency.",
      highlights: [
        { description: "Directed software solutions development, enabling a 70% expansion in retail outlets over two years with only a 25% workforce increase." },
        { description: "Created ML algorithms to predict retail demand, reducing overstocking and working capital needs by 35%." },
        { description: "Built the POS system and Spring Boot back end, deployed across ~50 stores reducing checkout time 42% with an offline-first, reliable sync model." },
        { description: "Designed scalable accounting solutions automating payment reconciliation, handled WhatsApp/email notifications out of the box cutting manual back-office time by ~60%." },
      ],
      link: ""
    },
    {
      title: "Member of Technical Staff, Risk Tech Team",
      company: "D.E. Shaw & Co",
      location: "Hyderabad, India",
      period: "Dec 2018 - Mar 2021",
      description: "Built web applications and APIs to analyze macroeconomic impacts on investments, optimized performance, and led migration from Python 2 to 3 within the risk-tech domain.",
      highlights: [
        { description: "Collaborated on design and maintenance of ETL pipelines and core risk services powering daily and month-end positions across multi-strategy portfolios; partnered directly with quants and risk teams to deliver under tight deadlines." },
        { description: "Engineered for peak traffic and optimized critical paths and caching with cache engineering team boosted cache hit rate by 88% and reduced backend calls by 41% for time-series financial analysis." },
        { description: "Transformed ad-hoc analyses into reliable, repeatable data pipelines, shipping comparative workflows for 600k+ monthly/FX positions covering 1,200+ instruments per close; built rule-based monitoring to detect anomalies and minimize manual triage." },
        { description: "Consolidated multiple tools into a unified risk portal, modernized codebase from Python 2 to 3, raised test coverage by 16%, improved p95 page-load speed by ~1 minute, and authored run-books for seamless on-call handoffs." }
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