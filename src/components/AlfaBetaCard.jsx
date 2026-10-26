import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiClock, FiCheck, FiArrowRight, FiShield } from 'react-icons/fi';
import CountdownTimer from './CountdownTimer';
import BookingModal from './BookingModal';

export default function AlfaBetaCard({ plan, index }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const filledPercent = Math.floor(Math.random() * 25 + 55); // 55-80% filled

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.08, duration: 0.5 }}
        whileHover={{ y: -6 }}
        className="relative group"
      >
        <div className="relative rounded-[2rem] overflow-hidden transition-all duration-500 bg-[#0c0d16] border border-white/[0.08] group-hover:border-[#D4AF37]/40 group-hover:shadow-[0_20px_50px_rgba(212,175,55,0.08)] flex flex-col justify-between h-full">
          
          {/* Subtle Top Accent */}
          <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent group-hover:via-[#D4AF37] transition-all duration-700" />

          {/* Header */}
          <div className="p-7 sm:p-8 border-b border-white/[0.06] relative overflow-hidden">
            <div className="flex items-start justify-between gap-4">
              <div>
                {plan.badge && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] uppercase font-bold tracking-[0.2em] text-[#D4AF37] mb-3">
                    <FiShield size={12} />
                    <span>{plan.badge}</span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white tracking-tight font-display">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#D4AF37] font-display">
                    ₹{plan.number}
                  </span>
                  <span className="text-[11px] text-gray-500 uppercase tracking-wider font-semibold">/ Entry Fee</span>
                </div>
              </div>

              {/* Minimalist Crest */}
              <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-xl font-bold font-mono text-[#D4AF37] group-hover:scale-105 group-hover:border-[#D4AF37]/30 transition-all duration-300">
                {plan.number}
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-7 space-y-6 flex-grow flex flex-col justify-between">
            {/* Description & Guaranteed Prize Valuation */}
            <div className="space-y-4">
              <p className="text-xs text-gray-400 leading-relaxed">{plan.description}</p>

              <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">Grand Prize Pool</div>
                  <div className="text-lg font-bold text-white font-mono">{plan.prize}</div>
                </div>
                <div className="text-xs px-2.5 py-1 rounded-lg bg-green-500/10 text-green-400 border border-green-500/20 font-medium">
                  Guaranteed Draw
                </div>
              </div>

              {/* Rewards Checklist */}
              <div className="space-y-2">
                <div className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em]">Included Rewards</div>
                <div className="space-y-2">
                  {plan.products.map((p, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-gray-300">
                      <div className="w-4 h-4 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center flex-shrink-0 text-[#D4AF37]">
                        <FiCheck size={10} />
                      </div>
                      <span className="font-medium truncate">{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Allocation Progress */}
            <div className="space-y-2 pt-2 border-t border-white/[0.04]">
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-gray-400 font-medium">Draw Capacity</span>
                <span className="text-[#D4AF37] font-semibold font-mono">{filledPercent}% filled</span>
              </div>
              <div className="h-1.5 w-full bg-white/[0.05] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${filledPercent}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 + 0.3, duration: 0.8 }}
                  className="h-full bg-gradient-to-r from-amber-600 via-[#D4AF37] to-amber-300 rounded-full"
                />
              </div>
            </div>

            {/* Live Countdown */}
            <div className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-3 text-center">
              <div className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold flex items-center justify-center gap-1.5 mb-1.5">
                <FiClock size={11} className="text-[#D4AF37]" /> Schedule Countdown
              </div>
              <CountdownTimer
                initialDays={Math.floor(Math.random() * 20 + 30)}
                initialHours={Math.floor(Math.random() * 24)}
                initialMins={Math.floor(Math.random() * 60)}
              />
            </div>

            {/* CTA */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] text-black font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:opacity-95 transition-all shadow-[0_4px_20px_rgba(212,175,55,0.2)] cursor-pointer group-hover:scale-[1.01]"
            >
              <span>Enter {plan.name} • ₹{plan.number}</span>
              <FiArrowRight size={14} />
            </button>
          </div>
        </div>
      </motion.div>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        planName={plan.name}
        planPrice={plan.number}
        themeColor="#D4AF37"
      />
    </>
  );
}
