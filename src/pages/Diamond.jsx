import { motion } from 'framer-motion';
import { GiDiamonds } from 'react-icons/gi';
import { FiShield, FiAward, FiCreditCard, FiCheck, FiLayers } from 'react-icons/fi';
import { useState } from 'react';
import DiamondCard from '../components/DiamondCard';
import { diamondPlans } from '../data/lotteryData';

export default function Diamond() {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' ? diamondPlans
    : filter === 'under500' ? diamondPlans.filter(p => p.price < 500)
      : diamondPlans.filter(p => p.price >= 500);

  const filters = [
    { key: 'all', label: 'All Tiers', count: diamondPlans.length },
    { key: 'under500', label: 'Under ₹500', count: diamondPlans.filter(p => p.price < 500).length },
    { key: 'above500', label: '₹500 & Above', count: diamondPlans.filter(p => p.price >= 500).length },
  ];

  return (
    <div className="min-h-screen pt-20 pb-20 relative">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#D4AF37]/[0.06] rounded-full blur-[130px]" />
      </div>

      {/* ─── COMPACT PAGE HERO ─── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          {/* Left: Title block */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/25 px-3.5 py-1 rounded-full mb-3">
              <GiDiamonds className="text-[#D4AF37] text-xs" />
              <span className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.22em] font-mono">Signature Diamond Series</span>
              <span className="text-[9px] text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-1.5 py-0.5 rounded-full font-semibold">Live</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-none text-white">
              Diamond <span className="gradient-text">Elite</span>
            </h1>
            <p className="text-gray-400 text-sm mt-2 max-w-lg leading-relaxed">
              Nine elite tiers. Certified draws. Real prizes delivered pan-India.
            </p>
          </div>

          {/* Right: Compact metrics */}
          <div className="flex gap-5 sm:gap-7 flex-shrink-0">
            {[
              { value: '9', label: 'Tiers' },
              { value: '50K+', label: 'Winners' },
              { value: '₹10Cr+', label: 'Disbursed' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-lg sm:text-xl font-black font-mono text-[#D4AF37] leading-none">{value}</div>
                <div className="text-gray-500 text-[9px] uppercase tracking-widest font-semibold mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ─── FILTER + COUNT BAR ─── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Filter Pills */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-gray-500 text-xs uppercase tracking-wider font-semibold mr-1 flex items-center gap-1">
              <FiLayers size={12} /> Filter
            </span>
            {filters.map(({ key, label, count }) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide transition-all duration-200 border ${
                  filter === key
                    ? 'border-[#D4AF37] bg-[#D4AF37]/15 text-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                    : 'border-white/10 text-gray-400 hover:border-white/25 hover:text-white'
                }`}
              >
                {label}
                <span className={`ml-1.5 font-mono text-[10px] ${filter === key ? 'text-[#D4AF37]/70' : 'text-gray-600'}`}>
                  ({count})
                </span>
              </button>
            ))}
          </div>

          {/* Count */}
          <div className="text-gray-500 text-xs font-mono border border-white/10 px-3 py-1.5 rounded-lg bg-white/[0.02]">
            Showing <span className="text-white font-bold">{filtered.length}</span> of {diamondPlans.length} plans
          </div>
        </div>
      </div>

      {/* ─── PLANS GRID (cards untouched) ─── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: i * 0.07 }}
            >
              <DiamondCard plan={plan} index={i} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ─── TRUST ASSURANCE BAND ─── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden p-8 sm:p-12 border border-[#D4AF37]/20"
          style={{
            background: 'linear-gradient(135deg, #0e0c06 0%, #141006 40%, #0a0a0f 100%)',
            boxShadow: '0 0 60px rgba(212,175,55,0.08)',
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.03] pointer-events-none" />
          <div className="relative z-10">
            <div className="text-center mb-10">
              <div className="text-[#D4AF37] text-[11px] font-bold uppercase tracking-[0.25em] font-mono mb-2">
                Platform Guarantees
              </div>
              <h2 className="text-white font-bold text-2xl sm:text-3xl tracking-tight">
                Why Every Entry is Secure
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              {[
                {
                  icon: FiShield,
                  title: 'Certified Fair Draw',
                  desc: 'Every draw is independently audited using certified PRNG algorithms. Results are immutable and publicly verifiable by any participant.',
                  tag: 'ISO-Grade RNG',
                },
                {
                  icon: FiAward,
                  title: 'Insured Delivery',
                  desc: 'From Royal Enfield bikes to flagship smartphones, every prize is fully insured and delivered to your doorstep with our white-glove courier.',
                  tag: 'Pan-India Dispatch',
                },
                {
                  icon: FiCreditCard,
                  title: 'Escrow Settlement',
                  desc: 'Entry funds are held in secure Razorpay escrow. Non-winning entries accumulate prestige status credits redeemable in future draws.',
                  tag: 'Razorpay Backed',
                },
              ].map(({ icon: Icon, title, desc, tag }) => (
                <div key={title} className="flex flex-col items-center group">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 via-[#D4AF37]/5 to-transparent border border-[#D4AF37]/35 flex items-center justify-center text-[#D4AF37] text-xl mb-5 group-hover:scale-110 group-hover:border-[#D4AF37] transition-all duration-300 shadow-[0_0_25px_rgba(212,175,55,0.15)]">
                    <Icon />
                  </div>
                  <span className="text-[10px] text-yellow-400/80 font-mono font-bold uppercase tracking-widest mb-2">{tag}</span>
                  <h3 className="text-white font-bold text-base mb-2 tracking-tight">{title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed max-w-[220px]">{desc}</p>
                </div>
              ))}
            </div>

            {/* Trust tags */}
            <div className="mt-10 pt-8 border-t border-white/[0.07] flex flex-wrap justify-center gap-6 text-gray-400 text-xs">
              {['100% Legal & Audited', 'Instant SMS Ticket', 'TDS Compliant', 'Razorpay Verified', '24/7 Support Desk'].map(t => (
                <span key={t} className="flex items-center gap-1.5">
                  <FiCheck className="text-emerald-400" size={12} /> {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
