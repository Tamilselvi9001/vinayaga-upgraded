import { motion } from 'motion/react';
import { CONTACT_INFO } from '../constants';

export default function FloatingContactButtons() {
  const phoneNumber = CONTACT_INFO.phones[0].replace(/\s+/g, '');
  const message = "Hello! I am interested in your power solutions. Can you help me?";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  const phoneUrl = `tel:${phoneNumber}`;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col space-y-3">
      {/* WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.5, x: 50 }}
        animate={{ 
          opacity: 1, 
          scale: 1, 
          x: 0,
        }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        className="w-12 h-12 md:w-14 md:h-14 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] overflow-hidden flex items-center justify-center bg-[#25D366] hover:bg-[#20ba59] transition-all duration-300 group"
        title="Chat on WhatsApp"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <img 
            src="https://img.icons8.com/color/96/whatsapp--v1.png" 
            alt="WhatsApp" 
            className="w-6 h-6 md:w-8 md:h-8 drop-shadow-lg"
          />
        </motion.div>
      </motion.a>

      {/* Phone Button */}
      <motion.a
        href={phoneUrl}
        initial={{ opacity: 0, scale: 0.5, x: 50 }}
        animate={{ 
          opacity: 1, 
          scale: 1, 
          x: 0,
        }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        className="w-12 h-12 md:w-14 md:h-14 rounded-full shadow-[0_10px_30px_rgba(59,130,246,0.4)] overflow-hidden flex items-center justify-center bg-brand-primary hover:bg-brand-primary/90 transition-all duration-300"
        title="Call Us"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 1 }}
        >
          <img 
            src="https://img.icons8.com/color/96/phone.png" 
            alt="Phone" 
            className="w-6 h-6 md:w-8 md:h-8 drop-shadow-lg"
          />
        </motion.div>
      </motion.a>
    </div>
  );
}
