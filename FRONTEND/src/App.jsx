import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Checkout from './pages/Checkout';
import PaymentSuccess from './pages/PaymentSuccess';

import DashboardLayout from './layouts/DashboardLayout';
import Overview from './pages/dashboard/Overview';
import ProfileSetup from './pages/dashboard/ProfileSetup';
import RiskAlerts from './pages/dashboard/RiskAlerts';
import PayoutHistory from './pages/dashboard/PayoutHistory';
import Plans from './pages/dashboard/Plans';

import flyingBg from './assets/flying_background.png';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50 selection:bg-purple-600/30 transition-colors duration-300 relative">
      <div 
        className="fixed inset-0 z-0 opacity-15 dark:opacity-10 pointer-events-none bg-cover bg-center bg-no-repeat transition-opacity duration-300 mix-blend-multiply dark:mix-blend-screen"
        style={{ backgroundImage: `url(${flyingBg})` }}
      />
      <div className="relative z-10 flex flex-col min-h-screen">
      <Navbar />
      <div className="pt-24 lg:pt-32">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Overview />} />
            <Route path="setup" element={<ProfileSetup />} />
            <Route path="alerts" element={<RiskAlerts />} />
            <Route path="payouts" element={<PayoutHistory />} />
            <Route path="plans" element={<Plans />} />
          </Route>
        </Routes>
      </div>
      <div className="mt-auto relative z-10">
        <Footer />
      </div>
      </div>
    </div>
  );
}

export default App;
