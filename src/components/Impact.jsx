import React from 'react';
import { motion } from 'framer-motion';

const impacts = [
  { title: "Income Stability", desc: "No more panic when it starts pouring. Stay safe, your baseline income is secured.", stat: "100%", sub: "Guaranteed" },
  { title: "Instant Solace", desc: "Our system bypasses traditional claims and manually triggers IMPS/UPI payouts instantly.", stat: "5 min", sub: "Disbursal" },
  { title: "Transparent Rules", desc: "You know exactly what weather condition triggers a payout. No hidden clauses.", stat: "0", sub: "Hidden fees" }
];

const Impact = () => {
  return (
    <section id="impact" className="py-28 relative overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-28">
          <h2 className="text-6xl md:text-[5rem] font-black mb-8 text-slate-900 dark:text-white leading-tight">Impact on Gig Workers</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-4xl mx-auto text-2xl leading-relaxed">We are improving the livelihoods of thousands by bringing safety-nets to the gig economy.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {impacts.map((impact, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl dark:shadow-none transition-shadow"
            >
              <div className="text-brand-blue font-black text-7xl md:text-[6rem] mb-6">{impact.stat}</div>
              <div className="text-brand-lightgreen text-xl font-bold uppercase tracking-widest mb-10">{impact.sub}</div>
              <h4 className="text-3xl font-black text-slate-900 dark:text-white mb-6">{impact.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 text-xl leading-relaxed">{impact.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
