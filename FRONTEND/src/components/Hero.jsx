<<<<<<< HEAD
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import React from 'react';
import { Shield, ArrowRight, Activity, MapPin, Star, CreditCard, ChevronRight } from 'lucide-react';
import heroAsset from '../assets/hero_3d_asset.png';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 lg:pt-48 bg-[#020617] overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[1200px] h-[1200px] bg-purple-600/5 rounded-full blur-[200px] -mr-64 -mt-64 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[1000px] h-[1000px] bg-emerald-600/5 rounded-full blur-[200px] -ml-64 -mb-64 animate-pulse delay-1000"></div>

      <div className="max-w-[1800px] mx-auto px-12 lg:px-24 relative z-10 w-full mb-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-24 lg:gap-40 w-full">
          
          {/* Left Text Segment */}
          <div className="flex-1 text-left w-full lg:max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full glass border-white/10 text-slate-400 font-bold text-sm uppercase tracking-[0.3em] mb-12"
            >
              TRUSTED BY 1 MILLION GIG WORKERS
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-7xl lg:text-[7rem] font-black text-white leading-[0.95] tracking-tighter mb-12"
            >
              Manage your <br/>
              <span className="text-gradient">earnings </span> <br/>
              with ease
            </motion.h1>

            <div className="flex items-center gap-10 mb-20">
              <Link to="/signup" className="px-14 py-7 bg-white text-black rounded-3xl font-black text-2xl hover:scale-105 transition-all shadow-[0_30px_80px_rgba(255,255,255,0.15)] flex items-center gap-4">
                Start with GigShield <ArrowRight className="w-8 h-8" />
              </Link>
              <button className="px-14 py-7 glass border-white/20 text-white rounded-3xl font-black text-2xl hover:bg-white/5 transition-colors">
                Compare plans
              </button>
            </div>

            {/* Supported By Segment */}
            <div className="space-y-10 pt-12 border-t border-white/10">
              <p className="text-[12px] font-black text-slate-500 uppercase tracking-[0.5em]">SYSTEM NODES VERIFIED BY:</p>
              <div className="flex flex-wrap items-center gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-1000">
                 <div className="text-4xl font-black text-white flex items-center gap-3"><div className="w-10 h-10 rounded-xl bg-purple-600"></div>Guidewire</div>
                 <div className="text-4xl font-black text-white italic underline">BlackRock</div>
                 <div className="text-4xl font-black text-white tracking-widest underline decoration-purple-500 underline-offset-8">stripe</div>
                 <div className="text-3xl font-black text-white font-serif italic">Revolut</div>
              </div>
            </div>
          </div>

          {/* Right Asset Segment */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="flex-1 relative hidden xl:block w-full"
          >
            <motion.div
              animate={{ 
                y: [0, -60, 0],
                rotateZ: [-1, 1, -1]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 glass-dark rounded-[5rem] border-white/5 p-6 shadow-[0_80px_200px_rgba(37,99,235,0.25)]"
            >
               <img src={heroAsset} alt="GigShield Intelligence Asset" className="w-full rounded-[4rem] object-cover scale-[1.05]" />
               <div className="absolute -bottom-16 -left-16 glass p-10 rounded-[3rem] border-white/20 shadow-2xl backdrop-blur-3xl animate-bounce delay-1000">
                  <Star className="w-12 h-12 text-emerald-500 mb-3 fill-emerald-500" />
                  <p className="text-5xl font-black text-white">4.9/5</p>
                  <p className="text-sm font-black text-slate-500 uppercase tracking-widest mt-2">Active Protocols</p>
               </div>
            </motion.div>
            <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[120%] h-40 bg-purple-600/20 blur-3xl rounded-full opacity-40"></div>
          </motion.div>
        </div>
      </div>

      {/* Feature Cards Segment */}
      <div className="max-w-[1800px] mx-auto px-12 lg:px-24 grid grid-cols-1 md:grid-cols-3 gap-12 pb-2">
         {/* Detailed Settlement Card (Black Mode) */}
         <motion.div 
            whileHover={{ y: -10 }}
            className="bg-black border border-white/10 rounded-[3rem] p-12 flex flex-col justify-between group transition-all"
         >
            <div className="flex justify-between items-start mb-16">
               <h3 className="text-3xl font-black text-white italic tracking-tighter leading-tight">We secure you <br/> an AI settlement</h3>
               <div className="w-12 h-12 glass rounded-full flex items-center justify-center border-white/10 group-hover:bg-white group-hover:text-black transition-all">
                  <ArrowRight className="w-6 h-6 -rotate-45" />
               </div>
            </div>
            
            <div className="space-y-4 mb-12">
               <div className="flex justify-between text-sm py-4 border-b border-white/5">
                  <span className="text-slate-500 font-bold">Disruption currently detected</span>
                  <span className="text-white font-black">₹5,425</span>
               </div>
               <div className="flex justify-between text-sm py-4">
                  <span className="text-slate-500 font-bold">Expected settlement</span>
                  <span className="text-white font-black italic">₹2,600</span>
               </div>
            </div>
            
            <div className="flex items-center gap-4 py-6 border-t border-white/5">
               <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center text-white font-black">GS</div>
               <div>
                  <p className="text-sm font-black text-white">GigShield Protocol</p>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Lead Automation Advisor</p>
               </div>
            </div>
         </motion.div>

         {/* Insights Card */}
         <motion.div 
            whileHover={{ y: -10 }}
            className="bg-[#0f172a] border border-white/5 rounded-[3rem] p-12 flex flex-col justify-between transition-all"
         >
            <h3 className="text-3xl font-black text-white italic tracking-tighter leading-tight mb-16 px-2">Unlock insights into <br/> your insurance</h3>
            <div className="grid grid-cols-2 gap-6 h-full">
               <div className="glass-dark p-6 rounded-[2rem] border-white/5 flex flex-col justify-center gap-4">
                  <Star className="w-6 h-6 text-emerald-500" />
                  <p className="text-sm font-black text-white leading-tight">Elite Risk Mapping v2.5</p>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Active nodes in 250 zones</p>
               </div>
               <div className="glass-dark p-6 rounded-[2rem] border-white/5 flex flex-col justify-center gap-4">
                  <Activity className="w-6 h-6 text-purple-500" />
                  <p className="text-sm font-black text-white leading-tight">Live Payout Tracking</p>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Instant Liquidity Enabled</p>
               </div>
            </div>
         </motion.div>

         {/* Ratings/App Store Card */}
         <motion.div 
            whileHover={{ y: -10 }}
            className="bg-[#0f172a] border border-white/5 rounded-[3rem] p-12 flex flex-col justify-between transition-all"
         >
            <div className="flex justify-between items-start">
               <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center border-white/10 hover:bg-emerald-500 transition-all">
                  <Shield className="w-10 h-10 text-white" />
               </div>
               <div className="flex flex-col items-end">
                  <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1 italic">Verified on</p>
                  <p className="text-xl font-black text-white italic">Protocol Store <ChevronRight className="inline w-5 h-5 text-purple-500"/></p>
               </div>
            </div>
            
            <div className="mt-16 bg-white/5 p-8 rounded-[2.5rem] border border-white/10 text-center space-y-2 group shadow-2xl">
               <p className="text-6xl font-black text-white tracking-tighter">4.8</p>
               <div className="flex justify-center gap-1">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-emerald-500 text-emerald-500" />)}
               </div>
               <p className="text-xs font-black text-slate-500 uppercase tracking-widest pt-4 opacity-50">SCANNED BY GUIDEWIRE</p>
            </div>
         </motion.div>
      </div>
    </section>
  );
};

export default Hero;
=======
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import React from 'react';
import { Shield, ArrowRight, Activity, MapPin, Star, CreditCard, ChevronRight } from 'lucide-react';
import heroAsset from '../assets/hero_3d_asset.png';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 lg:pt-48 bg-[#020617] overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[1200px] h-[1200px] bg-purple-600/5 rounded-full blur-[200px] -mr-64 -mt-64 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[1000px] h-[1000px] bg-emerald-600/5 rounded-full blur-[200px] -ml-64 -mb-64 animate-pulse delay-1000"></div>

      <div className="max-w-[1800px] mx-auto px-12 lg:px-24 relative z-10 w-full mb-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-24 lg:gap-40 w-full">
          
          {/* Left Text Segment */}
          <div className="flex-1 text-left w-full lg:max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full glass border-white/10 text-slate-400 font-bold text-sm uppercase tracking-[0.3em] mb-12"
            >
              TRUSTED BY 1 MILLION GIG WORKERS
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-7xl lg:text-[7rem] font-black text-white leading-[0.95] tracking-tighter mb-12"
            >
              Manage your <br/>
              <span className="text-gradient">earnings </span> <br/>
              with ease
            </motion.h1>

            <div className="flex items-center gap-10 mb-20">
              <Link to="/signup" className="px-14 py-7 bg-white text-black rounded-3xl font-black text-2xl hover:scale-105 transition-all shadow-[0_30px_80px_rgba(255,255,255,0.15)] flex items-center gap-4">
                Start with GigShield <ArrowRight className="w-8 h-8" />
              </Link>
              <button className="px-14 py-7 glass border-white/20 text-white rounded-3xl font-black text-2xl hover:bg-white/5 transition-colors">
                Compare plans
              </button>
            </div>

            {/* Supported By Segment */}
            <div className="space-y-10 pt-12 border-t border-white/10">
              <p className="text-[12px] font-black text-slate-500 uppercase tracking-[0.5em]">SYSTEM NODES VERIFIED BY:</p>
              <div className="flex flex-wrap items-center gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-1000">
                 <div className="text-4xl font-black text-white flex items-center gap-3"><div className="w-10 h-10 rounded-xl bg-purple-600"></div>Guidewire</div>
                 <div className="text-4xl font-black text-white italic underline">BlackRock</div>
                 <div className="text-4xl font-black text-white tracking-widest underline decoration-purple-500 underline-offset-8">stripe</div>
                 <div className="text-3xl font-black text-white font-serif italic">Revolut</div>
              </div>
            </div>
          </div>

          {/* Right Asset Segment */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="flex-1 relative hidden xl:block w-full"
          >
            <motion.div
              animate={{ 
                y: [0, -60, 0],
                rotateZ: [-1, 1, -1]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 glass-dark rounded-[5rem] border-white/5 p-6 shadow-[0_80px_200px_rgba(37,99,235,0.25)]"
            >
               <img src={heroAsset} alt="GigShield Intelligence Asset" className="w-full rounded-[4rem] object-cover scale-[1.05]" />
               <div className="absolute -bottom-16 -left-16 glass p-10 rounded-[3rem] border-white/20 shadow-2xl backdrop-blur-3xl animate-bounce delay-1000">
                  <Star className="w-12 h-12 text-emerald-500 mb-3 fill-emerald-500" />
                  <p className="text-5xl font-black text-white">4.9/5</p>
                  <p className="text-sm font-black text-slate-500 uppercase tracking-widest mt-2">Active Protocols</p>
               </div>
            </motion.div>
            <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[120%] h-40 bg-purple-600/20 blur-3xl rounded-full opacity-40"></div>
          </motion.div>
        </div>
      </div>

      {/* Feature Cards Segment */}
      <div className="max-w-[1800px] mx-auto px-12 lg:px-24 grid grid-cols-1 md:grid-cols-3 gap-12 pb-2">
         {/* Detailed Settlement Card (Black Mode) */}
         <motion.div 
            whileHover={{ y: -10 }}
            className="bg-black border border-white/10 rounded-[3rem] p-12 flex flex-col justify-between group transition-all"
         >
            <div className="flex justify-between items-start mb-16">
               <h3 className="text-3xl font-black text-white italic tracking-tighter leading-tight">We secure you <br/> an AI settlement</h3>
               <div className="w-12 h-12 glass rounded-full flex items-center justify-center border-white/10 group-hover:bg-white group-hover:text-black transition-all">
                  <ArrowRight className="w-6 h-6 -rotate-45" />
               </div>
            </div>
            
            <div className="space-y-4 mb-12">
               <div className="flex justify-between text-sm py-4 border-b border-white/5">
                  <span className="text-slate-500 font-bold">Disruption currently detected</span>
                  <span className="text-white font-black">₹5,425</span>
               </div>
               <div className="flex justify-between text-sm py-4">
                  <span className="text-slate-500 font-bold">Expected settlement</span>
                  <span className="text-white font-black italic">₹2,600</span>
               </div>
            </div>
            
            <div className="flex items-center gap-4 py-6 border-t border-white/5">
               <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center text-white font-black">GS</div>
               <div>
                  <p className="text-sm font-black text-white">GigShield Protocol</p>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Lead Automation Advisor</p>
               </div>
            </div>
         </motion.div>

         {/* Insights Card */}
         <motion.div 
            whileHover={{ y: -10 }}
            className="bg-[#0f172a] border border-white/5 rounded-[3rem] p-12 flex flex-col justify-between transition-all"
         >
            <h3 className="text-3xl font-black text-white italic tracking-tighter leading-tight mb-16 px-2">Unlock insights into <br/> your insurance</h3>
            <div className="grid grid-cols-2 gap-6 h-full">
               <div className="glass-dark p-6 rounded-[2rem] border-white/5 flex flex-col justify-center gap-4">
                  <Star className="w-6 h-6 text-emerald-500" />
                  <p className="text-sm font-black text-white leading-tight">Elite Risk Mapping v2.5</p>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Active nodes in 250 zones</p>
               </div>
               <div className="glass-dark p-6 rounded-[2rem] border-white/5 flex flex-col justify-center gap-4">
                  <Activity className="w-6 h-6 text-purple-500" />
                  <p className="text-sm font-black text-white leading-tight">Live Payout Tracking</p>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Instant Liquidity Enabled</p>
               </div>
            </div>
         </motion.div>

         {/* Ratings/App Store Card */}
         <motion.div 
            whileHover={{ y: -10 }}
            className="bg-[#0f172a] border border-white/5 rounded-[3rem] p-12 flex flex-col justify-between transition-all"
         >
            <div className="flex justify-between items-start">
               <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center border-white/10 hover:bg-emerald-500 transition-all">
                  <Shield className="w-10 h-10 text-white" />
               </div>
               <div className="flex flex-col items-end">
                  <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1 italic">Verified on</p>
                  <p className="text-xl font-black text-white italic">Protocol Store <ChevronRight className="inline w-5 h-5 text-purple-500"/></p>
               </div>
            </div>
            
            <div className="mt-16 bg-white/5 p-8 rounded-[2.5rem] border border-white/10 text-center space-y-2 group shadow-2xl">
               <p className="text-6xl font-black text-white tracking-tighter">4.8</p>
               <div className="flex justify-center gap-1">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-emerald-500 text-emerald-500" />)}
               </div>
               <p className="text-xs font-black text-slate-500 uppercase tracking-widest pt-4 opacity-50">SCANNED BY GUIDEWIRE</p>
            </div>
         </motion.div>
      </div>
    </section>
  );
};

export default Hero;
>>>>>>> c82b35b346b0ec75d127a3219b0615fb567a56ae
