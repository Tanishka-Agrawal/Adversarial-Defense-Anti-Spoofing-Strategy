import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Calendar, Activity, Banknote } from 'lucide-react';

const steps = [
  {
    icon: <UserPlus className="w-10 h-10 text-brand-blue" />,
    title: "1. Connect Account",
    desc: "Sign up and link your Zomato, Swiggy, or Zepto partner ID securely."
  },
  {
    icon: <Calendar className="w-10 h-10 text-brand-lightgreen" />,
    title: "2. Choose a Plan",
    desc: "Select an affordable weekly coverage tier right from your phone."
  },
  {
    icon: <Activity className="w-10 h-10 text-purple-500" />,
    title: "3. AI Monitoring",
    desc: "Our system monitors real-time weather, API data, and disruptions 24/7."
  },
  {
    icon: <Banknote className="w-10 h-10 text-teal-500" />,
    title: "4. Auto Payout",
    desc: "Get instantly credited directly to your UPI ID when a disruption triggers."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50 dark:bg-slate-950 border-y border-slate-200 dark:border-slate-800 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-8xl font-black mb-8 text-slate-900 dark:text-white leading-tight tracking-tighter"
          >
            How GigShield <span className="text-brand-blue">Works</span>
          </motion.h2>
          <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-bold opacity-80">
            Four simple steps to automated income security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ rotateY: 15, rotateX: -10, y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl p-10 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-xl group relative cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="bg-slate-100 dark:bg-slate-800 w-24 h-24 rounded-3xl flex items-center justify-center mb-10 shadow-inner border-2 border-white dark:border-slate-700 group-hover:border-brand-blue group-hover:scale-110 transition-all duration-500">
                {React.cloneElement(step.icon, { className: "w-12 h-12" })}
              </div>
              
              <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">{step.title}</h3>
              <p className="text-lg text-slate-500 dark:text-slate-400 font-bold leading-relaxed">{step.desc}</p>
              
              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-brand-blue/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
