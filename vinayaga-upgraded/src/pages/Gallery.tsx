/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';
import { Star, Package } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import BackButton from '../components/BackButton';

interface ProductCardProps {
  product: any;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -100px 0px" }}
      transition={{ 
        duration: 0.8, 
        delay: (index % 4) * 0.08, 
        ease: [0.21, 1.02, 0.47, 0.98] 
      }}
      style={{ perspective: "1000px" }}
      className="group"
    >
      <Link to={`/product/${product.id}`}>
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          className="relative transition-all duration-500 group-hover:scale-[1.015]"
        >
          <div 
            style={{ transform: "translateZ(50px)" }}
            className="aspect-square rounded-[3rem] overflow-hidden bg-brand-surface mb-6 border border-brand-muted/5 group-hover:border-sky-100 transition-all duration-500 shadow-sm group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] relative"
          >
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
              fetchPriority={index < 4 ? "high" : "auto"}
            />
            <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-1">
                <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                <span className="text-[10px] font-black">{product.rating}</span>
              </div>
            </div>
          </div>
          
          <div 
            style={{ transform: "translateZ(30px)" }}
            className="space-y-3 transition-transform duration-500"
          >
            <div>
              <h3 className="text-xl font-display font-black text-brand-secondary group-hover:text-sky-500 transition-colors leading-tight">
                {product.name}
              </h3>
              <p className="text-[10px] font-bold text-brand-muted uppercase tracking-widest">Certified Performance</p>
            </div>
            
            <div className="pt-2">
              <span className="inline-flex items-center text-[10px] font-black uppercase tracking-widest text-sky-500 group-hover:text-white group-hover:bg-sky-500 px-4 py-2 rounded-xl border border-sky-100 group-hover:border-sky-500 transition-all duration-300 group-hover:scale-105">
                View Details
              </span>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default function Gallery() {
  const containerRef = useRef<HTMLElement>(null);
  const location = useLocation();
  const { scrollY } = useScroll();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yHero = useTransform(scrollY, [0, 500], [0, 150]);
  const yText = useTransform(scrollY, [0, 500], [0, -50]);
  const yDrift = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const categories = ['Batteries', 'UPS Systems', 'Inverters', 'RO Systems', 'CCTV'];

  return (
    <main ref={containerRef} className="pt-20 bg-brand-bg relative overflow-hidden">
      <BackButton />
      {/* Background Parallax Layer */}
      <motion.div style={{ y: yDrift }} className="absolute top-1/4 left-10 text-brand-primary/5 select-none pointer-events-none z-0">
        <Package size={500} strokeWidth={0.5} />
      </motion.div>
      <motion.div style={{ y: yDrift }} className="absolute bottom-1/4 right-10 text-sky-500/5 select-none pointer-events-none z-0">
        <Package size={500} strokeWidth={0.5} />
      </motion.div>

      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center bg-brand-secondary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            style={{ y: yHero }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=100&w=3840" 
            alt="Industrial Storage" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-secondary/20" />
        </div>
        
        <div className="relative z-30 max-w-7xl mx-auto px-4 text-center">
          <motion.div style={{ y: yText }}>
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-4xl sm:text-7xl md:text-[9rem] font-display font-black text-white leading-[1.1] md:leading-[0.85] tracking-tighter"
            >
              Product <br className="hidden sm:block" />
              <span className="text-sky-500 italic">Inventory.</span>
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-1.5 w-32 bg-sky-500 mx-auto mt-12 rounded-full origin-center"
            />
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-24 space-y-32">
        {categories.map((category) => (
          <section key={category} id={category.toLowerCase().replace(/\s+/g, '-')} className="scroll-mt-32">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
               <div>

                  <h2 className="text-4xl md:text-5xl font-display font-black text-brand-secondary tracking-tighter uppercase">{category}</h2>
               </div>
               <div className="h-px flex-1 bg-brand-muted/10 mx-8 hidden md:block" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
              {PRODUCTS.filter(p => p.category === category).map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}

