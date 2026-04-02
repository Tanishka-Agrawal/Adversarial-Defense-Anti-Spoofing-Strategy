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
    <section id="how-it-works" className="py-28 bg-slate-100 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 relative z-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-[5rem] font-black mb-8 text-slate-900 dark:text-white leading-tight">How GigShield Works</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-4xl mx-auto text-2xl leading-relaxed">Four simple steps to guarantee your income when environmental conditions halt your delivery runs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800/50 p-10 rounded-3xl border border-slate-200 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-lg dark:shadow-none group relative"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-blue/5 dark:from-white/5 to-transparent rounded-bl-[40px] rounded-tr-[30px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="bg-slate-50 dark:bg-slate-900/80 w-28 h-28 rounded-3xl flex items-center justify-center mb-10 shadow-inner border border-slate-100 dark:border-slate-700/50">
                {React.cloneElement(step.icon, { className: step.icon.props.className.replace('w-10 h-10', 'w-16 h-16') })}
              </div>
              <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-6">{step.title}</h3>
              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
