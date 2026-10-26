import React from 'react';
import { motion } from 'framer-motion';
import { FiLock, FiShield, FiEye, FiDatabase, FiServer, FiCheckCircle, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export default function Privacy() {
  const lastUpdated = "October 26, 2026";

  const sections = [
    { id: "introduction", title: "1. Overview & Commitment" },
    { id: "collection", title: "2. Information We Collect" },
    { id: "how-we-use", title: "3. Purpose of Processing & Usage" },
    { id: "payment-security", title: "4. Payment Gateway & Financial Security" },
    { id: "cookies", title: "5. Cookies & Tracking Technologies" },
    { id: "sharing", title: "6. Sharing & Third-Party Disclosure" },
    { id: "storage-retention", title: "7. Data Storage, Retention & Security" },
    { id: "user-rights", title: "8. Your Privacy Rights & Controls" },
    { id: "minors", title: "9. Children & Age Restrictions (18+)" },
    { id: "updates", title: "10. Updates to this Privacy Policy" },
    { id: "grievance-contact", title: "11. Grievance Officer & Contact Details" },
  ];

  return (
    <div className="min-h-screen pt-28 pb-20 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header Hero */}
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-semibold uppercase tracking-widest mb-4">
              <FiLock size={14} /> Data Protection & Privacy
            </div>
            <h1 className="font-display text-4xl sm:text-6xl font-black text-white mb-4 tracking-tight">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
              Your trust is our paramount asset. Discover how Aditya 365 safeguards your personal data, transaction security, and digital privacy.
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
                <FiEye className="text-yellow-400" /> Policy Index
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
                <div className="text-xs text-gray-400">Privacy queries or data deletion:</div>
                <a
                  href="mailto:privacy@aditya365.com"
                  className="inline-flex items-center gap-2 text-xs text-yellow-400 hover:underline"
                >
                  <FiMail size={13} /> privacy@aditya365.com
                </a>
              </div>
            </div>
          </div>

          {/* Legal Clauses Body */}
          <div className="lg:col-span-3 space-y-12 bg-[#0e0e1a]/60 border border-white/5 rounded-3xl p-6 sm:p-10 backdrop-blur-md">

            {/* Trust Banner */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-4">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-3">
                <FiShield className="text-yellow-400 flex-shrink-0" size={24} />
                <div>
                  <div className="text-white font-bold text-xs">256-Bit SSL Encryption</div>
                  <div className="text-[11px] text-gray-400">Bank-grade data transit</div>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-3">
                <FiLock className="text-green-400 flex-shrink-0" size={24} />
                <div>
                  <div className="text-white font-bold text-xs">Zero Card Storage</div>
                  <div className="text-[11px] text-gray-400">PCI-DSS Gateway compliant</div>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-3">
                <FiCheckCircle className="text-blue-400 flex-shrink-0" size={24} />
                <div>
                  <div className="text-white font-bold text-xs">DPDP & IT Act Aligned</div>
                  <div className="text-[11px] text-gray-400">Strict regulatory privacy</div>
                </div>
              </div>
            </div>

            {/* Section 1 */}
            <section id="introduction" className="scroll-mt-32 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
                <span className="text-yellow-400">01.</span> Overview & Commitment
              </h2>
              <div className="space-y-3 text-sm leading-relaxed text-gray-300">
                <p>
                  At <strong className="text-white">Aditya 365</strong> ("we", "us", or "our"), respecting the privacy and confidentiality of our participants is fundamental to our service. This Privacy Policy details our practices concerning the collection, storage, handling, disclosure, and protection of your personal and sensitive data when visiting our website (<span className="text-yellow-400">aditya365.com</span>) or transacting on our platform.
                </p>
                <p>
                  This policy is framed in compliance with the <strong className="text-white">Information Technology Act, 2000</strong>, the <strong className="text-white">Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011</strong>, and the <strong className="text-white">Digital Personal Data Protection (DPDP) Act</strong>.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="collection" className="scroll-mt-32 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
                <span className="text-yellow-400">02.</span> Information We Collect
              </h2>
              <div className="space-y-3 text-sm leading-relaxed text-gray-300">
                <p>We collect information you explicitly provide to us as well as data gathered automatically:</p>
                <div className="space-y-3 pt-1">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <strong className="text-white text-sm block mb-1">A. Personal Identification Information:</strong>
                    <p className="text-xs text-gray-400">
                      Full legal name, mobile phone number, WhatsApp contact number, postal delivery address, state of residence, and email address submitted during booking or profile creation.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <strong className="text-white text-sm block mb-1">B. KYC & Statutory Verification Details (For Winners):</strong>
                    <p className="text-xs text-gray-400">
                      Permanent Account Number (PAN Card), government-approved photo ID (Aadhaar/Voter ID), and beneficiary bank account details (Account Number, Bank Name, IFSC code) required solely for TDS tax filing under Section 194B and direct prize payout disbursement.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <strong className="text-white text-sm block mb-1">C. Technical & Diagnostic Telemetry:</strong>
                    <p className="text-xs text-gray-400">
                      IP address, device identifiers, operating system version, browser type, referral URLs, access timestamps, and interactions with draw counters or pages.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section id="how-we-use" className="scroll-mt-32 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
                <span className="text-yellow-400">03.</span> Purpose of Processing & Usage
              </h2>
              <div className="space-y-2 text-sm leading-relaxed text-gray-300">
                <p>We process your personal data for the following lawful business purposes:</p>
                <ul className="list-disc pl-5 space-y-1.5 text-gray-400">
                  {/* ORIGINAL CODE: <li>Generating and validating your unique digital lottery entry tickets.</li> */}
                  <li>Generating and validating your unique digital contest and lucky draw entry tickets.</li>
                  <li>Processing payments securely through authorized payment gateway aggregators.</li>
                  <li>Sending automated order confirmations, ticket receipt PDFs, and live draw alerts via SMS, WhatsApp, and email.</li>
                  <li>Verifying age, residency, and identity to comply with anti-fraud and anti-money laundering (AML) mandates.</li>
                  <li>Remitting winnings, issuing statutory TDS certificates (Form 16A), and organizing insured delivery of physical rewards.</li>
                  <li>Responding to support tickets, inquiries, or grievance escalations.</li>
                  <li>Monitoring system security, detecting malicious bots, and preventing unlawful chargebacks.</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section id="payment-security" className="scroll-mt-32 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
                <span className="text-yellow-400">04.</span> Payment Gateway & Financial Security
              </h2>
              <div className="space-y-3 text-sm leading-relaxed text-gray-300">
                <p>
                  We treat your financial security with the highest level of vigilance. When you complete an order on Aditya 365, all financial transactions are processed through authorized, RBI-registered payment gateway partners, primarily <strong className="text-white">Razorpay Software Private Limited</strong>.
                </p>
                <div className="bg-[#101026] border border-yellow-500/30 rounded-2xl p-5 space-y-2">
                  <div className="text-yellow-300 font-bold text-sm flex items-center gap-2">
                    <FiLock /> PCI-DSS Level 1 Compliance & Zero Data Storage:
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Aditya 365 <strong className="text-white">NEVER collects, reads, or stores</strong> your credit/debit card numbers, CVV codes, expiry dates, net banking passwords, or UPI MPINs on our servers. All sensitive cardholder information is encrypted directly in transit to Razorpay using industry-standard TLS 1.3 cryptographic protocols under PCI-DSS Level 1 certification.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section id="cookies" className="scroll-mt-32 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
                <span className="text-yellow-400">05.</span> Cookies & Tracking Technologies
              </h2>
              <div className="space-y-3 text-sm leading-relaxed text-gray-300">
                <p>
                  Our website employs session cookies and lightweight local storage tokens to retain user preferences (such as plan selection, shopping cart status, and theme preferences) and to protect against Cross-Site Request Forgery (CSRF).
                </p>
                <p>
                  You can configure your browser to block or alert you about cookies; however, disabling cookies may impair essential transaction workflows and ticket checkout functionality.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section id="sharing" className="scroll-mt-32 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
                <span className="text-yellow-400">06.</span> Sharing & Third-Party Disclosure
              </h2>
              <div className="space-y-3 text-sm leading-relaxed text-gray-300">
                <p>
                  <strong className="text-white">We do NOT sell, rent, trade, or monetize your personal information to third-party advertisers or telemarketers under any circumstances.</strong>
                </p>
                <p>We disclose information only to the following trusted third parties strictly on a need-to-know basis:</p>
                <ul className="list-disc pl-5 space-y-1.5 text-gray-400">
                  <li><strong className="text-white">Payment Aggregators (Razorpay):</strong> Solely to authenticate and settle monetary transactions.</li>
                  <li><strong className="text-white">Transactional SMS & Communication Providers:</strong> To deliver ticket receipts, OTP verification, and draw outcome notices.</li>
                  <li><strong className="text-white">Logistics & Courier Partners:</strong> Name, phone, and delivery address to ship tangible winner rewards.</li>
                  <li><strong className="text-white">Law Enforcement & Statutory Bodies:</strong> Only when strictly mandated by a valid judicial warrant, court order, or formal investigation under applicable Indian law.</li>
                </ul>
              </div>
            </section>

            {/* Section 7 */}
            <section id="storage-retention" className="scroll-mt-32 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
                <span className="text-yellow-400">07.</span> Data Storage, Retention & Security
              </h2>
              <div className="space-y-3 text-sm leading-relaxed text-gray-300">
                <p>
                  Your data is stored on secure, firewall-protected cloud servers situated within Indian data center perimeters in compliance with RBI data localization mandates.
                </p>
                <p>
                  We retain transactional records and tax documents for a minimum period of 7 years as required by Indian taxation and company law guidelines. Technical logs are archived or automatically purged after operational utility expires.
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section id="user-rights" className="scroll-mt-32 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
                <span className="text-yellow-400">08.</span> Your Privacy Rights & Controls
              </h2>
              <div className="space-y-2 text-sm leading-relaxed text-gray-300">
                <p>Under the DPDP Act and applicable regulations, you enjoy the right to:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-400">
                  <li>Request confirmation and review of the personal data held about you.</li>
                  <li>Request correction of obsolete, inaccurate, or incomplete contact details.</li>
                  <li>Request erasure of your non-statutory personal data, subject to legal retention obligations.</li>
                  <li>Opt-out of non-essential promotional communications at any time.</li>
                </ul>
                <p className="pt-2">
                  To exercise any of these rights, email our data desk at <span className="text-yellow-400">privacy@aditya365.com</span> with subject line <span className="text-white font-mono">"Data Subject Request"</span>.
                </p>
              </div>
            </section>

            {/* Section 9 */}
            <section id="minors" className="scroll-mt-32 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
                <span className="text-yellow-400">09.</span> Children & Age Restrictions (18+)
              </h2>
              <div className="space-y-3 text-sm leading-relaxed text-gray-300">
                <p>
                  Aditya 365 is strictly restricted to individuals aged 18 years and older. We do not knowingly solicit or collect data from minors. If we discover that a person under 18 has submitted personal data or purchased tickets, we will immediately delete such data, cancel the entries, and terminate the account.
                </p>
              </div>
            </section>

            {/* Section 10 */}
            <section id="updates" className="scroll-mt-32 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
                <span className="text-yellow-400">10.</span> Updates to this Privacy Policy
              </h2>
              <div className="space-y-3 text-sm leading-relaxed text-gray-300">
                <p>
                  We may periodically revise this Privacy Policy to reflect enhancements in technology, statutory amendments, or service offerings. Any material amendments will be announced with an updated "Last Updated" date at the top of this page. Your continued use of the platform constitutes acceptance of the modified policy.
                </p>
              </div>
            </section>

            {/* Section 11 */}
            <section id="grievance-contact" className="scroll-mt-32 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
                <span className="text-yellow-400">11.</span> Grievance Officer & Contact Details
              </h2>
              <div className="space-y-4 text-sm leading-relaxed text-gray-300">
                <p>
                  If you have concerns, feedback, or grievances regarding the processing of your data, you may reach out to our designated Data Protection & Grievance Officer:
                </p>

                <div className="bg-[#121224] border border-white/10 rounded-2xl p-6 space-y-3">
                  <div className="text-base font-bold text-white">Data Privacy & Grievance Cell — Aditya 365</div>
                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <FiMapPin className="text-yellow-400 flex-shrink-0" size={16} />
                    <span>Aditya 365, Near Water Tank, 3rd Cross, Kumaraswamy Layout, Bangalore, Karnataka - 560078, India</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <FiMail className="text-yellow-400 flex-shrink-0" size={16} />
                    <span>privacy@aditya365.com / grievance@aditya365.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <FiPhone className="text-yellow-400 flex-shrink-0" size={16} />
                    <span>+91 99599 95646 / +91 98765 43210</span>
                  </div>
                  <div className="text-xs text-gray-400 pt-2 border-t border-white/5">
                    We acknowledge all formal privacy grievances within 24 to 48 hours and resolve queries within 15 working days.
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
