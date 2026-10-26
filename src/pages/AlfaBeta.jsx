import { motion } from 'framer-motion';
import { FiCheck, FiLayers, FiShield, FiAward, FiTrendingUp } from 'react-icons/fi';
import AlfaBetaCard from '../components/AlfaBetaCard';
import { alfaBetaPlans } from '../data/lotteryData';

export default function AlfaBeta() {
  return (
    <div className="min-h-screen pt-20 pb-20 relative">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[280px] bg-red-500/[0.04] rounded-full blur-[130px]" />
      </div>

      {/* ─── COMPACT PAGE HERO ─── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          {/* Left: Title */}
          <div>
            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 px-3.5 py-1 rounded-full mb-3">
              <FiLayers className="text-red-400 text-xs" />
              <span className="text-red-400 text-[10px] font-bold uppercase tracking-[0.22em] font-mono">Tier-Structured Plans</span>
              <span className="text-[9px] text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-1.5 py-0.5 rounded-full font-semibold">6 Tiers</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-none text-white">
              Alfa Beta <span className="gradient-text-red">System</span>
            </h1>
            <p className="text-gray-400 text-sm mt-2 max-w-lg leading-relaxed">
              Six color-coded tiers. Distinct prize pools. 4 winners per draw cycle.
            </p>
          </div>

          {/* Right: Metrics */}
          <div className="flex gap-5 sm:gap-7 flex-shrink-0">
            {[
              { value: '6', label: 'Tiers' },
              { value: '4x', label: 'Winners/Draw' },
              { value: '₹101+', label: 'Entry from' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-lg sm:text-xl font-black font-mono text-red-400 leading-none">{value}</div>
                <div className="text-gray-500 text-[9px] uppercase tracking-widest font-semibold mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tier Color Pill Row */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="flex flex-wrap gap-2 mt-5"
        >
          {alfaBetaPlans.map(p => (
            <div
              key={p.id}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/[0.07] bg-white/[0.025] hover:border-white/15 transition-all duration-200"
            >
              <div
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: p.color, boxShadow: `0 0 6px ${p.color}` }}
              />
              <span className="text-white font-bold text-[10px] uppercase tracking-widest">{p.name}</span>
              <span className="text-gray-500 text-[9px] font-mono border-l border-white/10 pl-1.5">₹{p.number}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ─── PLANS GRID (cards untouched) ─── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {alfaBetaPlans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <AlfaBetaCard plan={plan} index={i} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* ─── PLAN COMPARISON MATRIX ─── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden border border-white/[0.08]"
          style={{ background: 'linear-gradient(135deg, #0e0e1a 0%, #0c0d16 100%)' }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 sm:px-10 pt-8 pb-5 border-b border-white/[0.08]">
            <div>
              <div className="text-[#D4AF37] text-[11px] font-bold uppercase tracking-[0.2em] font-mono mb-1">
                Full Spectrum
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                Plan Comparison Matrix
              </h3>
            </div>
            <FiTrendingUp className="text-[#D4AF37] text-2xl opacity-60" />
          </div>

          {/* Table */}
          <div className="overflow-x-auto px-0">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/[0.05]">
                  <th className="text-left text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold py-3.5 px-6 sm:px-10">
                    Tier Name
                  </th>
                  <th className="text-left text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold py-3.5 pr-6">
                    Entry Fee
                  </th>
                  <th className="text-left text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold py-3.5 pr-6">
                    Prize Pool
                  </th>
                  <th className="text-left text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold py-3.5 pr-6 hidden sm:table-cell">
                    Top Prize
                  </th>
                  <th className="text-left text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold py-3.5 pr-6 hidden md:table-cell">
                    Total Products
                  </th>
                </tr>
              </thead>
              <tbody>
                {alfaBetaPlans.map((p, i) => (
                  <motion.tr
                    key={p.id}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="border-b border-white/[0.04] hover:bg-white/[0.025] transition-colors group"
                  >
                    <td className="py-4 pl-6 sm:pl-10 pr-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-3 h-3 rounded-full flex-shrink-0 ring-2 ring-white/10"
                          style={{ background: p.color, boxShadow: `0 0 8px ${p.color}80` }}
                        />
                        <div>
                          <span className="text-white font-bold text-sm">{p.name}</span>
                          <span className="ml-2 text-gray-500 text-[10px] font-mono">Plan {p.number}</span>
                        </div>
                        {p.badge && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-md border"
                            style={{ color: p.color, borderColor: p.color + '40', background: p.color + '15' }}>
                            {p.badge}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-4 pr-6 font-mono font-bold text-[#D4AF37] text-sm">
                      ₹{p.number}
                    </td>
                    <td className="py-4 pr-6 text-green-400 font-bold text-sm">
                      {p.prize}
                    </td>
                    <td className="py-4 pr-6 text-gray-300 text-xs hidden sm:table-cell">
                      {p.products[0]}
                    </td>
                    <td className="py-4 pr-6 hidden md:table-cell">
                      <span className="text-gray-400 text-xs font-mono">{p.products.length} prizes</span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer note */}
          <div className="px-6 sm:px-10 py-5 border-t border-white/[0.05] flex flex-wrap gap-5 text-gray-500 text-[11px]">
            {['All draws certified & audited', 'Doorstep prize delivery', 'Instant digital ticket', 'TDS-compliant rewards'].map(t => (
              <span key={t} className="flex items-center gap-1.5">
                <FiCheck className="text-emerald-400" size={11} /> {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ─── WHY ALFA BETA ─── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-5"
        >
          {[
            {
              icon: FiShield,
              title: 'Fixed-Seat Pools',
              desc: 'Each tier has a limited seat count ensuring fair allocation odds for every enrolled participant.',
            },
            {
              icon: FiAward,
              title: '4-Prize Per Draw',
              desc: 'Every draw releases a 1st, 2nd, 3rd, and 4th prize — four verified winners per draw cycle.',
            },
            {
              icon: FiTrendingUp,
              title: 'Tiered Progression',
              desc: 'Enter at any level and move up as your confidence grows — each tier offers progressively higher prize pools.',
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/[0.08] bg-[#0e0e1a] p-6 flex gap-4 hover:border-red-500/30 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 flex-shrink-0 group-hover:scale-110 transition-transform">
                <Icon size={18} />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm mb-1">{title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
