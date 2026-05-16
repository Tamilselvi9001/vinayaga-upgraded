import React from 'react';
import { motion } from 'motion/react';
import { Apple } from 'lucide-react';

interface StoreButtonProps {
  href: string;
  className?: string;
}

const GooglePlayIcon = () => (
  <svg viewBox="0 0 512 512" className="w-6 h-6" fill="currentColor">
    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 32.8C41.2 30.5 32 28.2 32 40v432c0 11.8 9.2 9.5 15 7.2L279.7 256 47 32.8zM345.4 254.5L450.4 315c10 5.8 19.6 4.5 19.6-5.4V202.4c0-9.9-9.6-11.2-19.6-5.4l-105 60.5-24.3-24.3 24.3-21.3zM325.3 277.7l-60.1 60.1L104.6 499l280.8-161.2-60.1-60.1z" />
  </svg>
);

export const GooglePlayButton: React.FC<StoreButtonProps> = ({ href, className = "" }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center px-5 py-2.5 bg-brand-secondary text-white rounded-2xl border border-white/10 hover:border-sky-500/50 transition-all duration-300 shadow-xl hover:shadow-sky-500/10 group ${className}`}
    >
      <div className="mr-3 text-white group-hover:text-link-500 transition-colors">
        <GooglePlayIcon />
      </div>
      <div className="flex flex-col items-start leading-tight">
        <span className="text-[10px] font-black uppercase tracking-[0.1em] opacity-60">GET IT ON</span>
        <span className="text-lg font-bold font-display tracking-tight">Google Play</span>
      </div>
    </motion.a>
  );
};

export const AppStoreButton: React.FC<StoreButtonProps> = ({ href, className = "" }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center px-5 py-2.5 bg-brand-secondary text-white rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 shadow-xl hover:shadow-blue-500/10 group ${className}`}
    >
      <div className="mr-3 text-white group-hover:text-blue-400 transition-colors">
        <Apple className="w-7 h-7 fill-current" />
      </div>
      <div className="flex flex-col items-start leading-tight">
        <span className="text-[10px] font-black uppercase tracking-[0.1em] opacity-60">Download on the</span>
        <span className="text-lg font-bold font-display tracking-tight">App Store</span>
      </div>
    </motion.a>
  );
};
