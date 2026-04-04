import React from 'react';
import { Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-20 pb-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16 border-b border-slate-200 dark:border-slate-800 pb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-8 inline-flex hover:opacity-80 transition-opacity">
              <div className="bg-brand-blue/20 p-3 rounded-2xl">
                <Shield className="w-12 h-12 text-brand-blue" />
              </div>
              <span className="font-extrabold text-3xl md:text-4xl tracking-tight text-slate-900 dark:text-white">GigShield <span className="text-brand-lightgreen">AI</span></span>
            </Link>
            <p className="text-slate-600 dark:text-slate-400 max-w-lg mb-10 text-xl leading-relaxed">
              Empowering India's gig economy with transparent, AI-driven parametric insurance. Never lose a day's income to the weather again.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-16 h-16 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-brand-blue hover:border-brand-blue transition-colors text-slate-500 dark:text-slate-400 hover:text-white shadow-sm dark:shadow-none group">
                <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-white text-slate-500 dark:text-slate-400 transition-colors"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="w-16 h-16 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-brand-blue hover:border-brand-blue transition-colors text-slate-500 dark:text-slate-400 hover:text-white shadow-sm dark:shadow-none group">
                <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-white text-slate-500 dark:text-slate-400 transition-colors"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="w-16 h-16 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-brand-blue hover:border-brand-blue transition-colors text-slate-500 dark:text-slate-400 hover:text-white shadow-sm dark:shadow-none group">
                <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-white text-slate-500 dark:text-slate-400 transition-colors"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 dark:text-white font-black mb-8 text-2xl">Company</h4>
            <ul className="space-y-6">
              <li><Link to="/" className="text-slate-600 dark:text-slate-400 hover:text-brand-blue dark:hover:text-brand-lightgreen text-xl flex items-center gap-2 font-medium">About Us</Link></li>
              <li><Link to="/" className="text-slate-600 dark:text-slate-400 hover:text-brand-blue dark:hover:text-brand-lightgreen text-xl flex items-center gap-3 font-medium">Careers <span className="bg-brand-blue/20 text-brand-blue text-sm px-4 py-1.5 rounded-full font-bold">Hiring</span></Link></li>
              <li><Link to="/" className="text-slate-600 dark:text-slate-400 hover:text-brand-blue dark:hover:text-brand-lightgreen text-xl flex items-center gap-2 font-medium">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 dark:text-white font-black mb-8 text-2xl">Support</h4>
            <ul className="space-y-6">
              <li><Link to="/" className="text-slate-600 dark:text-slate-400 hover:text-brand-blue dark:hover:text-brand-lightgreen text-xl font-medium">Help Center</Link></li>
              <li><Link to="/login" className="text-slate-600 dark:text-slate-400 hover:text-brand-blue dark:hover:text-brand-lightgreen text-xl font-medium">Claims Pipeline</Link></li>
              <li><Link to="/" className="text-slate-600 dark:text-slate-400 hover:text-brand-blue dark:hover:text-brand-lightgreen text-xl font-medium">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-slate-500 text-lg md:text-xl font-medium">
          <p>© {new Date().getFullYear()} GigShield AI. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="/" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-slate-900 dark:hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
