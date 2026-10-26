import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend, FiMessageSquare, FiCheckCircle } from 'react-icons/fi';
import toast from 'react-hot-toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      toast.error('Please fill all mandatory fields');
      return;
    }

    setIsSubmitting(true);
    // WhatsApp redirect fallback for instant reachability
    const WHATSAPP_NUMBER = '917799399889';
    const msg = `*CONTACT INQUIRY: ADITYA 365*
--------------------------
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email || 'N/A'}
*Subject:* ${formData.subject}
*Message:* ${formData.message}`;

    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Thank you! Redirecting to our support desk...');
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
      setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
    }, 600);
  };

  return (
    <div className="min-h-screen pt-28 pb-20 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-semibold uppercase tracking-widest mb-4">
              <FiMessageSquare size={14} /> 24/7 Dedicated Support
            </div>
            <h1 className="font-display text-4xl sm:text-6xl font-black text-white mb-4 tracking-tight">
              Contact <span className="gradient-text">Aditya 365</span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
              Have questions regarding ticket bookings, draw results, or payment verification? Our dedicated support team is here to assist you around the clock.
            </p>
          </motion.div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Company Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0e0e1a]/80 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md space-y-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Registered Corporate Office</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Official registered business location for administrative communications, legal notices, and verification.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-400 flex-shrink-0">
                    <FiMapPin size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase font-semibold tracking-wider">Office Address</div>
                    <div className="text-white text-sm font-medium mt-0.5 leading-relaxed">
                      Aditya 365, Near Water Tank, 3rd Cross, Kumaraswamy Layout, Bangalore, Karnataka - 560078, India
                    </div>
                    <a
                      href="https://maps.google.com/?q=Kumaraswamy+Layout+near+water+tank+3rd+cross+Bangalore+560078"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-yellow-400 hover:text-yellow-300 font-semibold mt-1.5 hover:underline"
                    >
                      <FiMapPin size={12} /> View on Google Maps →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-400 flex-shrink-0">
                    <FiMail size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase font-semibold tracking-wider">Electronic Inquiries</div>
                    <div className="text-white text-sm font-medium mt-0.5">
                      <a href="mailto:support@aditya365.com" className="hover:text-yellow-400 transition-colors block">
                        support@aditya365.com
                      </a>
                      <a href="mailto:billing@aditya365.com" className="hover:text-yellow-400 transition-colors text-xs text-gray-400 block mt-0.5">
                        billing@aditya365.com (Refunds & Gateways)
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-400 flex-shrink-0">
                    <FiPhone size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase font-semibold tracking-wider">Direct Customer Helpline</div>
                    <div className="text-white text-sm font-medium mt-0.5">
                      <a href="tel:+919959995646" className="hover:text-yellow-400 transition-colors block">
                        +91 99599 95646
                      </a>
                      <a href="tel:+919876543210" className="hover:text-yellow-400 transition-colors text-xs text-gray-400 block mt-0.5">
                        +91 98765 43210 (Toll-Free Escalations)
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-400 flex-shrink-0">
                    <FiClock size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase font-semibold tracking-wider">Operating Working Hours</div>
                    <div className="text-white text-sm font-medium mt-0.5 leading-relaxed">
                      Monday to Saturday: 10:00 AM – 7:00 PM IST
                      <span className="block text-xs text-green-400 mt-0.5">Live Draw Counters: 24/7 Monitored</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Box */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-2">
                <div className="text-xs text-white font-semibold flex items-center gap-2">
                  <FiCheckCircle className="text-yellow-400" /> Razorpay Verified Merchant Desk
                </div>
                <p className="text-[11px] text-gray-400 leading-relaxed">
                  All payment transactions, customer queries, and dispute tickets are logged and audited with dedicated SLA resolution within 24 hours.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-[#0e0e1a]/80 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-md">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Send Us a Direct Message</h3>
              <p className="text-xs sm:text-sm text-gray-400 mb-8">
                Fill out the form below and our priority support team will respond promptly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-300">
                      Your Full Name <span className="text-yellow-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-300">
                      Mobile Number <span className="text-yellow-400">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 9876543210"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-300">Email Address (Optional)</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-300">Subject Category</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-[#161628] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-yellow-400 transition-colors"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Payment / Razorpay Issue">Payment / Razorpay Issue</option>
                      <option value="Ticket Booking Query">Ticket Booking Query</option>
                      <option value="Refund & Double Debit Request">Refund & Double Debit Request</option>
                      <option value="Prize Claim / TDS Query">Prize Claim / TDS Query</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-300">
                    Message / Issue Description <span className="text-yellow-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide details about your query or transaction reference ID..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500 text-black font-bold text-sm tracking-wide uppercase hover:opacity-95 transition-all shadow-[0_0_30px_rgba(212,175,55,0.3)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <FiSend size={16} />
                  {isSubmitting ? 'Sending Request...' : 'Submit Message'}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
