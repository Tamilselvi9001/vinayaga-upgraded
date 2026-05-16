/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Mail, MapPin, Phone, MessageSquare, Zap, AlertCircle, CheckCircle2 } from 'lucide-react';
import { LumaSpin as Component } from '@/src/components/ui/luma-spin';
import { CONTACT_INFO } from '../constants';
import BackButton from '../components/BackButton';

interface FormData {
  fullName: string;
  phone: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  message?: string;
}

export default function Contact() {
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 500], [0, 150]);
  const yText = useTransform(scrollY, [0, 500], [0, -50]);

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateField = (name: string, value: string) => {
    let error = '';
    switch (name) {
      case 'fullName':
        if (!value.trim()) error = 'Name is required';
        else if (value.trim().length < 3) error = 'Minimum 3 characters';
        break;
      case 'phone':
        const phoneRegex = /^\+?[\d\s-]{10,}$/;
        if (!value.trim()) error = 'Phone number is required';
        else if (!phoneRegex.test(value)) error = 'Invalid phone format';
        break;
      case 'message':
        if (!value.trim()) error = 'Details are required';
        else if (value.trim().length < 10) error = 'Minimum 10 characters';
        break;
    }
    return error;
  };

  useEffect(() => {
    const newErrors: FormErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key as keyof FormData]);
      if (error) newErrors[key as keyof FormErrors] = error;
    });
    setErrors(newErrors);
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark all as touched
    const allTouched = Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {});
    setTouched(allTouched);

    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        fullName: '',
        phone: '',
        message: ''
      });
      setTouched({});
      setTimeout(() => setIsSuccess(false), 5000);
    }
  };

  const getInputStatus = (name: keyof FormErrors) => {
    if (!touched[name]) return 'neutral';
    return errors[name] ? 'error' : 'success';
  };
  return (
    <main className="pt-20 bg-brand-bg relative">
      <BackButton />
      <section className="relative py-32 lg:py-48 bg-brand-secondary overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <motion.img 
            style={{ y: yHero }}
            src="https://images.unsplash.com/photo-1516383274235-5f42d6c6426d?auto=format&fit=crop&q=100&w=3840" 
            alt="Customer Support Center" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent z-20" />
        </div>

        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ y: yText }}
            className="flex flex-col items-center text-center"
          >
            <h1 className="text-5xl sm:text-7xl md:text-9xl font-display font-black text-white tracking-tighter leading-none mb-6">
              Let's Talk <br />
              <span className="italic">Power.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-brand-bg relative z-10">
        {/* Leadership Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-16 p-8 md:p-16 bg-white rounded-3xl md:rounded-[4rem] border border-brand-muted/10 shadow-xl"
          >
            <div className="relative w-56 h-56 md:w-80 md:h-80 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl flex-shrink-0 group">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=100&w=3840" 
                alt="Vinoth Kumar - Proprietor" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary/40 to-transparent" />
              <div className="absolute inset-0 ring-1 ring-inset ring-brand-primary/20 rounded-[2rem] md:rounded-[3rem]" />
            </div>
            <div className="text-center md:text-left space-y-6">
              <div className="space-y-2">
                <span className="text-sm font-bold text-brand-primary uppercase tracking-[0.4em] block drop-shadow-sm">Founder & Proprietor</span>
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-black text-brand-secondary tracking-tight">Vinoth Kumar</h2>
              </div>
              <p className="text-xl text-brand-muted leading-relaxed max-w-2xl italic font-medium">
                "Our journey at Vinayaga Power Solutions has always been about more than just equipment. It's about empowering lives and industries with the stability they deserve. We stand by every installation with the promise of reliability."
              </p>
              <div className="flex items-center justify-center md:justify-start space-x-4 pt-4">
                 <div className="w-12 h-px bg-brand-primary/30" />
                 <span className="text-sm font-bold text-brand-secondary/50 uppercase tracking-widest">15+ Years of Leadership</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-3xl font-display font-bold text-brand-secondary mb-6">Our Headquarters</h2>
                <p className="text-brand-muted text-lg leading-relaxed">
                  Available for in-person consultations and localized technical support across Southern Tamil Nadu.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8">
                <div className="flex items-start space-x-6 group">
                  <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-1 block">Visit Us</span>
                    <p className="text-xl font-bold text-brand-secondary">{CONTACT_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-1 block">Call Directly</span>
                    <div className="space-y-1">
                      {CONTACT_INFO.phones.map(p => (
                        <p key={p} className="text-xl font-bold text-brand-secondary">{p}</p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-1 block">Email Support</span>
                    <p className="text-xl font-bold text-brand-secondary">{CONTACT_INFO.email}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 md:p-14 rounded-[3rem] border border-brand-muted/10 shadow-2xl relative"
            >
              <div className="absolute top-0 right-10 -translate-y-1/2 p-6 bg-brand-primary rounded-3xl text-white shadow-xl shadow-brand-primary/20">
                 <MessageSquare className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-display font-bold text-brand-secondary mb-8">Send Request</h3>
              
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-8 p-4 bg-green-50 border border-green-200 rounded-2xl flex items-center space-x-3 text-green-700 font-medium"
                  >
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <p>Inquiry sent successfully! We'll contact you soon.</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center ml-1">
                      <label className="text-xs font-bold text-brand-muted uppercase tracking-widest">Full Name</label>
                      {touched.fullName && errors.fullName && (
                        <span className="text-[10px] font-bold text-red-500 uppercase flex items-center">
                          <AlertCircle className="w-3 h-3 mr-1" />
                          {errors.fullName}
                        </span>
                      )}
                    </div>
                    <div className="relative">
                      <input 
                        name="fullName"
                        type="text" 
                        value={formData.fullName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full bg-slate-50 border rounded-2xl p-4 outline-none transition-all font-medium ${
                          getInputStatus('fullName') === 'error' 
                            ? 'border-red-500 ring-4 ring-red-500/10' 
                            : getInputStatus('fullName') === 'success'
                            ? 'border-green-500 ring-4 ring-green-500/10'
                            : 'border-brand-muted/10 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10'
                        }`} 
                        placeholder="Ex: Vinoth Kumar" 
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center ml-1">
                      <label className="text-xs font-bold text-brand-muted uppercase tracking-widest">Phone Number</label>
                      {touched.phone && errors.phone && (
                        <span className="text-[10px] font-bold text-red-500 uppercase flex items-center">
                          <AlertCircle className="w-3 h-3 mr-1" />
                          {errors.phone}
                        </span>
                      )}
                    </div>
                    <input 
                      name="phone"
                      type="tel" 
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full bg-slate-50 border rounded-2xl p-4 outline-none transition-all font-medium ${
                        getInputStatus('phone') === 'error' 
                          ? 'border-red-500 ring-4 ring-red-500/10' 
                          : getInputStatus('phone') === 'success'
                          ? 'border-green-500 ring-4 ring-green-500/10'
                          : 'border-brand-muted/10 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10'
                      }`} 
                      placeholder="+91 XXXX XXX XXX" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center ml-1">
                    <label className="text-xs font-bold text-brand-muted uppercase tracking-widest">Project Details</label>
                    {touched.message && errors.message && (
                      <span className="text-[10px] font-bold text-red-500 uppercase flex items-center">
                        <AlertCircle className="w-3 h-3 mr-1" />
                        {errors.message}
                      </span>
                    )}
                  </div>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full bg-slate-50 border rounded-2xl p-4 outline-none transition-all font-medium h-32 resize-none ${
                        getInputStatus('message') === 'error' 
                          ? 'border-red-500 ring-4 ring-red-500/10' 
                          : getInputStatus('message') === 'success'
                          ? 'border-green-500 ring-4 ring-green-500/10'
                          : 'border-brand-muted/10 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10'
                      }`} 
                    placeholder="Describe your power requirements..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-brand-primary text-white py-5 rounded-2xl font-bold text-lg transition-all active:scale-95 flex items-center justify-center space-x-3 overflow-hidden relative group ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-brand-accent hover:shadow-xl hover:shadow-brand-primary/20'
                  }`}
                >
                  {isSubmitting ? (
                    <Component className="w-6 h-6 flex-shrink-0" />
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Zap className="w-5 h-5 group-hover:animate-bounce" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Interactive Google Map */}
      <section className="py-24 bg-brand-surface border-t border-brand-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-[300px] sm:h-[400px] lg:h-[550px] bg-slate-200 rounded-3xl md:rounded-[3rem] relative overflow-hidden shadow-2xl border border-brand-muted/10">
            <iframe 
              src="https://www.google.com/maps?q=3/98,+Dindigul+Main+Road,+Samayanallur,+Madurai+-+625402&output=embed"
              className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vinayaga Power Solutions Headquarters"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
