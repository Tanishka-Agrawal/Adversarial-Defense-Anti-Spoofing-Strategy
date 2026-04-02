import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CloudLightning, Activity, AlertTriangle, ArrowUpRight } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useLocation } from 'react-router-dom';

const data = [
  { day: 'Mon', income: 400, protected: 400 },
  { day: 'Tue', income: 600, protected: 600 },
  { day: 'Wed', income: 200, protected: 800 }, // Disruption, payout covers gap
  { day: 'Thu', income: 900, protected: 900 },
  { day: 'Fri', income: 850, protected: 850 },
  { day: 'Sat', income: 150, protected: 1000 },// Heavy Rain
  { day: 'Sun', income: 1000, protected: 1000 },
];

const Overview = () => {
  const location = useLocation();
  let memoryName = 'Guest Worker';
  try {
    const users = JSON.parse(localStorage.getItem('gigshield_users') || '[]');
    if(users.length > 0) memoryName = users[users.length - 1].name;
  } catch(e) {}
  const userName = location.state?.name || memoryName;

  return (
    <div className="max-w-[100rem] mx-auto space-y-10 pb-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-5xl font-black text-slate-900 dark:text-white mb-2">Welcome back, {userName}! 👋</h1>
        <p className="text-xl text-slate-500 font-bold">Here is what is happening with your coverage today.</p>
      </motion.div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
           <p className="text-slate-500 font-bold mb-2 uppercase tracking-widest text-sm">Current Plan</p>
           <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4">Standard Shield</h3>
           <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-lightgreen/10 text-brand-lightgreen rounded-xl font-bold uppercase tracking-wider text-sm"><ShieldCheck className="w-5 h-5"/> Active</span>
        </div>
        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm relative">
           <p className="text-slate-500 font-bold mb-2 uppercase tracking-widest text-sm">Weekly Premium</p>
           <h3 className="text-5xl font-black text-slate-900 dark:text-white mb-2">₹60</h3>
           <p className="text-brand-blue font-bold text-sm bg-brand-blue/10 inline-block px-3 py-1 rounded-lg mt-2">Next autopay: 15 Apr</p>
        </div>
        <div className="bg-gradient-to-br from-brand-blue to-teal-500 p-8 rounded-3xl border border-transparent shadow-xl text-white relative overflow-hidden">
           <div className="absolute -top-20 -right-20 w-48 h-48 bg-white/20 blur-3xl rounded-full"></div>
           <p className="font-bold opacity-80 mb-2 uppercase tracking-widest text-sm">Total Coverage</p>
           <h3 className="text-5xl font-black mb-2 relative z-10">₹2,000</h3>
           <p className="font-bold text-white/80 text-sm relative z-10">Remaining limit for this week</p>
        </div>
        <div className="bg-orange-50 dark:bg-orange-500/10 p-8 rounded-3xl border border-orange-200 dark:border-orange-500/20 shadow-sm relative overflow-hidden">
           <AlertTriangle className="absolute -right-4 -bottom-4 w-32 h-32 opacity-10 text-orange-500" />
           <p className="text-orange-600 dark:text-orange-400 font-bold mb-2 uppercase tracking-widest text-sm">Active Alerts</p>
           <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Heavy Rain</h3>
           <p className="text-slate-600 dark:text-slate-400 text-sm font-bold bg-white dark:bg-slate-950 px-3 py-2 rounded-lg inline-block mt-1">Payout highly likely tonight</p>
        </div>
      </div>

      {/* Chart Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <div>
            <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">Income Protection vs Disruptions</h3>
            <p className="text-slate-500 font-bold">Your historical earnings stabilized by GigShield AI payouts</p>
          </div>
          <div className="flex gap-4 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-2 rounded-xl">
             <button className="px-6 py-2 bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-bold text-slate-900 dark:text-white">This Week</button>
             <button className="px-6 py-2 text-slate-500 hover:text-slate-900 dark:hover:text-white text-sm font-bold transition-colors">Last Week</button>
          </div>
        </div>
        
        <div className="h-[450px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#94a3b8" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorProtected" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.6}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="day" stroke="#64748b" axisLine={false} tickLine={false} dy={10} className="font-bold text-sm" />
              <YAxis stroke="#64748b" axisLine={false} tickLine={false} dx={-10} className="font-bold text-sm" tickFormatter={(value) => `₹${value}`} />
              <Tooltip 
                contentStyle={{ borderRadius: '1rem', border: '1px solid #e2e8f0', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', fontWeight: 'bold' }}
                formatter={(value) => [`₹${value}`]}
              />
              <Area type="monotone" dataKey="income" stroke="#94a3b8" strokeWidth={3} fillOpacity={1} fill="url(#colorIncome)" name="Actual Earnings" />
              <Area type="monotone" dataKey="protected" stroke="#10b981" strokeWidth={4} fillOpacity={1} fill="url(#colorProtected)" name="Total w/ Payouts" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </div>
  );
};

export default Overview;
