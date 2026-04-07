import React from 'react';
import { motion } from 'framer-motion';

const FeatureSection = ({ id, title, description, image, reversed }) => {
  return (
    <section 
      id={id} 
      className={`h-screen w-full flex flex-col md:flex-row snap-start overflow-hidden bg-white dark:bg-black ${reversed ? 'md:flex-row-reverse' : ''}`}
    >
      {/* Text Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-12 md:p-24 z-10">
        <motion.div
          initial={{ opacity: 0, x: reversed ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <span className="text-[10px] font-black tracking-[0.4em] text-red-600 uppercase italic mb-6 block">Legacy & Innovation</span>
          <h2 className="text-4xl md:text-6xl font-black italic porsche-letter-spacing mb-8 dark:text-white uppercase leading-tight">
            {title}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl font-medium italic leading-relaxed uppercase tracking-widest opacity-80">
            {description}
          </p>
          <div className="mt-12 h-1 w-24 bg-red-600"></div>
        </motion.div>
      </div>

      {/* Image Content */}
      <div className="w-full md:w-1/2 relative h-1/2 md:h-full overflow-hidden">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover" 
          />
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSection;
