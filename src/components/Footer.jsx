import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerLinks = {
    Models: ['718', '911', 'Taycan', 'Panamera', 'Macan', 'Cayenne'],
    Services: ['Porsche Financial Services', 'Porsche Connect', 'Porsche Service', 'Porsche Approved'],
    Experience: ['Porsche Experience Center', 'Porsche Museum', 'Porsche Clubs', 'Motorsport'],
    Company: ['About Porsche', 'Careers', 'Press', 'Sustainability']
  };

  return (
    <footer className="w-full bg-white dark:bg-black pt-20 pb-10 border-t border-gray-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[11px] font-black tracking-[0.2em] uppercase italic mb-6 dark:text-white">{title}</h4>
              <ul className="space-y-4">
                {links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-500 transition-colors uppercase tracking-widest text-[10px] font-bold">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100 dark:border-white/5 gap-6">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-2xl font-black tracking-[0.3em] uppercase italic dark:text-white mb-2">Porsche</span>
            <p className="text-[10px] text-gray-400 tracking-widest font-bold uppercase">© 2026 Dr. Ing. h.c. F. Porsche AG</p>
          </div>
          
          <div className="flex space-x-8">
            {['Privacy', 'Legal', 'Cookie Policy', 'Accessibility'].map(item => (
              <a key={item} href="#" className="text-[10px] font-black tracking-widest text-gray-400 hover:text-gray-900 dark:hover:text-white uppercase transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
