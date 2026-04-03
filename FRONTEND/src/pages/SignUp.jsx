import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Shield, Eye, EyeOff, MapPin, Navigation, ArrowRight, Loader2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import sideAsset from '../assets/signup_3d_bg.png';

const SignUp = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [income, setIncome] = useState('5000');
  const [locationData, setLocationData] = useState(null);
  const [isLocating, setIsLocating] = useState(false);
  const [recommendation, setRecommendation] = useState(null);
  
  const [showPin, setShowPin] = useState(false);
  const [pin, setPin] = useState(['', '', '', '']);
  const inputRefs = useRef([]);

  const detectLocation = () => {
    setIsLocating(true);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const res = await fetch(`http://127.0.0.1:8000/api/recommend-policy?income=${income}&lat=${latitude}&lon=${longitude}`);
          const data = await res.json();
          setLocationData(data);
          setRecommendation(data.recommendation);
        } catch (err) {
          console.error("Location API failed:", err);
        } finally {
          setIsLocating(false);
        }
      }, (error) => {
        console.error("Geolocation error:", error);
        setIsLocating(false);
      });
    } else {
      alert("Geolocation is not supported by your browser");
      setIsLocating(false);
    }
  };

  const handlePinChange = (index, value) => {
    if (value.length > 1) value = value.slice(-1);
    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);
    if (value !== '' && index < 3) inputRefs.current[index + 1]?.focus();
  };

  const handlePinKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !pin[index] && index > 0) inputRefs.current[index - 1]?.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 2) {
      setStep(2);
      return;
    }
    
    const fullName = `${firstName} ${lastName}`.trim();
    const users = JSON.parse(localStorage.getItem('gigshield_users') || '[]');
    users.push({ 
      name: fullName, 
      phone: phone, 
      location: locationData?.location,
      plan: recommendation?.plan_name 
    });
    localStorage.setItem('gigshield_users', JSON.stringify(users));

    setTimeout(() => {
      navigate('/dashboard', { state: { name: fullName || 'User' }});
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center p-4 sm:p-10 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-[150px] -mr-64 -mt-64 animate-pulse"></div>
      
      <div className="w-full max-w-6xl flex flex-col lg:flex-row glass-dark rounded-[4rem] shadow-2xl overflow-hidden relative z-10 border border-white/10 min-h-[700px]">
        
        {/* Visual Panel (Left side on desktop) - Replaces fruits with tech 3D */}
        <div className="hidden lg:flex w-2/5 relative flex-col justify-between p-16 overflow-hidden border-r border-white/5">
           <img src={sideAsset} alt="Tech Background" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay" />
           <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent"></div>
           
           <div className="relative z-10 space-y-8">
              <Link to="/" className="flex items-center gap-4 group">
                <div className="bg-purple-600/30 p-4 rounded-3xl border border-purple-500/40">
                  <Shield className="w-10 h-10 text-purple-400" />
                </div>
                <span className="text-3xl font-black tracking-tighter text-white">GigShield <span className="text-emerald-500">AI</span></span>
              </Link>
              
              <h2 className="text-5xl font-black text-white leading-tight italic">Elite Protection <br/> Starts Here.</h2>
              <p className="text-slate-400 font-bold max-w-xs leading-relaxed text-lg">
                Join the autonomous insurance protocol trusted by over 1M professionals.
              </p>
           </div>

           <div className="relative z-10 pt-10 border-t border-white/5">
              <p className="text-slate-500 font-black uppercase tracking-[0.4em] text-[10px]">Verified Parametric Node v2.5</p>
           </div>
        </div>

        {/* Form Area */}
        <div className="flex-1 p-10 sm:p-20 flex flex-col justify-center bg-slate-950/20 backdrop-blur-md">
          <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
            <AnimatePresence mode="wait">
              {step === 1 ? (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-10"
                >
                  <div>
                    <h1 className="text-5xl font-black text-white mb-4 italic tracking-tighter">Initialize.</h1>
                    <p className="text-slate-500 font-bold text-lg">Set up your secure gig-protection profile.</p>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">First Name</label>
                      <input 
                        type="text" required value={firstName} onChange={e => setFirstName(e.target.value)}
                        className="w-full bg-white/5 border border-white/5 rounded-2xl p-5 text-white font-bold focus:ring-2 focus:ring-purple-500 outline-none transition-all hover:bg-white/10"
                        placeholder="Ravi"
                      />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Last Name</label>
                       <input 
                        type="text" value={lastName} onChange={e => setLastName(e.target.value)}
                        className="w-full bg-white/5 border border-white/5 rounded-2xl p-5 text-white font-bold focus:ring-2 focus:ring-purple-500 outline-none transition-all hover:bg-white/10"
                        placeholder="Kumar"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Est. Weekly Income (₹)</label>
                    <input 
                      type="number" required value={income} onChange={e => setIncome(e.target.value)}
                      className="w-full bg-white/5 border border-white/5 rounded-2xl p-5 text-white font-bold focus:ring-2 focus:ring-purple-500 outline-none transition-all hover:bg-white/10"
                      placeholder="5000"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-white text-black p-6 rounded-3xl font-black text-xl hover:scale-[1.02] transition-all shadow-[0_20px_50px_rgba(255,255,255,0.05)] flex items-center justify-center gap-3"
                  >
                    Continue to Mapping <ArrowRight className="w-6 h-6" />
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-10"
                >
                  <div className="text-center sm:text-left">
                    <h1 className="text-5xl font-black text-white mb-4 italic tracking-tighter text-gradient">AI Scan.</h1>
                    <p className="text-slate-500 font-bold text-lg">Connecting your bio-zone to our risk grid.</p>
                  </div>

                  <div className="p-10 rounded-[3rem] bg-white/5 border border-white/5 space-y-8 text-center sm:text-left">
                    {!locationData ? (
                      <>
                        <div className="w-24 h-24 bg-purple-600/10 rounded-[2rem] flex items-center justify-center mx-auto sm:mx-0 mb-4 border border-purple-500/20">
                          {isLocating ? <Loader2 className="w-12 h-12 text-purple-500 animate-spin" /> : <Navigation className="w-12 h-12 text-purple-500" />}
                        </div>
                        <h3 className="text-3xl font-black text-white italic tracking-tighter">Locate & Shield</h3>
                        <p className="text-slate-500 font-bold">We will detect current risk triggers in your delivery area.</p>
                        <button 
                          type="button"
                          onClick={detectLocation}
                          className="px-10 py-5 bg-purple-600 text-white rounded-[1.5rem] font-black text-lg hover:bg-purple-500 transition-all shadow-xl shadow-purple-500/20"
                        >
                          {isLocating ? "Scanning Coordinates..." : "Initialize AI Scan"}
                        </button>
                      </>
                    ) : (
                      <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="space-y-8">
                        <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 font-black text-xs uppercase tracking-widest">
                          <CheckCircle className="w-4 h-4" /> ZONE: {locationData.location} SECURE
                        </div>
                        <div className="bg-black/40 rounded-[2rem] p-8 border border-white/5 space-y-6">
                           <p className="text-[10px] font-black text-slate-600 uppercase tracking-[0.4em]">Optimized Plan Suggestion</p>
                           <h4 className="text-4xl font-black text-white italic tracking-tighter">{recommendation?.plan_name}</h4>
                           <div className="flex justify-between items-center py-4 border-t border-white/5">
                              <span className="text-slate-500 font-bold italic">Premium</span>
                              <span className="text-3xl font-black text-gradient">₹{recommendation?.premium}</span>
                           </div>
                           <p className="text-xs text-slate-500 font-medium leading-relaxed italic opacity-70">"Trigger detection: High sensitivity for {locationData.current_risk} patterns in {locationData.location}."</p>
                        </div>
                        <button 
                          type="submit"
                          className="w-full bg-emerald-600 p-6 rounded-[2rem] text-white font-black text-2xl hover:scale-[1.02] transition-all shadow-xl shadow-emerald-500/20"
                        >
                          Confirm & Activate
                        </button>
                      </motion.div>
                    )}
                  </div>

                  <p className="text-center text-slate-600 font-bold text-sm">
                    Secured by <span className="text-slate-400 font-black italic underline decoration-purple-500">GigShield Elite Protocol</span>
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
