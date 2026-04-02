import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "What is parametric insurance?",
    a: "Unlike standard insurance where you file a claim and wait months for damage assessment, parametric insurance pays out automatically when a predetermined data event (like severe rain > 15mm/hr) is recorded by official weather stations in your active delivery zone."
  },
  {
    q: "When do payouts trigger?",
    a: "Payouts trigger immediately when the external data source crosses the threshold set in your weekly plan, and our AI confirms you were logged in and ready for work during that time."
  },
  {
    q: "How fast are payouts processed?",
    a: "Once a condition is triggered, the smart contract authorizes an IMPS/UPI transfer directly to your linked bank account. The process generally takes less than 5 minutes."
  },
  {
    q: "Which gig platforms are supported?",
    a: "We currently support integrations with Zomato, Swiggy, Zepto, Blinkit, and Dunzo. We are expanding to ride-hailing ops like Uber and Ola soon."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="py-28 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-6xl md:text-[5rem] font-black mb-8 text-slate-900 dark:text-white leading-tight">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-8">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/50 rounded-3xl overflow-hidden shadow-sm dark:shadow-none"
            >
              <button 
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between p-10 text-left focus:outline-none focus:ring-2 focus:ring-brand-blue/50 group"
              >
                <span className="font-black text-2xl md:text-3xl text-slate-800 dark:text-white group-hover:text-brand-blue transition-colors">{faq.q}</span>
                <ChevronDown className={`w-10 h-10 text-brand-blue transition-transform duration-300 flex-shrink-0 ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-10 pt-0 text-xl text-slate-600 dark:text-slate-400 border-t border-slate-100 dark:border-slate-700/50 mt-6 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
