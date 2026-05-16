/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Instagram, Twitter, Facebook } from 'lucide-react';
import { useBrand } from '../context/BrandContext';
import { COMPANY_NAME, CONTACT_INFO } from '../constants';

export default function Footer() {
  const { logo } = useBrand();
  return (
    <footer className="bg-[#1B2945] text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div>
            <div className="flex items-center space-x-4 mb-8">
              <div className="flex-shrink-0 bg-white p-1.5 rounded-xl shadow-lg border border-white/10">
                <img 
                  src={logo} 
                  alt="Vinayaga Power Solutions Logo" 
                  className="h-10 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-xl font-display font-bold tracking-tight">
                Vinayaga <span className="text-brand-primary">Power</span>
              </h3>
            </div>
            <p className="text-white/60 leading-relaxed text-sm mb-10">
              Vinayaga power solutions are one of the well-known brands in the field of Industrial and Domestic power Electronics. Our brand is formally known as "VPS".
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-brand-primary">Company</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Products', path: '/products' },
                { name: 'Services', path: '/services' },
                { name: 'Contact', path: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-white/60 hover:text-brand-primary transition-all text-sm font-medium flex items-center group"
                  >
                    <span className="mr-2 transition-transform duration-300 group-hover:translate-x-1">&gt;</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-brand-primary">Products</h4>
            <ul className="space-y-4">
              {[
                { name: 'UPS Systems', hash: '#ups-systems' },
                { name: 'Batteries', hash: '#batteries' },
                { name: 'Inverters', hash: '#inverters' },
                { name: 'RO Systems', hash: '#ro-systems' },
                { name: 'CCTV Solutions', hash: '#cctv' }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={`/products${item.hash}`}
                    className="text-white/60 hover:text-brand-primary transition-all text-sm font-medium flex items-center group"
                  >
                    <span className="mr-2 transition-transform duration-300 group-hover:translate-x-1">&gt;</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-lg font-bold mb-8">Contact Info</h4>
            <div className="space-y-6 md:space-y-5">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-primary shrink-0 mt-1" />
                <p className="text-white/60 text-sm leading-relaxed">
                  {CONTACT_INFO.address}
                </p>
              </div>
              <a 
                href={`tel:${CONTACT_INFO.phones[0].replace(/\s+/g, '')}`}
                className="flex items-center space-x-3 group relative cursor-pointer py-1" 
                title={CONTACT_INFO.phones[0]}
              >
                <Phone className="w-5 h-5 text-brand-primary shrink-0 transition-transform group-hover:scale-110" />
                <p className="text-white/60 text-sm font-medium transition-colors group-hover:text-brand-primary">{CONTACT_INFO.phones[0]}</p>
              </a>
              <a 
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center space-x-3 group relative cursor-pointer py-1" 
                title={CONTACT_INFO.email}
              >
                <Mail className="w-5 h-5 text-brand-primary shrink-0 transition-transform group-hover:scale-110" />
                <p className="text-white/60 text-sm font-medium transition-colors group-hover:text-brand-primary">{CONTACT_INFO.email}</p>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 text-center">
          <p className="text-sm text-white/40">
            Copyright © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
