import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <motion.button
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ x: -4 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => window.history.state && window.history.state.idx > 0 ? navigate(-1) : navigate('/')}
      className="fixed top-24 md:top-28 left-4 md:left-8 z-40 flex items-center space-x-2 group p-2"
      title="Go Back"
    >
      <div className="w-10 h-10 md:w-8 md:h-8 rounded-full border border-brand-secondary/10 flex items-center justify-center group-hover:border-brand-primary group-hover:bg-brand-primary transition-all duration-300">
        <ArrowLeft className="w-5 h-5 md:w-4 md:h-4 text-brand-secondary group-hover:text-white transition-colors" strokeWidth={2} />
      </div>
      <span className="text-[12px] md:text-[11px] font-black uppercase tracking-[0.2em] text-brand-secondary group-hover:text-brand-primary transition-colors">
        Back
      </span>
    </motion.button>
  );
}
