import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiShield, FiFileText, FiAlertCircle, FiCheckCircle, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export default function Terms() {
  const lastUpdated = "October 26, 2026";

  const sections = [
    { id: "acceptance", title: "1. Acceptance of Terms & Eligibility" },
    { id: "services", title: "2. Description of Services & Platform Use" },
    { id: "account", title: "3. User Registration & KYC Obligations" },
    { id: "participation", title: "4. Ticket Booking & Draw Participation" },
    { id: "draws-rng", title: "5. Random Number Generation (RNG) & Draws" },
    { id: "prizes-tax", title: "6. Winners, Prize Distribution & TDS Compliance" },
    { id: "payments", title: "7. Payment Processing & Authorized Gateways" },
    { id: "prohibited", title: "8. Prohibited Conduct & Account Suspension" },
    { id: "intellectual-property", title: "9. Intellectual Property Rights" },
    { id: "disclaimers", title: "10. Disclaimers & Limitation of Liability" },
    { id: "indemnity", title: "11. Indemnification" },
    { id: "governing-law", title: "12. Governing Law & Dispute Resolution" },
    { id: "grievance", title: "13. Grievance Officer & Contact Information" },
  ];

  return (
    <div className="min-h-screen pt-28 pb-20 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header Hero */}
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-semibold uppercase tracking-widest mb-4">
              <FiShield size={14} /> Legal Documentation
            </div>
            <h1 className="font-display text-4xl sm:text-6xl font-black text-white mb-4 tracking-tight">
              Terms & <span className="gradient-text">Conditions</span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
              Please read these Terms and Conditions carefully before accessing or using the Aditya 365 platform.
            </p>
            <p className="text-xs text-yellow-500/80 mt-3 font-mono">
              Last Updated & Effective Date: {lastUpdated}
            </p>
          </motion.div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          
          {/* Quick Navigation Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-[#12121f]/90 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
              <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <FiFileText className="text-yellow-400" /> Table of Contents
              </h3>
              <nav className="space-y-2">
                {sections.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    className="block text-xs text-gray-400 hover:text-yellow-400 transition-colors py-1 border-l-2 border-transparent hover:border-yellow-400 pl-2.5 truncate"
                  >
                    {sec.title}
                  </a>
                ))}
              </nav>

              <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
                <div className="text-xs text-gray-400">Need legal assistance?</div>
                <a
                  href="mailto:support@aditya365.com"
                  className="inline-flex items-center gap-2 text-xs text-yellow-400 hover:underline"
                >
                  <FiMail size={13} /> support@aditya365.com
                </a>
              </div>
            </div>
          </div>

          {/* Legal Clauses Body */}
          <div className="lg:col-span-3 space-y-12 bg-[#0e0e1a]/60 border border-white/5 rounded-3xl p-6 sm:p-10 backdrop-blur-md">

            {/* Introductory Notice */}
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-5 flex items-start gap-4">
              <FiAlertCircle className="text-yellow-400 flex-shrink-0 mt-1" size={20} />
              <div className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                <span className="font-semibold text-yellow-300">Important Legal Notice: </span>
                This document constitutes an electronic record published in terms of the Information Technology Act, 2000, the Consumer Protection (E-Commerce) Rules, 2020, and the applicable statutory regulations of India. By accessing, browsing, registering, or transacting on Aditya 365, you agree to be bound by these Terms and our integrated Policies.
              </div>
            </div>

            {/* Section 1 */}
            <section id="acceptance" className="scroll-mt-32 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
                <span className="text-yellow-400">01.</span> Acceptance of Terms & Eligibility
              </h2>
              <div className="space-y-3 text-sm leading-relaxed text-gray-300">
                <p>
                  These Terms of Service ("Terms") govern your relationship with <strong className="text-white">Aditya 365</strong> ("Platform", "we", "us", or "our") operating at <span className="text-yellow-400">aditya365.com</span>.
                </p>
                <p>
                  To register, access, or purchase draw entries on Aditya 365, you represent, warrant, and certify that:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-gray-400">
                  <li>You are an individual at least <strong className="text-white">18 years of age</strong> (or the age of legal majority in your state of residence).</li>
                  <li>You are a citizen or lawful resident of the Republic of India with a valid permanent address and tax identification (PAN).</li>
                  <li>You possess the legal competence and capacity to enter into a legally binding contract under the Indian Contract Act, 1872.</li>
                  <li>You are accessing this platform from a jurisdiction where online participation in certified promotional and lucky draws is permissible under state laws.</li>
                  <li>You are not barred or restricted under any applicable statute, sanction, or court order from transacting online.</li>
                </ul>
              </div>
            </section>

            {/* Section 2 */}
            <section id="services" className="scroll-mt-32 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
                <span className="text-yellow-400">02.</span> Description of Services & Platform Use
              </h2>
              <div className="space-y-3 text-sm leading-relaxed text-gray-300">
                {/* ORIGINAL CODE:
                <p>
                  Aditya 365 operates an online promotional draws, rewards, and certified lucky draw portal. We offer access to structured lottery plans (such as Diamond, Alfa, and Beta series) where participants can purchase digital entry tickets, track live event countdowns, verify participant counts, and win monetary prizes or certified luxury rewards.
                </p>
                */}
                <p>
                  Aditya 365 operates an online promotional draws, rewards, and certified lucky draw portal. We offer access to structured reward plans (such as Diamond, Alfa, and Beta series) where participants can purchase digital entry tickets, track live event countdowns, verify participant counts, and win monetary prizes or certified luxury rewards.
                </p>
                <p>
                  We grant you a non-exclusive, non-transferable, revocable, and limited privilege to browse and transact on our website solely for personal, non-commercial use.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section id="account" className="scroll-mt-32 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
                <span className="text-yellow-400">03.</span> User Registration & KYC Obligations
              </h2>
              <div className="space-y-3 text-sm leading-relaxed text-gray-300">
                <p>
                  When registering or booking entries, you agree to supply authentic, current, and complete personal information including your full legal name, phone number, physical residential address, and email address.
                </p>
                <p>
                  <strong className="text-white">KYC Verification:</strong> In compliance with the Prevention of Money Laundering Act (PMLA) and RBI directives, we reserve the right to request government-issued identity proofs (Aadhaar, PAN Card, Passport) and bank verification before processing high-value tickets or prize disbursements.
                </p>
                <p>
                  You are solely responsible for maintaining the confidentiality of your account credentials and for all activities occurring under your account. Any suspected unauthorized access must be reported to our support desk immediately.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section id="participation" className="scroll-mt-32 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
                <span className="text-yellow-400">04.</span> Ticket Booking & Draw Participation
              </h2>
              <div className="space-y-3 text-sm leading-relaxed text-gray-300">
                <p>
                  Draw entries and ticket slots are allocated strictly on a confirmed payment basis. Every ticket purchase is digitally assigned a unique serial tracking number that is linked to your verified phone number and customer profile.
                </p>
                <p>
                  Once a ticket has been purchased and the order confirmed through our integrated payment gateways, <strong className="text-yellow-300">the entry cannot be cancelled, modified, transferred, or exchanged</strong>, except under the circumstances clearly specified in our <Link to="/refund-policy" className="text-yellow-400 underline">Cancellation & Refund Policy</Link>.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section id="draws-rng" className="scroll-mt-32 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
                <span className="text-yellow-400">05.</span> Random Number Generation (RNG) & Draws
              </h2>
              <div className="space-y-3 text-sm leading-relaxed text-gray-300">
                <p>
                  All winner selections on Aditya 365 are conducted through cryptographically secure pseudo-random number generator (PRNG) algorithms to guarantee complete fairness, tamper-proof transparency, and unbiased outcomes.
                </p>
                <p>
                  Neither Aditya 365 administrators, staff members, nor third-party affiliates have the capability to manipulate, predetermine, or alter draw results. Live and archival draw results are published publicly on our <Link to="/winners" className="text-yellow-400 underline">Winners Board</Link>.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section id="prizes-tax" className="scroll-mt-32 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
                <span className="text-yellow-400">06.</span> Winners, Prize Distribution & TDS Compliance
              </h2>
              <div className="space-y-3 text-sm leading-relaxed text-gray-300">
                <p>
                  Winners will be notified via their registered phone number, WhatsApp, and registered email address within 24 hours of the draw conclusion.
                </p>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                  <div className="text-white font-semibold flex items-center gap-2">
                    <FiCheckCircle className="text-green-400" /> Tax Deducted at Source (TDS) under Section 194B:
                  </div>
                  {/* ORIGINAL CODE:
                  <p className="text-xs text-gray-400">
                    As mandated by the Income Tax Act, 1961, any winnings from online lottery or lucky draws exceeding ₹10,000 are subject to mandatory deduction of TDS at the prevailing statutory rate (currently 30% plus applicable surcharge and cess). A TDS certificate (Form 16A) will be issued to the winner following successful tax remittance.
                  </p>
                  */}
                  <p className="text-xs text-gray-400">
                    As mandated by the Income Tax Act, 1961, any winnings from promotional contests or lucky draws exceeding ₹10,000 are subject to mandatory deduction of TDS at the prevailing statutory rate (currently 30% plus applicable surcharge and cess). A TDS certificate (Form 16A) will be issued to the winner following successful tax remittance.
                  </p>
                </div>
                <p>
                  Monetary prizes are disbursed strictly via direct bank transfer (NEFT/RTGS/IMPS) or UPI to a verified bank account held in the legal name of the registered winner. Physical merchandise prizes are dispatched via tracked courier within 7 to 14 business days.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section id="payments" className="scroll-mt-32 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
                <span className="text-yellow-400">07.</span> Payment Processing & Authorized Gateways
              </h2>
              <div className="space-y-3 text-sm leading-relaxed text-gray-300">
                <p>
                  All online payments on Aditya 365 are routed through licensed, RBI-compliant payment aggregators and gateways including <strong className="text-white">Razorpay</strong>. We support multiple payment instruments including UPI (Google Pay, PhonePe, Paytm, BHIM), Net Banking, Credit Cards, and Debit Cards.
                </p>
                <p>
                  We do not collect, process, or store sensitive card credentials (such as full 16-digit card numbers, CVVs, or card PINs) on our local servers. All payment transactions occur over encrypted, PCI-DSS Level 1 compliant secure socket layer (SSL) channels operated by our payment partners.
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section id="prohibited" className="scroll-mt-32 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
                <span className="text-yellow-400">08.</span> Prohibited Conduct & Account Suspension
              </h2>
              <div className="space-y-2 text-sm leading-relaxed text-gray-300">
                <p>You strictly agree not to:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-400">
                  <li>Use stolen credit/debit cards, compromised UPI accounts, or engage in fraudulent financial transactions.</li>
                  <li>Deploy automated scripts, bots, spiders, crawlers, or exploits against the platform.</li>
                  <li>Create multiple fraudulent identities or dummy profiles to manipulate referral campaigns or draws.</li>
                  <li>Interfere with the security protocols, network servers, or database integrity of Aditya 365.</li>
                  <li>Launder funds or utilize the platform for any unlawful economic endeavor.</li>
                </ul>
                <p className="pt-2">
                  Violation of these guidelines will result in instantaneous termination of the user account, forfeiture of disputed entries or prizes, and formal reporting to law enforcement authorities.
                </p>
              </div>
            </section>

            {/* Section 9 */}
            <section id="intellectual-property" className="scroll-mt-32 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
                <span className="text-yellow-400">09.</span> Intellectual Property Rights
              </h2>
              <div className="space-y-3 text-sm leading-relaxed text-gray-300">
                <p>
                  All brand elements, logos, artwork, software scripts, visual layouts, text copy, graphic assets, and audio-visual presentations appearing on Aditya 365 are the proprietary intellectual property of Aditya 365. You may not reproduce, copy, modify, distribute, or reverse engineer any element without prior written authorization.
                </p>
              </div>
            </section>

            {/* Section 10 */}
            <section id="disclaimers" className="scroll-mt-32 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
                <span className="text-yellow-400">10.</span> Disclaimers & Limitation of Liability
              </h2>
              <div className="space-y-3 text-sm leading-relaxed text-gray-300">
                <p>
                  The services and materials provided on Aditya 365 are made available on an "as is" and "as available" basis without any express or implied representations or warranties of any kind.
                </p>
                <p>
                  To the maximum extent permitted by applicable Indian laws, Aditya 365, its directors, employees, and agents shall not be held liable for any indirect, incidental, consequential, or punitive damages, including loss of profits, data corruption, network failure, or bank gateway downtime. In all cases, our maximum aggregate liability shall be limited to the exact fee paid by you for the specific disputed ticket entry.
                </p>
              </div>
            </section>

            {/* Section 11 */}
            <section id="indemnity" className="scroll-mt-32 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
                <span className="text-yellow-400">11.</span> Indemnification
              </h2>
              <div className="space-y-3 text-sm leading-relaxed text-gray-300">
                <p>
                  You agree to defend, indemnify, and hold harmless Aditya 365, its affiliates, directors, officers, and partners against any claims, losses, liabilities, costs, and expenses (including reasonable attorney fees) arising from your breach of these Terms, unlawful conduct, or violation of third-party rights.
                </p>
              </div>
            </section>

            {/* Section 12 */}
            <section id="governing-law" className="scroll-mt-32 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
                <span className="text-yellow-400">12.</span> Governing Law & Dispute Resolution
              </h2>
              <div className="space-y-3 text-sm leading-relaxed text-gray-300">
                <p>
                  These Terms shall be interpreted, construed, and enforced in accordance with the substantive laws of the Republic of India.
                </p>
                <p>
                  Any controversy, dispute, or claim arising out of or related to these Terms, including validity or termination, shall be submitted to the exclusive jurisdiction of the competent courts located in <strong className="text-white">Bangalore, Karnataka, India</strong>.
                </p>
              </div>
            </section>

            {/* Section 13 */}
            <section id="grievance" className="scroll-mt-32 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
                <span className="text-yellow-400">13.</span> Grievance Officer & Contact Information
              </h2>
              <div className="space-y-4 text-sm leading-relaxed text-gray-300">
                <p>
                  In accordance with the Information Technology Act, 2000 and rules made thereunder, the contact details of the designated Grievance Redressal Officer are provided below:
                </p>

                <div className="bg-[#121224] border border-white/10 rounded-2xl p-6 space-y-3">
                  <div className="text-base font-bold text-white">Aditya 365 Grievance Cell</div>
                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <FiMapPin className="text-yellow-400 flex-shrink-0" size={16} />
                    <span>Aditya 365, Near Water Tank, 3rd Cross, Kumaraswamy Layout, Bangalore, Karnataka - 560078, India</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <FiMail className="text-yellow-400 flex-shrink-0" size={16} />
                    <span>grievance@aditya365.com / support@aditya365.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <FiPhone className="text-yellow-400 flex-shrink-0" size={16} />
                    <span>+91 99599 95646 / +91 98765 43210</span>
                  </div>
                  <div className="text-xs text-gray-400 pt-2 border-t border-white/5">
                    Operating Hours: Monday – Saturday, 10:00 AM to 7:00 PM IST (Excluding National Holidays). Grievances are acknowledged within 24 hours and addressed within 15 business days.
                  </div>
                </div>
              </div>
            </section>

          </div>

        </div>

      </div>
    </div>
  );
}
