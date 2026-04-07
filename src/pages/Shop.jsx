import React from 'react';
import { motion } from 'framer-motion';
import { IoCartOutline, IoHeartOutline } from 'react-icons/io5';
import Footer from '../components/Footer';

const products = [
  {
    name: "Classic Porsche Watch",
    price: "$450.00",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop",
    category: "Accessories"
  },
  {
    name: "Leather Racing Gloves",
    price: "$120.00",
    image: "https://images.unsplash.com/photo-1549439602-43ebca2327af?q=80&w=2070&auto=format&fit=crop",
    category: "Driving Gear"
  },
  {
    name: "911 Sculpture Model",
    price: "$275.00",
    image: "https://images.unsplash.com/photo-1581235720704-06d3acfc11bb?q=80&w=1780&auto=format&fit=crop",
    category: "Collectibles"
  },
  {
    name: "Performance Polo Shirt",
    price: "$85.00",
    image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?q=80&w=2071&auto=format&fit=crop",
    category: "Apparel"
  }
];

const Shop = () => {
  return (
    <div className="pt-24 bg-white dark:bg-black min-h-screen">
      <div className="px-6 lg:px-24 mb-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8 border-b border-gray-100 dark:border-white/5 pb-10">
          <div>
            <span className="text-xs font-black tracking-[0.3em] text-red-600 uppercase italic mb-4 block">Selection</span>
            <h1 className="text-4xl md:text-5xl font-black italic porsche-letter-spacing dark:text-white uppercase">Porsche Shop</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-4 text-sm font-bold uppercase tracking-widest italic">Experience the fascination of Porsche in your daily life.</p>
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <select className="bg-gray-50 dark:bg-gray-900 border-none rounded-none px-6 py-4 text-xs font-black tracking-widest uppercase italic dark:text-white flex-1 md:flex-none">
              <option>All Categories</option>
              <option>Apparel</option>
              <option>Accessories</option>
              <option>Driving Gear</option>
            </select>
            <button className="flex items-center justify-center gap-3 bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-none font-black text-xs uppercase italic tracking-widest flex-1 md:flex-none">
              <IoCartOutline size={18} />
              <span>Cart (0)</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((product, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative aspect-square overflow-hidden bg-gray-50 dark:bg-gray-900 mb-6 shadow-lg">
                <img 
                  src={product.image} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  alt={product.name} 
                />
                <button className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-none opacity-0 group-hover:opacity-100 transition-all shadow-md">
                  <IoHeartOutline size={18} className="text-black" />
                </button>
                <div className="absolute inset-x-4 bottom-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                  <button className="w-full py-4 bg-black text-white font-black text-[10px] uppercase tracking-[0.2em] italic shadow-2xl">Quick Add to Cart</button>
                </div>
              </div>
              <div className="px-1">
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] italic">{product.category}</span>
                <h3 className="text-lg font-black italic dark:text-white mt-2 uppercase tracking-wide leading-tight">{product.name}</h3>
                <p className="text-black dark:text-white font-black mt-2 text-sm italic tracking-widest">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Promo Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mt-24 relative h-[400px] overflow-hidden group shadow-2xl"
        >
          <img src="https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?q=80&w=2071&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover" alt="Promo" />
          <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center p-12">
            <h2 className="text-4xl md:text-6xl font-black italic text-white mb-6 uppercase porsche-letter-spacing">Racing Selection</h2>
            <p className="text-gray-200 mb-10 max-w-xl text-lg font-medium italic uppercase tracking-widest opacity-90">Ready for the track. Discover the official Porsche Motorsport collection.</p>
            <button className="px-12 py-4 bg-white text-black font-black uppercase italic tracking-widest text-xs hover:bg-gray-200 transition-all rounded-none">Shop Collection</button>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
