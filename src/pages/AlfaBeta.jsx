import { motion } from 'framer-motion';
import AlfaBetaCard from '../components/AlfaBetaCard';
import { alfaBetaPlans } from '../data/lotteryData';

export default function AlfaBeta() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-20 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <div className="inline-flex items-center gap-2 bg-[#FF2D55]/10 border border-[#FF2D55]/20 px-6 py-2 rounded-full mb-8">
            <span className="text-[#FF2D55] text-xs font-bold uppercase tracking-[0.3em]">🎯 Color-Coded Plans</span>
          </div>
          <h1 className="font-display text-5xl sm:text-7xl md:text-9xl font-black mb-6 tracking-tighter">
            <span className="gradient-text-red italic">Alfa Beta</span>
            <span className="text-white"> System</span>
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto font-light leading-relaxed">
            Six uniquely crafted color tiers designed for every level of play. Choose your lucky horizon and join the next mega draw.
          </p>
        </motion.div>

        {/* Color key */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mt-12"
        >
          {alfaBetaPlans.map(p => (
            <div key={p.id} className="flex items-center gap-3 glass-red px-5 py-2.5 rounded-2xl border-white/5">
              <div className="w-3 h-3 rounded-full shadow-[0_0_10px_rgba(255,45,85,0.5)]" style={{ background: p.color }} />
              <span className="text-white font-bold text-xs uppercase tracking-widest">{p.name}</span>
              <span className="text-white/40 text-[10px] font-mono">₹{p.number}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Plans Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {alfaBetaPlans.map((plan, i) => (
            <AlfaBetaCard key={plan.id} plan={plan} index={i} />
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 luxury-card overflow-x-auto"
        >
          <h3 className="font-display text-2xl font-bold text-white mb-6">📊 Plan Comparison</h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left text-gray-500 pb-3 pr-4">Plan</th>
                <th className="text-left text-gray-500 pb-3 pr-4">Entry Fee</th>
                <th className="text-left text-gray-500 pb-3 pr-4">Prize Value</th>
                <th className="text-left text-gray-500 pb-3">Top Prize</th>
              </tr>
            </thead>
            <tbody className="space-y-2">
              {alfaBetaPlans.map(p => (
                <tr key={p.id} className="border-b border-white/5 hover:bg-white/2 transition-colors">
                  <td className="py-3 pr-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: p.color }} />
                      <span className="text-white font-bold">{p.name}</span>
                    </div>
                  </td>
                  <td className="py-3 pr-4 text-yellow-400 font-bold font-mono">₹{p.number}</td>
                  <td className="py-3 pr-4 text-green-400 font-bold">{p.prize}</td>
                  <td className="py-3 text-gray-400">{p.products[0]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </div>
  );
}
