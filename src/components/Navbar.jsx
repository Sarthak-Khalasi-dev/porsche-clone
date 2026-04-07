import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoSunnyOutline, IoMoonOutline, IoSearchOutline, IoCartOutline, IoPersonOutline, IoMenuOutline, IoCloseOutline } from 'react-icons/io5';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage or system preference on initial load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Apply theme on initial load
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const navLinks = [
    { name: 'Models', path: '/models' },
    { name: 'Configurator', path: '/configurator' },
    { name: 'Discover', path: '/discover' },
    { name: 'Shop', path: '/shop' },
  ];

  const isHome = location.pathname === '/';

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-16 py-4 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 dark:bg-black/95 backdrop-blur-md shadow-lg border-b border-gray-100 dark:border-white/10' 
            : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <span className={`text-xl md:text-2xl font-black porsche-letter-spacing transition-colors duration-500 uppercase italic ${
            isScrolled || !isHome ? 'text-gray-900 dark:text-white' : 'text-white'
          }`}>
            Porsche
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.path} 
              className={`px-5 py-2 text-xs font-black tracking-widest uppercase transition-all duration-300 rounded-full hover:bg-black/5 dark:hover:bg-white/10 ${
                isScrolled || !isHome ? 'text-gray-800 dark:text-white' : 'text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-1 md:space-x-3">
          <button 
            onClick={toggleDarkMode} 
            className={`p-2 rounded-full transition-all hover:bg-black/5 dark:hover:bg-white/10 ${
              isScrolled || !isHome ? 'text-gray-800 dark:text-white' : 'text-white'
            }`}
          >
            {darkMode ? <IoSunnyOutline size={20} /> : <IoMoonOutline size={20} />}
          </button>
          
          <Link 
            to="/shop" 
            className={`hidden md:flex p-2 rounded-full transition-all hover:bg-black/5 dark:hover:bg-white/10 ${
              isScrolled || !isHome ? 'text-gray-800 dark:text-white' : 'text-white'
            }`}
          >
            <IoCartOutline size={20} />
          </Link>

          <button 
            onClick={() => setMenuOpen(true)}
            className={`flex items-center space-x-2 px-4 py-2 text-xs font-black tracking-widest uppercase rounded-full transition-all ${
              isScrolled || !isHome 
                ? 'text-gray-900 dark:text-white bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20' 
                : 'text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm'
            }`}
          >
            <span className="hidden sm:inline">Menu</span>
            <IoMenuOutline size={20} />
          </button>
        </div>
      </nav>

      {/* Full Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex justify-end bg-black/60 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ x: '100%', opacity: 0.5 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0.5 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-full md:w-[450px] h-full bg-white dark:bg-gray-950 p-10 flex flex-col shadow-2xl relative"
            >
              <button 
                onClick={() => setMenuOpen(false)}
                className="absolute top-8 right-8 p-2 text-gray-500 hover:text-red-600 transition-colors"
              >
                <IoCloseOutline size={32} />
              </button>
              
              <div className="flex flex-col space-y-4 mt-16">
                <div className="mb-8">
                    <span className="text-xs font-black tracking-widest text-gray-400 uppercase italic font-bold">Models</span>
                    <div className="grid grid-cols-2 gap-2 mt-4">
                        {['718', '911', 'Taycan', 'Panamera', 'Macan', 'Cayenne'].map(model => (
                            <Link key={model} to="/models" onClick={() => setMenuOpen(false)} className="py-2 text-xl font-bold dark:text-white hover:text-red-600 transition-colors">{model}</Link>
                        ))}
                    </div>
                </div>

                <div className="space-y-4">
                  {['Inventory', 'Certified Pre-Owned', 'Configurator', 'Discover', 'Shop', 'Porsche Financial Services', 'Experience', 'About'].map((item) => (
                    <Link 
                      key={item}
                      to={`/${item.toLowerCase().split(' ')[0]}`} 
                      onClick={() => setMenuOpen(false)}
                      className="block w-full py-2 text-lg font-bold text-gray-800 dark:text-gray-100 hover:text-red-600 transition-colors"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-10 border-t border-gray-100 dark:border-white/5 text-xs font-medium text-gray-500 uppercase tracking-widest flex justify-between">
                <span>© 2026 Porsche</span>
                <div className="flex space-x-4">
                    <span className="cursor-pointer hover:text-red-600">Legal</span>
                    <span className="cursor-pointer hover:text-red-600">Privacy</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
