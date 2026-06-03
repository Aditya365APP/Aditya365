import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiCalendar } from 'react-icons/fi';
import { liveWinners } from '../data/lotteryData';

export default function Winners() {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  // Generate more dummy winners
  const allWinners = [
    ...liveWinners,
    { name: 'Suresh Kumar', city: 'Chennai', prize: 'Activa 6G', plan: 'Beta 501', time: '2 hours ago', avatar: '👨', amount: '₹85,000' },
    { name: 'Neha Gupta', city: 'Delhi', prize: 'iPad Air', plan: 'Delta 401', time: '3 hours ago', avatar: '👩', amount: '₹60,000' },
    { name: 'Kishan L.', city: 'Surat', prize: 'Prestige Kitchen', plan: 'Diamond ₹399', time: '5 hours ago', avatar: '🧑', amount: '₹12,000' },
    { name: 'Manoj Singh', city: 'Patna', prize: 'LG OLED TV', plan: 'Diamond ₹699', time: '1 day ago', avatar: '👨', amount: '₹1,10,000' },
    { name: 'Pooja Verma', city: 'Lucknow', prize: 'Voltas AC', plan: 'Diamond ₹499', time: '1 day ago', avatar: '👩', amount: '₹35,000' },
    { name: 'Raj Patel', city: 'Ahmedabad', prize: 'Royal Enfield', plan: 'Diamond ₹999', time: '2 days ago', avatar: '👨', amount: '₹2,20,000' },
  ];

  const filtered = allWinners.filter(w => {
    const matchesSearch = w.name.toLowerCase().includes(search.toLowerCase()) || w.city.toLowerCase().includes(search.toLowerCase());
    const matchesPlan = filter === 'all' || (filter === 'diamond' ? w.plan.includes('Diamond') : !w.plan.includes('Diamond'));
    return matchesSearch && matchesPlan;
  });

  return (
    <div className="min-h-screen pt-28 pb-20">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-20 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/20 px-6 py-2 rounded-full mb-8">
            <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em]">🏆 Live Results</span>
          </div>
          <h1 className="font-display text-5xl sm:text-7xl md:text-9xl font-black mb-6 tracking-tighter">
            Mega <span className="gradient-text italic">Winners</span>
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg font-light leading-relaxed">
            Real people, extraordinary wins. Explore our wall of fame featuring the latest lucky winners from the Aditya 365 Mega Draw.
          </p>
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-8">
          <div className="relative max-w-sm w-full">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search by name or city..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500"
            />
          </div>
          <div className="flex bg-white/[0.02] p-1.5 rounded-2xl border border-white/5 backdrop-blur-md">
            {['all', 'diamond', 'alfa'].map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-500 ${filter === f ? 'bg-[#D4AF37] text-black shadow-lg shadow-[#D4AF37]/20' : 'text-gray-500 hover:text-white'
                  }`}
              >
                {f === 'all' ? 'All' : f === 'diamond' ? 'Diamond' : 'Alfa Beta'}
              </button>
            ))}
          </div>
        </div>

        {/* List */}
        <div className="space-y-4">
          <AnimatePresence>
            {filtered.map((w, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="luxury-card border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent flex flex-col sm:flex-row items-center justify-between gap-6 p-6 sm:p-8"
              >
                <div className="flex items-center gap-6 w-full sm:w-auto">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-[#D4AF37] blur-xl opacity-0 group-hover:opacity-20 transition-opacity" />
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#B8860B] p-0.5 relative z-10 shadow-2xl">
                      <div className="w-full h-full bg-[#050510] rounded-2xl flex items-center justify-center text-3xl border border-white/10">
                        {w.avatar}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white mb-1 tracking-tight">{w.name}</h3>
                    <p className="text-gray-500 text-sm font-medium flex items-center gap-2 tracking-wide uppercase">
                      <FiMapPin className="text-[#D4AF37]" /> {w.city}
                    </p>
                  </div>
                </div>

                <div className="w-full sm:w-auto flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-16 glass px-6 py-5 rounded-2xl border-white/5">
                  <div className="relative">
                    <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold mb-2">Grand Prize</p>
                    <p className="text-[#D4AF37] font-black text-2xl tracking-tight">{w.prize}</p>
                    {w.amount && <p className="text-white/40 text-[10px] font-mono mt-1">EST. VALUE: {w.amount}</p>}
                  </div>
                  <div className="hidden sm:block w-px h-12 bg-white/10" />
                  <div>
                    <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold mb-2">Platform Plan</p>
                    <p className="text-white font-bold text-lg">{w.plan}</p>
                    <p className="text-gray-500 text-[10px] font-medium flex items-center gap-2 mt-2 uppercase tracking-widest">
                      <FiCalendar size={12} className="text-[#D4AF37]" /> {w.time}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No winners found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Quick inline component for the MapPin
function FiMapPin(props) {
  return (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  );
}
