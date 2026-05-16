import React from 'react';
import { motion } from 'motion/react';

export const MoneyAnimation = () => {
  return (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <motion.circle 
        cx="12" cy="12" r="8"
        animate={{ 
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      <motion.path 
        d="M12 8v8M10 10c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2H10c-1.1 0-2 .9-2 2s.9 2 2 2h2c1.1 0 2-.9 2-2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
      />
    </svg>
  );
};

export const TeamWorkAnimation = () => {
  return (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <motion.path 
        d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
        animate={{ 
          x: [0, 2, 0],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle 
        cx="9" cy="7" r="4"
        animate={{ 
          y: [-1, 1, -1],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path 
        d="M23 21v-2a4 4 0 0 0-3-3.87"
        animate={{ 
          x: [0, -2, 0],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.path 
        d="M16 3.13a4 4 0 0 1 0 7.75"
        animate={{ 
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
    </svg>
  );
};

export const QualityAnimation = () => {
  return (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <motion.circle 
        cx="12" cy="8" r="7"
        animate={{ 
          rotate: [0, 5, -5, 0],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
      <motion.polyline 
        points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"
        animate={{ 
          y: [0, 2, 0],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle 
        cx="12" cy="8" r="3"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </svg>
  );
};
