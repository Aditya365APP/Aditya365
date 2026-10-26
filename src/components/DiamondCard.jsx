import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiUsers, FiClock, FiCheck, FiArrowRight } from 'react-icons/fi';
import CountdownTimer from './CountdownTimer';
import BookingModal from './BookingModal';

export default function DiamondCard({ plan, index }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const filledPercent = Math.floor(Math.random() * 35 + 45); // 45-80% filled

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.06, duration: 0.5 }}
        whileHover={{ y: -6 }}
        className="relative group"
      >
        {/* Card Frame */}
        <div
          className="relative rounded-[2rem] overflow-hidden transition-all duration-500 bg-[#0c0d16] border border-white/[0.08] group-hover:border-[#D4AF37]/40 group-hover:shadow-[0_20px_50px_rgba(212,175,55,0.08)] flex flex-col justify-between"
        >
          {/* Subtle Top Accent */}
          <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent group-hover:via-[#D4AF37] transition-all duration-700" />

          {/* Header Section */}
          <div className="p-7 sm:p-8 border-b border-white/[0.06] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/[0.03] rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] uppercase font-bold tracking-[0.2em] text-[#D4AF37] mb-3">
                  <FiAward size={12} />
                  <span>{plan.badge || plan.tier}</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
                    ₹{plan.price}
                  </span>
                  <span className="text-[11px] text-gray-500 uppercase tracking-wider font-semibold">/ Entry</span>
                </div>
              </div>

              {/* Minimalist Icon Capsule */}
              {/* ORIGINAL CODE:
              <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-2xl group-hover:scale-105 group-hover:border-[#D4AF37]/30 transition-all duration-300">
                {plan.emoji || '💎'}
              </div>
              */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D4AF37]/15 to-transparent border border-[#D4AF37]/25 flex flex-col items-center justify-center group-hover:scale-105 group-hover:border-[#D4AF37]/50 transition-all duration-300 shadow-lg">
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#D4AF37] leading-none">#{plan.badge?.replace('TIER ', '') || '01'}</span>
                <span className="text-[9px] uppercase font-bold text-gray-400 tracking-wider mt-1">SERIES</span>
              </div>
            </div>
          </div>

          {/* Body Section */}
          <div className="p-6 sm:p-7 space-y-6 flex-grow flex flex-col justify-between">
            {/* Prize Rewards List */}
            <div className="space-y-2.5">
              <div className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.25em]">
                Featured Prize Tier
              </div>
              <div className="space-y-2">
                {plan.products.map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-300">
                    <div className="w-4 h-4 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center flex-shrink-0 text-[#D4AF37]">
                      <FiCheck size={10} />
                    </div>
                    <span className="font-medium truncate">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Allocation Progress */}
            <div className="space-y-2 pt-2 border-t border-white/[0.04]">
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-gray-400 font-medium">Pool Allocation</span>
                <span className="text-[#D4AF37] font-semibold font-mono">{filledPercent}% filled</span>
              </div>
              <div className="h-1.5 w-full bg-white/[0.05] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${filledPercent}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 + 0.3, duration: 0.8 }}
                  className="h-full bg-gradient-to-r from-amber-600 via-[#D4AF37] to-amber-300 rounded-full"
                />
              </div>
              <div className="flex justify-between text-[10px] text-gray-500 pt-0.5">
                <span>{plan.totalEntries - Math.floor((plan.totalEntries * filledPercent) / 100)} slots remaining</span>
                <span>{plan.totalEntries} Total</span>
              </div>
            </div>

            {/* Live Draw Countdown */}
            <div className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-3 text-center">
              <div className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold flex items-center justify-center gap-1.5 mb-1.5">
                <FiClock size={11} className="text-[#D4AF37]" /> Verified Draw Schedule
              </div>
              <CountdownTimer
                initialDays={Math.floor(Math.random() * 20 + 40)}
                initialHours={Math.floor(Math.random() * 24)}
                initialMins={Math.floor(Math.random() * 60)}
              />
            </div>

            {/* Meta Stats Bar */}
            <div className="flex items-center justify-between text-[11px] text-gray-400 border-t border-white/[0.06] pt-3">
              <span className="flex items-center gap-1.5">
                <FiAward size={13} className="text-[#D4AF37]" />
                <span>{plan.totalWinners} Confirmed Winner{plan.totalWinners > 1 ? 's' : ''}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <FiUsers size={13} className="text-gray-500" />
                <span>{plan.totalEntries} Entries</span>
              </span>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] text-black font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:opacity-95 transition-all shadow-[0_4px_20px_rgba(212,175,55,0.2)] cursor-pointer group-hover:scale-[1.01]"
            >
              <span>Enter Draw • ₹{plan.price}</span>
              <FiArrowRight size={14} />
            </button>
          </div>
        </div>
      </motion.div>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        planName={plan.badge || plan.tier}
        planPrice={plan.price}
        themeColor="#D4AF37"
      />
    </>
  );
}
