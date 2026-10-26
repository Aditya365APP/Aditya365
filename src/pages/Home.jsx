import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiShield, FiAward, FiUsers, FiZap, FiChevronRight, FiStar, FiUserCheck, FiCreditCard, FiCheckCircle, FiArrowRight, FiClock, FiCheck } from 'react-icons/fi';
import { GiDiamonds, GiTrophy, GiWallet } from 'react-icons/gi';
import DiamondCard from '../components/DiamondCard';
import AlfaBetaCard from '../components/AlfaBetaCard';
import BookingModal from '../components/BookingModal';
import CountdownTimer from '../components/CountdownTimer';
import { diamondPlans, alfaBetaPlans, liveWinners, testimonials, faqs } from '../data/lotteryData';

// Animated jackpot counter
function JackpotCounter({ size = "normal" }) {
  const [value, setValue] = useState(1_24_35_678);
  useEffect(() => {
    const id = setInterval(() => {
      setValue(v => v + Math.floor(Math.random() * 5000 + 1000));
    }, 1200);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="flex items-center justify-center gap-1 sm:gap-1.5">
      <span className="text-[#D4AF37] font-bold text-xl sm:text-2xl font-mono">₹</span>
      <div className={`font-mono font-black shimmer-text tracking-tight ${size === "compact" ? "text-2xl sm:text-3xl lg:text-[2.25rem]" : "text-3xl sm:text-5xl"}`}>
        {value.toLocaleString('en-IN')}
      </div>
    </div>
  );
}



const trustStats = [
  { icon: GiTrophy, value: '50,000+', label: 'Verified Winners', color: '#D4AF37' },
  { icon: FiUsers, value: '5 Lakh+', label: 'Active Members', color: '#E5C07B' },
  { icon: GiWallet, value: '₹10 Crore+', label: 'Prizes Disbursed', color: '#C5A059' },
  { icon: FiAward, value: '100%', label: 'Certified Fair Draws', color: '#D4AF37' },
];

export default function Home() {
  const [activeWinner, setActiveWinner] = useState(0);
  const [visibleWinners, setVisibleWinners] = useState(liveWinners.slice(0, 3));
  const [openFaq, setOpenFaq] = useState(null);
  const [isHeroModalOpen, setIsHeroModalOpen] = useState(false);

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
      {/* ─── ORIGINAL HERO SECTION (PRESERVED AS REQUESTED):
      <section className="relative min-h-screen flex items-center overflow-hidden">
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
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030305] via-transparent to-transparent opacity-60" />
            </motion.div>
          </AnimatePresence>
          <div className="hero-rings opacity-30" />
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-10">
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentImageIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-500 ${currentImageIndex === i ? 'bg-yellow-400 w-8' : 'bg-white/20'}`}
              />
            ))}
          </div>
        </div>
        <motion.div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-20 text-center">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 mb-8">
            <span className="live-badge">QUARTERLY DRAWS</span>
            <span className="text-gray-500 text-sm">Next Mega Draw</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="font-display font-black leading-tight">
            <span className="block text-white text-5xl sm:text-7xl md:text-9xl mb-2 tracking-tighter">Play Smart.</span>
            <span className="block gradient-text text-6xl sm:text-8xl md:text-9xl neon-text-gold tracking-tight italic">Win Big</span>
            <span className="block text-white/90 text-3xl sm:text-5xl md:text-6xl mt-4 font-light">Experience the Mega Draw 2026</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-gray-400 text-lg sm:text-xl mt-6 max-w-2xl mx-auto">
            India's #1 premier lucky draw platform — transparent draws, real prizes, real winners. Bikes, phones, TVs, AC and more await!
          </motion.p>
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7 }} className="mt-10 mb-8">
            <p className="text-gray-500 text-sm uppercase tracking-widest mb-2">Total Prize Pool This Month</p>
            <JackpotCounter />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/diamond" className="btn-gold px-8 py-4 rounded-xl text-sm font-bold tracking-wider uppercase inline-flex items-center justify-center gap-2">
              <GiDiamonds /> Explore Diamond Series
            </Link>
            <Link to="/alfa-beta" className="btn-outline-gold px-8 py-4 rounded-xl text-sm font-bold tracking-wider uppercase inline-flex items-center justify-center gap-2">
              Explore Alfa Beta Plans
            </Link>
          </motion.div>
        </motion.div>
      </section>
      ─── END ORIGINAL HERO SECTION ─── */}

      {/* ─── RECREATED EXECUTIVE LUXURY HERO COCKPIT ─── */}
      <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
        {/* Ambient Film Background & Horizon Lighting */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${heroImages[currentImageIndex]})`,
              }}
            >
              {/* Luxury Obsidian Film Gradients - balanced so the high-res stage shines through while text stays readable */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#030305]/85 via-[#030305]/50 to-[#030305]/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030305] via-transparent to-[#030305]/50" />
            </motion.div>
          </AnimatePresence>

          {/* Precision Radial Glow Cones */}
          <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-[#D4AF37]/[0.05] rounded-full blur-[140px]" />
          <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-amber-600/[0.04] rounded-full blur-[160px]" />
          <div className="hero-rings opacity-20" />

          {/* Discrete Background Slider Indicators */}
          <div className="absolute bottom-6 left-8 sm:left-16 flex gap-2 z-10 pointer-events-auto">
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentImageIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                  currentImageIndex === i ? 'bg-[#D4AF37] w-8' : 'bg-white/20 w-3 hover:bg-white/40'
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            
            {/* ─── LEFT COLUMN: Executive Presentation ─── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 text-left space-y-6"
            >
              {/* Institutional Live Status Pill */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.03] border border-[#D4AF37]/30 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[#D4AF37] text-[11px] font-bold uppercase tracking-[0.2em]">
                  Live Digital Contests • Round 2026 Open
                </span>
              </div>

              {/* Commanding Luxury Headline */}
              <h1 className="font-display text-4xl sm:text-6xl lg:text-[4.25rem] font-black text-white leading-[1.08] tracking-tight">
                Where Integrity Meets{' '}
                <span className="gradient-text italic font-serif">Extraordinary</span>{' '}
                Rewards.
              </h1>

              {/* Executive Subtitle Narrative */}
              <p className="text-gray-300/80 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
                India’s premier certified reward platform. Experience cryptographically transparent draws starting from <span className="text-white font-medium">₹101</span>, with instant Razorpay checkout, live countdown telemetry, and guaranteed insured pan-India deliveries.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  onClick={() => setIsHeroModalOpen(true)}
                  className="btn-gold px-8 py-4 rounded-xl text-xs sm:text-sm font-bold tracking-widest uppercase inline-flex items-center justify-center gap-2.5 cursor-pointer shadow-[0_10px_35px_rgba(212,175,55,0.3)] hover:scale-[1.02] active:scale-95 transition-transform"
                >
                  <GiDiamonds size={16} />
                  <span>Enter Signature Draw</span>
                  <FiArrowRight size={15} />
                </button>

                <Link
                  to="/diamond"
                  className="btn-outline-gold px-7 py-4 rounded-xl text-xs sm:text-sm font-bold tracking-widest uppercase inline-flex items-center justify-center gap-2 hover:border-[#D4AF37] hover:bg-white/[0.03]"
                >
                  Explore All 9 Plans
                </Link>
              </div>

              {/* Quick Institutional Credential Metrics */}
              <div className="pt-6 border-t border-white/[0.08] grid grid-cols-3 gap-4 max-w-lg">
                <div className="space-y-1">
                  <div className="font-mono text-xl sm:text-2xl font-black text-[#D4AF37]">₹10Cr+</div>
                  <div className="text-gray-400 text-[10px] sm:text-xs uppercase tracking-wider font-medium">Prizes Disbursed</div>
                </div>
                <div className="space-y-1 border-x border-white/[0.08] px-3 sm:px-4">
                  <div className="font-mono text-xl sm:text-2xl font-black text-white">50,000+</div>
                  <div className="text-gray-400 text-[10px] sm:text-xs uppercase tracking-wider font-medium">Verified Winners</div>
                </div>
                <div className="space-y-1">
                  <div className="font-mono text-xl sm:text-2xl font-black text-green-400">100%</div>
                  <div className="text-gray-400 text-[10px] sm:text-xs uppercase tracking-wider font-medium">PRNG Audited</div>
                </div>
              </div>

              {/* Compliance Badges */}
              <div className="flex flex-wrap gap-4 pt-1 text-gray-400 text-[11px] font-medium">
                <span className="flex items-center gap-1.5">
                  <FiShield className="text-[#D4AF37]" size={13} /> 256-Bit SSL Encrypted
                </span>
                <span className="text-white/20 hidden sm:inline">•</span>
                <span className="flex items-center gap-1.5">
                  <FiCreditCard className="text-[#D4AF37]" size={13} /> Razorpay Verified Gateway
                </span>
                <span className="text-white/20 hidden sm:inline">•</span>
                <span className="flex items-center gap-1.5">
                  <FiCheckCircle className="text-[#D4AF37]" size={13} /> Section 194B TDS Compliant
                </span>
              </div>
            </motion.div>

            {/* ─── RIGHT COLUMN: Flagship Live Draw Cockpit Card ─── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="relative rounded-[2.25rem] p-6 sm:p-8 bg-gradient-to-b from-[#0f101c] via-[#0a0a14] to-[#06060c] border border-[#D4AF37]/35 shadow-[0_25px_80px_rgba(0,0,0,0.9),0_0_50px_rgba(212,175,55,0.1)] overflow-hidden">
                
                {/* Subtle Interior Glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#D4AF37]/[0.08] rounded-full blur-3xl pointer-events-none" />

                {/* Card Top Pill & Tier */}
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[10px] font-mono font-bold uppercase tracking-widest text-[#D4AF37]">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    FLAGSHIP ROUND
                  </div>
                  <span className="text-[11px] font-mono font-bold text-gray-400 tracking-wider">
                    PLAN 01 • ₹999
                  </span>
                </div>

                {/* Grand Prize Spotlight Banner */}
                <div className="py-4 relative z-10 space-y-1">
                  <div className="text-[10px] text-gray-400 uppercase tracking-[0.25em] font-semibold">
                    Grand Trophy Prize
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
                    Royal Enfield Hunter 350
                  </h3>
                  <p className="text-xs text-[#D4AF37] font-medium">
                    Plus Apple iPhone 16 Pro Max • Electric Scooty
                  </p>
                </div>

                {/* Cumulative Monthly Pool Box */}
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] my-2 text-center relative z-10">
                  <div className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold mb-1">
                    Cumulative Draw Prize Pool
                  </div>
                  <JackpotCounter size="compact" />
                </div>

                {/* Live Chronometer Countdown */}
                <div className="pt-2 pb-3 relative z-10">
                  <div className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold text-center mb-2 flex items-center justify-center gap-1.5">
                    <FiClock size={11} className="text-[#D4AF37]" /> Official Draw Telemetry Countdown
                  </div>
                  <CountdownTimer initialDays={42} initialHours={14} initialMins={38} />
                </div>

                {/* Capacity Allocation Bar */}
                <div className="space-y-2 py-3 border-t border-white/[0.06] relative z-10">
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-gray-400 font-medium">Entry Allocation</span>
                    <span className="text-[#D4AF37] font-semibold font-mono">82% Filled</span>
                  </div>
                  <div className="h-2 w-full bg-white/[0.05] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-amber-600 via-[#D4AF37] to-amber-300 rounded-full w-[82%]" />
                  </div>
                  <div className="flex justify-between text-[10px] text-gray-500">
                    <span>180 Slots Remaining</span>
                    <span>1,000 Total Entries</span>
                  </div>
                </div>

                {/* Direct Action Button */}
                <div className="pt-2 relative z-10">
                  <button
                    onClick={() => setIsHeroModalOpen(true)}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] text-black font-extrabold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 hover:opacity-95 transition-all shadow-[0_4px_25px_rgba(212,175,55,0.35)] cursor-pointer hover:scale-[1.01]"
                  >
                    <span>Instant Participation • ₹999</span>
                    <FiArrowRight size={15} />
                  </button>
                  <p className="text-[10px] text-gray-500 text-center uppercase tracking-widest mt-2.5">
                    Doorstep Insured Delivery • 100% Refund Guarantee
                  </p>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
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
      {/* ORIGINAL CODE:
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
                  <div key={i} className="flex items-center gap-2.5 glass px-4 py-2 rounded-full text-sm border-white/[0.08]">
                    <span className="w-6 h-6 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] text-[10px] font-bold font-mono inline-flex items-center justify-center">{w.avatar}</span>
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
      */}
      <section className="py-4 border-y border-white/[0.06] bg-[#0c0d16]/80 backdrop-blur-md overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span className="px-2.5 py-0.5 rounded-md bg-red-500/15 border border-red-500/30 text-red-400 text-[10px] font-extrabold uppercase tracking-widest font-mono">
                LIVE
              </span>
            </div>

            {/* Strict Single-Line Container with Edge Fade Masks */}
            <div className="flex-1 overflow-hidden relative [mask-image:linear-gradient(to_right,transparent,black_3%,black_97%,transparent)]">
              <motion.div
                key={activeWinner}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, opacity: 0 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="flex items-center flex-nowrap gap-3 whitespace-nowrap overflow-hidden"
              >
                {visibleWinners.map((w, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 flex items-center gap-2.5 bg-white/[0.03] hover:bg-white/[0.06] px-3.5 py-1.5 rounded-full text-xs sm:text-sm border border-white/[0.08] transition-all shadow-sm"
                  >
                    <span className="w-5 h-5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-[9px] font-bold font-mono inline-flex items-center justify-center flex-shrink-0">
                      {w.avatar}
                    </span>
                    <span className="text-[#D4AF37] font-bold">{w.name}</span>
                    <span className="text-gray-400 text-xs">from {w.city} won</span>
                    <span className="text-white font-semibold text-xs">{w.prize}</span>
                    <span className="text-gray-500 text-[11px] font-mono">• {w.time}</span>
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
              {/* ORIGINAL CODE: <span className="text-yellow-400 text-sm font-bold uppercase tracking-widest">Diamond Lottery</span> */}
              <span className="text-yellow-400 text-sm font-bold uppercase tracking-widest">Diamond Draw</span>
            </div>
            {/* ORIGINAL CODE:
            <h2 className="section-title text-white mb-3">
              💎 <span className="gradient-text">Diamond</span> Reward Box
            </h2>
            */}
            <h2 className="section-title text-white mb-3">
              <span className="gradient-text">Diamond</span> Signature Series
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
            {/* ORIGINAL CODE:
            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-full mb-4">
              <span className="text-red-400 text-sm font-bold uppercase tracking-widest">🎯 Alfa Beta System</span>
            </div>
            <h2 className="section-title text-white mb-3">
              🎯 <span className="gradient-text-red">Alfa Beta</span> Plans
            </h2>
            */}
            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-full mb-4">
              <span className="text-red-400 text-xs font-bold uppercase tracking-widest">Tier-Structured Plans</span>
            </div>
            <h2 className="section-title text-white mb-3">
              <span className="gradient-text-red">Alfa Beta</span> Tier System
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
              { step: '01', icon: FiUserCheck, title: 'Select Your Plan', desc: 'Browse our Diamond or Alfa Beta prize portfolios.' },
              { step: '02', icon: FiCreditCard, title: 'Secure Checkout', desc: 'Pay instantly via UPI, Card, or Net Banking with Razorpay.' },
              { step: '03', icon: FiCheckCircle, title: 'Instant Ticket', desc: 'Receive your unique digital serial ticket via SMS & WhatsApp.' },
              { step: '04', icon: FiAward, title: 'Audited Draw', desc: 'Certified PRNG draws with insured doorstep prize handover.' },
            ].map(({ step, icon: StepIcon, title, desc }, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative text-center bg-[#0c0d16] border border-white/[0.06] rounded-2xl p-6 hover:border-[#D4AF37]/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] mx-auto mb-4 text-xl">
                  <StepIcon />
                </div>
                <div className="text-[#D4AF37] font-mono text-[10px] font-bold uppercase tracking-widest mb-1.5">{step}</div>
                <h3 className="text-white font-bold text-base mb-1.5">{title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
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
                  {/* ORIGINAL CODE:
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center text-2xl">
                    {t.avatar}
                  </div>
                  */}
                  <div className="w-11 h-11 rounded-2xl bg-[#0c0d16] border border-[#D4AF37]/30 flex items-center justify-center text-xs font-bold font-mono text-[#D4AF37] shadow-md flex-shrink-0">
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
              {/* ORIGINAL CODE:
              <div className="text-5xl mb-4">🏆</div>
              */}
              <div className="w-16 h-16 rounded-3xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] text-3xl mx-auto mb-6 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                <FiAward />
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
                Ready to <span className="gradient-text">Participate?</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
                Join 5 lakh+ members winning prizes every quarter. Start with just ₹101 and change your life!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* ORIGINAL CODE:
                <Link to="/diamond" className="btn-gold px-8 py-4 rounded-full text-lg font-bold">
                  🚀 View Plans
                </Link>
                */}
                <Link to="/diamond" className="btn-gold px-8 py-4 rounded-xl text-sm font-bold tracking-wider uppercase inline-flex items-center justify-center gap-2">
                  <GiDiamonds /> Explore Diamond Series
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Modal Booking Integration */}
      <BookingModal
        isOpen={isHeroModalOpen}
        onClose={() => setIsHeroModalOpen(false)}
        planName="Signature Plan 01"
        planPrice={999}
        themeColor="#D4AF37"
      />

    </div>
  );
}

