"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Flower2 } from "lucide-react";
import { DynamicBackground } from "./DynamicBackground";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
  spacing?: 'normal' | 'large' | 'small'; // Variable spacing based on importance
}

interface RomanticTimelineProps {
  data: TimelineEntry[];
}

export const RomanticTimeline: React.FC<RomanticTimelineProps> = ({ data }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const getSpacingClass = (spacing?: string) => {
    switch (spacing) {
      case 'large': return 'pt-32 md:pt-48';
      case 'small': return 'pt-8 md:pt-16';
      default: return 'pt-16 md:pt-24';
    }
  };

  return (
    <>
      {/* Arrière-plan dynamique */}
      <DynamicBackground 
        containerRef={containerRef} 
        totalSections={data.length} 
      />
      
      <div className="w-full font-mono relative z-10" ref={containerRef}>
      {/* Header Section */}
      <div className="max-w-6xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mb-20 text-center relative z-20"
          style={{
            backgroundColor: 'rgba(250, 248, 245, 0.9)',
            backdropFilter: 'blur(15px)',
            borderRadius: '1rem',
            padding: '3rem',
            border: '1px solid rgba(196, 164, 164, 0.3)',
            boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.2)'
          }}
        >
          <div className="flex justify-center mb-6">
            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Flower2 className="w-12 h-12" style={{ color: '#c4a4a4', fill: '#c4a4a4' }} />
            </motion.div>
          </div>
          
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-mono font-bold mb-6"
            style={{ 
              letterSpacing: '0.1em',
              color: '#2d1b1b' // Marron très foncé pour contraste
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            FOR MY ONLY ONE
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl max-w-2xl mx-auto font-script"
            style={{ 
              color: '#3d2626', // Marron foncé pour contraste
              lineHeight: '2'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
          >
            My Thiopatti xolle
          </motion.p>
        </motion.div>

        {/* Timeline Content */}
        <div ref={ref} className="relative pb-20 px-2 md:px-0">
          {data.map((item, index) => (
            <div key={index} className={`flex justify-start ${getSpacingClass(item.spacing)} md:gap-10`}>
              {/* Timeline Point and Title */}
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <motion.div 
                  className="h-10 absolute left-3 md:left-3 w-10 rounded-full border-4 flex items-center justify-center"
                  style={{
                    backgroundColor: '#f5f0eb',
                    borderColor: '#c4a4a4'
                  }}
                  animate={{ 
                    scale: [1, 1.2, 1],
                    borderColor: ['#c4a4a4', '#d4b4b4', '#c4a4a4']
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2
                  }}
                >
                  <div 
                    className="h-4 w-4 rounded-full border p-2" 
                    style={{
                      backgroundColor: '#c4a4a4',
                      borderColor: 'rgba(121, 85, 72, 0.3)'
                    }}
                  />
                </motion.div>
                
                {/* Desktop Title */}
                <h3 
                  className="hidden md:block text-2xl md:pl-20 md:text-4xl font-script font-bold"
                  style={{ color: '#2d1b1b' }} // Marron très foncé
                >
                  {item.title}
                </h3>
              </div>

              {/* Content Card */}
              <div className="relative pl-20 pr-2 md:pl-4 w-full">
                {/* Mobile Title */}
                <h3 
                  className="md:hidden block text-2xl mb-4 text-left font-script font-bold"
                  style={{ color: '#2d1b1b' }} // Marron très foncé
                >
                  {item.title}
                </h3>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: index * 0.1 }}
                  className="romantic-card animate-float w-full"
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Text Content */}
                  <div 
                    className="romantic-text text-sm md:text-base leading-relaxed md:leading-loose"
                    style={{ color: '#2d1b1b' }}
                  >
                    {item.content}
                  </div>
                </motion.div>
              </div>
            </div>
          ))}

          {/* Animated Timeline Line */}
          <div
            style={{
              height: height + "px",
            }}
            className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
                background: `linear-gradient(to top, #c4a4a4 0%, rgba(196, 164, 164, 0.8) 10%, transparent 100%)`
              }}
              className="absolute inset-x-0 top-0 w-[2px] rounded-full"
            />
          </div>
        </div>
      </div>
      </div>
    </>
  );
};