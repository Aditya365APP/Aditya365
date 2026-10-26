import { motion } from 'framer-motion';
import { leaderboard } from '../data/lotteryData';

export default function Leaderboard() {
   return (
      <div className="min-h-screen pt-28 pb-20">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-20 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
               <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/20 px-6 py-2 rounded-full mb-8">
                  <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em]">Member Hall of Fame</span>
               </div>
               <h1 className="font-display text-5xl sm:text-7xl md:text-9xl font-black mb-6 tracking-tighter">
                  Global <span className="gradient-text italic">Prestige</span>
               </h1>
               <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto font-light leading-relaxed">
                  The verified rankings of our most distinguished and rewarding draw participants.
               </p>
            </motion.div>
         </div>

         <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
               className="luxury-card overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0c0d16]"
            >
               <div className="bg-white/[0.03] px-8 py-5 flex gap-4 text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em] border-b border-white/[0.06]">
                  <div className="w-12 text-center">Rank</div>
                  <div className="flex-1">Member</div>
                  <div className="w-24 text-center hidden sm:block">Entries</div>
                  <div className="w-24 text-center hidden sm:block">Wins</div>
                  <div className="w-32 text-right">Cumulative Value</div>
               </div>

               <div className="divide-y divide-white/[0.04]">
                  {leaderboard.map((user, i) => (
                     <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08, duration: 0.4 }}
                        className={`flex items-center gap-6 px-8 py-5 transition-all duration-300 hover:bg-white/[0.02] ${i < 3 ? 'bg-[#D4AF37]/[0.02]' : ''}`}
                     >
                        <div className="w-12 text-center">
                           {i === 0 ? (
                              <span className="w-7 h-7 rounded-full bg-[#D4AF37] text-black font-mono font-bold text-xs inline-flex items-center justify-center shadow-md">1</span>
                           ) : i === 1 ? (
                              <span className="w-7 h-7 rounded-full bg-slate-300 text-black font-mono font-bold text-xs inline-flex items-center justify-center shadow-md">2</span>
                           ) : i === 2 ? (
                              <span className="w-7 h-7 rounded-full bg-amber-700 text-white font-mono font-bold text-xs inline-flex items-center justify-center shadow-md">3</span>
                           ) : (
                              <span className="text-gray-500 font-mono text-xs font-semibold">{i + 1}</span>
                           )}
                        </div>

                        <div className="flex-1 flex items-center gap-5">
                           <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-xl shadow-2xl relative overflow-hidden group
                    ${i === 0 ? 'bg-gradient-to-br from-[#D4AF37] to-[#B8860B] text-black' :
                                 i === 1 ? 'bg-gradient-to-br from-gray-300 to-gray-500 text-black' :
                                    i === 2 ? 'bg-gradient-to-br from-[#cd7f32] to-[#8b4513] text-white' :
                                       'bg-white/5 text-white/40'}`}>
                              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                              <span className="relative z-10">{user.name.charAt(0)}</span>
                           </div>
                           <div>
                              <h3 className={`font-black text-xl tracking-tight ${i < 3 ? 'text-white' : 'text-gray-400'}`}>
                                 {user.name}
                              </h3>
                              <p className="text-gray-500 text-[10px] font-bold flex items-center gap-2 uppercase tracking-widest mt-1">
                                 <FiMapPin className="text-[#D4AF37]" size={10} /> {user.city}
                              </p>
                           </div>
                        </div>

                        <div className="w-24 text-center hidden sm:block font-mono text-white/30 text-sm font-bold">{user.entries}</div>
                        <div className="w-24 text-center hidden sm:block font-black text-white text-lg">{user.wins}</div>

                        <div className="w-32 text-right">
                           <span className={`font-mono font-black tracking-tight ${i === 0 ? 'text-[#D4AF37] text-2xl' :
                                 i === 1 ? 'text-gray-200 text-xl' :
                                    i === 2 ? 'text-[#cd7f32] text-xl' :
                                       'text-white text-lg'
                              }`}>
                              {user.totalPrize}
                           </span>
                        </div>
                     </motion.div>
                  ))}
               </div>
            </motion.div>

            {/* Info Box */}
            <div className="mt-8 bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 flex gap-3 text-blue-400 items-start">
               <div className="text-xl">ℹ️</div>
               <p className="text-sm">
                  Top 3 players at the end of every month receive a special <strong>₹50,000 Wallet Bonus</strong> and guaranteed free entries in the Platinum draws!
               </p>
            </div>
         </div>
      </div>
   );
}

// Quick inline component for the MapPin
function FiMapPin(props) {
   return (
      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
         <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
         <circle cx="12" cy="10" r="3"></circle>
      </svg>
   );
}
