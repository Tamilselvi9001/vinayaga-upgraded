/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { Zap, Phone, ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import TechnologySection from '../components/TechnologySection';
import ProductShowcase from '../components/ProductShowcase';
import Stats from '../components/Stats';
import Brands from '../components/Brands';
import AppDownloadSection from '../components/AppDownloadSection';
import Testimonials from '../components/Testimonials';
import WhyUs from '../components/WhyUs';

export default function Home() {
  const brandRef = useRef<HTMLElement>(null);
  const { scrollYProgress: brandProgress } = useScroll({
    target: brandRef,
    offset: ["start end", "end start"],
  });
  const brandX = useTransform(brandProgress, [0, 1], [-40, 40]);

  return (
    <main className="relative">
      <Hero />
      <ProductShowcase />
      <WhyUs />
      <TechnologySection />
      <Stats />
      <Brands />
      <AppDownloadSection />
      <Testimonials />

      {/* ── Brand Story Section ── */}
      <section
        ref={brandRef}
        className="py-28 bg-white overflow-hidden border-t border-brand-muted/5 relative"
      >
        {/* Animated background blobs */}
        <motion.div
          style={{ x: brandX }}
          className="absolute top-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(40,89,177,0.04),transparent_70%)] pointer-events-none"
        />
        <motion.div
          style={{ x: useTransform(brandProgress, [0, 1], [40, -40]) }}
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(59,130,246,0.04),transparent_70%)] pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="max-w-4xl mx-auto">

              {/* Section label */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-brand-surface border border-brand-primary/10 text-brand-primary px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6"
              >
                <Zap className="w-3 h-3" /> Our Story
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl md:text-6xl font-display font-black text-brand-secondary tracking-tighter mb-8"
              >
                Vinayaga Power Solutions
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-brand-muted text-lg md:text-xl leading-relaxed font-medium mb-12"
              >
                Vinayaga Power Solutions is one of the well-known brands in the field of Industrial
                and Domestic Power Electronics. Our brand is formally known as{' '}
                <span className="text-brand-primary font-black">"VPS"</span>. Established in the
                late 2000's — over 15 years and 10,000+ installations later, we are growing steadily.
              </motion.p>

              {/* Highlight card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="relative bg-brand-secondary rounded-[2.5rem] p-8 md:p-14 overflow-hidden group"
              >
                {/* Background image with overlay */}
                <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=1600"
                    alt="Power"
                    className="w-full h-full object-cover opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-brand-secondary/60" />
                </div>

                {/* Glowing border */}
                <div className="absolute inset-0 rounded-[2.5rem] ring-1 ring-brand-primary/20 group-hover:ring-brand-primary/40 transition-all duration-500" />

                <div className="relative z-10">
                  {/* Divider */}
                  <div className="flex items-center justify-center gap-3 mb-8">
                    <div className="h-px flex-1 bg-white/10" />
                    <Zap className="w-5 h-5 text-brand-primary" />
                    <div className="h-px flex-1 bg-white/10" />
                  </div>

                  <h3 className="text-white font-display font-black text-2xl md:text-4xl tracking-tight leading-tight">
                    Stay Connected &amp; Keep Your Devices Powered Up with an{' '}
                    <br className="hidden md:block" />
                    <span className="text-brand-primary italic">Uninterrupted Power Supply</span>
                  </h3>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                    <Link
                      to="/contact"
                      className="group/btn inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand-primary text-white font-bold rounded-2xl hover:shadow-[0_0_30px_rgba(40,89,177,0.5)] transition-all duration-300"
                    >
                      Get In Touch
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                    <a
                      href="tel:+918072893431"
                      className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 border border-white/20 text-white font-bold rounded-2xl hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                    >
                      <Phone className="w-4 h-4" />
                      +91 80728 93431
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom blend */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-bg to-transparent" />
      </section>

      {/* ── Final CTA Banner ── */}
      <section className="py-32 bg-brand-bg relative overflow-hidden" id="contact">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(40,89,177,0.05),transparent)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.05),transparent)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-brand-secondary rounded-3xl md:rounded-[4rem] px-6 py-16 md:p-32 text-center text-white relative overflow-hidden shadow-[0_40px_100px_-20px_rgba(27,41,69,0.4)]"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=100&w=3840"
                alt="Solar Panels"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-secondary/40 backdrop-blur-[1px]" />
            </div>

            {/* Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none z-[1]">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 100 L100 0" stroke="white" strokeWidth="0.5" />
                <path d="M0 80 L80 0" stroke="white" strokeWidth="0.5" />
                <path d="M0 60 L60 0" stroke="white" strokeWidth="0.5" />
                <path d="M20 100 L100 20" stroke="white" strokeWidth="0.5" />
                <path d="M40 100 L100 40" stroke="white" strokeWidth="0.5" />
              </svg>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10"
            >
              <h2 className="text-3xl sm:text-4xl md:text-7xl font-display font-black mb-8 md:mb-10 tracking-tight leading-tight">
                Ready for <span className="text-brand-primary">100% Peace</span> of Mind?
              </h2>
              <p className="text-xl text-white/70 mb-16 max-w-3xl mx-auto font-medium leading-relaxed">
                Join 10,000+ satisfied clients across South India. Let's architect a power
                infrastructure that never lets you down.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-[#1B2945] overflow-hidden bg-brand-secondary">
                      <img src={`https://i.pravatar.cc/150?u=${i + 10}`} alt="User" />
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-2 border-[#1B2945] bg-[#2859B1] flex items-center justify-center text-xs font-bold">
                    +10k
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-brand-primary text-white font-bold text-lg rounded-2xl hover:shadow-[0_0_50px_rgba(40,89,177,0.6)] transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  Contact Us Today
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
