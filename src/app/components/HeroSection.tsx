'use client';

//import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
const Player = dynamic(() => import('@lottiefiles/react-lottie-player').then((mod) => mod.Player), {
  ssr: false,
});
import Typewriter from 'typewriter-effect';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  //const router = useRouter();
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollIndicator(window.scrollY <= 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('next-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-200 text-gray-900 px-8 overflow-hidden">
      
      {/* Floating AI-Inspired Particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-10 left-16 w-12 h-12 bg-yellow-400 opacity-30 rounded-full blur-3xl animate-fadeIn"></div>
        <div className="absolute bottom-28 right-20 w-20 h-20 bg-blue-400 opacity-40 rounded-full blur-2xl animate-float"></div>
      </div>

      {/* Lottie Animation */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10"
      >
        <Player
          autoplay
          loop
          src="https://assets4.lottiefiles.com/packages/lf20_jcikwtux.json"
          style={{ height: '300px', width: '300px' }}
          className="mx-auto"
        />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 mt-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-5xl font-bold tracking-wide leading-tight whitespace-nowrap"
        >
          <span className="text-yellow-500 glow-effect">Tej</span> – The Future of Ordering
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto"
        >
          AI-driven, voice-first ordering solutions for{' '}
          <span className="text-yellow-500 font-semibold">Drive-throughs</span>,{' '}
          <span className="text-blue-500 font-semibold">Kiosks</span>, and{' '}
          <span className="text-green-500 font-semibold whitespace-nowrap">Restaurants</span>.
        </motion.p>

        {/* Dynamic Typewriter Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-6 text-3xl font-semibold text-gray-800"
        >
          <Typewriter
            options={{
              strings: [
                "AI-Powered Drive-Throughs 🚗",
                "Smarter Self-Ordering Kiosks 📱",
                "Frictionless Mobile Ordering 📲",
                "Seamless Restaurant Automation ⚡",
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 30,
            }}
          />
        </motion.div>

        {/* Call-To-Action Button with Hover Depth Effect */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
          className="mt-10"
        >
          {/*<button
            onClick={() => router.push('/pages')}
            className="relative px-12 py-5 bg-yellow-500 text-gray-900 font-bold text-lg rounded-full shadow-lg hover:bg-yellow-600 transition duration-300 ease-in-out transform hover:scale-110 focus:ring-4 focus:ring-yellow-300 focus:outline-none 
            before:absolute before:inset-0 before:bg-gradient-to-r before:from-yellow-400 before:to-yellow-600 before:blur-xl before:-z-10 
            after:absolute after:inset-0 after:w-full after:h-full after:animate-pulse after:bg-yellow-500/40 after:blur-lg"
          >
            Try Tej →
          </button>*/}
        </motion.div>
      </div>

      {/* Scroll Down Indicator with Auto-Scroll */}
      {showScrollIndicator && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
          onClick={scrollToNextSection}
        >
          <svg
            className="w-8 h-8 text-yellow-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
          </svg>
        </motion.div>
      )}
    </section>
  );
}
