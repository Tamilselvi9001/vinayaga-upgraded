/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { X, Scale, Zap, ShieldCheck, Check } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  sku: string;
  category: string;
  image: string;
  rating: number;
}

interface ProductComparisonModalProps {
  products: Product[];
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductComparisonModal({ products, isOpen, onClose }: ProductComparisonModalProps) {
  if (products.length === 0) return null;

  // Mock specs for comparison as the primary data is generated
  const specKeys = ["Efficiency", "Durability", "Grade", "Connectivity"];

  const getSpecValue = (product: Product, key: string) => {
    // In a real app, this would come from the product object
    // For the gallery view, we use deterministic mock specs
    if (key === "Grade") return "Industrial";
    if (key === "Connectivity") return product.category === "CCTV Systems" ? "Wireless/POE" : "Standard";
    if (key === "Efficiency") return `${95 + (product.rating % 5)}% Rated`;
    return "Heavy Duty";
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-secondary/90 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-6xl bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            <div className="p-8 border-b border-brand-muted/10 flex items-center justify-between bg-brand-surface">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-sky-500 rounded-2xl text-white shadow-lg shadow-sky-500/20">
                  <Scale className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-black text-brand-secondary">Unit Comparison</h2>
                  <p className="text-xs font-bold text-brand-muted uppercase tracking-widest mt-1">Side-by-side performance analysis</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-3 hover:bg-white rounded-full transition-colors border border-transparent hover:border-brand-muted/10"
              >
                <X className="w-6 h-6 text-brand-secondary" />
              </button>
            </div>

            <div className="flex-1 overflow-x-auto overflow-y-auto custom-scrollbar p-8">
              <table className="w-full text-left min-w-[600px]">
                <thead>
                  <tr>
                    <th className="pb-8 pr-8 w-1/4">
                      <div className="text-[10px] font-black text-brand-muted uppercase tracking-[0.2em]">Specification</div>
                    </th>
                    {products.map((p) => (
                      <th key={p.id} className="pb-8 px-4 w-1/4 min-w-[200px]">
                        <div className="flex flex-col items-center text-center">
                          <img 
                            src={p.image} 
                            alt={p.name} 
                            className="w-24 h-24 object-cover rounded-2xl mb-4 border border-brand-muted/10 shadow-sm"
                            referrerPolicy="no-referrer"
                          />
                          <span className="font-display font-bold text-brand-secondary text-sm line-clamp-1">{p.name}</span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-muted/10">
                  <tr>
                    <td className="py-6 font-bold text-brand-secondary flex items-center pr-8">
                      <ShieldCheck className="w-4 h-4 mr-2 text-sky-500" />
                      Category
                    </td>
                    {products.map((p) => (
                      <td key={p.id} className="py-6 px-4 text-center text-brand-muted text-sm font-medium">{p.category}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-6 font-bold text-brand-secondary flex items-center pr-8">
                      <Zap className="w-4 h-4 mr-2 text-sky-500" />
                      Performance
                    </td>
                    {products.map((p) => (
                      <td key={p.id} className="py-6 px-4 text-center font-black text-brand-secondary">
                        <div className="flex justify-center space-x-1">
                          {[...Array(p.rating)].map((_, i) => (
                            <div key={i} className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                          ))}
                        </div>
                      </td>
                    ))}
                  </tr>
                  {specKeys.map((key) => (
                    <tr key={key}>
                      <td className="py-6 font-bold text-brand-secondary flex items-center pr-8">
                        <Check className="w-4 h-4 mr-2 text-sky-500" />
                        {key}
                      </td>
                      {products.map((p) => (
                        <td key={p.id} className="py-6 px-4 text-center text-brand-muted text-sm font-medium">
                          {getSpecValue(p, key)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-8 bg-brand-surface border-t border-brand-muted/10 flex justify-center">
              <button
                onClick={onClose}
                className="bg-brand-secondary text-white font-black px-12 py-4 rounded-2xl hover:bg-black transition-all active:scale-95"
              >
                Close Comparison
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
