import React from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, Shield, AlertTriangle, FileText, Settings, HelpCircle, LogOut, Bell, User, ShieldCheck, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

const SidebarLink = ({ to, icon: Icon, label, isActive }) => (
  <Link
    to={to}
    className={`flex items-center gap-4 px-6 py-4 rounded-2xl font-bold transition-all ${
      isActive 
        ? 'bg-brand-blue text-white shadow-xl shadow-brand-blue/20' 
        : 'text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'
    }`}
  >
    <Icon className={`w-6 h-6 ${isActive ? 'text-white' : ''}`} />
    <span className="text-lg">{label}</span>
  </Link>
);

const DashboardLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // Keep name memory or fallback
  let memoryName = 'Guest Worker';
  try {
    const users = JSON.parse(localStorage.getItem('gigshield_users') || '[]');
    if(users.length > 0) memoryName = users[users.length - 1].name;
  } catch(e) {}
  const userName = location.state?.name || memoryName;

  const navLinks = [
    { to: '/dashboard', icon: Home, label: 'Overview' },
    { to: '/dashboard/plans', icon: Shield, label: 'My Insurance Plan' },
    { to: '/dashboard/alerts', icon: AlertTriangle, label: 'Risk Alerts' },
    { to: '/dashboard/payouts', icon: FileText, label: 'Payout History' },
    { to: '/dashboard/setup', icon: User, label: 'Profile Setup' },
  ];

  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-950 overflow-hidden">
      {/* Sidebar */}
      <motion.aside 
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        className="w-80 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col h-full z-20 shadow-2xl relative"
      >
        <div className="p-8">
          <Link to="/" className="flex items-center gap-3">
            <div className="bg-brand-blue/20 p-2 rounded-xl border border-brand-blue/30">
              <Shield className="w-8 h-8 text-brand-blue" />
            </div>
            <span className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">GigShield <span className="text-brand-lightgreen">AI</span></span>
          </Link>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4 overflow-y-auto">
          {navLinks.map((link) => (
            <SidebarLink
              key={link.to}
              to={link.to}
              icon={link.icon}
              label={link.label}
              isActive={location.pathname === link.to}
            />
          ))}
        </nav>

        <div className="p-6 border-t border-slate-200 dark:border-slate-800">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-4 px-6 py-4 w-full rounded-2xl font-bold text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors"
          >
            <LogOut className="w-6 h-6" />
            <span className="text-lg">Log Out</span>
          </button>
        </div>
      </motion.aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Topbar */}
        <header className="h-24 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-10 z-10 sticky top-0">
          <h2 className="text-3xl font-black text-slate-800 dark:text-white capitalize tracking-tight">
            {location.pathname.split('/').pop() === 'dashboard' ? 'Dashboard Overview' : location.pathname.split('/').pop()}
          </h2>
          
          <div className="flex items-center gap-6">
            <button className="px-5 py-2 rounded-xl bg-brand-blue/10 text-brand-blue font-black border border-brand-blue/20 hover:bg-brand-blue/20 transition-all shadow-sm">
               ENG / हिं
            </button>
            <button className="relative p-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
               <Bell className="w-6 h-6" />
               <span className="absolute top-3 right-3 w-3 h-3 bg-red-500 rounded-full border-2 border-white dark:border-slate-900 shadow-sm"></span>
            </button>
            <div className="flex items-center gap-4 pl-6 border-l border-slate-200 dark:border-slate-700">
              <div className="w-14 h-14 rounded-2xl bg-brand-blue/20 border border-brand-blue/30 text-brand-blue flex items-center justify-center font-black text-2xl shadow-inner uppercase">
                 {userName.charAt(0)}
              </div>
              <div className="hidden md:block">
                <p className="text-lg font-black text-slate-900 dark:text-white leading-tight">{userName}</p>
                <p className="text-sm font-bold text-brand-lightgreen">Verified Worker</p>
              </div>
            </div>
          </div>
        </header>

        {/* Live Disruption Ticker */}
        <div className="bg-brand-blue/90 text-white py-3 overflow-hidden whitespace-nowrap border-b border-brand-blue/20 relative z-20">
          <div className="flex animate-marquee gap-10 items-center">
            <span className="flex items-center gap-2 font-black uppercase text-sm"><AlertTriangle className="w-4 h-4 text-brand-lightgreen" /> LIVE: Heavy Rain in Mumbai West - Parametric Payouts Active</span>
            <span className="flex items-center gap-2 font-black uppercase text-sm"><ShieldCheck className="w-4 h-4 text-brand-lightgreen" /> ALL SYSTEMS GO: Zomato, Swiggy, Blinkit Sync Stable</span>
            <span className="flex items-center gap-2 font-black uppercase text-sm"><Activity className="w-4 h-4 text-brand-lightgreen" /> NEWS: New Heatwave Protocol added for Delhi/NCR zones</span>
            <span className="flex items-center gap-2 font-black uppercase text-sm"><AlertTriangle className="w-4 h-4 text-brand-lightgreen" /> LIVE: Heavy Rain in Mumbai West - Parametric Payouts Active</span>
          </div>
        </div>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-10 relative bg-slate-50 dark:bg-slate-950">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
