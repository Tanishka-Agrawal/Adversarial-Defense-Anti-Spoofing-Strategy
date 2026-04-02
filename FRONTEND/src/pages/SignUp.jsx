import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Shield, Eye, EyeOff } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import floatingImage from '../assets/floating_groceries.png';

const SignUp = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [phone, setPhone] = useState('');
  const [showPin, setShowPin] = useState(false);
  const [pin, setPin] = useState(['', '', '', '']);
  const inputRefs = useRef([]);

  const handlePinChange = (index, value) => {
    if (value.length > 1) value = value.slice(-1);
    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);
    
    if (value !== '' && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePinKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !pin[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Quick local DB mock to persist user session data for the login page
    const users = JSON.parse(localStorage.getItem('gigshield_users') || '[]');
    // Clean phone number for basic normalization
    const normalizedPhone = phone.replace(/\s+/g, '');
    users.push({ name: firstName, phone: normalizedPhone });
    localStorage.setItem('gigshield_users', JSON.stringify(users));

    // Simulate slight delay then route smoothly
    setTimeout(() => {
      navigate('/dashboard', { state: { name: firstName || 'User' }});
    }, 500);
  };

  return (
    <div className="min-h-[85vh] flex p-4 sm:p-8">
      {/* Visual Side */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="hidden lg:flex w-1/2 bg-slate-900 rounded-3xl p-12 flex-col justify-between relative overflow-hidden border border-slate-800 shadow-2xl overflow-y-auto"
      >
        <img src={floatingImage} alt="Floating Groceries" className="absolute inset-0 w-full h-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-slate-900/40"></div>
        
        <div className="relative z-10">
          <Link to="/" className="flex items-center gap-3 mb-16 inline-flex hover:opacity-80 transition-opacity">
            <div className="bg-brand-blue/20 p-2 rounded-xl">
              <Shield className="w-8 h-8 text-brand-blue" />
            </div>
            <span className="font-bold text-2xl tracking-tight text-white">GigShield <span className="text-brand-lightgreen">AI</span></span>
          </Link>

          <h1 className="text-5xl font-extrabold text-white leading-tight mb-6">
            Secure your daily earnings with absolute certainty.
          </h1>
          <p className="text-xl text-slate-400 mb-12">
            Join thousands of delivery partners getting instant payouts when environmental conditions disrupt their runs.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <CheckCircle className="w-8 h-8 text-brand-lightgreen" />
              <span className="text-lg text-slate-200">Zero paperwork required</span>
            </div>
            <div className="flex items-center gap-4">
              <CheckCircle className="w-8 h-8 text-brand-lightgreen" />
              <span className="text-lg text-slate-200">Automated UPI payouts</span>
            </div>
            <div className="flex items-center gap-4">
              <CheckCircle className="w-8 h-8 text-brand-lightgreen" />
              <span className="text-lg text-slate-200">Connects with all major delivery apps</span>
            </div>
          </div>
        </div>
        
        <div className="relative z-10 text-slate-500 font-medium">
          © 2026 GigShield AI. Powered by Parametric Protocols.
        </div>
      </motion.div>

      {/* Form Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-12">
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-lg"
        >
          <div className="text-center lg:text-left mb-10">
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-4">Create your account</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Already a member?{' '}
              <Link to="/login" className="font-bold text-brand-blue hover:text-blue-500 transition-colors">
                Sign in deeply
              </Link>
            </p>
          </div>

          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-lg font-bold text-slate-700 dark:text-slate-300 mb-2">First Name</label>
                <input 
                  type="text" 
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-5 py-4 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-blue outline-none transition-all shadow-sm text-xl" 
                  placeholder="Ravi" 
                  required
                />
              </div>
              <div>
                <label className="block text-lg font-bold text-slate-700 dark:text-slate-300 mb-2">Last Name</label>
                <input type="text" className="w-full px-5 py-4 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-blue outline-none transition-all shadow-sm text-xl" placeholder="Kumar" />
              </div>
            </div>

            <div>
              <label className="block text-lg font-bold text-slate-700 dark:text-slate-300 mb-2">Phone Number</label>
              <div className="flex">
                <span className="inline-flex items-center px-6 rounded-l-xl border border-r-0 border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-900 text-slate-500 text-xl font-bold">
                  +91
                </span>
                <input 
                  type="tel" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="flex-1 min-w-0 block w-full px-5 py-4 rounded-none rounded-r-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-blue outline-none transition-all shadow-sm text-xl" 
                  placeholder="98765 43210" 
                  required 
                />
              </div>
            </div>

            <div>
              <label className="block text-lg font-bold text-slate-700 dark:text-slate-300 mb-2">Create 4-Digit PIN</label>
              <div className="flex items-center gap-4 mt-2">
                <div className="flex justify-between gap-4 flex-1">
                  {[0, 1, 2, 3].map((index) => (
                    <input
                      key={index}
                      ref={(el) => (inputRefs.current[index] = el)}
                      type={showPin ? "text" : "password"}
                      maxLength={1}
                      required
                      value={pin[index]}
                      onChange={(e) => handlePinChange(index, e.target.value)}
                      onKeyDown={(e) => handlePinKeyDown(index, e)}
                      className="[&::-ms-reveal]:hidden [&::-ms-clear]:hidden w-full h-16 text-center text-3xl font-black border border-slate-300 dark:border-slate-700 rounded-2xl bg-white dark:bg-slate-800 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-colors text-slate-900 dark:text-white shadow-sm"
                    />
                  ))}
                </div>
                <button type="button" onClick={() => setShowPin(!showPin)} className="h-16 w-16 flex items-center justify-center bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-2xl text-slate-500 hover:text-brand-blue transition-colors flex-shrink-0">
                  {showPin ? <EyeOff className="w-8 h-8" /> : <Eye className="w-8 h-8" />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-lg font-bold text-slate-700 dark:text-slate-300 mb-2">Select Platform Integrations (Optional)</label>
              <select className="w-full px-5 py-4 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-blue outline-none transition-all shadow-sm text-xl">
                <option>Zomato Delivery</option>
                <option>Swiggy Partner</option>
                <option>Zepto / Blinkit</option>
                <option>Uber Eats / Other</option>
              </select>
            </div>

            <div className="pt-8">
              <button type="submit" className="w-full bg-brand-blue hover:bg-blue-600 text-white font-black py-5 px-8 rounded-2xl shadow-lg transition-transform hover:scale-[1.02] text-2xl">
                Create Account
              </button>
            </div>
            
            <p className="text-center text-base text-slate-500 mt-8">
              By registering, you agree to our <a href="#" className="text-brand-blue hover:underline font-bold">Terms of Service</a> and <a href="#" className="text-brand-blue hover:underline font-bold">Privacy Policy</a>.
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default SignUp;
