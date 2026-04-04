import React from 'react';
import { motion } from 'framer-motion';
import { CloudRain, Wind, AlertTriangle, ShieldCheck } from 'lucide-react';

const RiskAlerts = () => {
  const [alerts, setAlerts] = React.useState([]);

  React.useEffect(() => {
    const fetchAlerts = async () => {
      try {
        const res = await fetch('http://127.0.0.1:8000/api/alerts');
        const data = await res.json();
        setAlerts(data.alerts);
      } catch(e) {
        setAlerts([
          { id: 1, type: "Weather", message: "Heavy Rain expected in Mumbai tonight. Stay safe!", severity: "High", time: "1 min ago" },
          { id: 2, type: "Platform", message: "Zomato app experiencing minor delays in your zone.", severity: "Moderate", time: "10 mins ago" }
        ]);
      }
    };
    fetchAlerts();
  }, []);

  return (
    <div className="max-w-5xl mx-auto space-y-10 pb-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-5xl font-black text-slate-900 dark:text-white mb-2 underline decoration-brand-blue decoration-8">Live Risk Alerts</h1>
        <p className="text-xl text-slate-500 font-bold">Real-time monitoring of your assigned gig-worker delivery zones.</p>
      </motion.div>

      <div className="space-y-8">
        {alerts.map((alert, idx) => (
          <motion.div 
            key={alert.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={`p-8 rounded-[2.5rem] flex items-start gap-8 relative overflow-hidden border-2 
              ${alert.severity === 'High' ? 'bg-red-50 dark:bg-red-500/5 border-red-200 dark:border-red-500/20' : 
                alert.severity === 'Moderate' ? 'bg-orange-50 dark:bg-orange-500/5 border-orange-200 dark:border-orange-500/20' : 
                'bg-slate-50 dark:bg-slate-800 border-slate-200'}`}
          >
            <div className={`p-5 rounded-3xl relative z-10 shadow-lg 
              ${alert.severity === 'High' ? 'bg-red-500 text-white' : 'bg-orange-500 text-white'}`}>
              <AlertTriangle className="w-10 h-10" />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-3">
                <span className={`font-black text-xs px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-sm 
                  ${alert.severity === 'High' ? 'bg-red-500 text-white' : 'bg-orange-500 text-white'}`}>
                  {alert.severity} Risk
                </span>
                <span className="text-slate-500 font-bold text-sm tracking-wide">{alert.time}</span>
              </div>
              <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">{alert.type} Disruption</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 font-bold leading-relaxed">{alert.message}</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-brand-lightgreen animate-pulse"></div>
                <p className="font-black text-sm text-brand-lightgreen uppercase tracking-widest">Guidewire Smart Contract: Policy Active</p>
              </div>
            </div>
            <AlertTriangle className="absolute -right-12 -bottom-12 w-64 h-64 opacity-[0.05] text-slate-900 dark:text-white" />
          </motion.div>
        ))}
        {alerts.length === 0 && (
          <div className="text-center py-20 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-dashed border-slate-300">
             <ShieldCheck className="w-20 h-20 text-slate-300 mx-auto mb-4" />
             <p className="text-slate-400 font-bold text-xl">All systems normal. No active risks.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RiskAlerts;
