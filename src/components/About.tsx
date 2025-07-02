import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <h2 className="text-4xl font-heading font-bold mb-8">About Me</h2>
            <div className="neural-card">
              <p className="text-lg text-neural-text leading-relaxed mb-6">
              When I was a kid, I had a star pupil named Bruno, my little pug who could fetch anything I asked for, as long as “anything” meant the neighbor's mismatched socks. 
              Today, I'm a Georgia Tech MSCS grad and IBM Research intern, and I've moved on from Bruno to CrewAI agents, my high-tech fetch squad charged with bringing back the precise data nuggets I need for building an agentic DataOps platform. 
              Of course, just like Bruno, they occasionally come back with the wrong thing, which keeps every day delightfully unpredictable.
              My days blend SQL queries, Python scripts, and orchestrating intelligent agents to transform messy datasets 
              into actionable insights so teams can move faster and smarter. 
              </p>
              <p className="text-lg text-neural-text leading-relaxed mb-6">
              Concurrently at PAIR Lab, I'm advancing dexterous manipulation via reinforcement learning to enable robots to grasp and re-orient objects more naturally. 
              I've also built a computer-vision game to aid stroke-patient rehabilitation and fine-tuned DistilBERT with LoRA for sentiment analysis of new words.
              Before joining IBM, I co-founded Avinya Technologies, where I scaled retail integration by 70% with ML-driven demand forecasts and built a 
              custom Android POS, then honed my backend and data-modeling skills at Dealsplus and D.E. Shaw, architecting high-performance pipelines and risk-analysis tools. 
              </p>
              <p className="text-lg text-neural-text leading-relaxed">
                When I'm not elbow-deep in code, you'll find me exploring the latest research 
                papers or trying out the various new tools that pop up everyday.
                Driven by curiosity, I believe the best technology feels like magic.
              </p>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="neural-card p-8 text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-neural-teal to-neural-violet p-1">
                <div className="w-full h-full rounded-full bg-neural-bg flex items-center justify-center">
                  <img
                    src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Priya - Research Engineer"
                    className="w-44 h-44 rounded-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-2">Priyadarshini Tamilselvan</h3>
              <p className="text-neural-teal font-medium">AI/ML Research Engineer</p>
              <div className="mt-6 flex justify-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-neural-violet">5+</div>
                  <div className="text-sm text-neural-text">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-neural-teal">20+</div>
                  <div className="text-sm text-neural-text">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-neural-teal">25+</div>
                  <div className="text-sm text-neural-text">Artciles</div>
                </div>
                {/* <div className="text-center">
                  <div className="text-2xl font-bold text-neural-violet">1</div>
                  <div className="text-sm text-neural-text">Publications</div>
                </div> */}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About