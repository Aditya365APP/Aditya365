import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CountdownTimer from './CountdownTimer';
import BookingModal from './BookingModal';

export default function DiamondCard({ plan, index }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const filledPercent = Math.floor(Math.random() * 40 + 40); // 40-80% filled

  // Support both single image and array of images
  const images = plan.images
    ? plan.images
    : plan.image
      ? [plan.image]
      : [];

  const [activeImg, setActiveImg] = useState(0);

  // Auto-slide every 3s if multiple images
  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => {
      setActiveImg(prev => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.08, duration: 0.5 }}
        whileHover={{ y: -8 }}
        className="relative group lottery-card-3d"
      >
        {/* Badge */}
        <div
          className={`plan-badge ${plan.badgeBg} text-white z-10`}
          style={{ boxShadow: `0 0 15px ${plan.glowColor}` }}
        >
          {plan.badge}
        </div>

        {/* Card */}
        <div
          className="relative rounded-3xl overflow-hidden transition-all duration-700 group-hover:scale-[1.02] bg-[#050510]"
          style={{
            border: `1px solid rgba(255, 255, 255, 0.05)`,
            boxShadow: `0 20px 40px rgba(0,0,0,0.4)`,
          }}
        >
          {/* Noise overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" />

          {/* Glow effect */}
          <div
            className="absolute -top-24 -left-24 w-48 h-48 rounded-full blur-[80px] opacity-0 group-hover:opacity-40 transition-opacity duration-1000"
            style={{ background: plan.accentColor }}
          />

          {/* ── Full-width Image Header ── */}
          <div className="relative w-full overflow-hidden" style={{ height: '200px' }}>

            {images.length > 0 ? (
              <>
                {/* Crossfade slideshow */}
                <AnimatePresence mode="sync">
                  <motion.img
                    key={activeImg}
                    src={images[activeImg]}
                    alt={`${plan.tier} - ${activeImg + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                  />
                </AnimatePresence>

                {/* Prize Ribbon Overlay */}
                <div className="absolute top-4 left-0 z-20">
                  <motion.div
                    key={activeImg}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="text-black font-black text-[10px] sm:text-xs px-4 py-1.5 rounded-r-lg shadow-xl tracking-wider uppercase flex items-center gap-1.5 border-r border-t border-b border-white/40"
                    style={{ background: 'linear-gradient(90deg, #FFD700, #FFA500)' }}
                  >
                    🏆 {activeImg === 0 ? '1ST' : activeImg === 1 ? '2ND' : activeImg === 2 ? '3RD' : `${activeImg + 1}TH`} PRIZE
                  </motion.div>
                </div>

                {/* Dot indicators — only when multiple images */}
                {images.length > 1 && (
                  <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveImg(i)}
                        className="rounded-full transition-all duration-400"
                        style={{
                          width: i === activeImg ? '18px' : '6px',
                          height: '6px',
                          background: i === activeImg ? plan.accentColor : 'rgba(255,255,255,0.3)',
                        }}
                      />
                    ))}
                  </div>
                )}
              </>
            ) : (
              /* Placeholder — full-width dashed box */
              <>
                <div
                  className="w-full h-full flex flex-col items-center justify-center gap-3"
                  style={{ background: `${plan.accentColor}10` }}
                >
                  <div
                    className="absolute inset-3 rounded-2xl flex flex-col items-center justify-center gap-3"
                    style={{ border: `2px dashed ${plan.accentColor}55` }}
                  >
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={plan.accentColor} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.85 }}>
                      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                      <circle cx="12" cy="13" r="4" />
                    </svg>
                    <span style={{ color: plan.accentColor, fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', opacity: 0.75 }}>
                      UPLOAD IMAGE
                    </span>
                  </div>
                </div>
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-15 pointer-events-none`} />
              </>
            )}

            {/* Radial accent glow */}
            <div
              className="absolute top-0 right-0 w-32 h-32 pointer-events-none"
              style={{ background: `radial-gradient(circle at 100% 0%, ${plan.accentColor}33 0%, transparent 70%)` }}
            />
          </div>

          {/* ── Plan name + price — BELOW the image ── */}
          <div
            className="px-5 pt-4 pb-3 flex items-center justify-between"
            style={{ borderBottom: `1px solid ${plan.accentColor}22` }}
          >
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold mb-0.5" style={{ color: plan.accentColor }}>
                {plan.tier}
              </p>
              <p className="text-white font-display font-black text-3xl sm:text-4xl leading-none">
                ₹{plan.price}
              </p>
            </div>
            <div
              className="text-2xl w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: `${plan.accentColor}15` }}
            >
              {plan.emoji}
            </div>
          </div>

          {/* Body */}
          <div className="p-5 space-y-4">
            {/* Products */}
            <div className="space-y-2">
              {plan.products.map((p, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-400 text-sm">
                  <div
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: plan.accentColor }}
                  />
                  {p}
                </div>
              ))}
            </div>

            {/* Progress */}
            <div>
              <div className="flex justify-between text-xs text-gray-600 mb-1.5">
                <span>{filledPercent}% filled</span>
                <span>{plan.totalEntries - Math.floor(plan.totalEntries * filledPercent / 100)} left</span>
              </div>
              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${filledPercent}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 + 0.5, duration: 1 }}
                  className="h-full rounded-full progress-bar"
                />
              </div>
            </div>

            {/* Countdown */}
            <div className="flex flex-col items-center py-2">
              <p className="text-gray-600 text-xs uppercase tracking-widest mb-2">Draw in</p>
              <CountdownTimer
                initialDays={Math.floor(Math.random() * 30 + 60)}
                initialHours={Math.floor(Math.random() * 24)}
                initialMins={Math.floor(Math.random() * 60)}
              />
            </div>

            {/* Stats */}
            <div className="flex justify-between text-xs text-gray-600 border-t border-white/5 pt-3">
              <span>🏆 {plan.totalWinners} winner{plan.totalWinners > 1 ? 's' : ''}</span>
              <span>🎫 {plan.totalEntries} total entries</span>
            </div>

            {/* CTA */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full py-4 rounded-2xl font-bold text-sm tracking-widest uppercase transition-all duration-500 group-hover:scale-[1.05]"
              style={{
                background: `linear-gradient(135deg, ${plan.accentColor}, ${plan.accentColor}cc)`,
                color: plan.accentColor === '#ffd700' || plan.accentColor === '#FFD60A' ? '#000' : '#fff',
                boxShadow: `0 10px 30px -10px ${plan.glowColor}`,
              }}
            >
              Participate Now
            </button>
          </div>
        </div>
      </motion.div>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        planName={plan.badge || plan.tier}
        planPrice={plan.price}
        themeColor={plan.accentColor}
      />
    </>
  );
}
