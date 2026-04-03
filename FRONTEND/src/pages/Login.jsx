import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Shield, ArrowRight, User, Eye, EyeOff, Lock } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import sideAsset from '../assets/signup_3d_bg.png';

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
    
    const users = JSON.parse(localStorage.getItem('gigshield_users') || '[]');
    const normalizedPhone = phone.replace(/\s+/g, '');
    const foundUser = users.find(u => u.phone === normalizedPhone);
    const targetName = foundUser ? foundUser.name : 'Unknown Gig Worker';

    setTimeout(() => {
      navigate('/dashboard', { state: { name: targetName } });
    }, 500);
  };

  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center p-4 sm:p-10 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-[150px] -mr-64 -mt-64 animate-pulse"></div>
      
      <div className="w-full max-w-6xl flex flex-col lg:flex-row glass-dark rounded-[4rem] shadow-2xl overflow-hidden relative z-10 border border-white/10 min-h-[700px]">
        
        {/* Visual Panel (Left side) */}
        <div className="hidden lg:flex w-2/5 relative flex-col justify-between p-16 overflow-hidden border-r border-white/5">
           <img src={sideAsset} alt="Auth Background" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay" />
           <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent"></div>
           
           <div className="relative z-10 space-y-8">
              <Link to="/" className="flex items-center gap-4 group">
                <div className="bg-purple-600/30 p-4 rounded-3xl border border-purple-500/40">
                  <Shield className="w-10 h-10 text-purple-400" />
                </div>
                <span className="text-3xl font-black tracking-tighter text-white">GigShield <span className="text-emerald-500">AI</span></span>
              </Link>
              
              <h2 className="text-5xl font-black text-white leading-tight italic">Welcome Back to <br/> Secure Ops.</h2>
              <p className="text-slate-400 font-bold max-w-xs leading-relaxed text-lg">
                Re-authenticate your session to access your autonomous insurance dashboard.
              </p>
           </div>

           <div className="relative z-10 pt-10 border-t border-white/5">
              <p className="text-slate-500 font-black uppercase tracking-[0.4em] text-[10px]">Secure Login Gateway v4.0</p>
           </div>
        </div>

        {/* Form Area */}
        <div className="flex-1 p-10 sm:p-20 flex flex-col justify-center bg-slate-950/20 backdrop-blur-md">
           <form className="w-full max-w-md mx-auto space-y-10" onSubmit={handleSubmit}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-10"
              >
                <div>
                  <h1 className="text-5xl font-black text-white mb-4 italic tracking-tighter text-gradient">Login.</h1>
                  <p className="text-slate-500 font-bold text-lg">Enter your secure credentials.</p>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Phone Number / Gig ID</label>
                  <div className="relative">
                    <User className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-500" />
                    <input 
                      type="text" required value={phone} onChange={e => setPhone(e.target.value)}
                      className="w-full bg-white/5 border border-white/5 rounded-2xl p-5 pl-14 text-white font-bold focus:ring-2 focus:ring-purple-500 outline-none transition-all hover:bg-white/10 text-xl"
                      placeholder="98765 43210"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">4-Digit Secret PIN</label>
                  <div className="flex items-center gap-4">
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
                          className="w-full h-16 text-center text-3xl font-black border border-white/5 rounded-2xl bg-white/5 focus:ring-2 focus:ring-purple-500 outline-none transition-all text-white hover:bg-white/10"
                        />
                      ))}
                    </div>
                    <button type="button" onClick={() => setShowPin(!showPin)} className="h-16 w-16 flex items-center justify-center bg-white/5 border border-white/5 rounded-2xl text-slate-500 hover:text-purple-400 transition-colors shrink-0">
                      {showPin ? <EyeOff className="w-8 h-8" /> : <Eye className="w-8 h-8" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                     <input type="checkbox" id="remember" className="w-5 h-5 rounded border-white/10 bg-white/5 text-purple-600 focus:ring-purple-500" />
                     <label htmlFor="remember" className="text-slate-500 font-bold text-sm">Keep Session Active</label>
                  </div>
                  <a href="#" className="text-purple-500 font-black text-sm hover:text-purple-400 transition-colors italic">Reset Vault PIN</a>
                </div>

                <button
                  type="submit"
                  className="w-full bg-purple-600 p-6 rounded-3xl font-black text-2xl text-white hover:scale-[1.02] transition-all shadow-xl shadow-purple-500/20 flex items-center justify-center gap-3"
                >
                  SIGN IN SECURELY <Lock className="w-6 h-6" />
                </button>

                <p className="text-center text-slate-500 font-bold text-sm">
                  New to the protocol? {' '}
                  <Link to="/signup" className="text-white hover:text-purple-400 transition-all font-black italic underline decoration-purple-500">Initialize Node</Link>
                </p>
              </motion.div>
           </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
