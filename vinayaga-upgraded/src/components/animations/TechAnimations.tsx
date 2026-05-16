import { motion } from 'motion/react';

export const SolarPanelAnimation = () => (
  <div className="relative w-full aspect-square max-w-[300px] mx-auto bg-yellow-50/30 rounded-3xl p-6 overflow-hidden">
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Sun and Rays */}
      <motion.g
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <circle cx="30" cy="30" r="15" fill="#FACC15" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <motion.line
            key={angle}
            x1="30" y1="30" x2={30 + Math.cos(angle * Math.PI / 180) * 25} y2={30 + Math.sin(angle * Math.PI / 180) * 25}
            stroke="#FACC15"
            strokeWidth="2"
            strokeLinecap="round"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: angle / 360 }}
          />
        ))}
      </motion.g>

      {/* House Silhouette */}
      <path d="M120 160 V110 L155 80 L190 110 V160 H120Z" fill="#1B2945" opacity="0.8" />
      <rect x="145" y="130" width="20" height="30" fill="#2859B1" />

      {/* Solar Panel on Roof */}
      <motion.g transform="translate(40, 100) rotate(-15)">
        <rect width="100" height="60" rx="4" fill="#2859B1" stroke="#1B2945" strokeWidth="2" />
        <path d="M0 20 H100 M0 40 H100 M25 0 V60 M50 0 V60 M75 0 V60" stroke="white" strokeWidth="1" opacity="0.3" />
        
        {/* Glow effect on panel */}
        <motion.rect
          width="100" height="60"
          fill="rgba(255, 255, 255, 0.1)"
          animate={{ opacity: [0, 0.2, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.g>

      {/* Energy Flow Lines */}
      <motion.path
        d="M90 130 Q 110 130, 140 145"
        stroke="#FACC15"
        strokeWidth="3"
        strokeDasharray="8 8"
        animate={{ strokeDashoffset: [16, 0] }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />

      {/* Sunlight Beams */}
      {[0, 1, 2].map((i) => (
        <motion.line
          key={i}
          x1={40 + i * 20} y1="40"
          x2={60 + i * 20} y2="90"
          stroke="rgba(250, 204, 21, 0.4)"
          strokeWidth="2"
          animate={{ y: [0, 10, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
        />
      ))}
    </svg>
    <div className="absolute bottom-4 left-0 right-0 text-center">
      <span className="text-[10px] font-bold text-brand-primary uppercase tracking-widest">Rooftop Solar Eco</span>
    </div>
  </div>
);

export const SolarFarmAnimation = () => (
  <div className="relative w-full aspect-square max-w-[300px] mx-auto bg-slate-50/50 rounded-3xl p-6 overflow-hidden">
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Background/Base Ground */}
      <rect width="200" height="200" fill="#F1F5F9" />
      
      {/* Solar Panel Grid - Birds eye perspective */}
      <g transform="skewX(-10) translate(20, 20)">
        {[0, 1, 2, 3].map((r) => [0, 1, 2, 3].map((c) => (
          <g key={`${r}-${c}`}>
            <rect
              x={c * 35} y={r * 25} width="30" height="20" rx="1"
              fill="#1E293B"
              stroke="#3B82F6"
              strokeWidth="0.5"
            />
            {/* Reflection Glint */}
            <motion.rect
              x={c * 35} y={r * 25} width="30" height="20" rx="1"
              fill="white"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.2, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: (r + c) * 0.3,
                ease: "easeInOut"
              }}
            />
          </g>
        )))}
      </g>

      {/* Energy Mainline to City */}
      <motion.path
        d="M100 130 C 100 160, 140 160, 150 180"
        stroke="#3B82F6"
        strokeWidth="3"
        strokeDasharray="5 5"
        animate={{ strokeDashoffset: [20, 0] }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />

      {/* Distant City Node */}
      <g transform="translate(140, 170)">
        <path d="M0 20 H30 V5 H25 V10 H15 V0 H10 V15 H0 Z" fill="#94A3B8" />
        <motion.circle
          cx="15" cy="5" r="2"
          fill="#3B82F6"
          animate={{ scale: [1, 2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </g>

      {/* Sun/Light Direction Overlay */}
      <defs>
        <linearGradient id="sun-glare" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FACC15" stopOpacity="0.1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="200" height="200" fill="url(#sun-glare)" pointerEvents="none" />
    </svg>
    <div className="absolute bottom-4 left-0 right-0 text-center">
      <span className="text-[10px] font-bold text-brand-primary uppercase tracking-widest">Global Energy Feed</span>
    </div>
  </div>
);

export const BatteryAnimation = () => (
  <div className="relative w-full aspect-square max-w-[300px] mx-auto bg-green-50/50 rounded-3xl p-6 overflow-hidden">
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Home Battery (Wall Unit) */}
      <g transform="translate(40, 40)">
        <rect width="50" height="80" rx="4" stroke="#1E293B" strokeWidth="3" fill="white" />
        <text x="5" y="15" fontSize="6" fill="#64748B" fontWeight="bold">HOME STORAGE</text>
        {[0, 1, 2, 3].map((i) => (
          <motion.rect
            key={i}
            x="8" y={60 - i * 15} width="34" height="10" rx="1"
            fill="#10B981"
            animate={{
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.4
            }}
          />
        ))}
      </g>
      
      {/* EV Car Charging */}
      <g transform="translate(110, 80)">
        <path d="M10 50 H60 L70 40 H15 L10 50 Z" fill="#3B82F6" />
        <rect x="15" y="50" width="45" height="15" rx="3" fill="#3B82F6" />
        {/* Car Battery Bar */}
        <rect x="25" y="54" width="25" height="6" rx="1" fill="#E2E8F0" />
        <motion.rect
          x="25" y="54" height="6" rx="1"
          fill="#10B981"
          initial={{ width: 0 }}
          animate={{ width: 25 }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <text x="15" y="75" fontSize="8" fill="#1E293B" fontWeight="bold">EV CHARGING</text>
      </g>

      {/* Energy Flow between them */}
      <motion.path
        d="M90 80 H110"
        stroke="#10B981"
        strokeWidth="2"
        strokeDasharray="4 4"
        animate={{ strokeDashoffset: [20, 0] }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </svg>
    <div className="absolute bottom-4 left-0 right-0 text-center">
      <span className="text-[10px] font-bold text-brand-primary uppercase tracking-widest">Smart Storage Ecosystem</span>
    </div>
  </div>
);

export const InverterAnimation = () => (
  <div className="relative w-full aspect-square max-w-[300px] mx-auto bg-slate-50/50 rounded-3xl p-6 overflow-hidden">
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Central UPS Unit */}
      <rect x="70" y="70" width="60" height="60" rx="8" fill="white" stroke="#2859B1" strokeWidth="2" />
      <rect x="75" y="80" width="50" height="15" rx="2" fill="#1B2945" />
      
      {/* Waveform Conversion Inside */}
      <motion.path
        d="M80 87 Q 85 80, 90 87 T 100 87 T 110 87 T 120 87"
        stroke="#3B82F6"
        strokeWidth="1.5"
        fill="none"
        animate={{ 
          strokeDasharray: ["0, 50", "50, 0"],
          opacity: [0.3, 1, 0.3]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* AC Waveform Input (Left) */}
      <motion.path
        d="M10 100 Q 20 70, 30 100 T 50 100 T 70 100"
        stroke="#2859B1"
        strokeWidth="3"
        fill="none"
        animate={{ strokeDashoffset: [0, -40] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        strokeDasharray="10 10"
      />
      <text x="5" y="60" fontSize="10" fill="#2859B1" fontWeight="bold">AC IN (~)</text>

      {/* DC Line Conversion (Right) */}
      <motion.line
        x1="130" y1="100" x2="190" y2="100"
        stroke="#10B981"
        strokeWidth="4"
        strokeDasharray="15 5"
        animate={{ strokeDashoffset: [20, 0] }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      <text x="145" y="60" fontSize="10" fill="#10B981" fontWeight="bold">DC OUT (=)</text>

      {/* Icons of Home Appliances (TV, Fan, Bulb) */}
      <g transform="translate(160, 110)" opacity="0.6">
        <rect width="20" height="15" rx="2" fill="#64748B" /> {/* TV */}
        <motion.circle 
          cx="10" cy="7" r="12" 
          stroke="#64748B" 
          strokeWidth="1" 
          strokeDasharray="2 2"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        /> {/* Fan */}
      </g>
      
      {/* Sparkle indicators of Power */}
      <motion.circle 
        cx="140" cy="100" r="3" fill="#FACC15"
        animate={{ scale: [0.5, 1.5, 0.5], opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
    </svg>
    <div className="absolute bottom-4 left-0 right-0 text-center">
      <span className="text-[10px] font-bold text-brand-primary uppercase tracking-widest">Digital Power Conversion</span>
    </div>
  </div>
);

export const CctvAnimation = () => (
  <div className="relative w-full aspect-square max-w-[300px] mx-auto bg-slate-50/50 rounded-3xl p-6 overflow-hidden">
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* CCTV Camera Bracket and Body */}
      <path d="M160 40 V100 H140" stroke="#1B2945" strokeWidth="6" strokeLinecap="round" />
      
      <motion.g
        animate={{ rotate: [-15, 15, -15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{ originX: '140px', originY: '100px' }}
      >
        <rect x="40" y="80" width="100" height="40" rx="4" fill="#1B2945" />
        <circle cx="50" cy="100" r="15" fill="#0F172A" />
        <circle cx="50" cy="100" r="5" fill="#2859B1" />
        
        {/* Blinking Recording Light */}
        <motion.circle
          cx="120" cy="90" r="4"
          fill="#EF4444"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        />
        
        {/* Scanning Cone Effect */}
        <motion.path
          d="M50 100 L-10 60 V140 Z"
          fill="rgba(40, 89, 177, 0.15)"
          animate={{ 
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{ originX: '50px', originY: '100px' }}
        />
        
        {/* Scanning Beam highlight */}
        <motion.line
          x1="50" y1="100" x2="-10" y2="100"
          stroke="#3B82F6"
          strokeWidth="1"
          opacity="0.3"
          animate={{ y: [0, 20, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </motion.g>
    </svg>
    <div className="absolute bottom-4 left-0 right-0 text-center">
      <span className="text-[10px] font-bold text-brand-primary uppercase tracking-widest">Smart AI Surveillance</span>
    </div>
  </div>
);

export const RoAnimation = () => (
  <div className="relative w-full aspect-square max-w-[300px] mx-auto bg-blue-50/50 rounded-3xl p-6 overflow-hidden">
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Water Purifier Main Body */}
      <rect x="50" y="30" width="100" height="140" rx="10" fill="white" stroke="#2859B1" strokeWidth="3" />
      <rect x="50" y="30" width="100" height="40" rx="10" fill="#2859B1" />
      
      {/* LED Status Lights */}
      <motion.circle cx="70" cy="50" r="3" fill="#10B981" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.5, repeat: Infinity }} />
      <motion.circle cx="85" cy="50" r="3" fill="#3B82F6" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }} />
      
      {/* Water Dispensing Glass */}
      <path d="M110 130 L115 170 H145 L150 130 Z" fill="rgba(255,255,255,0.8)" stroke="#94A3B8" strokeWidth="1" />
      
      {/* Water Filling Animation */}
      <motion.rect
        x="116" y="150" width="28"
        fill="#93C5FD"
        animate={{ height: [0, 18, 0], y: [168, 150, 168] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Water Flow from Purifier to Glass */}
      <motion.path
        d="M130 110 V150"
        stroke="#3B82F6"
        strokeWidth="3"
        strokeLinecap="round"
        animate={{ strokeDashoffset: [20, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
        strokeDasharray="5 5"
      />
      
      {/* Advanced Filtration Cycles */}
      {[0, 1, 2].map((i) => (
        <motion.circle
          key={i}
          cx="80" cy={100 + i * 20}
          r="4"
          fill="#3B82F6"
          animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
        />
      ))}
      
      <text x="65" y="160" fontSize="10" fill="#2859B1" fontWeight="bold">RO + UV</text>
    </svg>
    <div className="absolute bottom-4 left-0 right-0 text-center">
      <span className="text-[10px] font-bold text-brand-primary uppercase tracking-widest">100% Pure Water</span>
    </div>
  </div>
);
