import React from 'react';
import { motion } from 'framer-motion';
import { Users, Globe, IndianRupee, Heart } from 'lucide-react';

const Impact = () => {
    const stats = [
        { icon: Users, label: "Active Workers protected", val: "1.2M+", color: "text-purple-500" },
        { icon: Globe, label: "Zones with Live Nodes", val: "250+", color: "text-emerald-500" },
        { icon: IndianRupee, label: "Total Automatic Payouts", val: "₹15Cr+", color: "text-blue-500" },
        { icon: Heart, label: "Community Support", val: "98%", color: "text-rose-500" }
    ];

    return (
        <section id="impact" className="py-32 bg-[#020617] relative overflow-hidden border-t border-white/5">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-purple-600/5 rounded-full blur-[200px] pointer-events-none"></div>
            
            <div className="max-w-[120rem] mx-auto px-12 lg:px-24">
                <div className="text-center mb-24 max-w-4xl mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-3 px-6 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 font-extrabold text-xs uppercase tracking-widest mb-10"
                    >
                        THE GIGSHIELD EFFECT
                    </motion.div>
                    <h2 className="text-7xl lg:text-8xl font-black text-white leading-tight tracking-tighter italic">
                        Real Impact. <br />
                        <span className="text-gradient">Zero Wait Times.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {stats.map((stat, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="glass p-12 rounded-[3.5rem] border-white/5 hover:border-purple-500/30 transition-all group"
                        >
                            <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                                <stat.icon className={`w-10 h-10 ${stat.color}`} />
                            </div>
                            <h3 className="text-5xl font-black text-white mb-4 tracking-tighter leading-none italic">{stat.val}</h3>
                            <p className="text-slate-500 font-black uppercase text-xs tracking-widest">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Impact;
