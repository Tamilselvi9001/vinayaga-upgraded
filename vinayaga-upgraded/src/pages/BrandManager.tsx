import React from 'react';
import { motion } from 'motion/react';
import LogoUploader from '../components/LogoUploader';

const BrandManager: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-brand-surface min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
            Administrative Panel
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-black text-brand-secondary tracking-tight">
            Brand <span className="text-brand-primary">Assets</span>
          </h1>
          <p className="mt-6 text-brand-muted max-w-2xl mx-auto text-lg">
            Manage your company identity across the entire digital ecosystem. Upload your logo and see it updated instantly.
          </p>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.1 }}
        >
          <LogoUploader />
        </motion.div>
      </div>
    </div>
  );
};

export default BrandManager;
