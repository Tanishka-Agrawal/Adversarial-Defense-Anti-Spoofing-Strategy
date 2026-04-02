import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Wind, ShieldAlert, Zap } from 'lucide-react';

const AITech = () => {
  return (
    <section id="technology" className="py-28 relative overflow-hidden bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center max-w-[90rem] mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-6xl md:text-[5rem] font-black mb-10 text-slate-900 dark:text-white leading-tight">State of the Art <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-lightgreen">Parametric AI</span></h2>
            <p className="text-slate-600 dark:text-slate-400 text-2xl mb-16 leading-relaxed">
              Unlike traditional insurance with biased agents and endless paperwork, GigShield AI relies purely on real-time data metrics. If it hits the threshold, you get paid. Pure logic.
            </p>
            
            <div className="space-y-12">
              <div className="flex gap-8">
                <div className="w-24 h-24 rounded-3xl border border-blue-500/30 bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                  <Wind className="w-12 h-12 text-brand-blue" />
                </div>
                <div>
                  <h4 className="text-3xl font-black text-slate-900 dark:text-white mb-3">Disruption Prediction</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-xl leading-relaxed">Ingests data from IBM Weather, IMD, and local IoT sensors to confirm disruptions precisely.</p>
                </div>
              </div>
              <div className="flex gap-8">
                <div className="w-24 h-24 rounded-3xl border border-brand-lightgreen/30 bg-green-50 dark:bg-brand-lightgreen/10 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-12 h-12 text-brand-lightgreen" />
                </div>
                <div>
                  <h4 className="text-3xl font-black text-slate-900 dark:text-white mb-3">Parametric Triggers</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-xl leading-relaxed">Smart contracts immediately queue your payout the exact minute data threshold is crossed.</p>
                </div>
              </div>
              <div className="flex gap-8">
                <div className="w-24 h-24 rounded-3xl border border-purple-500/30 bg-purple-50 dark:bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                  <ShieldAlert className="w-12 h-12 text-purple-600 dark:text-purple-500" />
                </div>
                <div>
                  <h4 className="text-3xl font-black text-slate-900 dark:text-white mb-3">Zero Fraud Detection</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-xl leading-relaxed">Advanced ML algorithms correlate platform login data to ensure you were on-duty during the disruption.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square bg-white dark:bg-slate-800 rounded-[3rem] border border-slate-200 dark:border-slate-700 overflow-hidden relative shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 dark:from-brand-blue/20 to-brand-teal/10 dark:to-brand-teal/20"></div>
              {/* Abstract Tech Illustration Space */}
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="relative w-80 h-80 border-[6px] border-slate-200 dark:border-slate-700/50 rounded-full flex items-center justify-center animate-[spin_20s_linear_infinite]">
                    <div className="absolute top-0 w-6 h-6 bg-brand-blue rounded-full blur-[2px] shadow-[0_0_15px_#2563eb]"></div>
                    <div className="absolute bottom-0 w-6 h-6 bg-brand-lightgreen rounded-full blur-[2px] shadow-[0_0_15px_#22c55e]"></div>
                 </div>
                 <Cpu className="absolute w-28 h-28 text-slate-400 dark:text-slate-300 drop-shadow-2xl" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AITech;
