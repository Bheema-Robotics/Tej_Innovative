'use client';

import { motion } from 'framer-motion';

export default function FeaturesGrid() {
  return (
    <section className="relative w-full min-h-screen bg-gray-900 text-white px-8 py-20 overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-20 w-20 h-20 bg-yellow-400 opacity-30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-24 w-28 h-28 bg-blue-500 opacity-25 rounded-full blur-2xl animate-float"></div>
      </div>

      {/* Section Title */}
      <motion.div 
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="text-center w-full max-w-[90%] md:max-w-[85%] lg:max-w-[75%] mx-auto relative z-10"
>
  <h2 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 tracking-wide leading-tight whitespace-nowrap">
    AI-Driven Features, Built for the Future
  </h2>
  <p className="text-lg text-gray-300 mt-4 max-w-4xl mx-auto">
    Tej’s cutting-edge AI transforms the drive-thru experience, boosting efficiency, speed, and accuracy.  
    <strong>From real-time automation to deep analytics, see what makes Tej the best.</strong>
  </p>
</motion.div>

      {/* Feature Grid */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        
        {[
          {
            title: "🎙️ Voice-First AI Ordering",
            description: "Customers order naturally with AI-driven speech recognition, removing the need for manual input.",
            color: "yellow",
          },
          {
            title: "🤖 Smart AI Recommendations",
            description: "Tej’s AI suggests personalized add-ons and promotions, boosting revenue and engagement.",
            color: "blue",
          },
          {
            title: "📊 Real-Time Analytics & Insights",
            description: "Monitor sales, trends, and AI efficiency with powerful analytics dashboards.",
            color: "red",
          },
          {
            title: "💰 Automated Workforce Optimization",
            description: "Reduce labor costs by 40% with AI handling orders, queue management, and upselling.",
            color: "green",
          },
          {
            title: "⚡ Ultra-Fast Order Processing",
            description: "Tej slashes wait times, processing orders **50% faster** than traditional methods.",
            color: "purple",
          },
          {
            title: "🌍 Multi-Platform AI Integration",
            description: "Works seamlessly across kiosks, mobile apps, and smart devices.",
            color: "teal",
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.2 }}
            className="relative p-6 bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-transform transform hover:scale-105"
          >
            <div className={`absolute inset-0 bg-${feature.color}-500 opacity-10 blur-2xl`}></div>
            <h3 className={`text-2xl font-bold text-${feature.color}-400 mb-4 relative z-10`}>
              {feature.title}
            </h3>
            <p className="text-gray-300 relative z-10">{feature.description}</p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}