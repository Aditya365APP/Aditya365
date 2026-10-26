import { useState } from 'react';
import { motion } from 'framer-motion';
import CountdownTimer from './CountdownTimer';
import BookingModal from './BookingModal';

export default function AlfaBetaCard({ plan, index }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const filledPercent = Math.floor(Math.random() * 30 + 50);

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

          {/* Header with big number */}
          <div className={`relative p-8 text-center overflow-hidden border-b border-white/5`}>
            <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-10`} />
            <div className="relative z-10">
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="text-6xl mb-3 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              >
                {plan.emoji}
              </motion.div>
              <h3 className="font-display text-4xl font-black text-white tracking-tight">{plan.name}</h3>
              <div
                className="text-8xl font-black font-sans opacity-5 absolute -top-4 -right-2 leading-none select-none"
                style={{ color: plan.color }}
              >{plan.number}</div>
              <div
                className="inline-flex items-center gap-2 mt-4 px-6 py-2 rounded-full font-bold text-base shadow-lg"
                style={{ background: `${plan.color}22`, border: `1px solid ${plan.color}44`, color: plan.color }}
              >
                Entry: ₹{plan.number}
              </div>
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
