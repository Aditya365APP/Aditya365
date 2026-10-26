import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiSearch,
  FiCalendar,
  FiMapPin,
  FiCheck,
  FiAward,
  FiStar,
  FiTrendingUp,
  FiInfo,
  FiUsers,
  FiChevronRight
} from 'react-icons/fi';
import { GiTrophy } from 'react-icons/gi';
import { liveWinners, leaderboard } from '../data/lotteryData';

const medals = [
  {
    rank: 0,
    ringColor: 'from-[#D4AF37] to-[#B8860B]',
    textColor: 'text-black',
    badgeBg: 'bg-[#D4AF37]',
    badgeText: 'text-black',
    nameColor: 'text-[#D4AF37]',
    valueColor: 'text-[#D4AF37]',
    glow: 'shadow-[0_0_30px_rgba(212,175,55,0.35)]',
    rowBg: 'bg-[#D4AF37]/[0.03]',
  },
  {
    rank: 1,
    ringColor: 'from-gray-300 to-gray-500',
    textColor: 'text-black',
    badgeBg: 'bg-gray-300',
    badgeText: 'text-black',
    nameColor: 'text-gray-200',
    valueColor: 'text-gray-200',
    glow: 'shadow-[0_0_20px_rgba(200,200,200,0.15)]',
    rowBg: 'bg-white/[0.015]',
  },
  {
    rank: 2,
    ringColor: 'from-[#cd7f32] to-[#8b4513]',
    textColor: 'text-white',
    badgeBg: 'bg-[#cd7f32]',
    badgeText: 'text-white',
    nameColor: 'text-[#cd7f32]',
    valueColor: 'text-[#cd7f32]',
    glow: 'shadow-[0_0_20px_rgba(205,127,50,0.2)]',
    rowBg: 'bg-[#cd7f32]/[0.02]',
  },
];

