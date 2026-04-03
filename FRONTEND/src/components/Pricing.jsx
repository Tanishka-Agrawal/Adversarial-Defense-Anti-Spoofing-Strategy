import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const plans = [
  {
    name: "Basic",
    price: "40",
    coverage: "1000",
    color: "slate",
    features: ["Valid for 7 Days", "Rain limit > 10mm/hr", "Automated Payouts", "Basic Support"]
  },
  {
    name: "Standard",
    price: "60",
    coverage: "2000",
    color: "blue",
    popular: true,
    features: ["Valid for 7 Days", "All basic triggers", "Flood + AQI > 400", "Priority Payouts", "24/7 Chat Support"]
  },
  {
    name: "Premium",
    price: "90",
    coverage: "3000",
    color: "brand-lightgreen",
    features: ["Valid for 7 Days", "Highest Coverage Limit", "All standard triggers", "Heatwave protection", "Instant VIP Support"]
  }
];

const Pricing = () => {
  const navigate = useNavigate();

  return (
    <section id="pricing" className="py-10 relative overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-brand-blue/5 blur-[150px] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6 text-slate-900 dark:text-white leading-tight underline decoration-brand-lightgreen underline-offset-8">Weekly Protection</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-xl leading-relaxed">AI-calculated premiums for Indian delivery partners.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center max-w-[85rem] mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-slate-50 dark:bg-slate-900 border rounded-[2.5rem] p-10 relative transition-all duration-300 hover:-translate-y-2
                ${plan.popular ? 'border-brand-blue shadow-[0_0_40px_rgba(37,99,235,0.2)] md:scale-105 bg-white dark:bg-slate-900 ring-2 ring-brand-blue/50' : 'border-slate-200 dark:border-slate-800'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-brand-blue text-white text-sm font-black px-5 py-2 rounded-full uppercase tracking-widest shadow-lg">Most Popular</span>
                </div>
              )}
              <h3 className="text-4xl font-black text-slate-900 dark:text-white mb-4">{plan.name}</h3>
              <div className="flex items-baseline gap-3 mb-10">
                <span className="text-7xl font-black text-slate-900 dark:text-white">₹{plan.price}</span>
                <span className="text-2xl text-slate-500 dark:text-slate-400">/week</span>
              </div>
              <div className="mb-12 p-6 bg-white dark:bg-slate-800/50 rounded-3xl border border-slate-200 dark:border-slate-700/50 shadow-sm dark:shadow-none">
                <p className="text-lg font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">Max Payout Cover</p>
                <p className={`text-5xl font-black mt-3 ${plan.popular ? 'text-brand-blue' : 'text-brand-lightgreen'}`}>₹{plan.coverage}</p>
              </div>

              <ul className="space-y-6 mb-12">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-5">
                    <CheckCircle className={`w-8 h-8 flex-shrink-0 ${plan.popular ? 'text-brand-blue' : 'text-slate-400 dark:text-slate-500'}`} />
                    <span className="text-slate-700 dark:text-slate-300 text-xl font-bold">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => navigate('/checkout', { state: { plan } })}
                className={`w-full py-6 rounded-3xl font-black transition-all text-2xl
                ${plan.popular ? 'bg-brand-blue hover:bg-purple-600 text-white shadow-xl hover:scale-105' : 'bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-white hover:scale-105'}`}>
                Choose {plan.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
