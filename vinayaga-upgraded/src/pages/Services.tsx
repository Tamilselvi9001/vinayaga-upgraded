/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
import { SERVICES, CONTACT_INFO } from '../constants';
import { CheckCircle2, Cog, ShieldCheck, Zap } from 'lucide-react';
import BackButton from '../components/BackButton';

export default function Services() {
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 500], [0, 150]);
  const yText = useTransform(scrollY, [0, 500], [0, -50]);

  return (
    <main className="pt-20 bg-brand-bg relative">
      <BackButton />
      <section className="relative py-32 lg:py-48 bg-brand-secondary overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <motion.img 
            style={{ y: yHero }}
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=100&w=3840" 
            alt="Technical Infrastructure" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent z-20" />
        </div>

        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ y: yText }}
            className="flex flex-col items-center text-center"
          >
            <h1 className="text-5xl sm:text-7xl md:text-9xl font-display font-black text-white tracking-tighter leading-none mb-6">
              Engineered <br />
              <span className="italic">Continuity.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-20 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-4xl font-display font-bold text-brand-secondary mb-8 tracking-tight leading-tight">
                Industrial Performance & Critical Governance
              </h2>
              <div className="space-y-6 text-lg text-brand-muted leading-relaxed mb-10">
                <p>We provide absolute operational continuity for critical infrastructure. Our maintenance frameworks are designed for high-availability environments where power stability is mandatory.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                {[
                  "Industrial Site Audit",
                  "UPS Load Testing",
                  "Critical Cooling Checks",
                  "Battery Thermal Management",
                  "Remote Monitoring",
                  "24/7 Rapid Response"
                ].map((item) => (
                  <div key={item} className="flex items-center space-x-3 text-brand-secondary">
                    <CheckCircle2 className="w-5 h-5 text-brand-primary" />
                    <span className="text-sm font-bold uppercase tracking-wider">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:w-1/2 w-full"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl skew-x-1">
                <img
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=100&w=3840"
                  alt="Service Infrastructure"
                  className="w-full object-cover aspect-video"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-brand-muted/10 flex flex-col h-full shadow-sm hover:shadow-xl hover:border-brand-primary/20 transition-all"
              >
                <div className="w-12 h-12 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mb-6">
                  {i === 0 ? <Zap className="w-6 h-6" /> : i === 1 ? <ShieldCheck className="w-6 h-6" /> : i === 2 ? <Cog className="w-6 h-6" /> : <ShieldCheck className="w-6 h-6" />}
                </div>
                <h3 className="text-xl font-display font-bold text-brand-secondary mb-4 leading-tight">
                  {service.title}
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed flex-grow mb-6">
                  {service.description}
                </p>
                <button className="text-xs font-black uppercase text-brand-primary tracking-widest flex items-center hover:translate-x-1 transition-transform">
                  Parameters <span className="ml-2">&rarr;</span>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
