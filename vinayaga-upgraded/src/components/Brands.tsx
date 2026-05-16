/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { BRANDS } from '../constants';

const DEALERS = [
  { name: "Exide", logo: "https://logo.clearbit.com/exideindustries.com" },
  { name: "Microtek", logo: "https://logo.clearbit.com/microtekdirect.com" },
  { name: "Luminous", logo: "https://logo.clearbit.com/luminousindia.com" },
  { name: "V-Guard", logo: "https://logo.clearbit.com/vguard.in" },
  { name: "Amaron", logo: "https://logo.clearbit.com/amaron.in" },
  { name: "SF Batteries", logo: "https://www.sfbattery.com/media/wysiwyg/SF_Battery_Logo.png" },
];

const CLIENTS = [
  { name: "Sarah J.", gender: "female", id: 1 },
  { name: "Michael R.", gender: "male", id: 2 },
  { name: "Emily D.", gender: "female", id: 3 },
  { name: "David K.", gender: "male", id: 4 },
  { name: "Jessica L.", gender: "female", id: 5 },
  { name: "Robert W.", gender: "male", id: 6 },
  { name: "Linda M.", gender: "female", id: 7 },
  { name: "John P.", gender: "male", id: 8 },
  { name: "Sophia T.", gender: "female", id: 9 },
  { name: "James B.", gender: "male", id: 10 },
  { name: "Olivia C.", gender: "female", id: 11 },
  { name: "William H.", gender: "male", id: 12 }
];

export default function BrandSection() {
  return (
    <section id="brands" className="py-24 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dealers Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-secondary tracking-tight">
            Premium <span className="text-brand-primary">Authorised Dealer</span>
          </h2>
          <p className="mt-4 text-brand-muted font-medium max-w-2xl mx-auto">
            Partnering with world-class power brands to deliver reliable energy solutions for your home and business.
          </p>
        </motion.div>

        <div className="overflow-hidden relative py-10">
          <motion.div 
            animate={{
              x: ["0%", "-50%"]
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex items-center gap-8 md:gap-12 whitespace-nowrap w-max"
          >
            {[...DEALERS, ...DEALERS, ...DEALERS].map((dealer, i) => (
              <div
                key={`${dealer.name}-${i}`}
                className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-brand-muted/10 flex items-center justify-center min-w-[160px] sm:min-w-[200px] md:min-w-[260px] h-28 md:h-36 group hover:shadow-2xl hover:border-brand-primary/20 hover:-translate-y-1 transition-all cursor-default"
              >
                <img 
                  src={dealer.logo} 
                  alt={dealer.name} 
                  className="max-w-[120px] md:max-w-[180px] max-h-[50px] md:max-h-[70px] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </motion.div>

          {/* Gradient Masks for smooth fade at edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-surface to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand-surface to-transparent z-10 pointer-events-none" />
        </div>

        {/* Clients Section (Screenshot 7) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-secondary tracking-tight">
            Our <span className="text-brand-primary">Corporate Clients</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {CLIENTS.map((client, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.05 }}
               className="group relative aspect-square bg-white rounded-2xl border border-brand-muted/10 overflow-hidden shadow-sm hover:shadow-xl transition-all"
             >
               <img 
                 src={`https://i.pravatar.cc/150?u=${client.id + 50}`} 
                 alt={client.name} 
                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                 <p className="text-white text-xs font-bold">{client.name}</p>
               </div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
