/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Zap, ShieldCheck, HeadphonesIcon, Wrench, Star, TrendingUp } from 'lucide-react';

const REASONS = [
  {
    icon: Zap,
    title: "15+ Years of Power Expertise",
    desc: "Decades of hands-on experience in industrial and domestic power electronics — we've seen it all and solved it all.",
    color: "from-blue-600/20 to-blue-400/5",
    border: "border-blue-500/20",
    iconBg: "bg-blue-500/15",
    iconColor: "text-blue-400",
  },
  {
    icon: ShieldCheck,
    title: "10,000+ Successful Installations",
    desc: "From single-phase home UPS to 3-phase industrial systems — each installation backed by rigorous quality checks.",
    color: "from-sky-600/20 to-sky-400/5",
    border: "border-sky-500/20",
    iconBg: "bg-sky-500/15",
    iconColor: "text-sky-400",
  },
  {
    icon: HeadphonesIcon,
    title: "24×7 Customer Support",
    desc: "Round-the-clock support hotline. Our engineers are always a call away — no power problem goes unsolved.",
    color: "from-indigo-600/20 to-indigo-400/5",
    border: "border-indigo-500/20",
    iconBg: "bg-indigo-500/15",
    iconColor: "text-indigo-400",
  },
  {
    icon: Wrench,
    title: "2000+ AMC Commitments",
    desc: "Annual Maintenance Contracts covering spare parts, free replacement, and priority service — maximum uptime guaranteed.",
    color: "from-cyan-600/20 to-cyan-400/5",
    border: "border-cyan-500/20",
    iconBg: "bg-cyan-500/15",
    iconColor: "text-cyan-400",
  },
  {
    icon: Star,
    title: "Premium Brands, Best Prices",
    desc: "Authorized dealer for Exide, Amaron, Luminous, Microtek & SF — top-quality products at competitive pricing.",
    color: "from-blue-700/20 to-blue-500/5",
    border: "border-blue-600/20",
    iconBg: "bg-blue-600/15",
    iconColor: "text-blue-300",
  },
  {
    icon: TrendingUp,
    title: "Growing Steadily Since 2009",
    desc: "From our roots in Madurai to serving all of Tamil Nadu — our growth is fuelled by customer trust and referrals.",
    color: "from-sky-700/20 to-sky-500/5",
    border: "border-sky-600/20",
    iconBg: "bg-sky-600/15",
    iconColor: "text-sky-300",
  },
];

export default function WhyUs() {
  return (
    <section className="py-28 bg-brand-secondary relative overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(40,89,177,1) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent opacity-5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-brand-primary/20 border border-brand-primary/30 text-sky-300 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-5"
          >
            <Zap className="w-3 h-3" /> Why Choose VPS
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-display font-black text-white tracking-tight mb-4">
            The VPS Difference
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            We don't just sell power solutions — we deliver peace of mind.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {REASONS.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`relative rounded-3xl border ${reason.border} bg-gradient-to-br ${reason.color} p-7 backdrop-blur-sm group cursor-default overflow-hidden`}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/[0.03] rounded-3xl" />

                <div className={`w-12 h-12 ${reason.iconBg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${reason.iconColor}`} />
                </div>
                <h3 className="text-white font-display font-bold text-lg mb-2 leading-tight">
                  {reason.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {reason.desc}
                </p>

                {/* Corner decoration */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Icon className="w-16 h-16 text-white" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
