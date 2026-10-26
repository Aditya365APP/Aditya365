import { useState } from 'react';
import { motion } from 'framer-motion';
import CountdownTimer from './CountdownTimer';
import BookingModal from './BookingModal';

export default function DiamondCard({ plan, index }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const filledPercent = Math.floor(Math.random() * 40 + 40); // 40-80% filled

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
          {/* Gradient header */}
          <div className={`relative p-8 overflow-hidden`}>
            <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-20`} />
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 100% 0%, ${plan.accentColor}44 0%, transparent 60%)`,
              }}
            />
            <div className="relative z-10 flex items-center justify-between">
              <div>
                <p className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-bold mb-1">{plan.tier}</p>
                <p className="text-white font-display font-black text-4xl sm:text-5xl">₹{plan.price}</p>
              </div>
              <motion.div
                whileHover={{ rotate: 15, scale: 1.1 }}
                className="text-5xl w-20 h-20 rounded-2xl flex items-center justify-center glass shadow-2xl"
                style={{ border: `1px solid ${plan.accentColor}44` }}
              >
                {plan.emoji}
              </motion.div>
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
