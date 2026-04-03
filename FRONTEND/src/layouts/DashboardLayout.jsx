import React from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, Shield, AlertTriangle, FileText, Settings, HelpCircle, LogOut, Bell, User, ShieldCheck, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

const SidebarLink = ({ to, icon: Icon, label, isActive }) => (
  <Link
    to={to}
    className={`flex items-center gap-4 px-6 py-4 rounded-2xl font-bold transition-all ${
      isActive 
        ? 'bg-purple-600 text-white shadow-xl shadow-purple-500/20 scale-[1.02]' 
        : 'text-slate-400 hover:text-white hover:bg-white/5'
    }`}
  >
    <Icon className={`w-6 h-6 ${isActive ? 'text-white' : ''}`} />
    <span className="text-lg">{label}</span>
  </Link>
);

const DashboardLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  let memoryName = 'Guest Worker';
  try {
    const users = JSON.parse(localStorage.getItem('gigshield_users') || '[]');
    if(users.length > 0) memoryName = users[users.length - 1].name;
  } catch(e) {}
  const userName = location.state?.name || memoryName;

  const [city, setCity] = React.useState('Your Zone');

  React.useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const res = await fetch(`http://127.0.0.1:8000/api/weather-by-location?lat=${latitude}&lon=${longitude}`);
          if (res.ok) {
            const data = await res.json();
            setCity(data.city);
          }
        } catch (e) { console.error("City fetch failed"); }
      });
    }
  }, []);

  const navLinks = [
    { to: '/dashboard', icon: Home, label: 'Overview' },
    { to: '/dashboard/plans', icon: Shield, label: 'My Insurance Plan' },
    { to: '/dashboard/alerts', icon: AlertTriangle, label: 'Risk Alerts' },
    { to: '/dashboard/payouts', icon: FileText, label: 'Payout History' },
    { to: '/dashboard/setup', icon: User, label: 'Profile Setup' },
  ];

  return (
    <div className="flex h-screen bg-[#020617] text-slate-200 overflow-hidden font-inter">
      {/* Sidebar */}
      <motion.aside 
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        className="w-80 bg-slate-950/50 backdrop-blur-3xl border-r border-white/5 flex flex-col h-full z-20 relative"
      >
        <div className="p-10">
          <Link to="/" className="flex items-center gap-4 group">
            <div className="bg-purple-600/20 p-3 rounded-2xl border border-purple-500/30">
              <Shield className="w-8 h-8 text-purple-500" />
            </div>
            <span className="text-2xl font-black text-white tracking-tighter">GigShield <span className="text-emerald-500">AI</span></span>
          </Link>
        </div>

        <nav className="flex-1 px-6 space-y-4 mt-8">
          <div className="space-y-2 mb-12">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] ml-6 mb-4">Core Protocol</p>
            {navLinks.map((link) => (
              <SidebarLink
                key={link.to}
                to={link.to}
                icon={link.icon}
                label={link.label}
                isActive={location.pathname === link.to}
              />
            ))}
          </div>

          {/* New Performance Card to fill space */}
          <div className="mx-2 mt-20 p-8 glass rounded-[2.5rem] border-white/5 relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-24 h-24 bg-purple-600/10 blur-2xl group-hover:bg-purple-600/20 transition-all"></div>
             <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-6">AI Performance</p>
             <div className="flex items-end gap-3 mb-4">
                <span className="text-4xl font-black text-white italic">99.9%</span>
                <span className="text-emerald-500 font-black text-xs mb-1">UPTIME</span>
             </div>
             <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                <motion.div 
                   initial={{ width: 0 }}
                   animate={{ width: '99.9%' }}
                   transition={{ duration: 2, ease: "easeOut" }}
                   className="h-full bg-gradient-to-r from-purple-600 to-emerald-500 shadow-[0_0_10px_rgba(37,99,235,0.5)]"
                ></motion.div>
             </div>
             <p className="text-[10px] font-bold text-slate-500 mt-4 italic">Nodes Synchronized: 12,402</p>
          </div>
        </nav>

        <div className="p-8 border-t border-white/5">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-4 px-6 py-4 w-full rounded-2xl font-bold text-slate-400 hover:text-red-400 hover:bg-red-400/5 transition-all"
          >
            <LogOut className="w-6 h-6" />
            <span className="text-lg">Log Out</span>
          </button>
        </div>
      </motion.aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Topbar */}
        <header className="h-28 bg-[#020617]/80 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-12 z-10 sticky top-0">
          <div>
            <h2 className="text-3xl font-black text-white capitalize tracking-tighter">
              {location.pathname.split('/').pop() === 'dashboard' ? 'Dashboard Overview' : location.pathname.split('/').pop()}
            </h2>
            <p className="text-slate-500 font-bold text-sm mt-1 uppercase tracking-[0.2em]">Verified Secure Protocol</p>
          </div>
          
          <div className="flex items-center gap-8">
            <button className="px-6 py-2.5 rounded-xl bg-purple-600/10 text-purple-400 font-black border border-purple-500/20 hover:bg-purple-500/20 transition-all text-sm uppercase">
               In-App Translator
            </button>
            <button className="relative p-3.5 rounded-xl bg-white/5 text-slate-400 hover:text-white transition-colors border border-white/10">
               <Bell className="w-6 h-6" />
               <span className="absolute top-3 right-3 w-3 h-3 bg-red-500 rounded-full border-2 border-[#020617] shadow-xl"></span>
            </button>
            <div className="flex items-center gap-5 pl-8 border-l border-white/10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white flex items-center justify-center font-black text-2xl shadow-xl shadow-purple-500/20 uppercase">
                 {userName.charAt(0)}
              </div>
              <div className="hidden xl:block text-right">
                <p className="text-lg font-black text-white leading-none mb-1">{userName}</p>
                <p className="text-xs font-black text-emerald-500 uppercase tracking-widest bg-emerald-500/10 px-2 py-0.5 rounded">Active Node</p>
              </div>
            </div>
          </div>
        </header>

        {/* Live Disruption Ticker */}
        <div className="bg-purple-600 text-white py-4 overflow-hidden whitespace-nowrap border-b border-purple-500 relative z-20 shadow-lg">
          <div className="flex animate-marquee gap-16 items-center">
            <span className="flex items-center gap-3 font-black uppercase text-xs tracking-widest"><ShieldCheck className="w-4 h-4 text-emerald-400" /> LIVE: Protection Active in {city} - All Systems Stable</span>
            <span className="flex items-center gap-3 font-black uppercase text-xs tracking-widest"><Activity className="w-4 h-4 text-emerald-400" /> TICKER: Hyper-Local Node Sync in {city} Verified</span>
            <span className="flex items-center gap-3 font-black uppercase text-xs tracking-widest"><AlertTriangle className="w-4 h-4 text-amber-300" /> NOTICE: Deep-Scan Mode Enabled for {city} Region</span>
            <span className="flex items-center gap-3 font-black uppercase text-xs tracking-widest"><ShieldCheck className="w-4 h-4 text-emerald-400" /> LIVE: Protection Active in {city} - All Systems Stable</span>
          </div>
        </div>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-12 relative bg-[#020617]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
