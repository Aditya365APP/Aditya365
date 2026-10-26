import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiSend, FiUser, FiPhone, FiMail, FiMapPin, FiCreditCard, FiCheckCircle } from 'react-icons/fi';
import toast from 'react-hot-toast';
import { openRazorpayCheckout } from '../utils/razorpay';

export default function BookingModal({ isOpen, onClose, planName, planPrice, themeColor = '#D4AF37' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    email: '',
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccessData, setPaymentSuccessData] = useState(null);

  const WHATSAPP_NUMBER = '917799399889';

  // Handle Online Payment via Razorpay
  const handleRazorpayPayment = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.address) {
      toast.error('Please fill in your Name, Phone, and Address');
      return;
    }

    setIsProcessing(true);

    try {
      const paymentResult = await openRazorpayCheckout({
        amountInRupees: planPrice,
        planName,
        userName: formData.name,
        userEmail: formData.email,
        userPhone: formData.phone,
        themeColor,
      });

      if (paymentResult.success) {
        const ticketNumber = `AD365-${Math.floor(100000 + Math.random() * 900000)}`;
        setPaymentSuccessData({
          ticketNumber,
          paymentId: paymentResult.paymentId,
          planName,
          amount: planPrice,
          name: formData.name,
          phone: formData.phone,
        });

        toast.success('Payment Successful! Ticket Generated 🎉', { duration: 5000 });
      }
    } catch (err) {
      if (err.message && !err.message.includes('cancelled')) {
        toast.error(err.message || 'Payment could not be completed.');
      }
    } finally {
      setIsProcessing(false);
    }
  };

  // Original: Fallback WhatsApp Booking
  const handleWhatsAppBooking = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.address) {
      toast.error('Please fill all required fields');
      return;
    }

    const message = `*NEW PARTICIPATION: ADITYA 365*
--------------------------
*Plan:* ${planName} (₹${planPrice})
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Address:* ${formData.address}
${formData.email ? `*Email:* ${formData.email}` : ''}
--------------------------
_I want to participate in this plan._`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
    toast.success('Redirecting to WhatsApp...');
    handleClose();
  };

  const handleClose = () => {
    setPaymentSuccessData(null);
    setIsProcessing(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-20 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            className="relative w-full max-w-md glass-gold rounded-[2rem] overflow-hidden shadow-[0_20px_100px_rgba(0,0,0,1)] border border-white/10 my-auto"
            style={{
              background: 'linear-gradient(165deg, rgba(20,20,30,0.95) 0%, rgba(10,10,20,0.98) 100%)',
              borderColor: `${themeColor}33`
            }}
          >
            {/* Header */}
            <div className="p-6 border-b border-white/5 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {paymentSuccessData ? 'Ticket Confirmed' : 'Participate Now'}
                </h3>
                <p className="text-gray-500 text-xs mt-1 uppercase tracking-widest">{planName} • ₹{planPrice}</p>
              </div>
              <button
                onClick={handleClose}
                className="p-2 rounded-full hover:bg-white/5 text-gray-400 hover:text-white transition-colors"
              >
                <FiX size={20} />
              </button>
            </div>

            {/* Payment Success View */}
            {paymentSuccessData ? (
              <div className="p-6 text-center space-y-5">
                <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/40 text-green-400 flex items-center justify-center mx-auto text-3xl">
                  <FiCheckCircle />
                </div>
                <div>
                  <h4 className="text-white text-lg font-bold">Booking Confirmed!</h4>
                  <p className="text-xs text-gray-400 mt-1">Your draw entry ticket is successfully reserved.</p>
                </div>

                <div className="bg-[#121226] border border-white/10 rounded-2xl p-4 text-left space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-gray-400">Ticket Serial No:</span>
                    <span className="text-yellow-400 font-mono font-bold">{paymentSuccessData.ticketNumber}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-gray-400">Payment ID:</span>
                    <span className="text-white font-mono text-[11px] truncate max-w-[160px]">{paymentSuccessData.paymentId}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-gray-400">Plan:</span>
                    <span className="text-white font-medium">{paymentSuccessData.planName}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-gray-400">Amount Paid:</span>
                    <span className="text-green-400 font-bold">₹{paymentSuccessData.amount}</span>
                  </div>
                </div>

                <button
                  onClick={handleClose}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-yellow-500 to-amber-500 text-black font-bold text-xs uppercase tracking-wider"
                >
                  Done
                </button>
              </div>
            ) : (
              /* Booking & Checkout Form */
              <form onSubmit={handleRazorpayPayment} className="p-6 space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Full Name *</label>
                  <div className="relative">
                    <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-3.5 pl-11 pr-4 text-white focus:border-yellow-400/50 outline-none transition-all placeholder:text-gray-700"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Mobile / WhatsApp *</label>
                  <div className="relative">
                    <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                      type="tel"
                      required
                      placeholder="10-digit mobile number"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-3.5 pl-11 pr-4 text-white focus:border-yellow-400/50 outline-none transition-all placeholder:text-gray-700"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Living Address *</label>
                  <div className="relative">
                    <FiMapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                    <textarea
                      required
                      placeholder="Complete address (for prize delivery)"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-11 pr-4 text-white focus:border-yellow-400/50 outline-none transition-all placeholder:text-gray-700 h-20 resize-none text-xs leading-relaxed"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Email ID (Optional)</label>
                  <div className="relative">
                    <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-3.5 pl-11 pr-4 text-white focus:border-yellow-400/50 outline-none transition-all placeholder:text-gray-700"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                {/* Primary Button: Online Razorpay Payment */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isProcessing}
                  className="w-full py-4 mt-4 rounded-2xl font-bold text-black flex items-center justify-center gap-2 shadow-2xl transition-all cursor-pointer disabled:opacity-50"
                  style={{ background: `linear-gradient(135deg, #D4AF37, #F3E5AB)` }}
                >
                  <FiCreditCard className="text-lg" />
                  {isProcessing ? 'Connecting Gateway...' : `Pay Online via Razorpay • ₹${planPrice}`}
                </motion.button>

                {/* Secondary Option: Original WhatsApp Booking */}
                <button
                  type="button"
                  onClick={handleWhatsAppBooking}
                  className="w-full py-3 rounded-2xl text-xs text-gray-400 hover:text-white border border-white/10 hover:bg-white/5 flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <FiSend /> Or Book via WhatsApp
                </button>

                <p className="text-[10px] text-gray-500 text-center uppercase tracking-widest mt-2 flex items-center justify-center gap-1">
                  <span>🔒</span> Razorpay 256-bit Encrypted • UPI, Cards, NetBanking
                </p>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
