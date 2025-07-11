"use client"

import { useEffect, useState } from "react"

export function AnimatedBrain() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative w-16 h-16 md:w-20 md:h-20 animate-float">
      <svg
        viewBox="0 0 120 120"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main Brain Structure */}
        <g className="animate-pulse-subtle">
          {/* Left Hemisphere */}
          <path
            d="M20 45c0-12 8-20 18-20s18 8 18 20c0 3 1 6 3 8c2 2 5 3 8 3c8 0 15 7 15 15c0 5-2 9-5 12c-1 1-1 3 0 4c3 3 5 7 5 11c0 8-6 14-14 14c-3 0-6-1-8-3c-2-2-5-3-8-3s-6 1-8 3c-2 2-5 3-8 3c-8 0-14-6-14-14c0-4 2-8 5-11c1-1 1-3 0-4c-3-3-5-7-5-12c0-8 7-15 15-15c3 0 6-1 8-3c2-2 3-5 3-8z"
            fill="url(#brainGradient)"
            stroke="rgb(99, 102, 241)"
            strokeWidth="1.5"
            className="drop-shadow-lg"
          />
          
          {/* Right Hemisphere */}
          <path
            d="M100 45c0-12-8-20-18-20s-18 8-18 20c0 3-1 6-3 8c-2 2-5 3-8 3c-8 0-15 7-15 15c0 5 2 9 5 12c1 1 1 3 0 4c-3 3-5 7-5 11c0 8 6 14 14 14c3 0 6-1 8-3c2-2 5-3 8-3s6 1 8 3c2 2 5 3 8 3c8 0 14-6 14-14c0-4-2-8-5-11c-1-1-1-3 0-4c3-3 5-7 5-12c0-8-7-15-15-15c-3 0-6-1-8-3c-2-2-3-5-3-8z"
            fill="url(#brainGradient2)"
            stroke="rgb(139, 92, 246)"
            strokeWidth="1.5"
            className="drop-shadow-lg"
          />
          
          {/* Detailed Brain Folds */}
          <g stroke="rgb(99, 102, 241)" strokeWidth="1" fill="none" strokeLinecap="round" className="animate-pulse-slow opacity-70">
            <path d="M25 40c5-2 10-1 15 2" />
            <path d="M22 50c6 0 12 3 16 6" />
            <path d="M28 65c4-2 8-1 12 1" />
            <path d="M35 75c3 1 7 0 10-2" />
            <path d="M95 40c-5-2-10-1-15 2" />
            <path d="M98 50c-6 0-12 3-16 6" />
            <path d="M92 65c-4-2-8-1-12 1" />
            <path d="M85 75c-3 1-7 0-10-2" />
          </g>
          
          {/* Neural Network Connections */}
          <g className="animate-pulse-fast">
            <circle cx="35" cy="50" r="2" fill="rgb(59, 130, 246)" className="animate-ping-slow opacity-80" />
            <circle cx="60" cy="45" r="1.5" fill="rgb(139, 92, 246)" className="animate-ping-slower opacity-80" />
            <circle cx="85" cy="55" r="2" fill="rgb(59, 130, 246)" className="animate-ping-slow opacity-80" />
            <circle cx="45" cy="70" r="1.5" fill="rgb(139, 92, 246)" className="animate-ping-slower opacity-80" />
            <circle cx="75" cy="68" r="1.5" fill="rgb(59, 130, 246)" className="animate-ping-slow opacity-80" />
            
            {/* Connecting lines */}
            <g stroke="rgb(59, 130, 246)" strokeWidth="0.5" fill="none" className="animate-wave opacity-60">
              <path d="M35 50 Q50 40 60 45" />
              <path d="M60 45 Q72 50 85 55" />
              <path d="M35 50 Q40 60 45 70" />
              <path d="M85 55 Q80 62 75 68" />
              <path d="M45 70 Q60 65 75 68" />
            </g>
          </g>
          
          {/* Memory Wave Patterns */}
          <g className="animate-wave opacity-50">
            <path
              d="M25 45c8 2 16 0 24 2s16-1 24 1"
              stroke="url(#waveGradient)"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M30 65c6 1 12-1 18 1s12 0 18-1"
              stroke="url(#waveGradient)"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
          </g>
        </g>
        
        {/* Gradients */}
        <defs>
          <linearGradient id="brainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(99, 102, 241)" stopOpacity="0.1" />
            <stop offset="50%" stopColor="rgb(59, 130, 246)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="rgb(139, 92, 246)" stopOpacity="0.15" />
          </linearGradient>
          
          <linearGradient id="brainGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgb(139, 92, 246)" stopOpacity="0.1" />
            <stop offset="50%" stopColor="rgb(59, 130, 246)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="rgb(99, 102, 241)" stopOpacity="0.15" />
          </linearGradient>
          
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0" />
            <stop offset="50%" stopColor="rgb(99, 102, 241)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="rgb(139, 92, 246)" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(1deg); }
        }
        
        @keyframes pulse-subtle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.02); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        
        @keyframes pulse-fast {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 0.8; }
          75%, 100% { transform: scale(2.5); opacity: 0; }
        }
        
        @keyframes ping-slower {
          0% { transform: scale(1); opacity: 0.8; }
          75%, 100% { transform: scale(3); opacity: 0; }
        }
        
        @keyframes wave {
          0%, 100% { transform: translateX(0px) scaleY(1); }
          50% { transform: translateX(1px) scaleY(1.05); }
        }
        
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        
        .animate-pulse-subtle {
          animation: pulse-subtle 4s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        .animate-pulse-fast {
          animation: pulse-fast 2s ease-in-out infinite;
        }
        
        .animate-ping-slow {
          animation: ping-slow 4s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .animate-ping-slower {
          animation: ping-slower 5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .animate-wave {
          animation: wave 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
} 