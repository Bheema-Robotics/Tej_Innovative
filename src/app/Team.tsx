'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const teamMembers = [
  {
    name: "Bobba",
    role: "Founder & AI Architect",
    description: "Visionary behind Tej, leading AI-driven automation and innovation.",
    image: "/images/team-bobba.webp",
    animal: "Visionary & Strategic Leader",
    highlight: true, // ✅ Keeping the founder highlighted
  },
  {
    name: "Madhuri",
    role: "Backend & Cloud Engineer",
    description: "Scales AI services with cutting-edge backend and cloud integrations.",
    image: "/images/team-madhuri.webp",
    animal: "Intelligent & Resourceful",
  },
  {
    name: "Sudheer",
    role: "Frontend & UX Designer",
    description: "Ensuring seamless, interactive, and responsive user interfaces.",
    image: "/images/team-sudheer.webp",
    animal: "Creative & Adaptable",
  },
  {
    name: "Srinivas",
    role: "Machine Learning Engineer",
    description: "Develops and optimizes real-time AI voice recognition models.",
    image: "/images/team-srinivas.webp",
    animal: "Strong & Data-Driven",
  },
];

export default function Team() {
  return (
    <section className="relative w-full min-h-screen bg-gray-900 text-white px-8 py-24 overflow-hidden">
      
      {/* Glowing Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-16 w-24 h-24 bg-yellow-500 opacity-25 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-16 right-16 w-28 h-28 bg-blue-500 opacity-25 rounded-full blur-2xl animate-float"></div>
      </div>

      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-4xl mx-auto relative z-10"
      >
        <h2 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
          Meet the Innovators Behind Tej
        </h2>
        <p className="text-lg text-gray-300 mt-4">
          A world-class team of AI innovators, engineers, and strategists shaping the future of voice-first automation.
        </p>
      </motion.div>

      {/* Team Section with Highlighted Founder */}
      <div className="mt-20 max-w-6xl mx-auto">
        
        {/* Highlighted Team Leader */}
        {teamMembers.filter(member => member.highlight).map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.2 }}
            className="relative flex flex-col items-center md:flex-row md:items-center bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg p-10 shadow-xl"
          >
            <Image 
              src={member.image} 
              alt={member.name} 
              width={140} 
              height={140} 
              className="rounded-full border-4 border-gray-900"
            />
            <div className="md:ml-8 text-center md:text-left">
              <h3 className="text-3xl font-bold text-gray-900">{member.name}</h3>
              <p className="text-lg font-semibold text-gray-800">{member.role}</p>
              <p className="text-sm text-gray-900 bg-gray-100 px-3 py-1 rounded-md inline-block mt-2">{member.animal}</p>
              <p className="text-gray-100 mt-2">{member.description}</p>
            </div>
          </motion.div>
        ))}

        {/* Remaining Team Members in Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.filter(member => !member.highlight).map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="relative bg-gray-800 p-6 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-transform transform hover:scale-105 group"
            >
              <Image 
                src={member.image} 
                alt={member.name} 
                width={100} 
                height={100} 
                className="rounded-full mx-auto border-4 border-gray-700 transition-transform transform group-hover:scale-110"
              />
              <h3 className="text-2xl font-bold text-yellow-400 mt-4 text-center">
                {member.name}
              </h3>
              <p className="text-gray-400 text-lg text-center">{member.role}</p>
              <p className="text-sm text-gray-300 text-center bg-gray-700 px-3 py-1 rounded-md inline-block mt-2">{member.animal}</p>
              <p className="text-gray-300 mt-2 text-center text-sm">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}