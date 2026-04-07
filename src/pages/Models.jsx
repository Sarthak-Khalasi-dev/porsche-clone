import React from 'react';
import { motion } from 'framer-motion';

const PorscheModels = [
  {
    name: '718 Cayman',
    price: 'From $68,300',
    image: 'https://images.classic.com/vehicles/c8a3e6a1f2f879001b62f86cdc32f8c9.jpeg?ar=16:9&fit=crop&h=338&w=600',
    tagline: 'Middle engine. Pure emotion. A lightweight sports car that celebrates every corner.'
  },
  {
    name: '911 Carrera',
    price: 'From $114,400',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop',
    tagline: 'The timeless machine. Rear-engine performance that has set the benchmark for decades.'
  },
  {
    name: 'Taycan Turbo',
    price: 'From $160,800',
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2070&auto=format&fit=crop',
    tagline: 'Soul, electrified. Exceptional power meets striking design in the first all-electric Porsche.'
  },
  {
    name: 'Panamera GTS',
    price: 'From $135,200',
    image: 'https://images.unsplash.com/photo-1532581291347-9c39cf10a73c?q=80&w=2070&auto=format&fit=crop',
    tagline: 'Uncompromised performance. A luxury sedan with the heart and soul of a sports car.'
  },
  {
    name: 'Macan S',
    price: 'From $72,300',
    image: 'https://images.unsplash.com/photo-1506469717960-433ce8b66ddb?q=80&w=2070&auto=format&fit=crop',
    tagline: 'The thrill of the hunt. A compact SUV that delivers pure Porsche adrenaline on every drive.'
  },
  {
    name: 'Cayenne E-Hybrid',
    price: 'From $91,700',
    image: 'https://images.pexels.com/photos/10394779/pexels-photo-10394779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Stable high-quality Cayenne E-Hybrid alternate
    tagline: 'Adventure awaits. Space for the whole family without sacrificing the Porsche spirit.'
  }
];

const Models = () => {
  return (
    <div className="pt-24 pb-12 px-6 lg:px-24 bg-white dark:bg-black min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-black italic tracking-widest text-gray-900 dark:text-white mb-4 uppercase">Porsche Models</h1>
        <p className="text-gray-500 dark:text-gray-400 text-lg tracking-wide uppercase italic font-bold">Find your perfect sports car from our legendary lineup.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {PorscheModels.map((model, index) => (
          <motion.div
            key={model.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group cursor-pointer flex flex-col"
          >
            <div className="overflow-hidden rounded-xl aspect-[16/10] mb-6 shadow-2xl">
              <img
                src={model.image}
                alt={model.name}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out"
              />
            </div>
            <div className="flex flex-col flex-1">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-2xl font-black italic tracking-widest text-gray-900 dark:text-white uppercase">{model.name}</h3>
                <p className="text-gray-800 dark:text-gray-200 font-black italic text-sm">{model.price}</p>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 italic tracking-wide leading-relaxed">{model.tagline}</p>
              <div className="mt-auto">
                <button className="w-full py-3 border-2 border-gray-900 dark:border-white text-[11px] font-black tracking-[0.2em] italic uppercase hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
                  View Technical Specs
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Models;
