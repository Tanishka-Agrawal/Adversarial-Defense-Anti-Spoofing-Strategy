import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative pt-36 pb-24 lg:pt-56 lg:pb-40 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-brand-blue/20 dark:bg-brand-blue/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-70 animate-blob"></div>
      <div className="absolute top-1/3 -right-64 w-[500px] h-[500px] bg-brand-lightgreen/20 dark:bg-brand-lightgreen/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-70 animate-blob" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[500px] bg-brand-teal/20 dark:bg-brand-teal/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[120px] opacity-50 animate-blob" style={{ animationDelay: '4s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 backdrop-blur-sm mb-12 shadow-sm"
          >
            <span className="flex h-4 w-4 rounded-full bg-brand-lightgreen"></span>
            <span className="text-lg font-black text-slate-700 dark:text-slate-300">New: Automated Payouts via UPI in &lt; 5 mins</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-7xl md:text-[7rem] font-black tracking-tight mb-12 text-slate-900 dark:text-white leading-tight"
          >
            AI-Powered Income <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-teal-400"> Protection for Gig Workers</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl font-medium text-slate-600 dark:text-slate-400 mb-14 max-w-4xl mx-auto leading-relaxed"
          >
            Don't let weather, extreme pollution, or environmental disruptions slash your daily earnings. GigShield AI provides instant, automated income loss coverage for delivery partners.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-8 justify-center"
          >
            <Link to="/signup" className="px-12 py-6 bg-brand-blue hover:bg-blue-600 text-white rounded-3xl font-black transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] hover:scale-105 flex items-center justify-center gap-4 text-2xl">
              <ShieldCheck className="w-10 h-10" />
              Get Protected
            </Link>
            <a href="#how-it-works" className="px-12 py-6 bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 border hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white rounded-3xl font-black transition-all shadow-sm flex items-center justify-center text-2xl">
              Learn More
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto border-t border-slate-200 dark:border-slate-800/50 pt-10"
          >
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-2">20-30%</span>
              <span className="text-sm md:text-base font-medium text-slate-500 dark:text-slate-400 text-center">Income lost to disruptions</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-2">Zero</span>
              <span className="text-sm md:text-base font-medium text-slate-500 dark:text-slate-400 text-center">Paperwork required</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-2">5m</span>
              <span className="text-sm md:text-base font-medium text-slate-500 dark:text-slate-400 text-center">Average payout time</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-black text-brand-lightgreen mb-2">10k+</span>
              <span className="text-sm md:text-base font-medium text-slate-500 dark:text-slate-400 text-center">Partners Protected</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
