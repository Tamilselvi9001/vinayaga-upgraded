import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import React from 'react';
import { SolarPanelAnimation, SolarFarmAnimation, BatteryAnimation, InverterAnimation, CctvAnimation, RoAnimation } from './animations/TechAnimations';
import { CheckCircle2 } from 'lucide-react';

export default function TechnologySection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);

  const techs = [
    {
      title: "Solar UPS",
      description: "Harness clean energy with our advanced solar power integration systems.",
      component: <SolarPanelAnimation />
    },
    {
      title: "Industrial UPS",
      description: "Heavy-duty power protection for manufacturing and critical infrastructure.",
      component: <SolarFarmAnimation />
    },
    {
      title: "Battery Solutions",
      description: "High-capacity, long-life energy storage for consistent performance.",
      component: <BatteryAnimation />
    },
    {
      title: "Power Inverters",
      description: "Efficient DC to AC conversion for pure sine wave power supply.",
      component: <InverterAnimation />
    },
    {
      title: "CCTV Power",
      description: "Dedicated power backup systems for 24/7 security surveillance.",
      component: <CctvAnimation />
    },
    {
      title: "RO Water Systems",
      description: "Stabilized power for water purification and home appliances.",
      component: <RoAnimation />
    }
  ];

  return (
    <section ref={containerRef} className="py-24 bg-brand-surface relative overflow-hidden">
      {/* Parallax Background Decorations */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-20 -left-20 w-80 h-80 bg-brand-primary/5 rounded-full blur-[100px] z-0"
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-20 -right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] z-0"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display font-black text-brand-secondary mb-6 tracking-tight">
            Advanced Power <span className="text-brand-primary">Ecosystem</span>
          </h2>
          <p className="text-lg text-brand-muted leading-relaxed">
            We don't just sell products; we engineer clean energy ecosystems designed for 
            maximum efficiency and zero downtime performance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {techs.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ 
                duration: 0.8, 
                delay: i * 0.1,
                ease: [0.21, 1.02, 0.47, 0.98]
              }}
              className="group flex flex-col items-center text-center"
            >
              <div className="mb-6 w-full transform group-hover:-translate-y-2 transition-transform duration-500">
                {tech.component}
              </div>
              <div className="px-4">
                <h3 className="text-xl font-display font-bold text-brand-secondary mb-3">
                  {tech.title}
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed">
                  {tech.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
