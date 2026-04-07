import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '../components/Footer';

const colors = [
  { name: 'Guards Red', hex: '#E20119', filter: 'none' },
  { name: 'Speed Yellow', hex: '#F7D117', filter: 'hue-rotate(45deg) saturate(1.5)' },
  { name: 'Gentian Blue Metallic', hex: '#002B7F', filter: 'hue-rotate(220deg) saturate(1.2)' },
  { name: 'Python Green', hex: '#007A33', filter: 'hue-rotate(90deg) saturate(1.8)' },
  { name: 'Jet Black Metallic', hex: '#000000', filter: 'grayscale(1) brightness(0.3) contrast(1.2)' },
  { name: 'Carrara White Metallic', hex: '#FDFDFD', filter: 'grayscale(1) brightness(1.4) contrast(0.9)' },
  { name: 'Chalk', hex: '#D2D1CD', filter: 'grayscale(1) brightness(1.2) sepia(0.2) opacity(0.9)' },
];

const models = [
  { 
    name: '911 Carrera 4S', 
    basePrice: 114400, 
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/2013_Porsche_911_Carrera_4S_(991)_(9626546987).jpg' 
  },
  { 
    name: '718 Cayman', 
    basePrice: 68300, 
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2070&auto=format&fit=crop' 
  },
  { 
    name: 'Taycan Turbo', 
    basePrice: 90900, 
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2070&auto=format&fit=crop' 
  },
];

const Configurator = () => {
  const [selectedModel, setSelectedModel] = useState(models[0]);
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const totalPrice = selectedModel.basePrice + (selectedColor.name !== 'Guards Red' ? 3200 : 0);

  return (
    <div className="pt-24 bg-white dark:bg-black min-h-screen">
      <div className="px-6 lg:px-24 max-w-[1600px] mx-auto pb-20">
        <header className="mb-12 border-b border-gray-100 dark:border-white/5 pb-10 flex justify-between items-end">
            <div>
                <span className="text-[10px] font-black tracking-[0.4em] text-red-600 uppercase italic mb-4 block">Personalization</span>
                <h1 className="text-4xl md:text-5xl font-black italic porsche-letter-spacing dark:text-white uppercase">Configurator</h1>
            </div>
            <div className="hidden md:block text-right">
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest italic">Current Price</span>
                <p className="text-2xl font-black italic dark:text-white">${totalPrice.toLocaleString()}</p>
            </div>
        </header>
        
        <div className="flex flex-col xl:flex-row gap-16">
          {/* 1. Preview Section */}
          <div className="flex-1">
            <div className="sticky top-28 bg-gray-100 dark:bg-gray-900 rounded-none h-[50vh] xl:h-[70vh] flex items-center justify-center overflow-hidden shadow-inner group">
              <div className="relative w-full h-full">
                <motion.img 
                  key={selectedModel.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  src={selectedModel.image} 
                  alt={selectedModel.name}
                  className="w-full h-full object-cover transition-all duration-1000"
                  style={{ 
                    filter: selectedModel.name === '911 Carrera 4S' ? selectedColor.filter : 'none' 
                  }}
                />
                
                {/* Visual feedback for color change tint on other models if needed, 
                    but for 911 we use the filter directly as requested */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
              </div>

              <div className="absolute bottom-10 left-10 z-10">
                <h2 className="text-3xl md:text-5xl font-black italic text-white uppercase tracking-tighter drop-shadow-2xl">
                    {selectedModel.name}
                </h2>
                <div className="flex items-center gap-3 mt-2">
                    <div className="w-4 h-4 rounded-full border border-white/50" style={{ backgroundColor: selectedColor.hex }}></div>
                    <p className="text-white/80 text-sm font-bold uppercase tracking-[0.2em] italic">{selectedColor.name}</p>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Controls Section */}
          <div className="w-full xl:w-[450px] space-y-12">
            <div>
              <h3 className="text-xs font-black tracking-[0.2em] text-gray-400 uppercase italic mb-6">Step 01. Select Model</h3>
              <div className="grid grid-cols-1 gap-4">
                {models.map(model => (
                  <button
                    key={model.name}
                    onClick={() => setSelectedModel(model)}
                    className={`text-left p-6 transition-all border-l-4 ${
                      selectedModel.name === model.name 
                      ? 'border-red-600 bg-gray-50 dark:bg-gray-900' 
                      : 'border-transparent bg-gray-100 dark:bg-gray-950 hover:bg-gray-200 dark:hover:bg-gray-800'
                    }`}
                  >
                    <div className="font-black italic uppercase tracking-widest text-sm dark:text-white">{model.name}</div>
                    <div className="text-[10px] text-gray-500 font-bold mt-1 uppercase">Starting from ${model.basePrice.toLocaleString()}</div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xs font-black tracking-[0.2em] text-gray-400 uppercase italic">Step 02. Exterior Color</h3>
                <span className="text-[10px] font-black text-red-600 uppercase italic tracking-widest">{selectedColor.name}</span>
              </div>
              <div className="grid grid-cols-7 gap-3">
                {colors.map(color => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    title={color.name}
                    className={`aspect-square rounded-none transition-all outline-offset-4 relative ${
                      selectedColor.name === color.name 
                      ? 'outline outline-2 outline-red-600 scale-110 z-10' 
                      : 'hover:scale-105 opacity-80 hover:opacity-100'
                    }`}
                    style={{ backgroundColor: color.hex, boxShadow: 'inset 0 0 10px rgba(0,0,0,0.1)' }}
                  >
                    {selectedColor.name === color.name && (
                        <motion.div layoutId="color-check" className="absolute inset-0 flex items-center justify-center">
                            <div className="w-1/2 h-1/2 bg-white/30 backdrop-blur-sm rounded-full"></div>
                        </motion.div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-10 border-t-2 border-gray-900 dark:border-white">
              <div className="flex justify-between items-end mb-10">
                <div className="flex flex-col">
                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest italic mb-1">Base Price: ${selectedModel.basePrice.toLocaleString()}</span>
                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest italic">Options: ${totalPrice - selectedModel.basePrice}</span>
                </div>
                <div className="text-right">
                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest italic block mb-1 text-right">Total Price</span>
                    <span className="text-4xl font-black italic dark:text-white underline decoration-red-600 decoration-8 underline-offset-8">
                        ${totalPrice.toLocaleString()}
                    </span>
                </div>
              </div>
              <button className="w-full py-6 bg-black dark:bg-white text-white dark:text-black font-black uppercase italic tracking-[0.3em] text-xs hover:bg-red-600 hover:text-white transition-all duration-500">
                Place Reservation
              </button>
              <p className="mt-6 text-[9px] text-gray-400 uppercase tracking-widest text-center italic leading-relaxed">
                By clicking "Place Reservation", you agree to our terms and conditions. Professional assembly and local taxes not included in estimate.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Configurator;
