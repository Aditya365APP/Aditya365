import { motion } from 'framer-motion';
import { FiShield, FiUsers, FiAward, FiGlobe, FiCheck, FiPhone, FiMail, FiTarget } from 'react-icons/fi';
import { GiDiamonds } from 'react-icons/gi';

const pillars = [
  {
    icon: FiShield,
    title: '100% Certified',
    desc: 'ISO-grade PRNG for every draw. Tamper-proof, independently audited, and publicly verifiable.',
    tag: 'Audit Grade',
  },
  {
    icon: FiAward,
    title: 'Verified Winners',
    desc: 'Prizes are insured, KYC-verified, and dispatched pan-India via certified logistics partners.',
    tag: 'Insured Delivery',
  },
  {
    icon: FiUsers,
    title: '5 Lakh+ Members',
    desc: 'A growing community of real participants with transparent draw records available to all.',
    tag: 'Community Driven',
  },
  {
    icon: FiGlobe,
    title: 'Nationally Compliant',
    desc: 'Operating under Indian law with TDS deduction, age verification, and geo-restriction enforcement.',
    tag: 'GST Registered',
  },
];

const milestones = [
  { year: '2023', event: 'Aditya 365 founded in Bangalore' },
  { year: 'Q2 2023', event: 'First certified draw — 100% RNG verified' },
  { year: 'Q4 2023', event: '1 Lakh members milestone crossed' },
  { year: '2024', event: '₹10 Crore+ in verified prizes disbursed' },
  { year: '2025', event: '5 Lakh+ active members across India' },
  { year: 'Today', event: 'Expanding prize tiers & platform features' },
];

const team = [
  { initials: 'AR', name: 'Aditya Rao', role: 'Founder & Director', city: 'Bangalore' },
  { initials: 'PK', name: 'Priya Krishnan', role: 'Chief Compliance Officer', city: 'Bangalore' },
  { initials: 'MS', name: 'Manish Shah', role: 'Head of Technology', city: 'Hyderabad' },
  { initials: 'RC', name: 'Ramesh Choudhary', role: 'Operations Manager', city: 'Mumbai' },
];

