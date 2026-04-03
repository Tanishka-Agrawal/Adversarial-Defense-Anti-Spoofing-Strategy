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
    { name: 'Core Engine', href: '/#how-it-works' },
    { name: 'Elite Pricing', href: '/#pricing' },
    { name: 'AI Stack', href: '/#technology' },
    { name: 'Global Impact', href: '/#impact' },
    { name: 'FAQ', href: '/#faq' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#020617]/90 backdrop-blur-xl border-b border-white/5 py-6' : 'bg-transparent py-10'}`}>
      <div className="max-w-[1800px] mx-auto px-12 lg:px-24">
        <div className="flex justify-between items-center gap-20">
          <Link to="/" className="flex items-center gap-6 group">
            <div className="bg-purple-600/20 p-4 rounded-3xl border border-purple-500/30 group-hover:scale-110 transition-transform">
              <Shield className="w-10 h-10 text-purple-500" />
            </div>
            <span className="font-black text-4xl tracking-tighter text-white">GigShield <span className="text-emerald-500 italic">AI</span></span>
          </Link>

          <div className="hidden lg:flex items-center space-x-20">
            <div className="flex items-center space-x-14">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-base font-black text-slate-400 hover:text-white uppercase tracking-[0.3em] transition-all hover:scale-105 active:scale-95">
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="flex items-center gap-14 pl-14 border-l border-white/10">
              <Link to="/login" className="text-base font-black text-slate-400 hover:text-white uppercase tracking-[0.3em] transition-all hover:scale-105 active:scale-95">
                Secure Login
              </Link>
              <Link to="/signup" className="px-12 py-5 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white rounded-3xl text-sm font-black uppercase tracking-[0.4em] transition-all shadow-[0_15px_40px_rgba(37,99,235,0.4)] hover:shadow-[0_20px_50px_rgba(37,99,235,0.6)] active:scale-95">
                Join Network
              </Link>
            </div>
          </div>

          {/* Mobile Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-white p-2 glass rounded-xl">
             {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 w-full bg-[#020617] border-b border-white/10 p-8 space-y-8"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-xl font-black text-slate-300 hover:text-purple-500 transition-colors">
                  {link.name}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-4 pt-8 border-t border-white/5">
                <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="w-full text-center py-4 rounded-2xl glass font-black text-white">LOGIN</Link>
                <Link to="/signup" onClick={() => setMobileMenuOpen(false)} className="w-full text-center py-4 rounded-2xl bg-purple-600 font-black text-white">JOIN NOW</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
