import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CloudLightning, Activity, AlertTriangle, ArrowUpRight, TrendingUp } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useLocation } from 'react-router-dom';

const data = [
  { day: 'Mon', income: 400, protected: 400 },
  { day: 'Tue', income: 600, protected: 600 },
  { day: 'Wed', income: 200, protected: 800 },
  { day: 'Thu', income: 900, protected: 900 },
  { day: 'Fri', income: 850, protected: 850 },
  { day: 'Sat', income: 150, protected: 1000 },
  { day: 'Sun', income: 1000, protected: 1000 },
];

const Overview = () => {
  const [stats, setStats] = React.useState({
    total_earnings_protected: '0',
    active_policies: 1,
    claims_settled: 0,
    risk_score: 'Low'
  });
  const [loading, setLoading] = React.useState(true);
  const [apps, setApps] = React.useState(["Zomato", "Swiggy", "Blinkit", "Zepto", "Uber"]);
  const [weather, setWeather] = React.useState(null);

  const addNewApp = () => {
    const name = prompt("Enter the name of the app to integrate:");
    if (name && !apps.includes(name)) {
      setApps([...apps, name]);
    }
  };

  React.useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const res = await fetch(`http://127.0.0.1:8000/api/weather-by-location?lat=${latitude}&lon=${longitude}`);
          if (res.ok) {
            const data = await res.json();
            setWeather(data);
          }
        } catch (e) {
          console.error("Weather fetch failed");
        }
      });
    }
  }, []);

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
        console.error("Using local simulated stats.");
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, [userName]);

  return (
    <div className="max-w-[120rem] mx-auto space-y-16">
      {/* Hero Welcome */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-10"
      >
        <div>
          <h1 className="text-7xl font-black text-white mb-4 tracking-tighter leading-none">
            Welcome back, <span className="text-gradient italic">{userName}</span>
          </h1>
          <p className="text-2xl text-slate-400 font-bold max-w-2xl">
            Our AI Risk Model is currently monitoring <span className="text-purple-500 font-black">hyper-local triggers</span> in your zone.
          </p>
        </div>
        <div className="glass p-8 rounded-[2rem] flex items-center gap-6 shadow-2xl">
           <div className="w-16 h-16 bg-purple-600/20 rounded-2xl flex items-center justify-center border border-purple-500/30">
              <Activity className="w-10 h-10 text-purple-500 animate-pulse" />
           </div>
           <div>
             <p className="text-xs font-black uppercase text-slate-500 tracking-[0.2em] mb-1">Global Node Status</p>
             <p className="text-2xl font-black text-white tracking-widest">ENCRYPTED SYNC</p>
           </div>
        </div>
      </motion.div>

      {/* Premium Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-10">
        {[
          { label: "Active Protocol", val: "Shield Pro v2", sub: "Status: Live", icon: ShieldCheck, color: "from-purple-600 to-indigo-600", shadow: "shadow-purple-500/20" },
          { label: "Earnings Gated", val: `₹${stats.total_earnings_protected}`, sub: "Self-Executing Contract", icon: TrendingUp, color: "from-emerald-600 to-teal-600", shadow: "shadow-emerald-500/20" },
          { label: "Zone Risk level", val: stats.risk_score, sub: "Updated 1m ago", icon: AlertTriangle, color: "from-orange-600 to-amber-600", shadow: "shadow-orange-500/20" },
          { label: "Claims Automation", val: "100%", sub: "Zero paperwork", icon: ShieldCheck, color: "from-indigo-600 to-purple-600", shadow: "shadow-indigo-500/20" }
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            className={`group relative overflow-hidden glass rounded-[3rem] p-10 hover:border-white/20 transition-all ${item.shadow}`}
          >
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-10 blur-3xl group-hover:opacity-30 transition-opacity`}></div>
            <p className="text-slate-500 font-black mb-6 uppercase tracking-[0.3em] text-xs leading-none">{item.label}</p>
            <h3 className="text-4xl font-black text-white mb-3 tracking-tighter leading-none">{item.val}</h3>
            <p className="font-bold text-slate-400 text-sm italic">{item.sub}</p>
            <div className={`mt-8 p-3 rounded-xl bg-white/5 inline-block group-hover:scale-110 transition-transform`}>
              <item.icon className="w-6 h-6 text-slate-300" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          <div className="glass rounded-[3.5rem] p-12 relative overflow-hidden">
             <div className="flex justify-between items-center mb-10">
                <div>
                   <h3 className="text-3xl font-black text-white flex items-center gap-4 italic tracking-tighter">
                     Income Stability Index
                   </h3>
                   <p className="text-slate-500 font-bold mt-2">Real-time parametric payout correlation</p>
                </div>
                <div className="flex gap-4">
                   <div className="px-4 py-2 rounded-xl bg-purple-600/10 border border-purple-500/20 text-purple-500 font-bold text-xs">WEEKLY</div>
                </div>
             </div>
             <div className="h-[450px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="colorProtected" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                    <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill: '#475569', fontWeight: 'bold'}} dy={10} />
                    <Tooltip 
                      contentStyle={{backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '16px', color: '#fff'}}
                      itemStyle={{fontWeight: '900', color: '#8b5cf6'}}
                    />
                    <Area type="monotone" dataKey="protected" stroke="#8b5cf6" strokeWidth={6} fillOpacity={1} fill="url(#colorProtected)" />
                  </AreaChart>
                </ResponsiveContainer>
             </div>
          </div>

          {/* Live Weather & Location Widget */}
          <div className="glass rounded-[3.5rem] p-12 relative overflow-hidden bg-gradient-to-br from-purple-950/20 to-transparent flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="space-y-6">
                 <div className="flex items-center gap-4 px-6 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full w-fit">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
                    <span className="text-emerald-500 font-black text-xs uppercase tracking-widest">Live Atmospheric Sync</span>
                 </div>
                 <h2 className="text-5xl font-black text-white leading-none italic tracking-tighter">Your Current <br/> <span className="text-gradient">Risk Zone</span></h2>
                 <p className="text-xl text-slate-400 font-bold max-w-sm">GigShield is currently monitoring environmental triggers at your exact coordinates.</p>
              </div>

              {weather ? (
                <div className="flex flex-col md:flex-row items-center gap-12">
                   <div className="text-center md:text-right">
                      <p className="text-8xl font-black text-white leading-none">{Math.round(weather.temp)}°</p>
                      <p className="text-2xl font-black text-slate-300 uppercase tracking-tighter mt-3 italic">{weather.city}</p>
                   </div>
                   <div className="p-12 glass rounded-[3.5rem] border-purple-500/30 flex flex-col items-center shadow-3xl bg-slate-900/40 min-w-[200px]">
                      <CloudLightning className="w-20 h-20 text-purple-500 mb-6" />
                      <p className="text-lg font-black text-white uppercase tracking-widest">{weather.condition}</p>
                      <p className="text-sm font-bold text-slate-500 mt-2 italic">{weather.description}</p>
                   </div>
                </div>
              ) : (
                <div className="flex items-center gap-4 text-slate-500 font-black italic">
                   <div className="w-8 h-8 rounded-full border-2 border-slate-500/30 border-t-purple-500 animate-spin"></div>
                   Detecting Location...
                </div>
              )}
          </div>
        </div>

        <div className="space-y-10">
          <div className="glass-dark rounded-[3.5rem] border-purple-500/30 p-10 h-full flex flex-col">
             <h3 className="text-3xl font-black text-white mb-10 leading-none">Live Node <br/> Integration</h3>
             <div className="space-y-4 flex-1">
                {apps.map((app, i) => (
                  <motion.div 
                    key={app} 
                    initial={{ x: 20, opacity: 0 }} 
                    whileInView={{ x: 0, opacity: 1 }} 
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center justify-between p-6 bg-white/5 rounded-[2rem] border border-white/5 group hover:bg-white/10 transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center font-black text-slate-500">
                          {app.charAt(0)}
                       </div>
                       <span className="font-black text-xl text-slate-300 group-hover:text-purple-400 transition-colors">{app}</span>
                    </div>
                    <ShieldCheck className="w-6 h-6 text-emerald-500 shadow-xl" />
                  </motion.div>
                ))}
             </div>
             <button 
                onClick={addNewApp}
                className="w-full mt-10 py-6 bg-purple-600 rounded-[2rem] font-black text-xl hover:scale-105 transition-transform shadow-2xl shadow-purple-500/40 text-white flex items-center justify-center gap-3"
             >
                ADD NEW APP <ArrowUpRight className="w-6 h-6" />
             </button>
          </div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="glass rounded-[4rem] p-16 relative flex flex-col xl:flex-row items-center gap-16"
      >
        <div className="flex-1 space-y-10">
           <div className="inline-flex items-center gap-3 px-6 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-500 font-extrabold text-xs uppercase tracking-widest">
              Simulation Engine Active
           </div>
           <h3 className="text-5xl font-black text-white italic tracking-tighter leading-none">
             Dynamic AI Risk Simulation
           </h3>
           <p className="text-xl text-slate-400 font-bold max-w-lg">
             Adjust our simulation intensity to see how the parametric engine calculates your <span className="text-white underline font-black italic">disruption buffer</span> in milliseconds.
           </p>
        </div>
        <div className="w-full xl:w-[450px] bg-slate-950 p-12 rounded-[3.5rem] border-2 border-purple-600 shadow-2xl shadow-purple-600/10 text-center space-y-8">
           <p className="text-slate-500 font-black uppercase text-xs tracking-widest">ESTIMATED AI BUFFER</p>
           <div className="text-8xl font-black text-gradient italic tracking-tighter">₹120</div>
           <p className="text-emerald-500 font-bold italic underline decoration-2">Self-Executing Contract Ready</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Overview;
