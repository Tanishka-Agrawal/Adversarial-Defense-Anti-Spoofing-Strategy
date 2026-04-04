import React from 'react';
import { motion } from 'framer-motion';
import { IndianRupee, CloudLightning, Activity, CalendarDays } from 'lucide-react';

const history = [
  { id: 1, date: '02 Apr 2026', event: 'Heavy Rain (>20mm)', loss: '₹400', payout: '₹400', status: 'Deposited' },
  { id: 2, date: '15 Mar 2026', event: 'Extreme Heatwave (45°C)', loss: '₹250', payout: '₹250', status: 'Deposited' },
  { id: 3, date: '28 Feb 2026', event: 'Hazardous AQI (>400)', loss: '₹600', payout: '₹600', status: 'Deposited' },
];

const PayoutHistory = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-10 pb-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-2">Payout History</h1>
        <p className="text-lg text-slate-500 font-bold">Track automatically disbursed funds due to disruptions.</p>
      </motion.div>

      {/* Demo Notification Modal representation */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-brand-blue text-white p-6 rounded-3xl shadow-xl shadow-brand-blue/20 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full"></div>
        <div className="relative z-10 flex items-center gap-4">
          <div className="p-3 bg-white/20 rounded-xl relative">
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-full animate-ping"></span>
            <Activity className="w-8 h-8 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-black">Disruption Detected</h3>
            <p className="font-medium text-white/90">Heavy rain in your active zone. Your payout of <span className="font-bold underline">₹400</span> has been processed automatically via UPI.</p>
          </div>
        </div>
        <button className="whitespace-nowrap px-6 py-3 bg-white text-brand-blue rounded-xl font-bold hover:bg-slate-50 transition-colors relative z-10 shadow-lg">Verify Bank</button>
      </motion.div>

      {/* Table */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800 text-slate-500 font-bold uppercase tracking-wider text-sm">
                <th className="p-6">Date</th>
                <th className="p-6">Event Type</th>
                <th className="p-6">Est. Income Loss</th>
                <th className="p-6">Payout Amount</th>
                <th className="p-6">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {history.map((row) => (
                <tr key={row.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/20 transition-colors">
                  <td className="p-6 font-bold text-slate-900 dark:text-white flex items-center gap-3">
                    <CalendarDays className="w-5 h-5 text-slate-400" /> {row.date}
                  </td>
                  <td className="p-6 font-bold text-slate-600 dark:text-slate-300">
                    {row.event}
                  </td>
                  <td className="p-6 font-medium text-red-500 bg-red-50 dark:bg-red-500/10">
                    -{row.loss}
                  </td>
                  <td className="p-6 font-black text-brand-lightgreen bg-brand-lightgreen/5">
                    +{row.payout}
                  </td>
                  <td className="p-6">
                    <span className="inline-flex items-center gap-1 font-bold text-sm bg-brand-lightgreen/10 text-brand-lightgreen px-3 py-1 rounded-full uppercase tracking-wider">
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default PayoutHistory;
