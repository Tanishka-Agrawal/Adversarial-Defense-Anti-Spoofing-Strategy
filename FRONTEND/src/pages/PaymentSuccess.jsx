import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PaymentSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[85vh] flex flex-col justify-center items-center px-4">
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="mb-8 relative"
      >
        <div className="absolute inset-0 bg-brand-lightgreen blur-3xl opacity-30 rounded-full"></div>
        <CheckCircle className="w-48 h-48 text-brand-lightgreen drop-shadow-2xl relative z-10" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-center"
      >
        <h1 className="text-6xl md:text-7xl font-black text-slate-900 dark:text-white mb-6">Payment Successful!</h1>
        <p className="text-2xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12">
          Your GigShield Policy has been successfully generated and activated. You are now 100% protected.
        </p>
        
        <button 
          onClick={() => navigate('/dashboard')}
          className="inline-flex items-center gap-4 bg-brand-blue hover:bg-purple-600 text-white px-10 py-5 rounded-2xl font-black text-2xl transition-transform hover:scale-105 shadow-xl"
        >
          Go to Dashboard <ArrowRight className="w-8 h-8" />
        </button>
      </motion.div>
    </div>
  );
};

export default PaymentSuccess;
