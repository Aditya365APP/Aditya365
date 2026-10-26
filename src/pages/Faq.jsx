import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiHelpCircle, FiCreditCard, FiShield, FiGift, FiRefreshCw, FiMail, FiPhone } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Faq() {
  const [activeTab, setActiveTab] = useState('payments');
  const [openIndex, setOpenIndex] = useState(0);

  const categories = [
    { id: 'payments', label: 'Payments & Razorpay', icon: FiCreditCard },
    { id: 'refunds', label: 'Refunds & Cancellations', icon: FiRefreshCw },
    { id: 'draws', label: 'Draws & Fairness', icon: FiShield },
    { id: 'prizes', label: 'Winners & Prizes', icon: FiGift },
  ];

  const faqs = {
    payments: [
      {
        q: 'Which payment methods are accepted on Aditya 365?',
        a: 'We accept all major digital payment instruments through our verified payment partner Razorpay, including UPI (Google Pay, PhonePe, Paytm, BHIM), all major Credit/Debit Cards (Visa, Mastercard, RuPay), and Net Banking across 50+ Indian banks.',
      },
      {
        q: 'Is it safe to pay online on this platform?',
        a: 'Yes, 100%. All transactions are secured with 256-bit SSL encryption and processed via Razorpay under PCI-DSS Level 1 compliance. Aditya 365 never collects or stores your card CVV, PIN, or banking passwords.',
      },
      {
        q: 'My payment was deducted from my account but the ticket wasn’t generated. What should I do?',
        a: 'Do not worry! In rare instances of network interruption, Razorpay automatically reconciles the transaction within 24 hours. If your ticket is not generated, the full amount will be automatically refunded back to your bank account within 5 to 7 working days. You can also write to support@aditya365.com with your transaction ID.',
      },
    ],
    refunds: [
      {
        // ORIGINAL CODE: q: 'Can I cancel my lottery ticket once purchased?',
        q: 'Can I cancel my draw entry ticket once purchased?',
        a: 'Due to the integrity and algorithmic structure of cryptographically scheduled draws, confirmed ticket entries cannot be cancelled once issued. However, if there was a technical error or duplicate debit, full refunds are promptly issued.',
      },
      {
        q: 'How long does it take for a refund to reflect in my bank account?',
        a: 'Once initiated, refunds are processed through Razorpay back to your original payment source. UPI refunds typically reflect within 24 to 48 hours, while Card and Net Banking refunds take between 5 to 7 business days depending on your bank.',
      },
      {
        q: 'How do I raise a refund request for double debits?',
        a: 'Send an email to support@aditya365.com or billing@aditya365.com containing your registered phone number, Razorpay Payment ID, and a screenshot of the debit message. Our team verifies and initiates reversal within 24 hours.',
      },
    ],
    draws: [
      {
        q: 'How are the winners selected? Is it fair?',
        a: 'Draws are conducted strictly using cryptographically certified Pseudo-Random Number Generators (PRNG). The system is fully automated and tamper-proof. No human intervention or administrative override is possible.',
      },
      {
        q: 'Where can I check the draw results?',
        a: 'Live results are updated on our official Winners Board page immediately following the draw countdown conclusion. All participants also receive notifications via SMS/WhatsApp.',
      },
    ],
    prizes: [
      {
        q: 'How are cash prizes disbursed?',
        a: 'Monetary prizes are transferred directly to the verified bank account or UPI ID of the registered winner via IMPS/NEFT after completion of standard KYC verification.',
      },
      {
        // ORIGINAL CODE: q: 'Is Tax Deducted at Source (TDS) on lottery winnings?',
        q: 'Is Tax Deducted at Source (TDS) on contest & draw winnings?',
        a: 'Yes. As per Section 194B of the Indian Income Tax Act, 1961, any winnings exceeding ₹10,000 are subject to 30% TDS deduction. A formal Form 16A TDS certificate will be furnished to the winner for tax filing.',
      },
    ],
  };

  return (
    <div className="min-h-screen pt-20 pb-0 text-gray-300 relative flex flex-col justify-between">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        
        {/* ─── COMPACT PAGE HERO ─── */}
        <div className="pt-6 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
          >
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/25 px-3.5 py-1 rounded-full mb-3">
                <FiHelpCircle className="text-[#D4AF37] text-xs" />
                <span className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.22em] font-mono">Knowledge Base</span>
                <span className="text-[9px] text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-1.5 py-0.5 rounded-full font-semibold">Self-Service</span>
              </div>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-none text-white">
                Help & <span className="gradient-text">FAQs</span>
              </h1>
              <p className="text-gray-400 text-sm mt-2 max-w-lg leading-relaxed">
                Clear answers regarding payments, draw mechanisms, verification, and refunds.
              </p>
            </div>

            {/* Right: metrics */}
            <div className="flex gap-5 sm:gap-7 flex-shrink-0">
              {[
                { label: 'Topics', value: '4' },
                { label: 'Support', value: '24/7' },
                { label: 'Disputes', value: 'Zero' },
              ].map(({ label, value }) => (
                <div key={label} className="text-center">
                  <div className="text-lg sm:text-xl font-black font-mono text-[#D4AF37] leading-none">{value}</div>
                  <div className="text-gray-500 text-[9px] uppercase tracking-widest font-semibold mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-8">
          {categories.map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setOpenIndex(0);
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  active
                    ? 'bg-[#D4AF37] text-black shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                    : 'bg-white/[0.03] text-gray-400 hover:text-white border border-white/[0.08]'
                }`}
              >
                <Icon size={15} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* FAQs 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start mb-20">
          {faqs[activeTab].map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.q}
                className="bg-[#0e0e1a]/80 border border-white/10 rounded-2xl overflow-hidden transition-colors hover:border-[#D4AF37]/30"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-3 cursor-pointer"
                >
                  <span className="font-bold text-white text-sm sm:text-base leading-snug">{faq.q}</span>
                  <FiChevronDown
                    className={`text-[#D4AF37] transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    size={17}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-400 border-t border-white/5 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>

      {/* ─── FULL SCREEN CTA SECTION (NOT A CARD) ─── */}
      <section className="w-full bg-gradient-to-r from-[#0d0d18] via-[#121226] to-[#0d0d18] border-t border-white/[0.08] py-14 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10 text-center md:text-left">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-[#D4AF37] text-xs font-mono font-bold uppercase tracking-widest">
              <span>●</span> Still Have Questions?
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">We're here to assist you 24/7</h3>
            <p className="text-sm text-gray-400 max-w-xl">
              Connect directly with our Bangalore support desk for prompt ticket queries and payment verification.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center md:justify-end flex-shrink-0">
            <Link
              to="/contact"
              className="px-6 py-3.5 rounded-xl bg-[#D4AF37] text-black font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity shadow-[0_0_25px_rgba(212,175,55,0.25)]"
            >
              Contact Support Desk
            </Link>
            <Link
              to="/refund-policy"
              className="px-6 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.1] text-white font-semibold text-xs uppercase tracking-wider hover:bg-white/10 transition-colors"
            >
              Refund Policy
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
