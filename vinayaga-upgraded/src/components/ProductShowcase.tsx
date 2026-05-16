/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { Zap, Battery, Droplets, Camera, ChevronRight } from 'lucide-react';

const CATEGORIES = [
  { label: "All", icon: Zap, value: "all" },
  { label: "UPS Systems", icon: Zap, value: "UPS Systems" },
  { label: "Batteries", icon: Battery, value: "Batteries" },
  { label: "Inverters", icon: Zap, value: "Inverters" },
  { label: "RO Systems", icon: Droplets, value: "RO Systems" },
  { label: "CCTV", icon: Camera, value: "CCTV" },
];

export default function ProductShowcase() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const filtered = activeCategory === "all"
    ? PRODUCTS.slice(0, 6)
    : PRODUCTS.filter(p => p.category === activeCategory).slice(0, 6);

  return (
    <section
      ref={containerRef}
      id="products"
      className="py-28 relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #f8fafc 0%, #eef2ff 40%, #f0f9ff 70%, #f8fafc 100%)",
      }}
    >
      {/* Parallax blobs */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-20 -left-32 w-[500px] h-[500px] bg-brand-primary/8 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-20 -right-32 w-[500px] h-[500px] bg-sky-400/10 rounded-full blur-[120px] pointer-events-none"
      />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #2859B1 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-brand-primary/10 border border-brand-primary/20 text-brand-primary px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
          >
            <Zap className="w-3 h-3" /> Our Products
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-secondary tracking-tight">
            We Offer The Best <span className="text-sky-500">Products</span> For Professionals.
          </h2>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap gap-2 justify-center mb-12"
        >
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-brand-primary text-white shadow-[0_4px_20px_rgba(40,89,177,0.35)]"
                    : "bg-white text-brand-muted border border-brand-muted/20 hover:border-brand-primary/40 hover:text-brand-primary"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {cat.label}
              </button>
            );
          })}
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.21, 1.02, 0.47, 0.98] }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-[0_2px_20px_rgba(27,41,69,0.07)] hover:shadow-[0_16px_50px_rgba(27,41,69,0.15)] transition-all duration-400 group border border-brand-muted/5"
            >
              <Link to={`/product/${product.id}`} className="block">

                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-brand-surface">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                    onError={(e) => {
                      // Fallback gradient if image fails
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  {/* Category badge on image */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-brand-secondary/80 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-lg tracking-wider uppercase">
                      {product.category}
                    </span>
                  </div>
                  {/* Grade badge */}
                  <div className="absolute top-3 right-3">
                    <span className="bg-brand-primary/90 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-lg">
                      {product.grade}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-brand-secondary leading-tight mb-2">
                    {product.name}
                  </h3>
                  <p className="text-brand-muted text-sm line-clamp-2 mb-5">
                    {product.description}
                  </p>

                  {/* Specs */}
                  <div className="grid grid-cols-3 gap-2 mb-5">
                    {Object.entries(product.specs || {}).slice(0, 3).map(([key, value]) => (
                      <div key={key} className="bg-brand-surface p-2.5 rounded-xl border border-brand-muted/10">
                        <p className="text-[8px] font-black text-brand-muted uppercase tracking-tighter mb-0.5">{key}</p>
                        <p className="text-[10px] font-bold text-brand-secondary truncate">{value as string}</p>
                      </div>
                    ))}
                  </div>

                  {/* Highlights */}
                  <ul className="mb-6 space-y-1.5 border-t border-brand-muted/10 pt-5">
                    {product.highlights?.slice(0, 3).map((h: string, idx: number) => (
                      <li key={idx} className="flex items-center text-[10px] font-bold text-brand-muted uppercase tracking-widest">
                        <div className="w-1.5 h-1.5 rounded-full bg-sky-500 mr-2.5 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between gap-3">
                    <span className="flex-1 px-4 py-3 bg-brand-surface text-center text-brand-secondary border border-brand-muted/15 font-bold text-sm rounded-xl group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary transition-all duration-300">
                      View Details
                    </span>
                    <span className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center group-hover:bg-brand-primary transition-colors duration-300">
                      <ChevronRight className="w-4 h-4 text-brand-primary group-hover:text-white transition-colors" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            to="/store"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-secondary text-white font-bold rounded-2xl hover:bg-brand-primary transition-colors duration-300 shadow-lg"
          >
            View All Products
            <ChevronRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
