import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Shield, ArrowRight, User, Eye, EyeOff } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import PopcornRain from '../components/PopcornRain';

const Login = () => {
  const navigate = useNavigate();
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
    
    // Check mock database for registered phone number
    const users = JSON.parse(localStorage.getItem('gigshield_users') || '[]');
    const normalizedPhone = phone.replace(/\s+/g, '');
    const foundUser = users.find(u => u.phone === normalizedPhone);
    const targetName = foundUser ? foundUser.name : 'Unknown Gig Worker';

    setTimeout(() => {
      navigate('/dashboard', { state: { name: targetName } });
    }, 500);
  };

  return (
    <div className="min-h-[80vh] flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative">
      <PopcornRain />
      
      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center"
        >
          <div className="bg-brand-blue/20 p-4 rounded-xl">
            <Shield className="w-10 h-10 text-brand-blue" />
          </div>
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mt-8 text-center text-5xl md:text-6xl font-black text-slate-900 dark:text-white"
        >
          Sign in to GigShield
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-center text-xl text-slate-600 dark:text-slate-400"
        >
          Or{' '}
          <Link to="/signup" className="font-bold text-brand-blue hover:text-blue-500 transition-colors">
            create a new account
          </Link>
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-12 sm:mx-auto sm:w-full sm:max-w-lg relative z-10"
      >
        <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl py-12 px-8 shadow-2xl rounded-[2rem] border border-slate-200 dark:border-slate-800 sm:px-14">
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="phone" className="block text-lg font-bold text-slate-700 dark:text-slate-300">
                Phone Number / Gig ID
              </label>
              <div className="mt-3 relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-6 w-6 text-slate-400" />
                </div>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="appearance-none block w-full pl-14 px-5 py-4 border border-slate-300 dark:border-slate-700 rounded-2xl shadow-sm placeholder-slate-400 focus:outline-none focus:ring-brand-blue focus:border-brand-blue text-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white transition-colors"
                  placeholder="98765 43210"
                />
              </div>
            </div>

            <div>
              <label htmlFor="pin" className="block text-lg font-bold text-slate-700 dark:text-slate-300">
                4-Digit PIN
              </label>
              <div className="mt-3 text-slate-800 dark:text-white flex items-center gap-4">
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
                      className="[&::-ms-reveal]:hidden [&::-ms-clear]:hidden w-16 h-16 text-center text-3xl font-black border border-slate-300 dark:border-slate-700 rounded-2xl bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-colors text-slate-900 dark:text-white"
                    />
                  ))}
                </div>
                <button type="button" onClick={() => setShowPin(!showPin)} className="h-16 w-16 flex items-center justify-center bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-2xl text-slate-500 hover:text-brand-blue transition-colors flex-shrink-0">
                  {showPin ? <EyeOff className="w-8 h-8" /> : <Eye className="w-8 h-8" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between mt-8">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-6 w-6 text-brand-blue focus:ring-brand-blue bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-700 rounded"
                />
                <label htmlFor="remember-me" className="ml-3 block text-base font-medium text-slate-700 dark:text-slate-300">
                  Remember me
                </label>
              </div>

              <div className="text-base">
                <a href="#" className="font-bold text-brand-blue hover:text-blue-500 transition-colors">
                  Forgot PIN?
                </a>
              </div>
            </div>

            <div className="pt-6">
              <button
                type="submit"
                className="w-full flex justify-center py-5 px-6 border border-transparent rounded-2xl shadow-xl text-2xl font-black text-white bg-brand-blue hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue focus:ring-offset-slate-900 transition-all hover:scale-[1.02]"
              >
                Sign in securely <ArrowRight className="ml-3 mt-1.5 w-6 h-6" />
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
