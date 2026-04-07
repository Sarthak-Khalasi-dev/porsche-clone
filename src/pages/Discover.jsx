import React from 'react';
import { motion } from 'framer-motion';

const stories = [
  {
    title: 'Porsche Racing Heritage',
    category: 'Motorsport',
    image: 'https://images.unsplash.com/photo-1544636331-e2831f28b24a?q=80&w=1974&auto=format&fit=crop',
    excerpt: 'Explore over 70 years of legendary victories on the world\'s most challenging tracks.'
  },
  {
    title: 'Sustainability Journey',
    category: 'Innovation',
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2070&auto=format&fit=crop',
    excerpt: 'Our commitment to becoming carbon neutral across the entire value chain by 2030.'
  },
  {
    title: 'Classic Restoration',
    category: 'Heritage',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop',
    excerpt: 'Preserving automotive masterpieces for future generations of enthusiasts.'
  }
];

const Discover = () => {
  return (
    <div className="pt-24 pb-12 bg-gray-50 dark:bg-black min-h-screen">
      {/* Featured Story with Video Background */}
      <section className="px-6 lg:px-24 mb-20">
        <div className="relative h-[75vh] rounded-[40px] overflow-hidden group shadow-2xl">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          >
            <source src="https://player.vimeo.com/external/517619623.hd.mp4?s=34659bc1a1532be96ae6a455a29792040d12e691&profile_id=175" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-12 md:p-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs font-black tracking-[0.3em] text-red-600 uppercase italic mb-4 block">International Experience</span>
              <h1 className="text-5xl md:text-7xl font-black italic text-white mb-6 uppercase porsche-letter-spacing">The Spirit of Porsche</h1>
              <p className="text-xl text-gray-200 max-w-2xl mb-10 font-medium italic">Discover the stories, the people, and the machines that define the ultimate sports car experience. From the first 356 to the latest Taycan.</p>
              <button className="px-12 py-4 bg-white text-black font-black uppercase italic tracking-widest text-xs hover:bg-gray-200 transition-all rounded-none">Read Feature Story</button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Grid */}
      <section className="px-6 lg:px-24">
        <div className="flex justify-between items-end mb-16 px-4">
          <div>
            <span className="text-xs font-black tracking-[0.2em] text-gray-400 uppercase italic mb-2 block font-bold">Latest Updates</span>
            <h2 className="text-4xl font-black italic text-gray-900 dark:text-white uppercase tracking-widest">Porsche Stories</h2>
          </div>
          <button className="text-red-600 font-black italic uppercase tracking-widest text-xs border-b-2 border-red-600 pb-1 hover:text-red-700 transition-colors">View All Stories</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-none overflow-hidden shadow-xl hover:shadow-2xl transition-all h-full flex flex-col group"
            >
              <div className="h-64 overflow-hidden relative">
                <img src={story.image} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" alt={story.title} />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <span className="text-[10px] font-black text-red-600 uppercase tracking-[0.3em] italic mb-4">{story.category}</span>
                <h3 className="text-2xl font-black italic mb-4 dark:text-white uppercase tracking-wider">{story.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-8 italic leading-relaxed">{story.excerpt}</p>
                <div className="mt-auto">
                  <button className="text-[11px] font-black italic tracking-[0.2em] uppercase border-b-2 border-gray-900 dark:border-white pb-1 hover:text-red-600 hover:border-red-600 transition-all dark:text-white">Learn More</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Discover;
