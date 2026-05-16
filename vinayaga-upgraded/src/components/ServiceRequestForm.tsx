import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, AlertCircle, Wrench, User, Phone, Mail, MessageSquare, ChevronDown } from 'lucide-react';

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  serviceType: string;
  message: string;
}

const SERVICE_TYPES = [
  'UPS Maintenance',
  'Interverter Repair',
  'Battery Testing',
  'RO System Service',
  'CCTV Installation',
  'Electrical Audit',
  'General Inquiry'
];

export default function ServiceRequestForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phone: '',
    email: '',
    serviceType: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.serviceType) newErrors.serviceType = 'Please select a service type';
    if (!formData.message.trim()) newErrors.message = 'Please provide details about the issue';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        serviceType: '',
        message: ''
      });
      
      // Reset after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div id="service-request-form" className="w-full">
      <div className="bg-white rounded-[2.5rem] shadow-2xl border border-brand-muted/10 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-5 h-full">
          {/* Header Info - Left Side */}
          <div className="lg:col-span-2 relative p-8 md:p-12 text-white flex flex-col justify-between overflow-hidden">
            {/* Background Image for Left Side */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&q=100&w=3840" 
                alt="Support" 
                className="w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-brand-secondary/90" />
            </div>

            <div className="relative z-10">
              <div className="w-16 h-16 bg-brand-primary rounded-2xl flex items-center justify-center mb-8 shadow-xl">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-display font-black leading-tight mb-6">
                Request a <br />
                <span className="text-brand-primary italic">Service Call.</span>
              </h3>
              <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-sm">
                Our technicians are ready to assist you. Fill out the form and we'll be in touch within 2-4 business hours.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-brand-primary" />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-widest text-white/90">Certified Technicians</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-brand-primary" />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-widest text-white/90">Genuine Spare Parts</span>
                </div>
              </div>
            </div>
            
            <div className="relative z-10 mt-12 pt-12 border-t border-white/10">
              <p className="text-[10px] font-black text-white/60 uppercase tracking-[0.3em] mb-4">Immediate Emergency?</p>
              <a href="tel:+919842777174" className="text-xl font-bold hover:text-brand-primary transition-colors">
                +91 98427-77174
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-3 p-8 md:p-12">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-8">
                    <CheckCircle2 className="w-12 h-12 text-green-600" />
                  </div>
                  <h4 className="text-3xl font-display font-black text-brand-secondary mb-4">Request Logged!</h4>
                  <p className="text-brand-muted max-w-xs mx-auto text-lg leading-relaxed">
                    Work order #VRW-{Math.floor(Math.random() * 9000) + 1000} has been created. A technician will contact you shortly.
                  </p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-10 text-brand-primary font-black uppercase text-xs tracking-widest hover:underline"
                  >
                    Submit another request
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-brand-muted px-1 flex items-center">
                        <User className="w-3 h-3 mr-2 text-brand-primary" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={`w-full bg-brand-surface rounded-2xl px-5 py-4 border-2 transition-all outline-none text-brand-secondary font-bold ${
                          errors.fullName ? 'border-red-500 bg-red-50' : 'border-transparent focus:border-brand-primary/20 focus:bg-white focus:shadow-xl'
                        }`}
                        placeholder="John Doe"
                      />
                      {errors.fullName && <p className="text-[10px] font-bold text-red-500 mt-1 uppercase px-1">{errors.fullName}</p>}
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-brand-muted px-1 flex items-center">
                        <Phone className="w-3 h-3 mr-2 text-brand-primary" />
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full bg-brand-surface rounded-2xl px-5 py-4 border-2 transition-all outline-none text-brand-secondary font-bold ${
                          errors.phone ? 'border-red-500 bg-red-50' : 'border-transparent focus:border-brand-primary/20 focus:bg-white focus:shadow-xl'
                        }`}
                        placeholder="+91 XXXXX XXXXX"
                      />
                      {errors.phone && <p className="text-[10px] font-bold text-red-500 mt-1 uppercase px-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-brand-muted px-1 flex items-center">
                        <Mail className="w-3 h-3 mr-2 text-brand-primary" />
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full bg-brand-surface rounded-2xl px-5 py-4 border-2 transition-all outline-none text-brand-secondary font-bold ${
                          errors.email ? 'border-red-500 bg-red-50' : 'border-transparent focus:border-brand-primary/20 focus:bg-white focus:shadow-xl'
                        }`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="text-[10px] font-bold text-red-500 mt-1 uppercase px-1">{errors.email}</p>}
                    </div>

                    {/* Service Type */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-brand-muted px-1 flex items-center">
                        <Wrench className="w-3 h-3 mr-2 text-brand-primary" />
                        Service Required *
                      </label>
                      <div className="relative">
                        <select
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleChange}
                          className={`w-full bg-brand-surface rounded-2xl px-5 py-4 border-2 transition-all outline-none text-brand-secondary font-bold appearance-none cursor-pointer ${
                            errors.serviceType ? 'border-red-500 bg-red-50' : 'border-transparent focus:border-brand-primary/20 focus:bg-white focus:shadow-xl'
                          }`}
                        >
                          <option value="">Select Service</option>
                          {SERVICE_TYPES.map(type => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-muted pointer-events-none" />
                      </div>
                      {errors.serviceType && <p className="text-[10px] font-bold text-red-500 mt-1 uppercase px-1">{errors.serviceType}</p>}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-brand-muted px-1 flex items-center">
                      <MessageSquare className="w-3 h-3 mr-2 text-brand-primary" />
                      Issue Description *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className={`w-full bg-brand-surface rounded-[2rem] px-5 py-4 border-2 transition-all outline-none text-brand-secondary font-bold resize-none ${
                        errors.message ? 'border-red-500 bg-red-50' : 'border-transparent focus:border-brand-primary/20 focus:bg-white focus:shadow-xl'
                      }`}
                      placeholder="Please describe the issue you are facing..."
                    />
                    {errors.message && <p className="text-[10px] font-bold text-red-500 mt-1 uppercase px-1">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full bg-brand-primary text-white px-8 py-5 rounded-2xl font-black uppercase text-sm tracking-[0.2em] shadow-xl hover:shadow-2xl hover:-translate-y-1 active:translate-y-0 transition-all flex items-center justify-center group disabled:opacity-70 disabled:pointer-events-none"
                    >
                      {status === 'submitting' ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3" />
                          Scheduling...
                        </>
                      ) : (
                        <>
                          Schedule Service Call
                          <Send className="w-4 h-4 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>
                    
                    <p className="text-[10px] text-center text-brand-muted mt-6 uppercase tracking-widest opacity-60">
                      Private Secure Submission <span className="mx-2">•</span> Est. Response 2-4hrs
                    </p>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
