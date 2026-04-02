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
  const [stats, setStats] = React.useState({
    total_earnings_protected: '2,000',
    active_policies: 1,
    claims_settled: 3,
    risk_score: 'Low'
  });
  const [loading, setLoading] = React.useState(true);

  const location = useLocation();
  let memoryName = 'Guest Worker';
  try {
    const users = JSON.parse(localStorage.getItem('gigshield_users') || '[]');
    if(users.length > 0) memoryName = users[users.length - 1].name;
  } catch(e) {}
  const userName = location.state?.name || memoryName;

  React.useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch(`http://127.0.0.1:8000/api/dashboard/${userName}`);
        if(res.ok) {
           const data = await res.json();
           setStats(data);
        }
      } catch(e) {
        console.error("Backend offline, using fallback data.");
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, [userName]);

  return (
    <div className="max-w-[100rem] mx-auto space-y-12 pb-24">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row justify-between items-end gap-6"
      >
        <div>
          <h1 className="text-6xl font-black text-slate-900 dark:text-white mb-3 tracking-tighter">Hello, {userName}! 🚀</h1>
          <p className="text-2xl text-slate-500 font-bold opacity-80 italic">Predictive Intelligence: <span className="text-brand-blue">Active</span></p>
        </div>
        <div className="bg-white/10 backdrop-blur-3xl border border-white/20 p-6 rounded-3xl shadow-2xl flex items-center gap-4">
           <Activity className="w-8 h-8 text-brand-lightgreen animate-pulse" />
           <div>
             <p className="text-xs font-black uppercase text-slate-500">Global Protection</p>
             <p className="text-xl font-black text-slate-900 dark:text-white tracking-widest">LIVE SYNC</p>
           </div>
        </div>
      </motion.div>

      {/* 3D Glass Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {[
          { label: "Active Plan", val: "Standard Shield", sub: "Premium ₹60", icon: ShieldCheck, color: "bg-blue-500" },
          { label: "AI Protected Payouts", val: `₹${stats.total_earnings_protected}`, sub: "3 Claims Settled", icon: Activity, color: "bg-brand-lightgreen" },
          { label: "Current Risk Level", val: "MODERATE", sub: "Monitoring Rain", icon: AlertTriangle, color: "bg-orange-500" },
          { label: "Policy Coverage", val: "100%", sub: "Loss of Income Only", icon: ShieldCheck, color: "bg-indigo-500" }
        ].map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05, rotateY: 5, rotateX: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="group relative overflow-hidden bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border border-white/30 dark:border-white/10 p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 hover:shadow-brand-blue/30"
          >
            <div className={`absolute -right-4 -bottom-4 w-24 h-24 rounded-full ${item.color} opacity-10 blur-2xl group-hover:opacity-30 transition-opacity`}></div>
            <p className="text-slate-500 font-black mb-4 uppercase tracking-[0.2em] text-xs">{item.label}</p>
            <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-2">{item.val}</h3>
            <p className="font-bold text-slate-400 text-sm">{item.sub}</p>
            <item.icon className={`absolute top-8 right-8 w-8 h-8 ${item.color} opacity-40`} />
          </motion.div>
        ))}
      </div>

      {/* NEW: Live Payout Timeline */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full bg-slate-950 p-8 rounded-[2.5rem] border-2 border-brand-blue shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-6">
           <span className="flex items-center gap-2 text-brand-lightgreen font-black text-xs uppercase tracking-widest"><ShieldCheck className="w-4 h-4"/> SMART CONTRACT: EXECUTING</span>
        </div>
        <h3 className="text-2xl font-black text-white mb-10 flex items-center gap-4">
          <Activity className="w-8 h-8 text-brand-blue" /> Your Active Payout Tracker
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
           <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-800 -translate-y-1/2 hidden md:block"></div>
           {[
             { step: "Monitoring", status: "Active", dotColor: "bg-brand-blue shadow-[0_0_15px_#2563eb]" },
             { step: "Disrupted", status: "Waiting", dotColor: "bg-slate-700" },
             { step: "Verified", status: "Next", dotColor: "bg-slate-700" },
             { step: "Paid", status: "Final", dotColor: "bg-slate-700" }
           ].map((s, i) => (
             <div key={i} className="flex flex-col items-center md:items-start relative z-10">
               <div className={`w-8 h-8 rounded-full mb-4 border-4 border-slate-950 ${s.dotColor}`}></div>
               <p className="text-white font-black text-xl tracking-tight">{s.step}</p>
               <p className="text-slate-500 font-bold text-sm uppercase tracking-widest">{s.status}</p>
             </div>
           ))}
        </div>
      </motion.div>

      {/* Interactive AI Simulation Widget */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
      >
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-slate-950 text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-transparent opacity-50"></div>
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-10">
              <div className="space-y-6">
                <h3 className="text-4xl font-black italic tracking-tighter">Interactive AI <br/> Risk Engine</h3>
                <p className="text-slate-400 font-bold max-w-sm">Adjust the weather severity to see how our AI dynamically increases your protection buffer.</p>
                <div className="w-full space-y-4">
                  <label className="block text-xs font-black uppercase tracking-widest text-brand-blue">Simulate Rain Intensity</label>
                  <input type="range" className="w-full h-4 bg-slate-800 rounded-full appearance-none cursor-pointer accent-brand-blue" />
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 backdrop-blur-md p-8 rounded-[2rem] text-center w-full md:w-auto">
                 <p className="text-slate-500 font-black uppercase text-xs mb-3">AI SUGGESTED PREMIUM</p>
                 <p className="text-6xl font-black text-white">₹85</p>
                 <span className="inline-block mt-4 text-brand-lightgreen font-black text-sm px-4 py-2 bg-brand-lightgreen/10 rounded-full">+20% Risk Buffer Active</span>
              </div>
            </div>
          </div>

          {/* Chart Card */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden h-[400px]">
             <h3 className="text-2xl font-black mb-6">Income Stability Index</h3>
             <ResponsiveContainer width="100%" height="80%">
              <AreaChart data={data}>
                <Area type="monotone" dataKey="protected" stroke="#10b981" fill="#10b98133" strokeWidth={5} />
                <Tooltip />
              </AreaChart>
             </ResponsiveContainer>
          </div>
        </div>

        {/* Integration Status Section */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-slate-900 text-white p-10 rounded-[3rem] border-4 border-brand-blue shadow-2xl flex flex-col justify-between h-full relative"
        >
          <div className="absolute top-0 right-0 p-8">
            <div className="w-3 h-3 bg-brand-lightgreen rounded-full shadow-[0_0_15px_#10b981] animate-pulse"></div>
          </div>
          <div>
            <h3 className="text-3xl font-black mb-8 leading-tight">Zomato / Swiggy <br/> Live Sync</h3>
            <div className="space-y-6">
              {["Zomato", "Swiggy", "Blinkit", "Zepto"].map((app, i) => (
                <motion.div 
                  key={app} 
                  initial={{ x: 50, opacity: 0 }} 
                  animate={{ x: 0, opacity: 1 }} 
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center justify-between p-5 bg-white/5 rounded-3xl border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group"
                >
                  <span className="font-bold text-xl group-hover:text-brand-blue transition-colors">{app}</span>
                  <ShieldCheck className="w-6 h-6 text-brand-lightgreen" />
                </motion.div>
              ))}
            </div>
          </div>
          <button className="w-full py-5 bg-gradient-to-r from-brand-blue to-cyan-500 rounded-3xl font-black text-xl hover:scale-105 transition-transform shadow-lg mt-10">
            CONNECT NEW APP
          </button>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Overview;
