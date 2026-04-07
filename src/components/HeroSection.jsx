import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { IoChevronDown } from 'react-icons/io5';

const HeroSection = ({ 
  title, 
  subtitle, 
  bgImage, 
  videoSrc,
  primaryBtnText = "Build Your Own",
  secondaryBtnText = "Inventory", 
  id,
  subtitleLinkText,
  footerText
}) => {
  return (
    <section 
      id={id}
      className="relative h-screen w-full flex flex-col items-center justify-between snap-start overflow-hidden"
    >
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        {videoSrc ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : (
          <motion.div 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage})` }}
          />
        )}
      </div>
      
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70 z-1"></div>
      
      {/* Header Text */}
      <div className="relative z-10 pt-[22vh] text-center px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-5xl md:text-8xl font-black tracking-[0.1em] porsche-text-shadow uppercase italic"
        >
          {title}
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-2xl mx-auto"
        >
          <p className="text-base md:text-lg text-white font-medium tracking-wide uppercase italic opacity-85 leading-relaxed">
            {subtitle}{" "}
            {subtitleLinkText && (
              <a href="#" className="underline underline-offset-8 decoration-1 hover:decoration-2 transition-all">
                {subtitleLinkText}
              </a>
            )}
          </p>
        </motion.div>
      </div>

      {/* Footer Content */}
      <div className="relative z-10 w-full flex flex-col items-center pb-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center w-full justify-center px-6 gap-y-4 sm:gap-x-4"
        >
          <Button text={primaryBtnText} type="primary" />
          {secondaryBtnText && <Button text={secondaryBtnText} type="secondary" />}
        </motion.div>

        {footerText && (
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-8 text-[10px] text-white/60 tracking-[0.2em] uppercase max-w-xl text-center px-4"
          >
            {footerText}
          </motion.p>
        )}

        {/* Animated Chevron */}
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="mt-10 cursor-pointer text-white/50 hover:text-white transition-colors"
        >
          <IoChevronDown size={32} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
