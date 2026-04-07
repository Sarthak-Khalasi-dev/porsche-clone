import React from 'react';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import FeatureSection from '../components/FeatureSection';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className="h-screen overflow-y-auto snap-y snap-mandatory bg-white dark:bg-black transition-colors duration-500 scroll-smooth">
      {/* 1. HERO SECTION */}
      <HeroSection 
        id="hero"
        title="Driven by Dreams" 
        subtitle="The timeless legend. Rear-engine layout, iconic silhouette, and uncompromising performance."
        bgImage="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop"
        videoSrc="https://player.vimeo.com/external/517619623.hd.mp4?s=34659bc1a1532be96ae6a455a29792040d12e691&profile_id=175"
        primaryBtnText="Explore Models"
        secondaryBtnText="Test Drive"
      />
      
      {/* 2. MODELS PREVIEW (911) */}
      <HeroSection 
        id="911"
        title="Porsche 911" 
        subtitle="Rear-engine performance that has set the benchmark for decades. Pure precision in every gear."
        bgImage="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop"
        primaryBtnText="Configure"
        secondaryBtnText="Inventory"
      />

      {/* 3. FEATURE / STORY SECTION (Alternating Layout) */}
      <FeatureSection 
        id="history"
        title="Engineering Excellence"
        description="For over 75 years, Porsche has stood for superior engineering and exceptional driving pleasure. Every detail is meticulously crafted to deliver the ultimate performance on the road and on the track."
        image="https://images.unsplash.com/photo-1621285853634-713b8dd6b590?q=80&w=2070&auto=format&fit=crop"
        reversed={false}
      />

      <FeatureSection 
        id="innovation"
        title="The Future is Electric"
        description="The Taycan represents a new chapter in Porsche history. Pure emotion, maximum range, and the characteristic Porsche DNA—now completely electrified for a sustainable future."
        image="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2070&auto=format&fit=crop"
        reversed={true}
      />

      {/* 4. CONFIGURATOR CTA SECTION */}
      <section className="h-screen w-full flex flex-col items-center justify-center snap-start relative overflow-hidden bg-black text-white p-6">
        <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 opacity-40"
        >
            <img 
                src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2070&auto=format&fit=crop" 
                className="w-full h-full object-cover"
                alt="Configurator Background"
            />
        </motion.div>
        
        <div className="relative z-10 text-center max-w-4xl">
            <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl md:text-7xl font-black italic porsche-letter-spacing mb-8 uppercase"
            >
                Build your dream car
            </motion.h2>
            <motion.p 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-lg md:text-xl font-medium italic mb-12 opacity-80 uppercase tracking-widest"
            >
                Create a sports car that is as unique as you are. Use our configurator to explore endless possibilities.
            </motion.p>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
            >
                <Link to="/configurator">
                    <button className="px-16 py-5 bg-white text-black font-black uppercase italic tracking-widest text-xs hover:bg-red-600 hover:text-white transition-all duration-700">
                        Start Configuration
                    </button>
                </Link>
            </motion.div>
        </div>
      </section>
      
      <section className="snap-start">
        <Footer />
      </section>
    </main>
  );
};

export default Home;
