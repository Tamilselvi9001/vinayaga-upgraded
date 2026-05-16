import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { COMPANY_NAME } from '../constants';
import BackButton from '../components/BackButton';

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  
  const yHero = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <main ref={containerRef} className="pt-20 bg-brand-bg relative">
      <BackButton />
      {/* Page Hero */}
      <section className="relative h-[65vh] md:h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image - Team working on solar panels to match screenshot */}
        <div className="absolute inset-0 z-0">
          <motion.img 
            style={{ y: yHero }}
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=100&w=3840" 
            className="w-full h-full object-cover"
            alt="Modern Industrial Facility"
          />
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-black/20 z-20" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-6xl sm:text-8xl md:text-[10rem] font-display font-black text-white tracking-tighter leading-none drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              About Us
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Legacy branding section */}
      <section className="py-24 md:py-32 bg-brand-bg relative overflow-hidden">
        {/* Subtle Solar Pattern Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none grayscale">
          <img src="https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&q=100&w=3840" className="w-full h-full object-cover" alt="" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-display font-black text-[#2859B1] mb-12 tracking-tight uppercase">
                Vinayaga Power Solutions
              </h2>
              <div className="h-1.5 w-32 bg-brand-primary mx-auto rounded-full mb-12" />
              <h3 className="text-5xl md:text-[8rem] font-display font-black text-brand-secondary leading-[0.85] tracking-tighter mb-10 drop-shadow-sm">
                15 Years of <br />
                <span className="text-brand-primary italic">Engineering Trust.</span>
              </h3>
              <p className="text-lg md:text-2xl text-brand-muted max-w-3xl mx-auto font-medium leading-relaxed">
                Since our inception in the late 2000s, we've dedicated ourselves to power excellence,
                delivering resilience to over 10,000 industrial and domestic partners.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-brand-primary/5 rounded-[3rem] -rotate-2 group-hover:rotate-0 transition-transform duration-700" />
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=100&w=3840" 
                alt="Our Engineering Facility" 
                className="relative rounded-[2.5rem] shadow-2xl z-10"
              />
              <div className="absolute -bottom-8 -right-8 bg-brand-primary text-white p-10 rounded-[2rem] shadow-2xl z-20 hidden md:block">
                <div className="text-5xl font-black mb-1">15+</div>
                <div className="text-xs font-black uppercase tracking-[0.2em] opacity-80">Years of Legacy</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >

              <h3 className="text-4xl md:text-5xl font-display font-black text-brand-secondary tracking-tight">
                The VPS <span className="text-brand-primary">Advantage</span>
              </h3>
              <div className="space-y-6">
                <p className="text-brand-muted text-lg leading-relaxed font-medium">
                  {COMPANY_NAME} is formally known as "VPS". We are a household name in Madurai and across Tamil Nadu for any industrial and domestic power electronics needs.
                </p>
                <p className="text-brand-muted text-lg leading-relaxed font-medium">
                  Our growth is fueled by 10,000+ satisfied clients who trust our engineering precision. We don't just provide power; we provide peace of mind.
                </p>
              </div>
              
              <div className="pt-8 grid grid-cols-2 gap-10 border-t border-brand-muted/10">
                <div>
                  <div className="text-4xl font-black text-brand-secondary mb-2 tracking-tighter">10,000+</div>
                  <div className="text-xs font-bold text-brand-muted uppercase tracking-widest text-brand-primary">Installations</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-brand-secondary mb-2 tracking-tighter">24/7</div>
                  <div className="text-xs font-bold text-brand-muted uppercase tracking-widest text-brand-primary">Support</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-brand-surface relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-4xl md:text-6xl font-display font-black text-brand-secondary tracking-tight">
              Our Core <span className="text-brand-primary">Philosophy</span>
            </h2>
            <p className="text-2xl md:text-4xl text-brand-secondary font-display font-medium italic leading-snug">
              "Stay Connected & Keep Your Devices Powered Up with an Uninterrupted Power Supply"
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
              {[
                { title: "Quality First", desc: "Premium components engineered for zero-failure performance." },
                { title: "Rapid Service", desc: "Our technicians respond to critical downtime within hours." },
                { title: "Sustainability", desc: "Leading the charge in solar integration for a greener India." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10 }}
                  className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-brand-primary/5 border border-brand-muted/5 text-left"
                >
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <span className="text-brand-primary font-black">0{i+1}</span>
                  </div>
                  <h4 className="text-xl font-black text-brand-secondary mb-4 tracking-tight">{item.title}</h4>
                  <p className="text-sm text-brand-muted leading-relaxed font-medium">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