export default function About() {
  return (
    <div className="min-h-screen pt-20 pb-20 relative">
      {/* Ambient glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[280px] bg-[#D4AF37]/[0.05] rounded-full blur-[130px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ─── COMPACT PAGE HERO ─── */}
        <div className="pt-6 pb-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
          >
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/25 px-3.5 py-1 rounded-full mb-3">
                <GiDiamonds className="text-[#D4AF37] text-xs" />
                <span className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.22em] font-mono">
                  Est. 2023 · Bangalore, India
                </span>
                <span className="text-[9px] text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-1.5 py-0.5 rounded-full font-semibold">
                  ISO Verified
                </span>
              </div>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-none text-white">
                About <span className="gradient-text">Aditya 365</span>
              </h1>
              <p className="text-gray-400 text-sm mt-2 max-w-lg leading-relaxed">
                India's premier certified draw platform. Built on strict transparency and insured delivery.
              </p>
            </div>

            {/* Right: Key metrics */}
            <div className="flex gap-4 sm:gap-7 flex-shrink-0 flex-wrap sm:flex-nowrap">
              {[
                { value: '5L+', label: 'Members' },
                { value: '₹10Cr+', label: 'Disbursed' },
                { value: '100%', label: 'Certified' },
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

        {/* ─── MISSION + PILLARS ─── */}
        <div className="mb-16">
          <div className="grid md:grid-cols-5 gap-8 items-start mb-10">
            {/* Mission text */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 space-y-4"
            >
              <div>
                <div className="text-[#D4AF37] text-[11px] font-bold uppercase tracking-[0.25em] font-mono mb-2">Our Mission</div>
                <h2 className="text-white font-bold text-2xl sm:text-3xl tracking-tight mb-4">
                  Redefining Draw Integrity in India
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  Founded in 2023, Aditya 365 was built on a simple premise: lucky draws should be fair, accessible, and completely transparent. We believe every participant deserves to trust the platform they invest in.
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  We have replaced outdated, opaque systems with a modern platform that uses cryptographically secure random number generation (RNG) for every draw. From the moment you enroll, you can track the live countdown, view total entries, and watch live results — no ambiguity, no exceptions.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {['ISO-Grade RNG', 'Razorpay Escrow', 'TDS Compliant', 'Pan-India Delivery'].map(tag => (
                  <span key={tag} className="text-[11px] border border-[#D4AF37]/30 text-[#D4AF37]/80 px-3 py-1 rounded-full font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Pillars */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {pillars.map(({ icon: Icon, title, desc, tag }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-2xl border border-white/[0.08] bg-[#0e0e1a] p-5 hover:border-[#D4AF37]/25 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon size={16} />
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">{title}</div>
                      <div className="text-[#D4AF37]/60 text-[10px] font-mono mt-0.5">{tag}</div>
                    </div>
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ─── TIMELINE ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <div className="text-[#D4AF37] text-[11px] font-bold uppercase tracking-[0.25em] font-mono mb-2">Company Journey</div>
            <h2 className="text-white font-bold text-2xl sm:text-3xl tracking-tight">Milestones</h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#D4AF37]/30 via-[#D4AF37]/10 to-transparent" />

            <div className="space-y-5">
              {milestones.map(({ year, event }, i) => (
                <motion.div
                  key={year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -15 : 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`flex items-center gap-4 sm:gap-0 ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
                >
                  <div className={`sm:w-1/2 ${i % 2 === 0 ? 'sm:pr-10 sm:text-right' : 'sm:pl-10 sm:text-left'} pl-10 sm:pl-0`}>
                    <div className="inline-block rounded-xl border border-white/[0.08] bg-[#0e0e1a] px-4 py-3 hover:border-[#D4AF37]/25 transition-colors">
                      <div className="text-[#D4AF37] text-xs font-mono font-bold mb-1">{year}</div>
                      <div className="text-white text-sm font-medium">{event}</div>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#D4AF37] border-2 border-[#0a0a0f] shadow-[0_0_10px_rgba(212,175,55,0.5)] flex-shrink-0" />

                  <div className="sm:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ─── TEAM ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <div className="text-[#D4AF37] text-[11px] font-bold uppercase tracking-[0.25em] font-mono mb-2">Leadership</div>
            <h2 className="text-white font-bold text-2xl sm:text-3xl tracking-tight">The Team Behind Aditya 365</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {team.map(({ initials, name, role, city }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-white/[0.08] bg-[#0e0e1a] p-5 text-center hover:border-[#D4AF37]/25 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 border border-[#D4AF37]/30 flex items-center justify-center font-black text-[#D4AF37] text-lg mx-auto mb-3 group-hover:scale-110 transition-transform">
                  {initials}
                </div>
                <div className="text-white font-bold text-sm">{name}</div>
                <div className="text-[#D4AF37]/70 text-[11px] font-mono mt-0.5">{role}</div>
                <div className="text-gray-500 text-[10px] mt-1 uppercase tracking-wider">{city}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ─── LEGAL & COMPLIANCE ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden border border-[#D4AF37]/20 relative p-8 sm:p-12 text-center"
          style={{
            background: 'linear-gradient(135deg, #0e0c06 0%, #0f0e0a 50%, #0a0a0f 100%)',
            boxShadow: '0 0 60px rgba(212,175,55,0.07)',
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.03] pointer-events-none" />
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/25 flex items-center justify-center text-[#D4AF37] text-2xl mx-auto mb-5 shadow-[0_0_25px_rgba(212,175,55,0.15)]">
              <FiGlobe />
            </div>
            <div className="text-[#D4AF37] text-[11px] font-bold uppercase tracking-[0.25em] font-mono mb-2">Compliance</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">Legal & Regulatory Framework</h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-sm leading-relaxed mb-8">
              Aditya 365 operates in strict compliance with the laws of India. We are a registered entity ensuring all taxes (TDS) on winnings are properly deducted and deposited as per the Income Tax Act, 1961. The platform prohibits access to participants below 18 years of age and from states where such activities are restricted by law.
            </p>

            <div className="flex flex-wrap justify-center gap-5 text-gray-400 text-xs">
              {[
                'Income Tax Act 1961 Compliant',
                'TDS Deducted on Winnings',
                'KYC Verified Participants',
                'Age 18+ Only',
                'State-wise Geo-restriction',
                'Razorpay Payment Partner',
              ].map(item => (
                <span key={item} className="flex items-center gap-1.5">
                  <FiCheck className="text-emerald-400" size={12} />
                  {item}
                </span>
              ))}
            </div>

            {/* Contact strip */}
            <div className="mt-8 pt-8 border-t border-white/[0.07] flex flex-wrap justify-center gap-6 text-xs text-gray-400">
              <a href="tel:+917799399889" className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors">
                <FiPhone size={13} className="text-[#D4AF37]" />
                +91 77993 99889
              </a>
              <a href="mailto:support@aditya365.in" className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors">
                <FiMail size={13} className="text-[#D4AF37]" />
                support@aditya365.in
              </a>
              <span className="flex items-center gap-2">
                <FiTarget size={13} className="text-[#D4AF37]" />
                Kumaraswamy Layout, Bangalore — 560078
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
