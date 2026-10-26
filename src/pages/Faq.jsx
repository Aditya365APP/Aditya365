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
        q: 'Can I cancel my lottery ticket once purchased?',
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
        q: 'Is Tax Deducted at Source (TDS) on lottery winnings?',
        a: 'Yes. As per Section 194B of the Indian Income Tax Act, 1961, any winnings exceeding ₹10,000 are subject to 30% TDS deduction. A formal Form 16A TDS certificate will be furnished to the winner for tax filing.',
      },
    ],
  };

  return (
    <div className="min-h-screen pt-28 pb-20 text-gray-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-semibold uppercase tracking-widest mb-4">
              <FiHelpCircle size={14} /> Help Center & Knowledge Base
            </div>
            <h1 className="font-display text-4xl sm:text-6xl font-black text-white mb-4 tracking-tight">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
              Find transparent answers regarding payments, Razorpay security, draw procedures, and refund rules.
            </p>
          </motion.div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
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
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  active
                    ? 'bg-yellow-400 text-black shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                    : 'bg-white/5 text-gray-400 hover:text-white border border-white/10'
                }`}
              >
                <Icon size={16} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-4 mb-16">
          {faqs[activeTab].map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.q}
                className="bg-[#0e0e1a]/80 border border-white/10 rounded-2xl overflow-hidden transition-colors hover:border-white/20"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-bold text-white text-sm sm:text-base">{faq.q}</span>
                  <FiChevronDown
                    className={`text-yellow-400 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    size={18}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm text-gray-400 border-t border-white/5 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Need more help */}
        <div className="bg-[#121224] border border-white/10 rounded-3xl p-8 text-center space-y-4">
          <h3 className="text-xl font-bold text-white">Still have questions?</h3>
          <p className="text-xs sm:text-sm text-gray-400 max-w-md mx-auto">
            Our customer grievance and support desk is available to resolve any query within 24 hours.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-2">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl bg-yellow-400 text-black font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              Contact Support
            </Link>
            <Link
              to="/refund-policy"
              className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-xs uppercase tracking-wider hover:bg-white/10 transition-colors"
            >
              View Refund Policy
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
