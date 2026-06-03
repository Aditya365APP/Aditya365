import { motion } from 'framer-motion';
import { FiShield, FiUsers, FiAward, FiGlobe } from 'react-icons/fi';

export default function About() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-black mb-6 tracking-tighter">
              About <span className="gradient-text italic">Aditya 365</span>
            </h1>
            <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto font-light leading-relaxed">
              The pinnacle of premium online lottery in India. Certified transparency meets cutting-edge technology to redefine your winning experience.
            </p>
          </motion.div>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <h2 className="text-3xl font-bold text-white">Our Mission</h2>
            <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
              Founded in 2023, Aditya 365 was built on a simple premise: lottery should be fair, accessible, and completely transparent.
            </p>
            <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
              We've replaced outdated systems with a modern platform that uses cryptographically secure random number generation (RNG) for every draw. From the moment you purchase an entry, you can track the live countdown, view the total entries, and watch the live results.
            </p>
            <div className="flex gap-4 pt-4">
              <div className="bg-yellow-400/10 border border-yellow-400/30 p-4 rounded-xl text-center flex-1">
                <div className="text-3xl font-bold text-yellow-400 font-mono mb-1">5L+</div>
                <div className="text-gray-500 text-xs uppercase tracking-widest">Active Users</div>
              </div>
              <div className="bg-red-500/10 border border-red-500/30 p-4 rounded-xl text-center flex-1">
                <div className="text-3xl font-bold text-red-500 font-mono mb-1">₹10Cr</div>
                <div className="text-gray-500 text-xs uppercase tracking-widest">Paid Out</div>
              </div>
            </div>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4 translate-y-8">
              <div className="luxury-card h-48 flex flex-col justify-center items-center text-center group">
                <FiShield size={32} className="text-[#D4AF37] mb-3 group-hover:scale-125 transition-transform" />
                <h3 className="font-bold text-white text-lg">100% Secure</h3>
                <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Institutional Security</p>
              </div>
              <div className="luxury-card h-56 flex flex-col justify-center items-center text-center group bg-[#0a0a18]">
                <div className="text-5xl mb-3 group-hover:rotate-12 transition-transform">🎰</div>
                <h3 className="font-bold text-[#D4AF37] text-lg">Fair Play</h3>
                <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Certified RNG</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="luxury-card h-48 flex flex-col justify-center items-center text-center" style={{ background: 'linear-gradient(145deg, #1a0f12, #2a151b)' }}>
                <FiAward size={32} className="text-red-500 mb-2" />
                <h3 className="font-bold text-red-400">Real Winners</h3>
                <p className="text-xs text-gray-400">Prizes shipped pan-India</p>
              </div>
              <div className="luxury-card h-40 flex flex-col justify-center items-center text-center">
                <FiUsers size={32} className="text-blue-400 mb-2" />
                <h3 className="font-bold text-white">24/7 Support</h3>
                <p className="text-xs text-gray-500">Always here to help</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Legal  */}
        <div className="border border-white/5 rounded-2xl p-8 lg:p-12 relative overflow-hidden text-center">
          <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-yellow-500/20 via-transparent to-red-500/20" />
          <FiGlobe className="mx-auto text-4xl text-gray-600 mb-4" />
          <h2 className="text-2xl font-bold text-white mb-3 relative z-10">Legal & Compliance</h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-sm leading-relaxed relative z-10">
            Aditya 365 operates in strict compliance with the laws of India. We are a registered entity ensuring all taxes (TDS) on winnings are properly deducted and deposited as per the Income Tax Act, 1961. The platform prohibits access to players below 18 years of age and from states where such games are restricted.
          </p>
        </div>
      </div>
    </div>
  );
}
