import React from 'react';
import { motion } from 'framer-motion';
import { CloudRain, Wind, AlertTriangle, ShieldCheck } from 'lucide-react';

const RiskAlerts = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-10 pb-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-2">Live Risk Alerts</h1>
        <p className="text-lg text-slate-500 font-bold">Real-time monitoring of your assigned delivery zone.</p>
      </motion.div>

      <div className="space-y-6">
        
        {/* Red Alert */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/30 p-8 rounded-3xl flex items-start gap-6 relative overflow-hidden"
        >
          <div className="p-4 bg-red-100 dark:bg-red-500/20 text-red-500 rounded-2xl relative z-10">
            <AlertTriangle className="w-8 h-8" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-red-500 text-white font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider">High Risk</span>
              <span className="text-slate-500 font-bold text-sm">Active Since: 2:00 PM Today</span>
            </div>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Severe Flood Warning</h2>
            <p className="text-slate-700 dark:text-slate-300 font-medium">Multiple zones in Andheri East are flooded. Water logging exceeds 500mm.</p>
            <p className="mt-4 font-bold text-red-600 dark:text-red-400">Smart Contract Action: Payouts automatically triggered for assigned workers.</p>
          </div>
          <AlertTriangle className="absolute -right-10 -bottom-10 w-48 h-48 opacity-[0.03] text-red-500" />
        </motion.div>

        {/* Yellow Alert */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-orange-50 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-500/30 p-8 rounded-3xl flex items-start gap-6 relative overflow-hidden"
        >
          <div className="p-4 bg-orange-100 dark:bg-orange-500/20 text-orange-500 rounded-2xl relative z-10">
            <CloudRain className="w-8 h-8" />
          </div>
          <div className="relative z-10">
             <div className="flex items-center gap-3 mb-2">
              <span className="bg-orange-500 text-white font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider">Medium Risk</span>
              <span className="text-slate-500 font-bold text-sm">Forecast: 6:00 PM - 11:00 PM</span>
            </div>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Heavy Rainfall Warning</h2>
            <p className="text-slate-700 dark:text-slate-300 font-medium">Expected rainfall density &gt; 15mm/hr violating safety thresholds.</p>
            <p className="mt-4 font-bold text-orange-600 dark:text-orange-400">Smart Contract Action: Monitoring. Payouts will trigger if rain persists for 2 hours.</p>
          </div>
          <CloudRain className="absolute -right-10 -bottom-10 w-48 h-48 opacity-[0.03] text-orange-500" />
        </motion.div>

        {/* Green Alert */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-brand-lightgreen/5 border border-brand-lightgreen/20 p-8 rounded-3xl flex items-start gap-6 relative overflow-hidden"
        >
          <div className="p-4 bg-brand-lightgreen/20 text-brand-lightgreen rounded-2xl relative z-10">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-brand-lightgreen text-white font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider">Safe</span>
            </div>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">AQI & Heat Levels Normal</h2>
            <p className="text-slate-700 dark:text-slate-300 font-medium">Currently no dangerous heatwaves or extreme pollution measured in your zones.</p>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default RiskAlerts;