export default function Winners({ defaultTab }) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const paramTab = searchParams.get('tab');

  // Determine initial active view
  const initialTab =
    defaultTab ||
    (location.pathname === '/leaderboard' || paramTab === 'leaderboard'
      ? 'leaderboard'
      : 'winners');

  const [activeView, setActiveView] = useState(initialTab);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (location.pathname === '/leaderboard' || paramTab === 'leaderboard') {
      setActiveView('leaderboard');
    }
  }, [location.pathname, paramTab]);

  const allWinners = [
    ...liveWinners,
    { name: 'Suresh Kumar', city: 'Chennai', prize: 'Activa 6G', plan: 'Beta 501', time: '2 hours ago', avatar: 'SK', amount: '₹85,000' },
    { name: 'Neha Gupta', city: 'Delhi', prize: 'iPad Air', plan: 'Delta 401', time: '3 hours ago', avatar: 'NG', amount: '₹60,000' },
    { name: 'Kishan L.', city: 'Surat', prize: 'Prestige Kitchen', plan: 'Diamond ₹399', time: '5 hours ago', avatar: 'KL', amount: '₹12,000' },
    { name: 'Manoj Singh', city: 'Patna', prize: 'LG OLED TV', plan: 'Diamond ₹699', time: '1 day ago', avatar: 'MS', amount: '₹1,10,000' },
    { name: 'Pooja Verma', city: 'Lucknow', prize: 'Voltas AC', plan: 'Diamond ₹499', time: '1 day ago', avatar: 'PV', amount: '₹35,000' },
    { name: 'Raj Patel', city: 'Ahmedabad', prize: 'Royal Enfield', plan: 'Diamond ₹999', time: '2 days ago', avatar: 'RP', amount: '₹2,20,000' },
  ];

  const filteredWinners = allWinners.filter(w => {
    const matchesSearch =
      w.name.toLowerCase().includes(search.toLowerCase()) ||
      w.city.toLowerCase().includes(search.toLowerCase());
    const matchesPlan =
      filter === 'all' ||
      (filter === 'diamond' ? w.plan.includes('Diamond') : !w.plan.includes('Diamond'));
    return matchesSearch && matchesPlan;
  });

  const filterTabs = [
    { key: 'all', label: 'All Winners' },
    { key: 'diamond', label: 'Diamond' },
    { key: 'alfa', label: 'Alfa Beta' },
  ];

  return (
    <div className="min-h-screen pt-20 pb-20 relative">
      {/* Ambient background glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#D4AF37]/[0.05] rounded-full blur-[140px]" />
      </div>

      {/* ─── UNIFIED COMPACT PAGE HERO ─── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          {/* Left Title */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/25 px-3.5 py-1 rounded-full mb-3">
              <GiTrophy className="text-[#D4AF37] text-xs" />
              <span className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.22em] font-mono">
                Hall of Fame & Results Ledger
              </span>
              <span className="inline-flex items-center gap-1 text-[9px] text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-1.5 py-0.5 rounded-full font-semibold">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" /> Live
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-none text-white">
              Verified <span className="gradient-text">Winners</span>
            </h1>
            <p className="text-gray-400 text-sm mt-2 max-w-lg leading-relaxed">
              Real-time confirmed draw payout ledger and quarterly member rankings.
            </p>
          </div>

          {/* Right Metrics */}
          <div className="flex gap-4 sm:gap-7 flex-shrink-0 flex-wrap sm:flex-nowrap">
            {[
              { value: `${allWinners.length}+`, label: 'Winners' },
              { value: '₹10Cr+', label: 'Disbursed' },
              { value: '₹1.5L', label: 'Bonus Pool' },
              { value: '200+', label: 'Cities' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-lg sm:text-xl font-black font-mono text-[#D4AF37] leading-none">{value}</div>
                <div className="text-gray-500 text-[9px] uppercase tracking-widest font-semibold mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ─── PRIMARY SECTION SELECTOR TABS ─── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-8 relative z-10">
        <div className="p-1.5 rounded-2xl bg-[#0e0e1a]/90 border border-white/[0.09] backdrop-blur-md grid grid-cols-2 gap-2 shadow-xl">
          <button
            onClick={() => setActiveView('winners')}
            className={`flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
              activeView === 'winners'
                ? 'bg-[#D4AF37] text-black shadow-[0_4px_20px_rgba(212,175,55,0.35)]'
                : 'text-gray-400 hover:text-white hover:bg-white/[0.03]'
            }`}
          >
            <GiTrophy size={16} />
            <span>Verified Winners</span>
            <span
              className={`hidden sm:inline-block px-2 py-0.5 rounded-full text-[10px] font-mono ${
                activeView === 'winners' ? 'bg-black/20 text-black' : 'bg-white/10 text-gray-400'
              }`}
            >
              Live Ledger
            </span>
          </button>

          <button
            onClick={() => setActiveView('leaderboard')}
            className={`flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
              activeView === 'leaderboard'
                ? 'bg-[#D4AF37] text-black shadow-[0_4px_20px_rgba(212,175,55,0.35)]'
                : 'text-gray-400 hover:text-white hover:bg-white/[0.03]'
            }`}
          >
            <FiStar size={16} />
            <span>Hall of Fame</span>
            <span
              className={`hidden sm:inline-block px-2 py-0.5 rounded-full text-[10px] font-mono ${
                activeView === 'leaderboard' ? 'bg-black/20 text-black' : 'bg-white/10 text-gray-400'
              }`}
            >
              Q3 Rankings
            </span>
          </button>
        </div>
      </div>

      {/* ─── SECTION 1: VERIFIED WINNERS LEDGER ─── */}
      {activeView === 'winners' && (
        <motion.div
          key="winners-view"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          {/* Controls */}
          <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-6">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              {/* Search */}
              <div className="relative max-w-sm w-full">
                <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={14} />
                <input
                  type="text"
                  placeholder="Search by name or city..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="w-full bg-white/[0.04] border border-white/[0.1] rounded-xl py-2.5 pl-10 pr-4 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#D4AF37]/50 transition-colors"
                />
              </div>

              {/* Filter Tabs */}
              <div className="flex bg-white/[0.03] p-1 rounded-xl border border-white/[0.08]">
                {filterTabs.map(({ key, label }) => (
                  <button
                    key={key}
                    onClick={() => setFilter(key)}
                    className={`px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                      filter === key
                        ? 'bg-[#D4AF37] text-black shadow-[0_2px_15px_rgba(212,175,55,0.3)]'
                        : 'text-gray-500 hover:text-white'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Result count */}
            <div className="mt-3 text-gray-600 text-xs font-mono">
              {filteredWinners.length === 0
                ? 'No matches found'
                : `Showing ${filteredWinners.length} verified winner${filteredWinners.length !== 1 ? 's' : ''}`}
            </div>
          </div>

          {/* Winners List */}
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="space-y-3">
              <AnimatePresence mode="popLayout">
                {filteredWinners.map((w, i) => (
                  <motion.div
                    key={`${w.name}-${i}`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ delay: i * 0.03, duration: 0.3 }}
                    className="group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 sm:p-6 rounded-2xl border border-white/[0.08] bg-[#0c0d16] hover:border-[#D4AF37]/30 hover:bg-[#0e0e18] transition-all duration-300"
                  >
                    {/* Left: Avatar + Info */}
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      <div className="text-gray-600 font-mono text-xs font-bold w-6 text-right flex-shrink-0 hidden sm:block">
                        #{i + 1}
                      </div>

                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 border border-[#D4AF37]/30 flex items-center justify-center font-mono font-black text-[#D4AF37] text-sm shadow-lg flex-shrink-0">
                        {w.name ? w.name.split(' ').map(p => p[0]).join('').slice(0, 2).toUpperCase() : 'W'}
                      </div>

                      <div className="min-w-0">
                        <div className="text-white font-bold text-sm sm:text-base tracking-tight truncate">
                          {w.name}
                        </div>
                        <div className="text-gray-500 text-xs flex items-center gap-1 mt-0.5">
                          <FiMapPin size={11} className="text-[#D4AF37]/70 flex-shrink-0" />
                          {w.city}
                        </div>
                      </div>
                    </div>

                    {/* Right: Prize + Plan + Time */}
                    <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 sm:gap-6 pl-[60px] sm:pl-0 w-full sm:w-auto">
                      <div className="min-w-[120px]">
                        <div className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold mb-1">Prize Won</div>
                        <div className="text-[#D4AF37] font-bold text-sm leading-tight">{w.prize}</div>
                        {w.amount && (
                          <div className="text-gray-600 text-[10px] font-mono mt-0.5">Est. {w.amount}</div>
                        )}
                      </div>

                      <div className="hidden sm:block w-px h-10 bg-white/[0.06]" />

                      <div className="min-w-[100px]">
                        <div className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold mb-1">Plan</div>
                        <div className="text-white font-semibold text-xs">{w.plan}</div>
                        <div className="text-gray-600 text-[10px] flex items-center gap-1 mt-0.5">
                          <FiCalendar size={10} /> {w.time}
                        </div>
                      </div>

                      <div className="flex-shrink-0">
                        <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                          <FiCheck size={10} /> Verified
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {filteredWinners.length === 0 && (
                <div className="text-center py-16 text-gray-500 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                  <FiSearch size={32} className="mx-auto mb-3 opacity-40" />
                  <p className="text-sm">No winners found matching your search.</p>
                  <button
                    onClick={() => { setSearch(''); setFilter('all'); }}
                    className="mt-4 text-xs text-[#D4AF37] hover:underline cursor-pointer"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>

            {/* Bottom Motivation Card */}
            {filteredWinners.length > 0 && (
              <div className="mt-10 text-center p-6 rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/[0.04]">
                <FiAward className="text-[#D4AF37] text-2xl mx-auto mb-2" />
                <p className="text-white font-bold text-sm mb-1">Your name could be next</p>
                <p className="text-gray-400 text-xs max-w-sm mx-auto">
                  Every draw is cryptographically certified and transparent. Join over 5 lakh+ members today.
                </p>
              </div>
            )}
          </div>
        </motion.div>
      )}

      {/* ─── SECTION 2: GLOBAL LEADERBOARD (HALL OF FAME) ─── */}
      {activeView === 'leaderboard' && (
        <motion.div
          key="leaderboard-view"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="max-w-4xl mx-auto px-4 sm:px-6"
        >
          {/* Top 3 Podium Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {leaderboard.slice(0, 3).map((user, i) => {
              const medal = medals[i];
              const positions = ['1st Place Champion', '2nd Place Runner-Up', '3rd Place Contender'];
              const awardBonus = ['₹50,000 Bonus', '₹35,000 Bonus', '₹20,000 Bonus'];
              return (
                <div
                  key={user.name}
                  className={`rounded-2xl p-5 border relative overflow-hidden flex flex-col justify-between ${
                    i === 0
                      ? 'border-[#D4AF37]/50 bg-gradient-to-b from-[#D4AF37]/15 via-[#0e0e1a] to-[#0a0a14] shadow-[0_10px_35px_rgba(212,175,55,0.15)]'
                      : i === 1
                      ? 'border-gray-400/30 bg-gradient-to-b from-gray-400/10 via-[#0e0e1a] to-[#0a0a14]'
                      : 'border-[#cd7f32]/30 bg-gradient-to-b from-[#cd7f32]/10 via-[#0e0e1a] to-[#0a0a14]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`w-7 h-7 rounded-full ${medal.badgeBg} ${medal.badgeText} font-mono font-black text-xs inline-flex items-center justify-center ${medal.glow}`}
                    >
                      {i + 1}
                    </span>
                    <span className="text-[10px] font-mono uppercase font-bold text-gray-400">
                      {positions[i]}
                    </span>
                  </div>

                  <div className="space-y-1 mb-4">
                    <h3 className={`font-black text-lg tracking-tight ${medal.nameColor}`}>
                      {user.name}
                    </h3>
                    <div className="text-gray-400 text-xs flex items-center gap-1">
                      <FiMapPin size={10} className="text-[#D4AF37]" />
                      {user.city}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs">
                    <div>
                      <div className="text-gray-500 text-[10px] uppercase font-semibold">Total Prize</div>
                      <div className="font-mono font-bold text-white text-sm">{user.totalPrize}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-gray-500 text-[10px] uppercase font-semibold">Prestige Bonus</div>
                      <div className="font-mono font-bold text-[#D4AF37] text-xs">{awardBonus[i]}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Full Leaderboard Table */}
          <div
            className="rounded-3xl overflow-hidden border border-white/[0.09]"
            style={{ background: 'linear-gradient(135deg, #0d0e1a 0%, #0c0c15 100%)' }}
          >
            {/* Table Header */}
            <div className="grid grid-cols-[56px_1fr_auto_auto_auto] sm:grid-cols-[56px_1fr_80px_80px_120px] items-center gap-3 px-5 sm:px-8 py-4 border-b border-white/[0.06] text-gray-500 text-[10px] font-bold uppercase tracking-[0.18em]">
              <div className="text-center">Rank</div>
              <div>Member</div>
              <div className="text-center hidden sm:block">Entries</div>
              <div className="text-center hidden sm:block">Wins</div>
              <div className="text-right">Prize Total</div>
            </div>

            {/* Rows */}
            <div className="divide-y divide-white/[0.04]">
              {leaderboard.map((user, i) => {
                const medal = medals[i] || null;
                const isTop3 = i < 3;

                return (
                  <div
                    key={user.name}
                    className={`grid grid-cols-[56px_1fr_auto_auto_auto] sm:grid-cols-[56px_1fr_80px_80px_120px] items-center gap-3 px-5 sm:px-8 py-4 sm:py-5 transition-all duration-200 hover:bg-white/[0.025] ${
                      isTop3 ? medal.rowBg : ''
                    }`}
                  >
                    {/* Rank */}
                    <div className="flex justify-center">
                      {isTop3 ? (
                        <span
                          className={`w-7 h-7 rounded-full ${medal.badgeBg} ${medal.badgeText} font-mono font-black text-xs inline-flex items-center justify-center ${medal.glow}`}
                        >
                          {i + 1}
                        </span>
                      ) : (
                        <span className="text-gray-500 font-mono text-sm font-semibold">{i + 1}</span>
                      )}
                    </div>

                    {/* Member Details */}
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center font-black text-lg relative overflow-hidden flex-shrink-0 ${
                          isTop3
                            ? `bg-gradient-to-br ${medal.ringColor} ${medal.textColor} ${medal.glow}`
                            : 'bg-white/[0.06] text-white/40'
                        }`}
                      >
                        {user.name.charAt(0)}
                      </div>
                      <div className="min-w-0">
                        <div
                          className={`font-black text-sm sm:text-base tracking-tight truncate ${
                            isTop3 ? medal.nameColor : 'text-gray-300'
                          }`}
                        >
                          {user.name}
                        </div>
                        <div className="text-gray-500 text-[10px] flex items-center gap-1 mt-0.5 uppercase tracking-wider">
                          <FiMapPin size={9} className="text-[#D4AF37]/60" />
                          {user.city}
                        </div>
                      </div>
                    </div>

                    {/* Entries */}
                    <div className="text-center font-mono text-gray-400 text-sm font-bold hidden sm:block">
                      {user.entries}
                    </div>

                    {/* Wins */}
                    <div className="text-center hidden sm:block">
                      <span className={`font-black text-base ${isTop3 ? medal.nameColor : 'text-white'}`}>
                        {user.wins}
                      </span>
                    </div>

                    {/* Total Prize */}
                    <div className="text-right">
                      <span
                        className={`font-mono font-black tracking-tight ${
                          i === 0
                            ? 'text-[#D4AF37] text-lg sm:text-xl'
                            : i === 1
                            ? 'text-gray-300 text-base sm:text-lg'
                            : i === 2
                            ? 'text-[#cd7f32] text-base sm:text-lg'
                            : 'text-white text-sm'
                        }`}
                      >
                        {user.totalPrize}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bonus Info */}
          <div className="mt-6 rounded-2xl border border-[#D4AF37]/25 bg-[#D4AF37]/[0.04] p-5 flex gap-4 items-start">
            <div className="w-9 h-9 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] flex-shrink-0 text-sm mt-0.5">
              <FiInfo />
            </div>
            <div>
              <div className="text-white font-bold text-sm mb-1">Quarterly Prestige Rewards</div>
              <p className="text-gray-400 text-xs leading-relaxed">
                Top 3 participants at the end of each quarter receive a special{' '}
                <strong className="text-[#D4AF37] font-semibold">₹50,000 Wallet Bonus</strong> and guaranteed priority ticket allocation for our upcoming flagship rounds.
              </p>
            </div>
          </div>

          {/* Ranking Rules */}
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                icon: FiTrendingUp,
                title: 'Scoring Formula',
                desc: 'Your score = Total entries × Verified win multiplier. Greater consistency raises ranking.',
              },
              {
                icon: FiAward,
                title: 'Quarterly Reset',
                desc: 'Rankings refresh every 90 days giving every member an equal opportunity each quarter.',
              },
              {
                icon: FiStar,
                title: 'Bonus Eligibility',
                desc: 'Members with 5+ entries in an active quarter qualify automatically for pool distributions.',
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl border border-white/[0.07] bg-[#0e0e1a] p-4 flex gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] flex-shrink-0 mt-0.5">
                  <Icon size={14} />
                </div>
                <div>
                  <div className="text-white font-bold text-xs mb-1">{title}</div>
                  <p className="text-gray-500 text-[11px] leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
