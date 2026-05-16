/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useBrand } from '../context/BrandContext';
import { Settings } from 'lucide-react';

export default function Header() {
  const { logo } = useBrand();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Gallery', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const productDropdownItems = [
    { name: 'UPS', path: '/products#ups-systems' },
    { name: 'Stabilizer', path: '/products#inverters' },
    { name: 'Battery', path: '/products#batteries' },
    { name: 'RO Systems', path: '/products#ro-systems' },
    { name: 'CCTV', path: '/products#cctv' },
  ];

  const headerClass = isScrolled 
    ? "bg-white/90 backdrop-blur-md shadow-lg py-2" 
    : "bg-white py-4 shadow-sm";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClass}`}>
      {/* Scroll Progress Indicator */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-brand-primary origin-left z-50 opacity-80"
        style={{ scaleX }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center space-x-4 focus:outline-none group"
          >
            <div className="flex-shrink-0">
              <img 
                src={logo} 
                alt="Vinayaga Power Solutions Logo" 
                className="h-[50px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="hidden sm:block text-left border-l-2 border-brand-primary/20 pl-4">
              <span className="block text-lg font-black text-brand-secondary leading-none uppercase tracking-tight">Vinayaga</span>
              <span className="block text-[10px] font-bold text-brand-primary uppercase tracking-[0.2em] mt-0.5">Power Solutions</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) => `text-[15px] font-semibold transition-colors ${
                isActive ? 'text-brand-primary' : 'text-brand-secondary hover:text-brand-primary'
              }`}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => `text-[15px] font-semibold transition-colors ${
                isActive ? 'text-brand-primary' : 'text-brand-secondary hover:text-brand-primary'
              }`}
            >
              About Us
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) => `text-[15px] font-semibold transition-colors ${
                isActive ? 'text-brand-primary' : 'text-brand-secondary hover:text-brand-primary'
              }`}
            >
              Gallery
            </NavLink>

            {/* Products Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setIsProductsDropdownOpen(true)}
                className={`flex items-center space-x-1 text-[15px] font-semibold transition-colors ${
                  location.pathname === '/products' && location.hash ? 'text-brand-primary' : 'text-brand-secondary hover:text-brand-primary'
                }`}
              >
                <span>Store</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isProductsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div 
                onMouseLeave={() => setIsProductsDropdownOpen(false)}
                className={`absolute top-full left-1/2 -translate-x-1/2 w-48 bg-white shadow-2xl rounded-xl border border-brand-muted/10 py-3 transition-all duration-300 ${
                  isProductsDropdownOpen ? 'opacity-100 translate-y-2' : 'opacity-0 translate-y-0 pointer-events-none'
                }`}
              >
                {productDropdownItems.map((p) => (
                  <Link
                    key={p.name}
                    to={p.path}
                    className="w-full px-6 py-2 text-left text-sm font-medium text-brand-secondary hover:bg-brand-surface hover:text-brand-primary transition-colors flex justify-between items-center"
                    onClick={() => setIsProductsDropdownOpen(false)}
                  >
                    {p.name}
                    <span className="text-[10px]">&gt;</span>
                  </Link>
                ))}
              </div>
            </div>

            <NavLink
               to="/services"
               className={({ isActive }) => `text-[15px] font-semibold transition-colors ${
                 isActive ? 'text-brand-primary' : 'text-brand-secondary hover:text-brand-primary'
               }`}
            >
              Services
            </NavLink>
            <NavLink
               to="/contact"
               className={({ isActive }) => `text-[15px] font-semibold transition-colors ${
                 isActive ? 'text-brand-primary' : 'text-brand-secondary hover:text-brand-primary'
               }`}
            >
              Contact
            </NavLink>
            <Link
              to="/brand-manager"
              className="w-10 h-10 rounded-full flex items-center justify-center text-brand-muted hover:text-brand-primary hover:bg-brand-surface transition-all"
              title="Brand Manager"
            >
              <Settings className="w-5 h-5" />
            </Link>
          </nav>

          <div className="flex items-center gap-3">
              {/* Mobile Menu Button with Custom Animation */}
              <button
                className="md:hidden w-12 h-12 flex flex-col items-center justify-center gap-1.5 text-brand-secondary focus:outline-none group relative"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle Menu"
              >
                <motion.span 
                  animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 8 : 0 }}
                  className="w-6 h-0.5 bg-current rounded-full transition-transform"
                />
                <motion.span 
                  animate={{ opacity: isMobileMenuOpen ? 0 : 1, x: isMobileMenuOpen ? 10 : 0 }}
                  className="w-4 h-0.5 bg-current rounded-full transition-all"
                />
                <motion.span 
                  animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -8 : 0 }}
                  className="w-6 h-0.5 bg-current rounded-full transition-transform"
                />
              </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px]"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Content */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-brand-muted/10 overflow-hidden z-50 rounded-b-[2rem]"
          >
            <div className="p-8 pb-12 space-y-8 max-h-[85vh] overflow-y-auto">
              <nav className="space-y-4">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20, rotateX: -15 }}
                    animate={{ opacity: 1, x: 0, rotateX: 0 }}
                    transition={{ delay: i * 0.08 + 0.1, type: "spring" }}
                  >
                    <NavLink
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={({ isActive }) => `block w-full text-left text-4xl font-black transition-all ${
                        isActive && !location.hash 
                          ? 'text-brand-primary scale-105 origin-left' 
                          : 'text-brand-secondary hover:text-brand-primary hover:translate-x-2'
                      }`}
                    >
                      {item.name}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (navItems.length * 0.08) + 0.2 }}
                className="pt-8 border-t border-brand-muted/10"
              >
                <div className="flex items-center justify-between mb-6">
                  <p className="text-[11px] font-black text-brand-muted uppercase tracking-[0.3em] flex items-center gap-2">
                    <span className="w-4 h-px bg-brand-muted/30" />
                    Our Collection
                  </p>
                  <Link 
                    to="/products" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-[10px] font-bold text-brand-primary uppercase tracking-widest bg-brand-primary/5 px-3 py-1.5 rounded-full hover:bg-brand-primary hover:text-white transition-all shadow-sm"
                  >
                    View All
                  </Link>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {productDropdownItems.map((p, i) => (
                    <motion.div
                      key={p.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: (navItems.length * 0.08) + 0.3 + (i * 0.05) }}
                    >
                      <Link
                        to={p.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center justify-between px-5 py-4 rounded-2xl bg-brand-surface border border-brand-muted/5 text-lg font-bold text-brand-secondary hover:bg-white hover:border-brand-primary/20 hover:shadow-md active:scale-95 transition-all"
                      >
                        {p.name}
                        <div className="w-8 h-8 rounded-full bg-brand-muted/5 flex items-center justify-center group-hover:bg-brand-primary/10 transition-colors">
                          <ChevronDown className="-rotate-90 w-4 h-4 text-brand-primary" />
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Social or Quick Contact for Mobile */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-4"
              >
                <a href="tel:+919842777174" className="flex items-center gap-2 text-[10px] font-black text-brand-muted uppercase tracking-widest hover:text-brand-primary transition-colors bg-brand-surface/50 px-4 py-2 rounded-xl border border-brand-muted/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  Call Support
                </a>
                <a href="mailto:contact@vinayaga.com" className="text-[10px] font-black text-brand-muted uppercase tracking-widest hover:text-brand-primary transition-colors px-2 py-1">Email Us</a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
