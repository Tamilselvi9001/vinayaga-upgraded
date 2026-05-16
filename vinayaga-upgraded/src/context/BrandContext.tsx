import React, { createContext, useContext, useState, useEffect } from 'react';

interface BrandContextType {
  logo: string;
  updateLogo: (newLogo: string) => void;
  resetLogo: () => void;
}

const DEFAULT_LOGO = "/src/assets/images/vps_logo_transparent_1778397305725.png";

const BrandContext = createContext<BrandContextType | undefined>(undefined);

export const BrandProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [logo, setLogo] = useState<string>(DEFAULT_LOGO);

  useEffect(() => {
    const savedLogo = localStorage.getItem('vps_custom_logo');
    if (savedLogo) {
      setLogo(savedLogo);
    }
  }, []);

  const updateLogo = (newLogo: string) => {
    setLogo(newLogo);
    localStorage.setItem('vps_custom_logo', newLogo);
  };

  const resetLogo = () => {
    setLogo(DEFAULT_LOGO);
    localStorage.removeItem('vps_custom_logo');
  };

  return (
    <BrandContext.Provider value={{ logo, updateLogo, resetLogo }}>
      {children}
    </BrandContext.Provider>
  );
};

export const useBrand = () => {
  const context = useContext(BrandContext);
  if (!context) {
    throw new Error('useBrand must be used within a BrandProvider');
  }
  return context;
};
