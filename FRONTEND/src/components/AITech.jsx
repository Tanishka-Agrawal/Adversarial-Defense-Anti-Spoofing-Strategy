import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Wind, ShieldAlert, Zap } from 'lucide-react';

const AITech = () => {
  return (
    <section id="technology" className="py-24 relative overflow-hidden bg-slate-900 border-y border-slate-800">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-blue/5 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-6xl md:text-8xl font-black mb-10 text-white leading-tight tracking-tighter">
              The AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-cyan-400 font-mono">BRAIN</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-400 font-bold mb-16 leading-relaxed">
              We replaced biased insurance agents with **pure logic.** Our parametric engine correlates environmental metrics with platform activity instantly.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: Wind, title: "Disruption Prediction", desc: "AI predicts floods/heatwaves using NASA & IMD data feeds.", color: "text-brand-blue" },
                { icon: Zap, title: "Parametric Execution", desc: "Instant UPI payouts triggered via Guidewire Smart Contracts.", color: "text-brand-lightgreen" },
                { icon: ShieldAlert, title: "Fraud-Free Verification", desc: "ML-based location validation across multiple gig platforms.", color: "text-purple-500" }
              ].map((tech, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 20, scale: 1.02 }}
                  className="flex gap-8 p-6 bg-white/5 border border-white/10 rounded-[2rem] backdrop-blur-md group cursor-default transition-all"
                >
                   <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:border-brand-blue transition-colors">
                     <tech.icon className={`w-8 h-8 ${tech.color}`} />
                   </div>
                   <div>
                     <h4 className="text-2xl font-black text-white mb-2">{tech.title}</h4>
                     <p className="text-slate-400 font-bold text-sm leading-relaxed">{tech.desc}</p>
                   </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            className="relative h-[600px] flex items-center justify-center"
          >
            {/* Spinning Neural Rings */}
            <div className="absolute w-[450px] h-[450px] border border-brand-blue/30 rounded-full animate-[spin_10s_linear_infinite] shadow-[0_0_30px_#2563eb33]"></div>
            <div className="absolute w-[550px] h-[550px] border border-brand-lightgreen/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
            
            <div className="relative w-80 h-80 bg-slate-950 rounded-[3rem] border-4 border-brand-blue shadow-[0_0_100px_#2563eb66] flex items-center justify-center overflow-hidden">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-blue/20 to-transparent"></div>
               <motion.div 
                  animate={{ scale: [1, 1.1, 1] }} 
                  transition={{ duration: 2, repeat: Infinity }}
                  className="relative z-10"
               >
                 <Cpu className="w-40 h-40 text-purple-400 drop-shadow-[0_0_20px_#60a5fa]" />
               </motion.div>
               <div className="absolute bottom-6 font-mono text-brand-blue font-black tracking-widest text-xs animate-pulse underline">ACTIVE NEURAL LOGIC</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AITech;
