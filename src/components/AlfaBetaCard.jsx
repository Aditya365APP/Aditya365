import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CountdownTimer from './CountdownTimer';
import BookingModal from './BookingModal';

export default function AlfaBetaCard({ plan, index }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const filledPercent = Math.floor(Math.random() * 30 + 50);

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
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        whileHover={{ y: -10 }}
        className="relative group"
      >
        {/* Popular badge */}
        {plan.badge && (
          <div
            className="plan-badge text-white font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full z-10"
            style={{ background: plan.color, boxShadow: `0 0 20px ${plan.glowColor}` }}
          >
            {plan.badge}
          </div>
        )}

        <div
          className="relative rounded-3xl overflow-hidden h-full transition-all duration-700 bg-[#050510]"
          style={{
            border: `1px solid ${plan.color}33`,
            boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
          }}
        >
          {/* Animated BG glow */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-1000"
            style={{ background: `radial-gradient(circle at 50% 0%, ${plan.glowColor}, transparent 70%)` }}
          />

          {/* Noise overlay */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-soft-light" />

          {/* ── Full-width Image Header ── */}
          <div className="relative w-full overflow-hidden" style={{ height: '200px' }}>

            {images.length > 0 ? (
              <>
                {/* Crossfade slideshow */}
                <AnimatePresence mode="sync">
                  <motion.img
                    key={activeImg}
                    src={images[activeImg]}
                    alt={`${plan.name} - ${activeImg + 1}`}
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
                          background: i === activeImg ? plan.color : 'rgba(255,255,255,0.3)',
                        }}
                      />
                    ))}
                  </div>
                )}
              </>
            ) : (
              <>
                <div
                  className="w-full h-full flex flex-col items-center justify-center gap-3"
                  style={{ background: `${plan.color}10` }}
                >
                  <div
                    className="absolute inset-3 rounded-2xl flex flex-col items-center justify-center gap-3"
                    style={{ border: `2px dashed ${plan.color}55` }}
                  >
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={plan.color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.85 }}>
                      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                      <circle cx="12" cy="13" r="4"/>
                    </svg>
                    <span style={{ color: plan.color, fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', opacity: 0.75 }}>
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
              style={{ background: `radial-gradient(circle at 100% 0%, ${plan.color}33 0%, transparent 70%)` }}
            />
          </div>

          {/* ── Plan name + entry price — BELOW the image ── */}
          <div
            className="px-5 pt-4 pb-3 flex items-center justify-between"
            style={{ borderBottom: `1px solid ${plan.color}22` }}
          >
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold mb-0.5" style={{ color: plan.color }}>
                {plan.colorName} Plan
              </p>
              <h3 className="font-display text-3xl sm:text-4xl font-black text-white leading-none">
                {plan.name}
              </h3>
              <div
                className="inline-flex items-center gap-1 mt-1.5 px-3 py-0.5 rounded-full text-xs font-bold"
                style={{ background: `${plan.color}22`, border: `1px solid ${plan.color}44`, color: plan.color }}
              >
                Entry: ₹{plan.number}
              </div>
            </div>
            <div
              className="text-2xl w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: `${plan.color}15` }}
            >
              {plan.emoji}
            </div>
          </div>


          {/* Body */}
          <div className="p-5 space-y-4">
            <p className="text-gray-500 text-sm text-center">{plan.description}</p>

            {/* Prize value */}
            <div
              className="text-center py-3 rounded-xl"
              style={{ background: `${plan.color}11`, border: `1px solid ${plan.color}22` }}
            >
              <p className="text-gray-500 text-xs uppercase tracking-widest">Prize Value</p>
              <p className="text-white font-bold text-2xl font-mono mt-0.5">{plan.prize}</p>
            </div>

            {/* Products */}
            <div className="space-y-2">
              {plan.products.map((p, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-400 text-sm">
                  <div className="w-4 h-4 rounded-full text-xs flex items-center justify-center font-bold"
                    style={{ background: `${plan.color}22`, color: plan.color }}>
                    {i + 1}
                  </div>
                  {p}
                </div>
              ))}
            </div>

            {/* Progress */}
            <div>
              <div className="flex justify-between text-xs text-gray-600 mb-1.5">
                <span>Entries filled</span>
                <span className="font-bold" style={{ color: plan.color }}>{filledPercent}%</span>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${filledPercent}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 1.2 }}
                  className="h-full rounded-full"
                  style={{ background: `linear-gradient(90deg, ${plan.color}, ${plan.color}88)` }}
                />
              </div>
            </div>

            {/* Timer */}
            <div className="text-center py-1">
              <p className="text-gray-600 text-xs uppercase tracking-widest mb-2">Next Draw</p>
              <CountdownTimer
                initialDays={Math.floor(Math.random() * 30 + 60)}
                initialHours={Math.floor(Math.random() * 24)}
                initialMins={Math.floor(Math.random() * 60)}
              />
            </div>

            {/* CTA */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full py-4 rounded-2xl font-bold text-sm tracking-[0.2em] uppercase transition-all duration-500 group-hover:scale-[1.05] shadow-xl"
              style={{
                background: `linear-gradient(135deg, ${plan.color}, ${plan.color}cc)`,
                color: plan.color === '#ffd60a' || plan.color === '#FFD700' ? '#000' : '#fff',
                boxShadow: `0 10px 30px -10px ${plan.glowColor}`,
              }}
            >
              Join {plan.name}
            </button>
          </div>
        </div>
      </motion.div>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        planName={plan.name}
        planPrice={plan.number}
        themeColor={plan.color}
      />
    </>
  );
}
