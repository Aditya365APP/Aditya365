import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiShield, FiAward, FiUsers, FiZap, FiChevronRight, FiStar } from 'react-icons/fi';
import { GiDiamonds, GiTrophy, GiWallet } from 'react-icons/gi';
import DiamondCard from '../components/DiamondCard';
import AlfaBetaCard from '../components/AlfaBetaCard';
import { diamondPlans, alfaBetaPlans, liveWinners, testimonials, faqs } from '../data/lotteryData';

// Animated jackpot counter
function JackpotCounter() {
  const [value, setValue] = useState(1_24_35_678);
  useEffect(() => {
    const id = setInterval(() => {
      setValue(v => v + Math.floor(Math.random() * 5000 + 1000));
    }, 1200);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="flex items-center justify-center gap-1 sm:gap-2">
      <span className="text-yellow-500 font-bold text-2xl sm:text-4xl">₹</span>
      <div className="font-mono text-4xl sm:text-7xl font-black shimmer-text tracking-tighter sm:tracking-normal">
        {value.toLocaleString('en-IN')}
      </div>
    </div>
  );
}



const trustStats = [
  { icon: GiTrophy, value: '50,000+', label: 'Winners', color: '#ffd700' },
  { icon: FiUsers, value: '5 Lakh+', label: 'Members', color: '#00d4ff' },
  { icon: GiWallet, value: '₹10 Crore+', label: 'Prizes Given', color: '#30d158' },
  { icon: FiAward, value: '99.9%', label: 'Payout Rate', color: '#bf5af2' },
];

export default function Home() {
  const [activeWinner, setActiveWinner] = useState(0);
  const [visibleWinners, setVisibleWinners] = useState(liveWinners.slice(0, 3));
  const [openFaq, setOpenFaq] = useState(null);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroImages = [
    '/hero-bg-1.png',
    '/hero-bg-2.png',
    '/hero-bg-3.png',
  ];

  // Background slider timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Rotate live winners
  useEffect(() => {
    const id = setInterval(() => {
      setActiveWinner(a => (a + 1) % liveWinners.length);
      setVisibleWinners(prev => {
        const next = [...prev.slice(1), liveWinners[Math.floor(Math.random() * liveWinners.length)]];
        return next;
      });
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen">
      {/* ─── HERO SECTION ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Slider */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "linear" }}
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${heroImages[currentImageIndex]})`,
                imageRendering: 'auto',
              }}
            >
              {/* Ultra-minimal overlay for maximum clarity while keeping text readable */}
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030305] via-transparent to-transparent opacity-60" />
            </motion.div>
          </AnimatePresence>
          <div className="hero-rings opacity-30" />

          {/* Slider Indicators */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-10">
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentImageIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-500 ${currentImageIndex === i ? 'bg-yellow-400 w-8' : 'bg-white/20'
                  }`}
              />
            ))}
          </div>
        </div>

        <motion.div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-20 text-center">
          {/* Live badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-8"
          >
            <span className="live-badge">QUARTERLY DRAWS</span>
            <span className="text-gray-500 text-sm">Next Mega Draw</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-display font-black leading-tight"
          >
            <span className="block text-white text-5xl sm:text-7xl md:text-9xl mb-2 tracking-tighter">Play Smart.</span>
            <span className="block gradient-text text-6xl sm:text-8xl md:text-9xl neon-text-gold tracking-tight italic">Win Big</span>
            <span className="block text-white/90 text-3xl sm:text-5xl md:text-6xl mt-4 font-light">Experience the Mega Draw 2026</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-gray-400 text-lg sm:text-xl mt-6 max-w-2xl mx-auto"
          >
            India's #1 premium lottery platform — transparent draws, real prizes, real winners. Bikes, phones, TVs, AC and more await!
          </motion.p>

          {/* Jackpot counter */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-10 mb-8"
          >
            <p className="text-gray-500 text-sm uppercase tracking-widest mb-2">Total Prize Pool This Month</p>
            <JackpotCounter />
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/diamond"
              className="btn-gold px-8 py-4 rounded-full text-lg inline-flex items-center gap-2"
            >
              <GiDiamonds /> View Diamond Plans
            </Link>
            <Link
              to="/alfa-beta"
              className="btn-outline-gold px-8 py-4 rounded-full text-lg inline-flex items-center gap-2"
            >
              🎯 Alfa Beta Plans
            </Link>
          </motion.div>

          {/* Trust row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="flex flex-wrap justify-center gap-6 mt-12"
          >
            {['🔒 100% Secure', '✅ Certified Fair', '🏆 50,000+ Winners', '💳 Instant Payout'].map((item, i) => (
              <span key={i} className="text-gray-500 text-sm flex items-center gap-1.5">{item}</span>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1">
            <div className="w-1 h-3 bg-yellow-400 rounded-full animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* ─── STATS SECTION ─── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {trustStats.map(({ icon: Icon, value, label, color }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="luxury-card text-center"
              >
                <div className="w-12 h-12 rounded-2xl mx-auto mb-3 flex items-center justify-center"
                  style={{ background: `${color}22`, color }}>
                  <Icon size={22} />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white font-mono">{value}</div>
                <div className="text-gray-500 text-sm mt-1">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LIVE WINNERS TICKER ─── */}
      <section className="py-6 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-4">
            <span className="live-badge flex-shrink-0">LIVE</span>
            <div className="flex-1 overflow-hidden relative">
              <motion.div
                key={activeWinner}
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -200, opacity: 0 }}
                className="flex flex-wrap gap-3"
              >
                {visibleWinners.map((w, i) => (
                  <div key={i} className="flex items-center gap-2 glass px-4 py-2 rounded-full text-sm">
                    <span>{w.avatar}</span>
                    <span className="text-yellow-400 font-bold">{w.name}</span>
                    <span className="text-gray-500">from {w.city} won</span>
                    <span className="text-white font-medium">{w.prize}</span>
                    <span className="text-gray-600 text-xs">• {w.time}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DIAMOND PLANS ─── */}
      <section id="diamond" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 px-4 py-2 rounded-full mb-4">
              <GiDiamonds className="text-yellow-400" />
              <span className="text-yellow-400 text-sm font-bold uppercase tracking-widest">Diamond Lottery</span>
            </div>
            <h2 className="section-title text-white mb-3">
              💎 <span className="gradient-text">Diamond</span> Lottery Box
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Premium plans with life-changing prizes. From bikes to smartphones — every entry is a chance to win big!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {diamondPlans.map((plan, i) => (
              <DiamondCard key={plan.id} plan={plan} index={i} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/diamond" className="btn-outline-gold px-8 py-3 rounded-full inline-flex items-center gap-2">
              View All Plans <FiChevronRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── ALFA BETA SECTION ─── */}
      <section id="alfa-beta" className="py-20 relative">
        <div className="absolute inset-0 opacity-30"
          style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(255,45,85,0.08) 0%, transparent 70%)' }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-full mb-4">
              <span className="text-red-400 text-sm font-bold uppercase tracking-widest">🎯 Alfa Beta System</span>
            </div>
            <h2 className="section-title text-white mb-3">
              🎯 <span className="gradient-text-red">Alfa Beta</span> Plans
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Six color-coded plans with different entry fees and prize pools. Choose your lucky color!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {alfaBetaPlans.map((plan, i) => (
              <AlfaBetaCard key={plan.id} plan={plan} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="section-title gradient-text">How It Works</h2>
            <p className="text-gray-400 mt-3">Simple, transparent, and fair</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 relative">
            {[
              { step: '01', icon: '🔐', title: 'Register Free', desc: 'Create your account and get ₹500 welcome bonus.' },
              { step: '02', icon: '💳', title: 'Add to Wallet', desc: 'Recharge your wallet via UPI, card or net banking.' },
              { step: '03', icon: '🎫', title: 'Buy Entries', desc: 'Choose a plan and buy lottery entries instantly.' },
              { step: '04', icon: '🏆', title: 'Win Prizes!', desc: 'Certified random draw declares winners. Prizes delivered home!' },
            ].map(({ step, icon, title, desc }, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative text-center"
              >
                {i < 3 && (
                  <div className="hidden sm:block absolute top-8 left-[60%] right-0 h-px bg-gradient-to-r from-yellow-500/50 to-transparent z-0" />
                )}
                <div className="bg-yellow-400/10 border border-yellow-400/30 p-4 rounded-xl text-center flex items-center justify-center text-3xl mx-auto mb-4 relative z-10">
                  {icon}
                </div>
                <div className="text-yellow-500 font-mono text-xs font-bold uppercase tracking-widest mb-1">{step}</div>
                <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
                <p className="text-gray-500 text-sm">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20"
          style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(255,215,0,0.15) 0%, transparent 60%)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="section-title">
              <span className="gradient-text">Real Winners</span>
              <span className="text-white">, Real Stories</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="luxury-card space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center text-2xl">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">{t.name}</p>
                    <p className="text-gray-600 text-xs">{t.city}</p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {Array(t.rating).fill(0).map((_, j) => (
                    <FiStar key={j} className="text-yellow-400 fill-current" size={13} />
                  ))}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">"{t.comment}"</p>
                <div className="pt-2 border-t border-white/5">
                  <span className="text-yellow-400 text-xs font-bold">Won: {t.prize}</span>
                  <span className="text-gray-600 text-xs ml-2">via {t.plan}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="section-title text-white">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="luxury-card overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between gap-4 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-white font-medium text-sm sm:text-base">{faq.q}</span>
                  <motion.div
                    animate={{ rotate: openFaq === i ? 45 : 0 }}
                    className="text-yellow-400 flex-shrink-0"
                  >
                    <FiZap size={16} />
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === i ? 'auto' : 0, opacity: openFaq === i ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-400 text-sm pt-4 leading-relaxed">{faq.a}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA SECTION ─── */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden p-10 sm:p-16"
            style={{
              background: 'linear-gradient(135deg, #1a0a00, #2a1500, #1a0a00)',
              border: '1px solid rgba(255,215,0,0.3)',
              boxShadow: '0 0 60px rgba(255,215,0,0.1), 0 0 120px rgba(255,45,85,0.05)',
            }}
          >
            <div className="absolute inset-0 opacity-30"
              style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(255,215,0,0.2) 0%, transparent 60%)' }}
            />
            <div className="relative z-10">
              <div className="text-5xl mb-4">🏆</div>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
                Ready to <span className="gradient-text">Win Big?</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
                Join 5 lakh+ members winning prizes every 3 months. Start with just ₹101 and change your life!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/diamond" className="btn-gold px-8 py-4 rounded-full text-lg font-bold">
                  🚀 View Plans
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

