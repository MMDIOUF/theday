import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface DynamicBackgroundProps {
  containerRef: React.RefObject<HTMLDivElement>;
  totalSections: number;
}

export const DynamicBackground: React.FC<DynamicBackgroundProps> = ({ 
  containerRef, 
  totalSections 
}) => {
  const [currentSection, setCurrentSection] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Couleurs claires uniformes pour chaque section
  const lightColors = [
    '#fdf9f9', // Blanc rosé très clair
    '#fcf7f7', // Blanc rosé clair
    '#fbf5f5', // Blanc avec pointe de rose
    '#faf3f3', // Blanc cassé rosé
    '#f9f1f1', // Blanc cassé
    '#f8efef', // Blanc légèrement teinté
    '#f7eded'  // Blanc beige très clair
  ];

  // Créer des transitions fluides entre couleurs claires
  const scrollProgress = useTransform(scrollYProgress, [0, 1], [0, totalSections - 1]);
  


  useEffect(() => {
    const unsubscribe = scrollProgress.on('change', (latest) => {
      const newSection = Math.floor(latest);
      if (newSection !== currentSection && newSection >= 0 && newSection < totalSections) {
        setCurrentSection(newSection);
      }
    });

    return unsubscribe;
  }, [scrollProgress, currentSection, totalSections]);

  return (
    <div className="fixed inset-0 -z-10">
      {/* Arrière-plan principal avec couleur claire uniforme */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundColor: useTransform(scrollProgress, 
            Array.from({ length: totalSections }, (_, i) => i),
            lightColors.slice(0, totalSections)
          )
        }}
      />
      
      {/* Couche de noise très subtile */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          mixBlendMode: 'multiply'
        }}
      />
      
      {/* Overlay très subtil */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          background: `radial-gradient(circle at center, 
            transparent 0%, 
            transparent 80%, 
            rgba(121, 85, 72, 0.1) 100%)`
        }}
      />
      
      {/* Particules flottantes très discrètes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`global-particle-${i}`}
            className="absolute w-1 h-1 rounded-full"
            style={{
              backgroundColor: 'rgba(196, 164, 164, 0.2)',
              left: `${10 + i * 15}%`,
              top: `${15 + (i % 3) * 30}%`
            }}
            animate={{
              y: [-15, -25, -15],
              x: [-3, 3, -3],
              opacity: [0.1, 0.3, 0.1],
              scale: [0.5, 0.8, 0.5]
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Indicateur de progression */}
      <div className="absolute top-4 right-4 z-10">
        <div className="flex space-x-1">
          {Array.from({ length: totalSections }).map((_, index) => (
            <motion.div
              key={index}
              className="w-1 h-8 rounded-full"
              style={{
                backgroundColor: currentSection === index ? '#c4a4a4' : 'rgba(196, 164, 164, 0.2)'
              }}
              animate={{
                scaleY: currentSection === index ? 1.2 : 1,
                opacity: currentSection === index ? 1 : 0.5
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};