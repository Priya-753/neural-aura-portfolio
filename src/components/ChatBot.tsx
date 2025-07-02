import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, User, Bot } from 'lucide-react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "👋 Hi, I'm Priya's AI assistant! How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const quickReplies = [
    "Tell me about your work",
    "Show me a demo",
    "Contact information"
  ]

  const botResponses: { [key: string]: string } = {
    "tell me about your work": "I am now training CrewAI agents to pull the precise SQL, Python, and AI-driven insights for an agentic DataOps platform, while also researching dexterous robot manipulation at PAIR Lab. I have enjoyed creating vision games for stroke rehab, fine-tuning DistilBERT with LoRA, and previously scaling ML-driven retail and risk-analysis systems at startups and D.E. Shaw.",
    "show me a demo": "You can find interactive demos of my work on my GitHub profile. I've built real-time object detection systems, sudoku solver, 2048 and document analyser. Check out the Experience section above for links to my projects!",
    "contact information": "You can reach me at priya.gatech@gmail.com or connect with me on LinkedIn. I'm always open to discussing research collaborations, speaking opportunities, or interesting AI projects!",
    // "recent publications": "My recent publications include work on attention-guided object detection (CVPR 2023), neural architecture search for medical imaging (MICCAI 2023), and federated learning for computer vision (Nature MI 2022). You can find all my papers in the Publications section above!",
    "default": "That's a great question! For detailed information about my work, research, or to discuss potential collaborations, please feel free to reach out to me directly at priya.gatech@gmail.com. I'd be happy to chat more!"
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputText('')
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(() => {
      const responseKey = text.toLowerCase().trim()
      const response = botResponses[responseKey] || botResponses.default

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'bot',
        timestamp: new Date()
      }

      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1000 + Math.random() * 1000)
  }

  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply)
  }

  return (
    <>
      {/* Chat Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 neural-button w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        animate={isOpen ? { scale: 0 } : { scale: 1 }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <MessageCircle size={24} />
        </motion.div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-6 right-6 z-50 w-80 h-96 neural-card flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-neural-teal/20">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-neural-teal to-neural-violet flex items-center justify-center">
                  <Bot size={16} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-neural-heading">AI Assistant</h3>
                  <p className="text-xs text-neural-text">Ask me about Priya's work</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-neural-text hover:text-neural-teal transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-[80%] ${
                    message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                  }`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      message.sender === 'user' 
                        ? 'bg-neural-violet' 
                        : 'bg-gradient-to-r from-neural-teal to-neural-violet'
                    }`}>
                      {message.sender === 'user' ? <User size={12} /> : <Bot size={12} />}
                    </div>
                    <div className={`p-3 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-neural-violet text-white'
                        : 'bg-neural-bg border border-neural-teal/20 text-neural-text'
                    }`}>
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="flex items-start space-x-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-neural-teal to-neural-violet flex items-center justify-center">
                      <Bot size={12} />
                    </div>
                    <div className="bg-neural-bg border border-neural-teal/20 p-3 rounded-lg">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-neural-teal rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-neural-teal rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                        <div className="w-2 h-2 bg-neural-teal rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length === 1 && (
              <div className="p-4 border-t border-neural-teal/20">
                <div className="grid grid-cols-2 gap-2">
                  {quickReplies.map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickReply(reply)}
                      className="text-xs p-2 bg-neural-bg border border-neural-teal/20 rounded-lg text-neural-text hover:bg-neural-teal/10 transition-colors"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-neural-teal/20">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputText)}
                  placeholder="Type your message..."
                  className="flex-1 bg-neural-bg border border-neural-teal/20 rounded-lg px-3 py-2 text-sm text-neural-text placeholder-neural-text/50 focus:outline-none focus:border-neural-teal"
                />
                <button
                  onClick={() => handleSendMessage(inputText)}
                  disabled={!inputText.trim()}
                  className="bg-gradient-to-r from-neural-teal to-neural-violet text-white p-2 rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ChatBot