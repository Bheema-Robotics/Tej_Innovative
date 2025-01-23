'use client';

import HeroSection from './components/HeroSection';
import ProblemSolution from './components/ProblemSolution';
import FeaturesGrid from './components/FeaturesGrid';
import LiveDemo from './components/LiveDemo';
import Team from './Team';



export default function MainPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      <div id="next-section">
         <ProblemSolution />
       </div>


      {/* Core Features Section */}
      <FeaturesGrid />

      {/* Live Demo Section */}
      <LiveDemo />

      <Team/>


    </div>
  );
}
