/* ORIGINAL CODE:
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
          ...
        </div>
      </motion.div>
      <BookingModal ... />
    </>
  );
}
*/

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiAward, FiClock, FiArrowRight, FiShield, FiTrendingUp, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import CountdownTimer from './CountdownTimer';
import BookingModal from './BookingModal';

export default function AlfaBetaCard({ plan, index }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const filledPercent = Math.floor(Math.random() * 25 + 55); // 55-80% filled
  const images = plan.images || [];
  const totalSlides = images.length;

  // Auto-play slideshow every 3.5 seconds
  useEffect(() => {
    if (totalSlides <= 1 || !isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3500);
    return () => clearInterval(interval);
  }, [totalSlides, isAutoPlay]);

  const handleNext = (e) => {
    e.stopPropagation();
    setIsAutoPlay(false);
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setIsAutoPlay(false);
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleSelectSlide = (idx, e) => {
    e.stopPropagation();
    setIsAutoPlay(false);
    setCurrentSlide(idx);
  };

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

          {/* Full Image Showcase with 4-Prize Slideshow (Covers the top of the card completely) */}
          <div
            className="relative w-full aspect-[4/3] overflow-hidden bg-black/85 border-b border-white/[0.08] flex items-center justify-center group/slider select-none"
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
          >
            {totalSlides > 0 ? (
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentSlide}
                  src={images[currentSlide].url}
                  alt={`${plan.name} ${images[currentSlide].label}`}
                  loading="lazy"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="w-full h-full object-contain"
                />
              </AnimatePresence>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-4xl">💎</div>
            )}

            {/* Subtle Top & Bottom Gradient for contrast */}
            <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-black/85 via-black/40 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 inset-x-0 h-14 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

            {/* Top Overlays: Plan Badge & Current Prize Tag */}
            <div className="absolute top-2.5 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
              {/* Left: Plan Name Badge */}
              <div className="flex items-center gap-1.5">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-black/85 backdrop-blur-md border border-[#D4AF37]/50 text-[10px] font-black text-[#FFD700] tracking-wider uppercase shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                  <FiAward size={11} className="text-[#FFD700]" />
                  <span>{plan.name}</span>
                </span>
                <span className="px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-md border border-white/20 text-[9px] font-mono font-bold text-white tracking-wider shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                  #{plan.number}
                </span>
              </div>

              {/* Right: Active Prize Rank Tag */}
              <div className="flex items-baseline gap-1 bg-black/90 backdrop-blur-md border border-[#D4AF37]/60 px-2.5 py-1 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.95)]">
                <span className="text-[10px] font-bold text-[#FFD700]">🏆</span>
                <span className="text-[11px] font-black text-white font-mono tracking-tight leading-none uppercase">
                  {images[currentSlide]?.label || 'Grand Prize'}
                </span>
              </div>
            </div>

            {/* Slideshow Arrow Controls (Left & Right) */}
            {totalSlides > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/75 hover:bg-black/95 text-white/80 hover:text-white border border-white/20 hover:border-[#D4AF37] flex items-center justify-center transition-all opacity-70 group-hover/slider:opacity-100 z-10 cursor-pointer shadow-lg"
                  aria-label="Previous Prize Image"
                >
                  <FiChevronLeft size={16} />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/75 hover:bg-black/95 text-white/80 hover:text-white border border-white/20 hover:border-[#D4AF37] flex items-center justify-center transition-all opacity-70 group-hover/slider:opacity-100 z-10 cursor-pointer shadow-lg"
                  aria-label="Next Prize Image"
                >
                  <FiChevronRight size={16} />
                </button>
              </>
            )}

            {/* Bottom 4-Prize Selector Pills */}
            {totalSlides > 1 && (
              <div className="absolute bottom-2 inset-x-0 flex items-center justify-center gap-1.5 z-10 pointer-events-auto">
                {images.map((img, idx) => {
                  const labelShort = ['1st', '2nd', '3rd', '4th'][idx] || `${idx + 1}`;
                  const isActive = currentSlide === idx;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={(e) => handleSelectSlide(idx, e)}
                      className={`transition-all duration-300 rounded-md cursor-pointer flex items-center gap-1 text-[9px] font-bold tracking-wide uppercase px-2 py-0.5 ${
                        isActive
                          ? 'bg-[#D4AF37] text-black shadow-md shadow-[#D4AF37]/30 scale-105'
                          : 'bg-black/80 backdrop-blur-md text-gray-300 hover:text-white border border-white/15 hover:border-white/40'
                      }`}
                    >
                      <span>{labelShort}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Compact Professional Details Body */}
          <div className="p-4 sm:p-4.5 space-y-3 flex-grow flex flex-col justify-between">
            {/* 1. Rewards Ledger (Click any row to switch slide!) */}
            <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-2.5 space-y-1.5">
              <div className="flex items-center justify-between text-[10px] text-gray-400 uppercase tracking-wider font-semibold">
                <span className="flex items-center gap-1 text-[#D4AF37]">
                  <FiAward size={11} />
                  <span>Prize Allocation</span>
                </span>
                <span className="text-gray-500 font-mono text-[9px]">4 Ranked Prizes</span>
              </div>
              <div className="divide-y divide-white/[0.04]">
                {plan.products.map((item, i) => {
                  const isActive = currentSlide === i;
                  return (
                    <div
                      key={i}
                      onClick={(e) => handleSelectSlide(i, e)}
                      className={`flex items-center justify-between py-1 text-xs cursor-pointer rounded px-1.5 transition-all ${
                        isActive ? 'bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-white' : 'text-gray-300 hover:text-white hover:bg-white/[0.03]'
                      }`}
                      title="Click to view this prize image"
                    >
                      <span className={`truncate font-medium max-w-[210px] ${isActive ? 'text-[#D4AF37] font-bold' : ''}`}>
                        {item}
                      </span>
                      <span className={`text-[10px] font-mono font-bold ml-2 ${isActive ? 'text-[#D4AF37]' : 'text-gray-500'}`}>
                        {['1st', '2nd', '3rd', '4th'][i]} Prize
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 2. Structured Metrics Grid */}
            <div className="grid grid-cols-3 gap-1 py-1.5 px-1 rounded-xl bg-white/[0.02] border border-white/[0.05] text-center">
              <div>
                <div className="text-[9px] text-gray-500 uppercase tracking-wider font-semibold">Entry Fee</div>
                <div className="text-xs font-bold text-white font-mono mt-0.5">₹{plan.number}</div>
              </div>
              <div className="border-x border-white/[0.06]">
                <div className="text-[9px] text-gray-500 uppercase tracking-wider font-semibold">Prize Pool</div>
                <div className="text-xs font-bold text-[#D4AF37] font-mono mt-0.5">{plan.prize}</div>
              </div>
              <div>
                <div className="text-[9px] text-gray-500 uppercase tracking-wider font-semibold">Status</div>
                <div className="text-xs font-bold text-green-400 font-mono mt-0.5 flex items-center justify-center gap-0.5">
                  <FiShield size={10} /> Certified
                </div>
              </div>
            </div>

            {/* 3. Pool Allocation Bar */}
            <div className="space-y-1">
              <div className="flex justify-between items-center text-[10px]">
                <span className="text-gray-400 font-medium flex items-center gap-1">
                  <FiTrendingUp size={10} className="text-[#D4AF37]" /> Draw Capacity
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
                initialDays={Math.floor(Math.random() * 3 + 1)}
                initialHours={Math.floor(Math.random() * 20 + 2)}
                initialMins={Math.floor(Math.random() * 45 + 10)}
              />
            </div>

            {/* 5. Clean CTA Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full py-2.5 sm:py-3 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] text-black font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:opacity-95 transition-all shadow-[0_4px_16px_rgba(212,175,55,0.18)] cursor-pointer group-hover:scale-[1.01]"
            >
              <span>Enter {plan.name} • ₹{plan.number}</span>
              <FiArrowRight size={13} />
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
