import React from 'react';
import { motion } from 'framer-motion';
import { FiRefreshCw, FiClock, FiCheckCircle, FiAlertTriangle, FiHelpCircle, FiMail, FiPhone, FiMapPin, FiCreditCard } from 'react-icons/fi';

export default function RefundPolicy() {
  const lastUpdated = "October 26, 2026";

  const timelineSteps = [
    {
      step: "01",
      title: "Request Submission",
      desc: "Report a failed transaction or double debit to support@aditya365.com within 48 hours with your Payment ID/RRN.",
    },
    {
      step: "02",
      title: "Gateway Verification",
      desc: "Our billing team reconciles the transaction with Razorpay logs within 24 business hours.",
    },
    {
      step: "03",
      title: "Refund Initiation",
      desc: "Upon validation, the refund is initiated directly via Razorpay back to your original source instrument.",
    },
    {
      step: "04",
      title: "Bank Credit (5-7 Days)",
      desc: "The credited amount reflects in your Bank Account, UPI ID, or Card balance within 5 to 7 working days.",
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-20 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header Hero */}
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-semibold uppercase tracking-widest mb-4">
              <FiRefreshCw size={14} /> Fair & Transparent Resolution
            </div>
            <h1 className="font-display text-4xl sm:text-6xl font-black text-white mb-4 tracking-tight">
              Cancellation & <span className="gradient-text">Refund Policy</span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
              We strive to provide an uncompromised experience. Here is our complete, transparent policy regarding cancellations, double debits, and refund timelines.
            </p>
            <p className="text-xs text-yellow-500/80 mt-3 font-mono">
              Last Updated & Effective Date: {lastUpdated}
            </p>
          </motion.div>
        </div>

        {/* Highlight Stats Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#121222] border border-white/10 rounded-2xl p-6 text-center hover:border-yellow-500/40 transition-colors">
            <FiClock className="mx-auto text-yellow-400 mb-3" size={28} />
            <h3 className="text-white font-bold text-lg">5 to 7 Working Days</h3>
            <p className="text-xs text-gray-400 mt-1">Standard banking refund credit window</p>
          </div>
          <div className="bg-[#121222] border border-white/10 rounded-2xl p-6 text-center hover:border-yellow-500/40 transition-colors">
            <FiCreditCard className="mx-auto text-green-400 mb-3" size={28} />
            <h3 className="text-white font-bold text-lg">100% Original Source</h3>
            <p className="text-xs text-gray-400 mt-1">Direct payout to UPI / Card / Net Banking</p>
          </div>
          <div className="bg-[#121222] border border-white/10 rounded-2xl p-6 text-center hover:border-yellow-500/40 transition-colors">
            <FiRefreshCw className="mx-auto text-blue-400 mb-3" size={28} />
            <h3 className="text-white font-bold text-lg">Automated Reconcile</h3>
            <p className="text-xs text-gray-400 mt-1">Immediate reversal for failed bookings</p>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="bg-[#0e0e1a]/70 border border-white/5 rounded-3xl p-6 sm:p-10 backdrop-blur-md space-y-12">
          
          {/* Section 1: Overview */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
              <span className="text-yellow-400">01.</span> Scope & Purpose of this Policy
            </h2>
            <div className="space-y-3 text-sm leading-relaxed text-gray-300">
              <p>
                This Cancellation and Refund Policy applies to all ticket purchases, draw entries, and financial transactions carried out on <strong className="text-white">Aditya 365</strong> (<span className="text-yellow-400">aditya365.com</span>) through our authorized payment aggregators including <strong className="text-white">Razorpay</strong>.
              </p>
              <p>
                As an online promotional and lucky draw provider, we operate on high-precision cryptographic Random Number Generator (RNG) draws with fixed participant capacities and scheduled draw dates. Please read below to understand the circumstances under which cancellations or refunds are applicable.
              </p>
            </div>
          </section>

          {/* Section 2: Cancellation Policy */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
              <span className="text-yellow-400">02.</span> Cancellation Policy for Draw Entries
            </h2>
            <div className="space-y-3 text-sm leading-relaxed text-gray-300">
              <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-5">
                <div className="flex items-start gap-3">
                  <FiAlertTriangle className="text-red-400 flex-shrink-0 mt-0.5" size={20} />
                  <div className="text-xs sm:text-sm text-gray-300">
                    <strong className="text-red-300 block mb-1">Standard Non-Cancellable Policy:</strong>
                    Once a ticket entry is successfully purchased, processed, and assigned a confirmed unique digital ticket serial number, <span className="text-white font-medium">the purchase is final and cannot be cancelled or transferred by the participant</span>. This restriction is necessary to protect the integrity of the live ticket count, pool volume, and algorithmic draw schedule for all co-participants.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Eligible Refund Circumstances */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
              <span className="text-yellow-400">03.</span> Circumstances Where Refunds Are 100% Granted
            </h2>
            <div className="space-y-3 text-sm leading-relaxed text-gray-300">
              <p>We provide full, hassle-free refunds in any of the following technical or operational situations:</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                  <div className="text-white font-semibold text-sm flex items-center gap-2">
                    <FiCheckCircle className="text-green-400" /> 1. Failed / Dropped Transactions
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    If an amount was debited from your bank account, card, or UPI wallet, but our system did not generate a digital entry ticket due to a network glitch or server timeout, a 100% refund is initiated automatically or upon ticket review.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                  <div className="text-white font-semibold text-sm flex items-center gap-2">
                    <FiCheckCircle className="text-green-400" /> 2. Duplicate / Double Debits
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    If your account was billed more than once for a single ticket order due to gateway re-attempts, the extra debited amount will be reversed immediately back to your original source.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                  <div className="text-white font-semibold text-sm flex items-center gap-2">
                    <FiCheckCircle className="text-green-400" /> 3. Event / Draw Cancellation
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    If Aditya 365 cancels an entire draw series due to unforeseen technical disruption, regulatory compliance directives, or force majeure, all active ticket holders for that draw will receive a full 100% refund.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                  <div className="text-white font-semibold text-sm flex items-center gap-2">
                    <FiCheckCircle className="text-green-400" /> 4. Unauthorized Transactions
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    In verified cases of identity compromise or proven card misuse reported before the commencement of the specific draw, full cooperation and refunds are accorded in accordance with banking safety protocols.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Refund Processing & Timelines */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
              <span className="text-yellow-400">04.</span> Refund Processing Method & Banking Timelines
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-gray-300">
              <p>
                All eligible refunds are processed exclusively through our integrated payment gateway partner (<strong className="text-white">Razorpay</strong>) and credited back directly to the <strong className="text-yellow-300">original payment source</strong> used during checkout. We do not issue cash refunds or third-party transfers.
              </p>

              {/* Timeline Flow */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                {timelineSteps.map((item) => (
                  <div key={item.step} className="bg-white/5 border border-white/10 rounded-2xl p-5 relative">
                    <div className="text-2xl font-mono font-black text-yellow-400/40 mb-2">{item.step}</div>
                    <div className="text-sm font-bold text-white mb-1.5">{item.title}</div>
                    <div className="text-xs text-gray-400 leading-relaxed">{item.desc}</div>
                  </div>
                ))}
              </div>

              <div className="bg-[#121226] border border-white/10 rounded-2xl p-4 text-xs text-gray-300 space-y-2">
                <div className="font-semibold text-white">Specific Instrument Settlement Timelines:</div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                  <div>
                    <span className="text-yellow-400 font-medium">UPI / Instant Wallets:</span>
                    <p className="text-gray-400 text-[11px] mt-0.5">Typically 24 to 48 business hours.</p>
                  </div>
                  <div>
                    <span className="text-yellow-400 font-medium">Net Banking (IMPS/NEFT):</span>
                    <p className="text-gray-400 text-[11px] mt-0.5">2 to 5 business days depending on the beneficiary bank.</p>
                  </div>
                  <div>
                    <span className="text-yellow-400 font-medium">Credit / Debit Cards:</span>
                    <p className="text-gray-400 text-[11px] mt-0.5">5 to 7 business days depending on card issuer billing cycles.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Digital Delivery Policy */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
              <span className="text-yellow-400">05.</span> Digital Delivery & Service Fulfillment
            </h2>
            <div className="space-y-3 text-sm leading-relaxed text-gray-300">
              <p>
                Aditya 365 provides digital entertainment and contest tickets. As such:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-400">
                <li><strong className="text-white">Delivery Mode:</strong> 100% electronic delivery. No physical shipping is required for ticket bookings.</li>
                <li><strong className="text-white">Delivery Timeline:</strong> Instantaneous upon payment confirmation (under 60 seconds). A digital entry ticket, unique serial number, and draw countdown link are immediately dispatched via SMS and WhatsApp to your registered mobile number.</li>
                <li><strong className="text-white">Physical Merchandise Prizes:</strong> Tangible prizes won in lucky draws are dispatched through insured express courier services within 7 to 14 business days of successful KYC validation. Tracking numbers are shared promptly via SMS and email.</li>
              </ul>
            </div>
          </section>

          {/* Section 6: How to Request a Refund */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
              <span className="text-yellow-400">06.</span> How to Raise a Refund or Payment Issue
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-gray-300">
              <p>
                If you experience a transaction failure or double debit, please reach out to our dedicated billing desk with your payment details:
              </p>

              <div className="bg-[#121224] border border-white/10 rounded-2xl p-6 space-y-4">
                <div className="text-white font-bold text-sm">Required Information for Expedited Resolution:</div>
                <ul className="list-disc pl-5 space-y-1 text-xs text-gray-400">
                  <li>Your Full Name and Registered Phone Number.</li>
                  <li>Razorpay Payment ID (e.g., <code className="text-yellow-400">pay_xxxxxxxxxxxxxx</code>) or Bank UTR / Reference Number.</li>
                  <li>Date and Exact Time of Transaction.</li>
                  <li>Amount Debited (₹).</li>
                  <li>Screenshot or SMS of the bank transaction debit advice.</li>
                </ul>

                <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <FiMail className="text-yellow-400 flex-shrink-0" size={18} />
                    <div>
                      <div className="text-xs text-gray-400">Email Billing Support</div>
                      <a href="mailto:support@aditya365.com" className="text-white font-medium hover:text-yellow-400">
                        support@aditya365.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <FiPhone className="text-yellow-400 flex-shrink-0" size={18} />
                    <div>
                      <div className="text-xs text-gray-400">WhatsApp / Call Desk</div>
                      <a href="tel:+917799399889" className="text-white font-medium hover:text-yellow-400">
                        +91 77993 99889
                      </a>
                    </div>
                  </div>
                </div>

                <div className="text-xs text-gray-400 pt-2 border-t border-white/5 flex items-center gap-2">
                  <FiMapPin className="text-yellow-400 flex-shrink-0" size={14} />
                  <span>Aditya 365, Near Water Tank, 3rd Cross, Kumaraswamy Layout, Bangalore, Karnataka - 560078, India</span>
                </div>
              </div>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}
