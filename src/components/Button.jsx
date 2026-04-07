import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ text, type = 'primary', className = '', onClick }) => {
  const baseStyles = "px-12 py-3.5 text-[11px] font-black tracking-[0.2em] uppercase transition-all duration-300 sm:w-auto w-full min-w-[220px] transform flex items-center justify-center italic";
  
  const styles = {
    primary: "bg-white text-black hover:bg-gray-200 shadow-xl",
    secondary: "bg-transparent text-white border border-white/40 hover:bg-white/10 backdrop-blur-sm"
  };

  return (
    <motion.button 
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${baseStyles} ${styles[type]} ${className}`}
    >
      {text}
    </motion.button>
  );
};

export default Button;
