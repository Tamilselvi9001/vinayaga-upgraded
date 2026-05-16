/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Local Business Owner",
    text: "Vinayaga Power Solutions provided an excellent UPS setup for my office. Their service is truly on-time and high quality. Since the installation, we haven't faced a single minute of downtime.",
    rating: 5,
  },
  {
    name: "Sarah Meenakshi",
    role: "Homeowner",
    text: "Excellent experience with the solar installation. The team was professional, kept everything clean, and the power savings are already noticeable. Highly recommend their battery solutions too.",
    rating: 5,
  },
  {
    name: "Arun Pandian",
    role: "IT Manager",
    text: "Reliable partner for all our power requirements. Their maintenance contract (AMC) is comprehensive and the response times are very quick. A trustworthy partner in Madurai.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const slideNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(slideNext, 5000);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const t = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=100&w=3840" 
          alt="Solar Panels Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
      >
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">
            Our <span className="text-brand-primary">Happy Customers</span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="w-full"
            >
              <div className="flex flex-col items-center">
                <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-brand-primary/5 border border-brand-muted/10 mb-10 relative max-w-2xl mx-auto">
                  <div className="flex justify-center space-x-1 mb-6 text-[#FACC15]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-current" />
                    ))}
                  </div>
                  <p className="text-brand-muted text-lg md:text-xl leading-relaxed italic font-medium">"{t.text}"</p>
                  {/* Speech bubble pointy part */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-white border-r border-b border-brand-muted/10 rotate-45" />
                </div>
                
                <div className="flex flex-col items-center mt-4">
                  <div className="w-20 h-20 rounded-full bg-brand-primary/10 border-4 border-white overflow-hidden shadow-2xl mb-4 transform hover:scale-110 transition-transform duration-300">
                    <img src={`https://i.pravatar.cc/150?u=${t.name}`} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <h4 className="text-xl font-black text-white">{t.name}</h4>
                  <p className="text-xs font-black text-brand-primary uppercase tracking-[0.3em] mt-1">{t.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center space-x-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > currentIndex ? 1 : -1);
                setCurrentIndex(i);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === currentIndex ? 'bg-brand-primary w-8' : 'bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
