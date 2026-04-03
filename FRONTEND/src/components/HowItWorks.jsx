import React from 'react';
import { motion } from 'framer-motion';
import { CloudLightning, Link as LinkIcon, ShieldCheck, CreditCard } from 'lucide-react';

const steps = [
  {
    title: 'Precision Geo-Sync',
    desc: 'Connect your delivery platform IDs. Our AI begins mapping weather nodes & traffic flows in your specific delivery zone.',
    icon: LinkIcon,
  },
  {
    title: 'Parametric Monitoring',
    desc: 'Advanced weather satellites and local IoT sensors monitor for disruption triggers (Rain, Floods, Heatwaves) in real-time.',
    icon: CloudLightning,
  },
  {
    title: 'Autonomous Verification',
    desc: 'If a trigger occurs during your scheduled shift, our smart contract verifies the disruption autonomously via decentralized consensus.',
    icon: ShieldCheck,
  },
  {
    title: 'Instant Liquidity',
    desc: 'Funds are pushed directly to your UPI/Bank account within seconds of verification. Zero paperwork. Zero delay.',
    icon: CreditCard,
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="pt-2 pb-24 bg-[#020617] relative overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-12 lg:px-24">
        <div className="text-left mb-12 border-l-8 border-purple-600 pl-12">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-purple-500 font-black uppercase tracking-[0.5em] text-sm mb-6">Execution Protocol</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-6xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9] italic">How the AI <br/> <span className="text-gradient">Protects You</span></motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-16 rounded-[4rem] border-white/5 relative group hover:border-purple-500/30 transition-all hover:-translate-y-4 shadow-2xl"
            >
              <div className="absolute -top-10 -right-10 w-28 h-28 glass rounded-full flex items-center justify-center font-black text-5xl text-purple-500 shadow-3xl border-white/10 group-hover:scale-110 transition-transform">
                {idx + 1}
              </div>
              <div className="bg-purple-600/10 p-8 rounded-[2rem] inline-block mb-10 border border-purple-500/20 group-hover:bg-purple-600/20 transition-colors">
                <step.icon className="w-14 h-14 text-purple-500" />
              </div>
              <h3 className="text-4xl font-black text-white mb-8 tracking-tight italic group-hover:text-purple-400 transition-colors">{step.title}</h3>
              <p className="text-slate-400 font-bold leading-relaxed text-xl">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
