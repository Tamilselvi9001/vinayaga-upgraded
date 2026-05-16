/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronDown, Zap, Phone, ArrowRight, Shield, Clock, Award } from 'lucide-react';

const BACKGROUND_IMAGE = "https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&q=100&w=3840";
const ROTATING_WORDS = ["Industrial", "Domestic", "Commercial", "Enterprise"];
const HERO_STATS = [
  { value: '15+', label: 'Years Experience', icon: Award },
  { value: '10K+', label: 'Installations', icon: Zap },
  { value: '24/7', label: 'Support', icon: Clock },
  { value: '2000+', label: 'AMC Clients', icon: Shield },
];

export default function Hero() {
  const { scrollY } = useScroll();
  const [wordIndex, setWordIndex] = useState(0);

  const yContent = useTransform(scrollY, [0, 500], [0, -80]);
  const yBackground = useTransform(scrollY, [0, 500], [0, 130]);
  const contentOpacity = useTransform(scrollY, [0, 350], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex(prev => (prev + 1) % ROTATING_WORDS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-brand-secondary">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1.25 }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${BACKGROUND_IMAGE})`, y: yBackground }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-secondary/85 via-brand-secondary/60 to-brand-secondary/95 z-10" />
        <div
          className="absolute inset-0 z-[11] opacity-[0.07]"
          style={{
            backgroundImage: `linear-gradient(rgba(40,89,177,1) 1px, transparent 1px), linear-gradient(90deg, rgba(40,89,177,1) 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-primary rounded-full blur-[160px] z-[12]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.18, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-sky-400 rounded-full blur-[140px] z-[12]"
        />
      </div>

      {/* Floating Particles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute z-20 pointer-events-none"
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0, 0.6, 0.6, 0],
            y: [0, -80, -160, -220],
            x: [0, (i % 2 === 0 ? 20 : -20), (i % 2 === 0 ? 40 : -40), 0],
          }}
          transition={{
            duration: 5 + (i % 3),
            delay: i * 0.9,
            repeat: Infinity,
            ease: "easeOut",
          }}
          style={{ left: `${8 + i * 11}%`, bottom: `${12 + (i % 3) * 5}%` }}
        >
          <Zap className="text-brand-primary" style={{ width: 12 + (i % 3) * 4, height: 12 + (i % 3) * 4 }} />
        </motion.div>
      ))}

      {/* Main Content */}
      <motion.div
        style={{ y: yContent, opacity: contentOpacity }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 text-center w-full"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 bg-brand-primary/20 border border-brand-primary/40 text-sky-300 px-5 py-2 rounded-full text-sm font-bold tracking-widest uppercase mb-8 backdrop-blur-md"
        >
          <Zap className="w-3.5 h-3.5" />
          Trusted Since 2009 · Madurai, Tamil Nadu
          <Zap className="w-3.5 h-3.5" />
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-[5.5rem] font-display font-black text-white leading-[1.08] tracking-tight drop-shadow-2xl">
            Power Solutions
          </h1>
          <h1 className="text-5xl sm:text-6xl md:text-[5.5rem] font-display font-black text-white leading-[1.08] tracking-tight drop-shadow-2xl">
            for{' '}
            <span className="inline-block relative">
              <span className="relative z-10 h-[1.15em] inline-flex items-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={wordIndex}
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1 }}
                    exit={{ y: '-100%', opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="text-brand-primary block"
                  >
                    {ROTATING_WORDS[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-brand-primary rounded-full" />
            </span>
          </h1>
          <h1 className="text-5xl sm:text-6xl md:text-[5.5rem] font-display font-black text-white leading-[1.08] tracking-tight drop-shadow-2xl mb-8">
            Excellence
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg sm:text-xl text-white/65 font-medium leading-relaxed max-w-2xl mx-auto mb-10"
        >
          One of South India's most trusted names in UPS, Inverters, Batteries,
          RO Systems &amp; CCTV — powering 10,000+ homes &amp; industries.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.52 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-14"
        >
          <Link
            to="/#products"
            className="group relative px-8 py-4 text-white font-bold text-base rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(40,89,177,0.45)] hover:shadow-[0_0_70px_rgba(40,89,177,0.65)] transition-shadow duration-300 flex items-center justify-center gap-2 bg-brand-primary"
          >
            <Zap className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Explore Products</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="tel:+918072893431"
            className="group px-8 py-4 bg-white/10 text-white border border-white/25 font-bold text-base rounded-2xl backdrop-blur-sm hover:bg-white/20 hover:border-white/40 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5" />
            Call Us Now
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto"
        >
          {HERO_STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.75 + i * 0.08 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="bg-white/[0.08] backdrop-blur-md border border-white/[0.12] rounded-2xl py-4 px-3 cursor-default group"
              >
                <Icon className="w-5 h-5 text-brand-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <p className="text-xl font-display font-black text-white">{stat.value}</p>
                <p className="text-[10px] text-white/50 font-semibold tracking-wider uppercase mt-0.5">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1.5 text-white/35"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
