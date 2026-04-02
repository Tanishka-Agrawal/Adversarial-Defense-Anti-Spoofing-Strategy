import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, CreditCard, Smartphone, CheckCircle, Loader2, QrCode } from 'lucide-react';
import { useLocation, useNavigate, Navigate } from 'react-router-dom';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('upi'); // 'upi' or 'card'
  
  // Form states
  const [upiId, setUpiId] = useState('');
  const [cardNumber, setCardNumber] = useState('');

  // Fallback if someone hits /checkout manually
  if (!location.state?.plan) {
    return <Navigate to="/" />;
  }

  const { plan } = location.state;

  const handlePayment = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment API delay
    setTimeout(() => {
      navigate('/payment-success');
    }, 2000);
  };

  return (
    <div className="min-h-[85vh] pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Column: Order Summary */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl p-10 rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-2xl"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-4 bg-brand-blue/10 rounded-2xl">
              <Shield className="w-10 h-10 text-brand-blue" />
            </div>
            <h1 className="text-4xl font-black text-slate-900 dark:text-white">Order Summary</h1>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-700/50 mb-8">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-2">{plan.name} Plan</h2>
            <p className="text-brand-lightgreen font-bold text-xl mb-8">Valid for 7 Days</p>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-xl">
                <span className="text-slate-600 dark:text-slate-400">Plan Cost</span>
                <span className="text-slate-900 dark:text-white font-bold">₹{plan.price}</span>
              </div>
              <div className="flex justify-between text-xl">
                <span className="text-slate-600 dark:text-slate-400">GST (18%)</span>
                <span className="text-slate-900 dark:text-white font-bold">₹{(plan.price * 0.18).toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xl">
                <span className="text-slate-600 dark:text-slate-400">Platform Fee</span>
                <span className="text-slate-900 dark:text-white font-bold">₹0.00</span>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-200 dark:border-slate-700 flex justify-between items-center text-3xl font-black text-slate-900 dark:text-white">
              <span>Total Payable</span>
              <span>₹{(parseFloat(plan.price) * 1.18).toFixed(2)}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-5 bg-brand-lightgreen/10 rounded-2xl text-brand-lightgreen">
            <CheckCircle className="w-8 h-8 flex-shrink-0" />
            <p className="text-lg font-bold">Your coverage unlocks instantly after payment.</p>
          </div>
        </motion.div>

        {/* Right Column: Payment Gateway */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl p-10 rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-2xl"
        >
          <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-8">Payment Details</h2>

          <div className="space-y-6 mb-10">
            {/* Payment Method Tabs */}
            <div className="flex gap-4">
              <button 
                onClick={() => setPaymentMethod('upi')}
                className={`flex-1 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-colors ${paymentMethod === 'upi' ? 'bg-brand-blue text-white shadow-lg' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'}`}
              >
                <Smartphone className="w-6 h-6" /> UPI
              </button>
              <button 
                onClick={() => setPaymentMethod('card')}
                className={`flex-1 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-colors ${paymentMethod === 'card' ? 'bg-brand-blue text-white shadow-lg' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'}`}
              >
                <CreditCard className="w-6 h-6" /> Card
              </button>
            </div>

            {/* Dynamic Form based on Selection */}
            <form onSubmit={handlePayment} className="space-y-6 pt-6">
              
              {paymentMethod === 'upi' ? (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div>
                    <label className="block text-lg font-bold text-slate-700 dark:text-slate-300 mb-3">Enter your UPI ID</label>
                    <input 
                      type="text" 
                      required
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                      placeholder="name@okbank"
                      className="w-full px-6 py-5 rounded-2xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xl focus:ring-2 focus:ring-brand-blue outline-none"
                    />
                  </div>

                  <div className="text-center text-slate-500 mb-6 font-medium text-lg">or scan QR using any UPI app</div>

                  <div className="flex justify-center mb-8">
                    <div className="w-56 h-56 bg-white dark:bg-slate-800 rounded-3xl flex flex-col items-center justify-center border-2 border-slate-200 dark:border-slate-700 shadow-sm p-4 relative overflow-hidden group">
                      <QrCode className="w-full h-full text-slate-800 dark:text-white/90" strokeWidth={1} />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-blue/20 to-transparent translate-y-[-100%] group-hover:animate-[scan_2s_ease-in-out_infinite]"></div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div>
                    <label className="block text-lg font-bold text-slate-700 dark:text-slate-300 mb-3">Card Number</label>
                    <input 
                      type="text" 
                      required
                      maxLength="19"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ').trim())}
                      placeholder="0000 0000 0000 0000"
                      className="w-full px-6 py-5 rounded-2xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xl focus:ring-2 focus:ring-brand-blue outline-none font-mono"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-lg font-bold text-slate-700 dark:text-slate-300 mb-3">Expiry</label>
                      <input type="text" placeholder="MM/YY" required className="w-full px-6 py-5 rounded-2xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xl focus:ring-2 focus:ring-brand-blue outline-none" />
                    </div>
                    <div>
                      <label className="block text-lg font-bold text-slate-700 dark:text-slate-300 mb-3">CVV</label>
                      <input type="password" placeholder="•••" required maxLength="3" className="w-full px-6 py-5 rounded-2xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xl focus:ring-2 focus:ring-brand-blue outline-none tracking-widest" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-lg font-bold text-slate-700 dark:text-slate-300 mb-3">Cardholder Name</label>
                    <input type="text" placeholder="Ravi Kumar" required className="w-full px-6 py-5 rounded-2xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xl focus:ring-2 focus:ring-brand-blue outline-none uppercase" />
                  </div>
                </div>
              )}

              <button 
                type="submit" 
                disabled={isProcessing || (paymentMethod === 'upi' ? !upiId : !cardNumber)}
                className="w-full py-6 rounded-2xl font-black text-2xl transition-all bg-brand-lightgreen hover:bg-green-500 text-white shadow-xl flex items-center justify-center gap-4 disabled:opacity-50 disabled:cursor-not-allowed mt-8"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="w-8 h-8 animate-spin" />
                    Processing Payment...
                  </>
                ) : (
                  `Pay ₹{(parseFloat(plan.price) * 1.18).toFixed(2)} Securely`
                )}
              </button>
            </form>
          </div>
          
          <div className="flex justify-center items-center gap-3 text-slate-400 text-sm font-bold mt-8">
            <Shield className="w-5 h-5" /> Secured by 256-bit Bank-grade Encryption
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Checkout;
