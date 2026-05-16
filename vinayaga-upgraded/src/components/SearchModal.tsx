import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, Zap, Settings, Image as ImageIcon, Info, MessageSquare, ArrowRight } from 'lucide-react';
import { PRODUCTS, SERVICES } from '../constants';

interface SearchItem {
  id: string;
  title: string;
  description: string;
  type: 'page' | 'product' | 'service';
  pageId: string;
  icon: any;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (pageId: string) => void;
}

export default function SearchModal({ isOpen, onClose, onNavigate }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const searchableItems: SearchItem[] = [
    { id: 'home', title: 'Home', description: 'Main page of Vinayaga Power Solutions', type: 'page', pageId: 'home', icon: Zap },
    { id: 'about', title: 'About Us', description: 'Learn about our journey and expertise', type: 'page', pageId: 'about', icon: Info },
    { id: 'gallery', title: 'Gallery / Products', description: 'View our wide range of power products', type: 'page', pageId: 'gallery', icon: ImageIcon },
    { id: 'services', title: 'Services', description: 'Explore our installation and AMC services', type: 'page', pageId: 'services', icon: Settings },
    { id: 'contact', title: 'Contact', description: 'Get in touch for specialized solutions', type: 'page', pageId: 'contact', icon: MessageSquare },
    ...PRODUCTS.map(p => ({
      id: p.id,
      title: p.name,
      description: p.description,
      type: 'product' as const,
      pageId: 'gallery',
      icon: Zap
    })),
    ...SERVICES.map(s => ({
      id: s.id,
      title: s.title,
      description: s.description,
      type: 'service' as const,
      pageId: 'services',
      icon: Settings
    }))
  ];

  const filteredItems = query.trim() === '' 
    ? [] 
    : searchableItems.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) || 
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.type.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 8);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setQuery('');
    }
  }, [isOpen]);

  const handleItemClick = (pageId: string) => {
    onNavigate(pageId);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[10000] flex items-start justify-center pt-20 px-4 md:pt-32">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-secondary/80 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
          >
            {/* Search Input Area */}
            <div className="relative p-6 border-b border-gray-100">
              <Search className="absolute left-10 top-1/2 -translate-y-1/2 w-6 h-6 text-brand-primary" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products, services, pages..."
                className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-14 pr-12 text-lg font-medium focus:ring-4 focus:ring-brand-primary/10 outline-none placeholder:text-gray-400"
              />
              <button
                onClick={onClose}
                className="absolute right-10 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-100 rounded-xl transition-colors"
                title="Close"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Results Area */}
            <div className="max-h-[60vh] overflow-y-auto p-4 custom-scrollbar">
              {query.trim() === '' ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 bg-brand-primary/5 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-brand-primary/30" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-secondary mb-2">Search Everything</h3>
                  <p className="text-brand-muted text-sm px-8">Find exactly what you need from our wide selection of UPS, Solar systems, and Maintenance services.</p>
                </div>
              ) : filteredItems.length > 0 ? (
                <div className="space-y-2">
                  <div className="px-4 py-2">
                    <span className="text-[10px] font-bold text-brand-muted uppercase tracking-widest">
                      Found {filteredItems.length} Result{filteredItems.length !== 1 ? 's' : ''}
                    </span>
                  </div>
                  {filteredItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={`${item.type}-${item.id}`}
                        onClick={() => handleItemClick(item.pageId)}
                        className="w-full flex items-center p-4 hover:bg-slate-50 rounded-2xl transition-all group text-left"
                      >
                        <div className="w-12 h-12 rounded-xl bg-brand-primary/5 flex items-center justify-center mr-4 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <h4 className="font-bold text-brand-secondary group-hover:text-brand-primary transition-colors">
                              {item.title}
                            </h4>
                            <span className="text-[10px] font-bold bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full uppercase tracking-tighter">
                              {item.type}
                            </span>
                          </div>
                          <p className="text-xs text-brand-muted line-clamp-1 mt-1">
                            {item.description}
                          </p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-brand-muted opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <X className="w-8 h-8 text-red-500/30" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-secondary mb-2">No Results Found</h3>
                  <p className="text-brand-muted text-sm px-8">We couldn't find anything matching "{query}". Try different keywords like "UPS", "Solar", or "AMC".</p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="bg-gray-50 p-4 border-t border-gray-100 flex justify-between items-center px-8">
              <div className="flex items-center space-x-4 text-[10px] font-bold text-brand-muted uppercase tracking-widest">
                <span>Quick Search:</span>
                <button onClick={() => setQuery('UPS')} className="hover:text-brand-primary transition-colors underline decoration-brand-primary/30">UPS</button>
                <button onClick={() => setQuery('Solar')} className="hover:text-brand-primary transition-colors underline decoration-brand-primary/30">Solar</button>
                <button onClick={() => setQuery('Battery')} className="hover:text-brand-primary transition-colors underline decoration-brand-primary/30">Battery</button>
              </div>
              <p className="text-[10px] font-bold text-brand-muted uppercase tracking-widest">
                ESC to close
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
