/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Zap, Star, ShieldCheck, Truck, RefreshCw, Minus, Plus, Maximize, X } from 'lucide-react';
import { CONTACT_INFO, PRODUCTS } from '../constants';
import BackButton from '../components/BackButton';

export default function ProductDetail() {
  const { id } = useParams();
  const product = PRODUCTS.find(p => p.id === id);
  const [activeTab, setActiveTab] = useState<'description' | 'specs' | 'reviews'>('description');
  const [mainImage, setMainImage] = useState(product?.image);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (product) setMainImage(product.image);
  }, [product]);

  if (!product) {
    return (
      <main className="pt-32 pb-20 text-center">
        <h2 className="text-4xl font-black text-brand-secondary mb-4">Product Not Found</h2>
        <Link to="/products" className="text-sky-500 font-bold uppercase tracking-widest">Back to Gallery</Link>
      </main>
    );
  }

  const images = [product.image, ...Array(3).fill(product.image).map((img, i) => `${img}&sig=${i + 1}`)];
  
  const shareMessage = `*Product Inquiry – Vinayaga Power Solutions* 

Hello,
I am interested in the following product and would like to know the pricing and availability details.

*Product Details*
• Name: ${product.name}
• Category: ${product.category}
• Grade: ${product.grade}

*Technical Specifications*
${Object.entries(product.specs).slice(0, 3).map(([key, val]) => `• ${key}: ${val}`).join('\n')}

*Product Link:*
${window.location.origin}/product/${product.id}

*Product Image:*
${product.image}

Please share the latest price, stock availability, and any warranty details.

Thank you.`;

  const whatsappUrl = `https://wa.me/${CONTACT_INFO.phones[0].replace(/\+/g, '').replace(/ /g, '')}?text=${encodeURIComponent(shareMessage)}`;

  return (
    <main className="pt-32 pb-20 bg-white relative min-h-screen">
      <BackButton />
      
      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
            onClick={() => setIsLightboxOpen(false)}
          >
            <button 
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
              onClick={() => setIsLightboxOpen(false)}
            >
              <X className="w-10 h-10" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={mainImage}
              alt={product.name}
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">
          {/* Left Column: Image Gallery */}
          <div className="space-y-6">
            <div 
              className="aspect-square rounded-[3rem] overflow-hidden bg-brand-surface border border-brand-muted/5 shadow-2xl relative group cursor-zoom-in"
              onClick={() => setIsLightboxOpen(true)}
            >
              <img 
                src={mainImage} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                referrerPolicy="no-referrer"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Maximize className="w-12 h-12 text-white" />
              </div>
              <div className="absolute top-8 left-8 bg-brand-secondary/90 backdrop-blur-md px-6 py-2 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl text-white">
                {product.grade}
              </div>
            </div>
            
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setMainImage(img)}
                  className={`aspect-square rounded-2xl overflow-hidden border-2 transition-all ${
                    mainImage === img ? 'border-brand-primary scale-95 shadow-lg' : 'border-brand-muted/10 hover:border-brand-primary/30'
                  }`}
                >
                  <img 
                    src={img} 
                    alt="Thumbnail" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </button>
              ))}
            </div>

            <div className="hidden lg:grid grid-cols-2 gap-6 pt-12 border-t border-brand-muted/10">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-brand-secondary uppercase tracking-widest">Certified Quality</h4>
                  <p className="text-xs text-brand-muted font-medium">Pre-tested & Verified</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center flex-shrink-0">
                  <Truck className="w-6 h-6 text-sky-500" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-brand-secondary uppercase tracking-widest">Quick Ship</h4>
                  <p className="text-xs text-brand-muted font-medium">Pan India Delivery</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Product Info */}
          <div className="flex flex-col">
            <div className="mb-8">
              <p className="text-brand-primary font-black text-[10px] uppercase tracking-[0.4em] mb-4">{product.category}</p>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-display font-black text-brand-secondary leading-tight md:leading-[0.85] tracking-tighter mb-6">
                {product.name}
              </h1>
              
              <div className="flex items-center space-x-6 mb-8 pb-8 border-b border-brand-muted/10">
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-500 fill-yellow-500' : 'text-brand-muted/20'}`} />
                    ))}
                  </div>
                  <span className="text-xs font-black text-brand-secondary">{product.rating}.0</span>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-4 mb-12">
                <h4 className="text-xs font-black text-brand-secondary uppercase tracking-widest mb-6">Technical Highlights</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                  {product.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-3 group">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary shadow-[0_0_8px_rgba(40,89,177,0.5)]" />
                      <span className="text-xs font-bold text-brand-muted group-hover:text-brand-secondary transition-colors">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-auto">
                <div className="p-8 bg-brand-secondary rounded-[2.5rem] shadow-2xl relative overflow-hidden group mb-8">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-brand-primary/20 transition-all duration-700" />
                  
                  <div className="relative z-10">
                    <div className="flex items-end justify-between mb-8">
                      <div>
                        <p className="text-[10px] font-black text-brand-primary uppercase tracking-[0.3em] mb-2">Pricing Inquiry</p>
                        <p className="text-white font-display text-2xl font-black">Request Quote</p>
                      </div>
                      <div className="text-right">
                         <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">In Stock</p>
                         <p className="text-white font-bold">Fast Dispatch</p>
                      </div>
                    </div>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full bg-brand-primary text-white font-black py-5 rounded-2xl shadow-xl shadow-brand-primary/40 hover:bg-white hover:text-brand-secondary transition-all flex items-center justify-center space-x-4 relative active:scale-95 group/btn"
                    >
                      <Zap className="w-6 h-6 fill-white group-hover/btn:fill-brand-secondary" />
                      <span className="text-xl tracking-tight">Connect on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Tabs */}
        <div className="mt-24 border-t border-brand-muted/10 pt-16">
          <div className="flex space-x-12 mb-12 border-b border-brand-muted/5 overflow-x-auto no-scrollbar">
            {['description', 'specs', 'reviews'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`pb-6 text-xs font-black uppercase tracking-[0.2em] transition-all relative ${
                  activeTab === tab ? 'text-brand-secondary' : 'text-brand-muted hover:text-brand-secondary'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-1 bg-sky-500 rounded-full" />
                )}
              </button>
            ))}
          </div>

          <div className="max-w-4xl">
            <AnimatePresence mode="wait">
              {activeTab === 'description' && (
                <motion.div
                  key="desc"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="prose prose-sky max-w-none"
                >
                  <p className="text-xl text-brand-muted leading-relaxed font-medium">
                    {product.description}
                  </p>
                </motion.div>
              )}

              {activeTab === 'specs' && (
                <motion.div
                  key="specs"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {Object.entries(product.specs).map(([label, value]) => (
                    <div key={label} className="p-8 bg-brand-surface rounded-3xl border border-brand-muted/5 group hover:border-sky-100 transition-all">
                      <p className="text-[10px] font-bold text-brand-muted uppercase tracking-widest mb-2">{label}</p>
                      <p className="text-lg font-black text-brand-secondary">{value}</p>
                    </div>
                  ))}
                </motion.div>
              )}

              {activeTab === 'reviews' && (
                <motion.div
                  key="reviews"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-8"
                >
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="p-8 bg-brand-surface rounded-[2.5rem] border border-brand-muted/5">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="flex">
                          {[...Array(5)].map((_, j) => (
                            <Star key={j} className={`w-3 h-3 ${j < 4 ? 'text-yellow-500 fill-yellow-500' : 'text-brand-muted/20'}`} />
                          ))}
                        </div>
                        <span className="text-[10px] font-black uppercase text-brand-secondary">Verified Purchase</span>
                      </div>
                      <p className="text-brand-secondary font-bold mb-4 italic">"Absolutely phenomenal quality. Exceeded my expectations in every technical aspect."</p>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center text-[10px] font-black text-sky-600">JD</div>
                        <span className="text-[10px] font-black uppercase text-brand-muted">John Doe — 2 weeks ago</span>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </main>
  );
}
