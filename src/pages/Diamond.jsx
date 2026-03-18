import { motion } from 'framer-motion';
import { GiDiamonds } from 'react-icons/gi';
import { FiFilter } from 'react-icons/fi';
import { useState } from 'react';
import DiamondCard from '../components/DiamondCard';
import { diamondPlans } from '../data/lotteryData';

export default function Diamond() {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' ? diamondPlans
    : filter === 'under500' ? diamondPlans.filter(p => p.price < 500)
      : diamondPlans.filter(p => p.price >= 500);

  return (
    <div className="min-h-screen pt-28 pb-20">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-20 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/20 px-6 py-2 rounded-full mb-8">
            <GiDiamonds className="text-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em]">Premium High Roller</span>
          </div>
          <h1 className="font-display text-5xl sm:text-7xl md:text-9xl font-black mb-6 tracking-tighter">
            <span className="gradient-text italic">Diamond</span>
            <span className="text-white"> Elite</span>
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto font-light leading-relaxed">
            Nine elite tiers offering the most prestigious prizes in the nation. Your journey to extraordinary luxury starts with a single entry.
          </p>
        </motion.div>
      </div>

      {/* Filter Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8">
        <div className="flex items-center gap-3 flex-wrap">
          <FiFilter className="text-gray-500" />
          <span className="text-gray-500 text-sm">Filter:</span>
          {[
            { key: 'all', label: 'All Plans' },
            { key: 'under500', label: 'Under ₹500' },
            { key: 'above500', label: '₹500 & Above' },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all border ${filter === key
                  ? 'border-yellow-400 bg-yellow-400/10 text-yellow-400'
                  : 'border-white/10 text-gray-500 hover:border-white/20'
                }`}
            >
              {label}
            </button>
          ))}
          <span className="ml-auto text-gray-600 text-sm">{filtered.length} plans</span>
        </div>
      </div>

      {/* Plans Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((plan, i) => (
            <DiamondCard key={plan.id} plan={plan} index={i} />
          ))}
        </div>
      </div>

      {/* Info Band */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-gold rounded-[2rem] p-10 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center border-white/5"
        >
          {[
            { icon: '🔐', title: 'Certified Fair Draw', desc: 'Independently audited RNG algorithms ensuring 100% transparent results for every player.' },
            { icon: '🏆', title: 'Luxury Deliveries', desc: 'From supercars to iPhones, we ensure your prizes reach you with white-glove service.' },
            { icon: '💳', title: 'Guaranteed Reserve', desc: "Every entry builds your status. Non-winners accumulate prestige credits for future draws." },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="flex flex-col items-center">
              <div className="text-5xl mb-6 filter drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]">{icon}</div>
              <h3 className="text-white font-black text-lg mb-3 tracking-tight uppercase">{title}</h3>
              <p className="text-gray-500 text-sm font-light leading-relaxed">{desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
