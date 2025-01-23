'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
//import { useRouter } from 'next/navigation';

export default function ProblemSolution() {
  //const router = useRouter();

  return (
    <section className="relative w-full min-h-screen bg-gray-900 text-white px-8 py-20 overflow-hidden">
      
      {/* Background Glows for AI Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-32 w-24 h-24 bg-yellow-400 opacity-20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-24 right-16 w-32 h-32 bg-blue-500 opacity-25 rounded-full blur-2xl animate-float"></div>
      </div>

      {/* Futuristic Introduction */}
{/* Futuristic Introduction */}
{/* Futuristic Introduction */}
<motion.div 
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
  className="text-center w-full max-w-[95%] md:max-w-[90%] lg:max-w-[85%] xl:max-w-[80%] mx-auto relative z-10"
>
  <h2 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 tracking-normal leading-none whitespace-nowrap">
    AI is Redefining the Drive-Thru Experience
  </h2>
  <p className="text-lg text-gray-300 mt-4 max-w-4xl mx-auto">
    The fast-food industry is evolving. <strong>Manual ordering systems are slow, inefficient, and costly.</strong>  
    <strong>Tej is the breakthrough that changes everything.</strong>
  </p>
</motion.div>

      {/* 🚀 Problem-Solution Journey */}
      <div className="mt-20 flex flex-col gap-20 max-w-5xl mx-auto">

        {/* 🚦 Problem 1: Drive-Thrus Are Getting Slower */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row items-center gap-10"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="md:w-1/2"
          >
            <Image src="/images/problem-long-lines.webp" alt="Long Wait Times" width={500} height={300} />
          </motion.div>
          <div className="md:w-1/2 text-left">
            <h3 className="text-3xl font-bold text-yellow-400">⏳ Slow Service Kills Sales</h3>
            <p className="text-gray-300 mt-3">
              The **average drive-thru wait time** has increased by **30%** in the last 5 years.  
              Customers **leave before ordering**, leading to lost revenue.
            </p>
            <motion.div className="mt-4 p-4 bg-yellow-600/20 rounded-lg border-l-4 border-yellow-400">
              <p className="text-yellow-300 font-semibold">🚀 **Tej speeds up ordering by 50%, reducing long lines instantly.**</p>
            </motion.div>
          </div>
        </motion.div>

        {/* 🛑 Problem 2: Order Errors Impact Revenue */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row items-center gap-10"
        >
          <div className="md:w-1/2 order-2 md:order-1 text-left">
            <h3 className="text-3xl font-bold text-red-400">❌ Order Mistakes = Customer Frustration</h3>
            <p className="text-gray-300 mt-3">
              **20% of drive-thru orders are incorrect** due to miscommunication and manual errors.  
              This leads to **refunds, complaints, and bad reviews.**
            </p>
            <motion.div className="mt-4 p-4 bg-red-600/20 rounded-lg border-l-4 border-red-400">
              <p className="text-red-300 font-semibold">✅ **Tej eliminates errors with 99% accurate AI speech recognition.**</p>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="md:w-1/2 order-1 md:order-2"
          >
            <Image src="/images/problem-miscommunication.webp" alt="Order Mistakes" width={500} height={300} />
          </motion.div>
        </motion.div>

        {/* 💰 Problem 3: Rising Labor Costs */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row items-center gap-10"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="md:w-1/2"
          >
            <Image src="/images/problem-labor-costs.webp" alt="High Labor Costs" width={500} height={300} />
          </motion.div>
          <div className="md:w-1/2 text-left">
            <h3 className="text-3xl font-bold text-green-400">💰 The Labor Crisis is Hurting Businesses</h3>
            <p className="text-gray-300 mt-3">
              **Hiring order-takers is expensive.** Staffing shortages make it worse.  
              **Tej automates ordering, cutting labor costs by 40%.**
            </p>
            <motion.div className="mt-4 p-4 bg-green-600/20 rounded-lg border-l-4 border-green-400">
              <p className="text-green-300 font-semibold">💸 **Tej replaces manual order-taking, reducing overhead costs significantly.**</p>
            </motion.div>
          </div>
        </motion.div>

      </div>

 {/* 🌟 Competitive Advantage */}
 <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mt-20 py-10 bg-gray-800 text-center rounded-lg"
      >
        <h2 className="text-4xl font-bold text-white mb-6">The AI-Powered Advantage</h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">
          **Tej is not just another ordering system – it's a revolution in fast-food automation.**
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "🚀 50% Faster Ordering", desc: "Tej accelerates order processing, eliminating long lines." },
            { title: "🎯 99% Accuracy Rate", desc: "AI-powered voice ordering reduces miscommunication errors." },
            { title: "💰 40% Cost Reduction", desc: "Automated ordering means fewer employees needed at the drive-thru." },
            { title: "🌟 Enhanced Customer Experience", desc: "Faster service and AI-driven recommendations make ordering effortless." },
            { title: "⚡ Fully Customizable", desc: "A white-labeled solution that keeps your branding while leveraging AI." },
          ].map((adv, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 1, delay: index * 0.2 }}
              className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-semibold text-yellow-400">{adv.title}</h3>
              <p className="mt-3 text-gray-300">{adv.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </section>
  );
}