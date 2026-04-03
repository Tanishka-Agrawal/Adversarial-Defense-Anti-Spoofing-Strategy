import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, ShieldCheck, Sparkles } from 'lucide-react';

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Initialize GigShield AI... Protocol online. How can I protect your earnings today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    
    setIsTyping(true);
    await new Promise(r => setTimeout(r, 1500));
    
    let botResponse = "I am processing your request. Our parametric engine is currently monitoring your Bio-Zone for triggers.";
    
    if(userMsg.toLowerCase().includes('claim')) {
      botResponse = "No manual claim filing is required. GigShield is auto-monitoring NASA nodes. If a trigger is detected, your payout is DISBURSED automatically via your linked UPI.";
    } else if(userMsg.toLowerCase().includes('zomato') || userMsg.toLowerCase().includes('swiggy')) {
      botResponse = "I have successfully synced with your platform logs. Your active hours are currently being covered by the Storm Shield Pro policy.";
    } else if(userMsg.toLowerCase().includes('payout')) {
      botResponse = "Standard payouts for rain disruption are set at ₹450 per session. This increases during extreme alerts.";
    }

    setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    setIsTyping(false);
  };

  return (
    <div className="fixed bottom-10 right-10 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            className="mb-6 w-[400px] h-[600px] glass-dark rounded-[3rem] border border-purple-500/30 shadow-2xl flex flex-col overflow-hidden backdrop-blur-3xl"
          >
            {/* Header */}
            <div className="bg-purple-600 p-8 flex items-center justify-between">
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Bot className="text-white w-7 h-7" />
                 </div>
                 <div>
                    <h4 className="text-white font-black text-xl leading-none">GigShield AI</h4>
                    <p className="text-purple-200 text-[10px] font-bold uppercase tracking-widest mt-1">Autonomous Assistant</p>
                 </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white hover:rotate-90 transition-all">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto p-8 space-y-6 scrollbar-hide">
              {messages.map((msg, i) => (
                <motion.div 
                  key={i} 
                  initial={{ x: msg.role === 'bot' ? -20 : 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className={`flex ${msg.role === 'bot' ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`max-w-[85%] p-5 rounded-[2rem] font-bold text-sm ${
                    msg.role === 'bot' 
                      ? 'bg-white/5 text-slate-300 border border-white/10' 
                      : 'bg-purple-600 text-white shadow-lg'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex items-center gap-2 text-purple-400 text-xs font-black italic">
                   <Sparkles className="w-4 h-4 animate-spin" /> GigShield is thinking...
                </div>
              )}
            </div>

            {/* Footer Input */}
            <div className="p-8 border-t border-white/5 bg-white/5">
              <div className="relative">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about your protection..." 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 pr-14 text-white font-bold focus:ring-2 focus:ring-purple-500 outline-none text-sm"
                />
                <button 
                  onClick={handleSend}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center hover:scale-105 transition-all shadow-lg"
                >
                  <Send className="w-4 h-4 text-white" />
                </button>
              </div>
              <div className="mt-4 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                 {['How to claim?', 'Check Risk Zone', 'Link Zomato'].map(tip => (
                    <button 
                       key={tip} 
                       onClick={() => setInput(tip)}
                       className="whitespace-nowrap px-4 py-2 bg-white/5 border border-white/5 rounded-full text-[10px] font-black text-slate-500 hover:text-purple-400 hover:border-purple-500/30 transition-all transition-all"
                    >
                       {tip}
                    </button>
                 ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-20 h-20 bg-purple-600 rounded-[2rem] shadow-2xl shadow-purple-500/40 flex items-center justify-center text-white border-2 border-white/10"
      >
        {isOpen ? <X className="w-8 h-8" /> : <MessageSquare className="w-8 h-8" />}
      </motion.button>
    </div>
  );
};

export default AIAssistant;
