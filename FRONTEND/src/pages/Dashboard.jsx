import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CloudLightning, Wallet, Activity } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
  const location = useLocation();
  const userName = location.state?.name || 'New Gig Worker';

  return (
    <div className="min-h-screen pt-10 pb-24 px-4 sm:px-6 lg:px-8 max-w-[95rem] mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 mt-12 bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl"
      >
        <h1 className="text-6xl md:text-[5rem] font-black text-slate-900 dark:text-white mb-6 tracking-tight">Welcome back, {userName}! 👋</h1>
        <p className="text-3xl text-slate-600 dark:text-slate-400 font-medium">Your GigShield Weekly coverage is currently <span className="text-brand-lightgreen font-black bg-brand-lightgreen/10 px-4 py-2 rounded-xl uppercase tracking-widest inline-flex items-center gap-3"><ShieldCheck className="w-8 h-8"/> Active</span></p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Coverage Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="col-span-1 lg:col-span-2 bg-gradient-to-br from-brand-blue to-teal-500 rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden"
        >
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/20 blur-[80px] rounded-full"></div>
          <h2 className="text-3xl font-black mb-4 opacity-90">Total Payout Limit</h2>
          <div className="text-[6rem] font-black leading-none mb-10">₹30,000</div>
          
          <div className="grid grid-cols-2 gap-8 text-xl font-bold bg-black/20 p-8 rounded-3xl backdrop-blur-md border border-white/10">
            <div>
              <p className="opacity-70 mb-2">Claimed this month</p>
              <p className="text-4xl text-white">₹0</p>
            </div>
            <div>
              <p className="opacity-70 mb-2">Next Renewal</p>
              <p className="text-4xl text-white">15 April, 2026</p>
            </div>
          </div>
        </motion.div>

        {/* Live Weather Trigger */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-[3rem] p-12 shadow-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between"
        >
          <div>
            <div className="w-20 h-20 bg-orange-100 dark:bg-orange-500/20 text-orange-500 rounded-2xl flex items-center justify-center mb-8 shadow-inner">
              <CloudLightning className="w-12 h-12" />
            </div>
            <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4">Risk Level: Moderate</h2>
            <p className="text-2xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">Forecast predicts heavy rainfall in your assigned delivery zone starting at 6:00 PM today.</p>
          </div>
          
          <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-inner">
            <span className="text-xl font-bold text-slate-500 dark:text-slate-400 block mb-2 uppercase tracking-wider">Smart Contract Status</span>
            <span className="text-3xl font-black text-slate-900 dark:text-white flex items-center gap-3">
               <Activity className="w-8 h-8 text-brand-blue animate-pulse" />
               Monitoring IoT... 
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
