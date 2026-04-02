import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, CheckCircle, Smartphone } from 'lucide-react';

const ProfileSetup = () => {
  const [isSaved, setIsSaved] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-10 pb-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-2">Worker Profile Setup</h1>
        <p className="text-lg text-slate-500 font-bold">Complete your profile to enable automated payouts.</p>
      </motion.div>

      <motion.form 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        onSubmit={handleSubmit}
        className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm"
      >
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Full Name</label>
              <input type="text" required placeholder="Ravi Kumar" className="w-full px-5 py-4 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-blue outline-none" />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">City</label>
              <input type="text" required placeholder="Mumbai" className="w-full px-5 py-4 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-blue outline-none" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Primary Delivery Platform</label>
              <select required className="w-full px-5 py-4 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-blue outline-none">
                <option value="zomato">Zomato</option>
                <option value="swiggy">Swiggy</option>
                <option value="zepto">Zepto</option>
                <option value="amazon">Amazon</option>
                <option value="dunzo">Dunzo</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Vehicle Type</label>
              <select required className="w-full px-5 py-4 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-blue outline-none">
                <option value="bike">Motorbike</option>
                <option value="scooter">Electric Scooter</option>
                <option value="cycle">Bicycle</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Average Weekly Earnings (₹)</label>
              <input type="number" required placeholder="4000" className="w-full px-5 py-4 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-blue outline-none" />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">UPI ID for Payouts</label>
              <div className="relative">
                <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input type="text" required placeholder="9876543210@okbank" className="w-full pl-12 px-5 py-4 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-blue outline-none" />
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <p className="text-sm font-bold text-slate-500">Your data is securely encrypted.</p>
            <button type="submit" className="px-10 py-4 bg-brand-blue hover:bg-blue-600 text-white rounded-xl font-black transition-colors shadow-lg shadow-brand-blue/20 flex items-center gap-2">
              {isSaved ? <><CheckCircle className="w-5 h-5" /> Saved!</> : 'Save Profile'}
            </button>
          </div>
        </div>
      </motion.form>
    </div>
  );
};

export default ProfileSetup;
