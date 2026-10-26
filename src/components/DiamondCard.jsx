/* ORIGINAL CODE:
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
        <div className="relative rounded-[2rem] overflow-hidden transition-all duration-500 bg-[#0c0d16] border border-white/[0.08] group-hover:border-[#D4AF37]/40 group-hover:shadow-[0_20px_50px_rgba(212,175,55,0.08)] flex flex-col justify-between">
          <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent group-hover:via-[#D4AF37] transition-all duration-700" />
          <div className="p-7 sm:p-8 border-b border-white/[0.06] relative overflow-hidden">
            ...
          </div>
          ...
        </div>
      </motion.div>
      <BookingModal ... />
    </>
  );
}
*/

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiClock, FiArrowRight, FiShield, FiTrendingUp } from 'react-icons/fi';
import CountdownTimer from './CountdownTimer';
import BookingModal from './BookingModal';

export default function DiamondCard({ plan, index }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const filledPercent = Math.floor(Math.random() * 25 + 60); // 60-85% filled
  const remainingSlots = Math.max(1, plan.totalEntries - Math.floor((plan.totalEntries * filledPercent) / 100));

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.05, duration: 0.4 }}
        whileHover={{ y: -5 }}
        className="relative group h-full flex flex-col"
      >
        {/* Card Frame */}
        <div className="relative rounded-2xl overflow-hidden transition-all duration-300 bg-[#0c0d16] border border-white/[0.08] group-hover:border-[#D4AF37]/45 group-hover:shadow-[0_16px_40px_rgba(0,0,0,0.7)] flex flex-col justify-between flex-grow">
          {/* Top Gold Accent Line */}
          <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent group-hover:via-[#D4AF37] transition-all duration-500" />

          {/* Clean Card Header: Tier Badge, Series & Price (Above image so image is 100% unobstructed) */}
          <div className="px-4 py-3 flex items-center justify-between border-b border-white/[0.06] bg-black/40">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#D4AF37]/15 border border-[#D4AF37]/35 text-[10px] font-bold text-[#D4AF37] tracking-wider uppercase">
                <FiAward size={10} />
                <span>{plan.badge || plan.tier}</span>
              </span>
              <span className="text-[10px] font-mono font-semibold text-gray-400">
                #{plan.badge?.replace('TIER ', '') || '01'} SERIES
              </span>
            </div>
            <div className="flex items-baseline gap-1 bg-[#D4AF37]/10 border border-[#D4AF37]/25 px-2.5 py-1 rounded-lg">
              <span className="text-base sm:text-lg font-black text-white font-display leading-none">
                ₹{plan.price}
              </span>
              <span className="text-[9px] text-[#D4AF37] font-semibold uppercase">/ Entry</span>
            </div>
          </div>

          {/* Full Image Showcase (Aspect 4:3 matches the image resolution 1448x1086 perfectly, 100% visible, no crop, no obstructing overlay) */}
          <div className="relative w-full aspect-[4/3] overflow-hidden bg-black/60 border-b border-white/[0.06] flex items-center justify-center">
            {plan.image ? (
              <img
                src={plan.image}
                alt={`${plan.tier} Prize Allocation`}
                loading="lazy"
                className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-500 ease-out"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-4xl">💎</div>
            )}
          </div>

          {/* Compact Professional Details Body */}
          <div className="p-4 sm:p-4.5 space-y-3 flex-grow flex flex-col justify-between">
            {/* 1. Prize Allocation Ledger */}
            <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-2.5 space-y-1.5">
              <div className="flex items-center justify-between text-[10px] text-gray-400 uppercase tracking-wider font-semibold">
                <span className="flex items-center gap-1 text-[#D4AF37]">
                  <FiAward size={11} />
                  <span>Prize Allocation</span>
                </span>
                <span className="text-gray-500 font-mono text-[9px]">{plan.products.length} Guaranteed</span>
              </div>
              <div className="divide-y divide-white/[0.04]">
                {plan.products.map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-1 text-xs">
                    <span className="text-gray-200 truncate font-medium max-w-[210px]">{item}</span>
                    <span className="text-[10px] font-mono text-[#D4AF37]/80 font-bold ml-2">#{i + 1}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Structured Metrics Grid */}
            <div className="grid grid-cols-3 gap-1 py-1.5 px-1 rounded-xl bg-white/[0.02] border border-white/[0.05] text-center">
              <div>
                <div className="text-[9px] text-gray-500 uppercase tracking-wider font-semibold">Winners</div>
                <div className="text-xs font-bold text-white font-mono mt-0.5">{plan.totalWinners} Confirmed</div>
              </div>
              <div className="border-x border-white/[0.06]">
                <div className="text-[9px] text-gray-500 uppercase tracking-wider font-semibold">Pool Cap</div>
                <div className="text-xs font-bold text-white font-mono mt-0.5">{plan.totalEntries}</div>
              </div>
              <div>
                <div className="text-[9px] text-gray-500 uppercase tracking-wider font-semibold">Remaining</div>
                <div className="text-xs font-bold text-[#D4AF37] font-mono mt-0.5">{remainingSlots}</div>
              </div>
            </div>

            {/* 3. Pool Allocation Bar */}
            <div className="space-y-1">
              <div className="flex justify-between items-center text-[10px]">
                <span className="text-gray-400 font-medium flex items-center gap-1">
                  <FiTrendingUp size={10} className="text-[#D4AF37]" /> Allocation Pool
                </span>
                <span className="text-[#D4AF37] font-mono font-bold">{filledPercent}% filled</span>
              </div>
              <div className="h-1.5 w-full bg-white/[0.06] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${filledPercent}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="h-full bg-gradient-to-r from-amber-600 via-[#D4AF37] to-amber-300 rounded-full"
                />
              </div>
            </div>

            {/* 4. Sleek Inline Draw Schedule Countdown */}
            <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <div className="flex items-center gap-1.5 text-[10px] text-gray-400 uppercase tracking-wider font-semibold">
                <FiClock size={11} className="text-[#D4AF37]" />
                <span>Draw Closes</span>
              </div>
              <CountdownTimer
                variant="compact"
                initialDays={plan.countdown?.days ?? 2}
                initialHours={plan.countdown?.hours ?? 12}
                initialMins={plan.countdown?.mins ?? 30}
              />
            </div>

            {/* 5. Clean CTA Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full py-2.5 sm:py-3 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] text-black font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:opacity-95 transition-all shadow-[0_4px_16px_rgba(212,175,55,0.18)] cursor-pointer group-hover:scale-[1.01]"
            >
              <span>Enter Draw • ₹{plan.price}</span>
              <FiArrowRight size={13} />
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
