import React, { useState, useCallback } from 'react';
import { Upload, X, Check, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useBrand } from '../context/BrandContext';

const LogoUploader: React.FC = () => {
  const { logo, updateLogo, resetLogo } = useBrand();
  const [isDragging, setIsDragging] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFile = useCallback((file: File) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setPreview(result);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onDragLeave = () => {
    setIsDragging(false);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const handleSave = () => {
    if (preview) {
      updateLogo(preview);
      setPreview(null);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl border border-brand-muted/10 max-w-2xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-display font-black text-brand-secondary mb-2">Company Identity</h2>
        <p className="text-brand-muted text-sm uppercase tracking-widest font-bold">Manage Company Logo</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Current Logo Display */}
        <div className="space-y-4">
          <label className="text-xs font-black text-brand-muted uppercase tracking-tighter block">Current Active Logo</label>
          <div className="h-48 rounded-2xl bg-brand-surface border border-brand-muted/5 flex items-center justify-center p-8 relative overflow-hidden group">
            <img 
              src={logo} 
              alt="Current Logo" 
              className="max-h-full max-w-full object-contain relative z-10"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <button 
            onClick={resetLogo}
            className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest text-red-500 hover:text-red-600 transition-colors"
          >
            <RefreshCw className="w-3 h-3" />
            <span>Reset to Default</span>
          </button>
        </div>

        {/* Upload Area */}
        <div className="space-y-4">
          <label className="text-xs font-black text-brand-muted uppercase tracking-tighter block">
            {preview ? 'Preview Selection' : 'Upload New Design'}
          </label>
          
          <AnimatePresence mode="wait">
            {!preview ? (
              <motion.div
                key="uploader"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onDragOver={onDragOver}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
                className={`h-48 rounded-2xl border-2 border-dashed transition-all cursor-pointer flex flex-col items-center justify-center space-y-3 relative group
                  ${isDragging ? 'border-brand-primary bg-brand-primary/5' : 'border-brand-muted/20 hover:border-brand-primary/40 hover:bg-brand-surface'}`}
              >
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={onFileChange}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
                <div className="w-12 h-12 rounded-full bg-brand-surface flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform">
                  <Upload className="w-6 h-6" />
                </div>
                <div className="text-center">
                  <p className="text-xs font-bold text-brand-secondary">Click or drag & drop</p>
                  <p className="text-[10px] text-brand-muted mt-1">PNG, JPG or SVG (Max 5MB)</p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="preview"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-48 rounded-2xl border-2 border-brand-primary bg-brand-primary/5 flex flex-col items-center justify-center p-8 relative"
              >
                <img src={preview} alt="Upload Preview" className="max-h-full max-w-full object-contain" />
                <div className="absolute top-2 right-2 flex space-x-2">
                  <button 
                    onClick={handleSave}
                    className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
                  >
                    <Check className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => setPreview(null)}
                    className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center shadow-lg hover:bg-red-600 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-brand-primary text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                  Confirm Change
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-8 p-4 bg-brand-surface rounded-2xl border border-brand-muted/5">
        <p className="text-[10px] text-brand-muted font-bold leading-relaxed">
          <span className="text-brand-primary">PRO TIP:</span> Use a transparent PNG for the best professional look across the header and dark sections like the footer. High resolution images will be automatically optimized for the web.
        </p>
      </div>
    </div>
  );
};

export default LogoUploader;
