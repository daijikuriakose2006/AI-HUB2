"use client"

import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'

const HeroSection = () => {
  return (
    <div className="relative h-screen flex items-center w-full max-w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/ai-processor.jpg"
          alt="AI Processor"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay with improved contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
        {/* Additional overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-white w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-blue-600 font-jetbrains">
            Welcome to<br />AI Toolkit Hub
          </h1>
          <div className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-100 font-jetbrains h-20">
            <TypeAnimation
              sequence={[
                'Explore, experiment, and elevate your AI projects with our dynamic AI Toolkit Hub.',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={0}
              cursor={true}
              className="font-jetbrains"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection 