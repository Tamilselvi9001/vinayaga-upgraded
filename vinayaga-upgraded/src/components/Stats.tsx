/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useMotionValue, useTransform, animate, useInView, useScroll } from 'motion/react';
import { STATS } from '../constants';
import { CheckCircle2 } from 'lucide-react';
import { useEffect, useRef } from 'react';

const keyFeatures = [
  "Advanced UPS Technology",
  "Customized Battery Solutions",
  "Professional Installation",
  "Authorized Service Partner",
  "24/7 Priority Support",
  "High Efficiency Solar Panels"
];

function AnimatedCounter({ value }: { value: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  
  // Extract number and suffix (e.g., "15" and "+")
  const numericValue = parseInt(value.replace(/[^0-9]/g, '')) || 0;
  const suffix = value.replace(/[0-9,]/g, '');
  const hasComma = value.includes(',');

  const rounded = useTransform(count, (latest) => {
    const num = Math.round(latest);
    if (hasComma) {
      return num.toLocaleString() + suffix;
    }
    return num + suffix;
  });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, numericValue, {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, count, numericValue]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function StatsSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const skyY = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section ref={containerRef} id="stats" className="py-24 text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.img 
          style={{ y: skyY }}
          src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=100&w=3840" 
          alt="Solar Power Solution" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      <motion.div 
        style={{ y: skyY }}
        className="absolute top-0 right-0 w-1/3 h-[150%] bg-brand-primary/5 -skew-x-12 transform translate-x-1/2 z-[1]" 
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:w-1/2"
          >
            <span className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-4 block">Performance Highlights</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 tracking-tight">
              Our Key Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {keyFeatures.map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                  <span className="text-white/80 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <div className="lg:w-1/2 grid grid-cols-2 gap-6 w-full">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 md:p-10 bg-black/40 rounded-3xl border border-white/10 backdrop-blur-md group hover:bg-brand-primary/20 transition-colors"
              >
                <div className="text-3xl sm:text-4xl md:text-6xl font-display font-black text-brand-primary mb-3">
                  <AnimatedCounter value={stat.value} />
                </div>
                <div className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-brand-muted group-hover:text-white transition-colors">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
