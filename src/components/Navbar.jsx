import React, { useState, useEffect } from 'react';
import { Shield, Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'How it Works', href: '/#how-it-works' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'Technology', href: '/#technology' },
    { name: 'Impact', href: '/#impact' },
    { name: 'FAQ', href: '/#faq' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-[95vw] lg:max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center gap-8 xl:gap-16">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity flex-shrink-0">
            <div className="bg-brand-blue/20 p-3 rounded-2xl">
              <Shield className="w-10 h-10 text-brand-blue" />
            </div>
            <span className="font-extrabold text-3xl md:text-3xl lg:text-4xl tracking-tight text-slate-900 dark:text-white whitespace-nowrap">GigShield <span className="text-brand-lightgreen">AI</span></span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-10">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-xl font-bold text-slate-600 hover:text-brand-blue dark:text-slate-300 dark:hover:text-white transition-colors whitespace-nowrap">
                {link.name}
              </a>
            ))}
            
            <div className="flex items-center gap-6 border-l pl-6 border-slate-300 dark:border-slate-700">
              <button onClick={toggleTheme} className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors p-3 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 flex-shrink-0">
                {theme === 'dark' ? <Sun className="w-8 h-8" /> : <Moon className="w-8 h-8" />}
              </button>
              <Link to="/login" className="text-xl font-black text-slate-700 hover:text-brand-blue dark:text-slate-300 dark:hover:text-white transition-colors whitespace-nowrap">
                Sign In
              </Link>
              <Link to="/signup" className="bg-brand-blue hover:bg-blue-600 text-white px-8 py-4 rounded-full text-xl font-black transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] whitespace-nowrap flex-shrink-0">
                Get Protected
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-6">
            <button onClick={toggleTheme} className="text-slate-500 dark:text-slate-400">
              {theme === 'dark' ? <Sun className="w-10 h-10" /> : <Moon className="w-10 h-10" />}
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-600 dark:text-slate-300 flex-shrink-0">
              {mobileMenuOpen ? <X className="w-12 h-12" /> : <Menu className="w-12 h-12" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800"
          >
            <div className="px-6 pt-4 pb-8 space-y-6 flex flex-col">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-bold text-slate-700 dark:text-slate-300 hover:text-brand-blue dark:hover:text-white block"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-4">
                <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="w-full text-center text-slate-700 dark:text-slate-300 px-5 py-4 rounded-xl text-lg font-bold border border-slate-300 dark:border-slate-700">
                  Sign In
                </Link>
                <Link to="/signup" onClick={() => setMobileMenuOpen(false)} className="bg-brand-blue w-full text-center text-white px-5 py-4 rounded-xl text-lg font-bold shadow-lg">
                  Get Protected Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
