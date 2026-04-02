import hero3D from '../assets/hero3d.png';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import React from 'react';

const Hero = () => {
  return (
    <section className="relative pt-24 pb-20 lg:pt-36 lg:pb-32 overflow-hidden bg-white dark:bg-slate-950">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-brand-lightgreen/5 rounded-full blur-[120px] animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue font-black text-sm uppercase tracking-widest mb-10"
            >
              <div className="w-2 h-2 rounded-full bg-brand-blue animate-ping"></div>
              Phase 2: LIVE Parametric Payouts
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tighter mb-8"
            >
              Protecting the <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-indigo-500 to-teal-400">Backbone of India's</span> <br/>
              Gig Economy
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-bold mb-12 max-w-2xl leading-relaxed"
            >
              The first AI-enabled Parametric Insurance for Zomato/Swiggy partners. Loss of Income triggers automatically. Instant Payouts. **No Questions Asked.**
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-6 mb-16">
              <Link to="/signup" className="px-10 py-5 bg-brand-blue text-white rounded-2xl font-black text-xl hover:scale-105 transition-transform shadow-[0_20px_50px_rgba(37,99,235,0.3)]">
                Get Covered Now
              </Link>
              <button className="px-10 py-5 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-2xl font-black text-xl hover:bg-slate-50 transition-colors">
                View 3D Demo
              </button>
            </div>
            
            {/* Stats section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
               {[
                 { label: "Payout Time", val: "5 Mins" },
                 { label: "Partners", val: "10k+" },
                 { label: "Claims", val: "Instant" },
                 { label: "Paperwork", val: "Zero" }
               ].map((stat, i) => (
                 <motion.div 
                    key={i} 
                    initial={{ opacity: 0, scale: 0.8 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ delay: 0.4 + (i*0.1) }}
                    className="p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-center"
                 >
                   <p className="text-2xl font-black text-brand-blue">{stat.val}</p>
                   <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.label}</p>
                 </motion.div>
               ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, rotateY: 30, scale: 0.8 }}
            animate={{ opacity: 1, rotateY: 0, scale: 1 }}
            className="flex-1 relative"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
               <img src={hero3D} alt="3D Protection" className="w-full max-w-2xl mx-auto drop-shadow-[0_50px_100px_rgba(37,99,235,0.4)]" />
            </motion.div>
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-15 bg-brand-blue/20 blur-3xl rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
