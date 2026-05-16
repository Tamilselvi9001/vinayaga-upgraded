import React from 'react';
import { motion } from 'motion/react';
import { GooglePlayButton, AppStoreButton } from './ui/StoreButtons';

export default function AppDownloadSection() {
  return (
    <section className="py-24 bg-brand-bg relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-500/5 rounded-full blur-[120px] z-0" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >

          <h2 className="text-4xl md:text-6xl font-display font-black text-brand-secondary tracking-tighter mb-6">
            Take Control From <br />
            <span className="italic text-brand-primary">Anywhere.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-brand-muted font-medium text-lg">
            Download our custom mobile app to track energy production, manage UPS load, and receive real-time maintenance alerts directly on your device.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20"
        >
          <GooglePlayButton href="#" />
          <AppStoreButton href="#" />
        </motion.div>
      </div>
    </section>
  );
}
