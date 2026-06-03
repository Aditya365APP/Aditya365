import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiSend, FiUser, FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { useNavigate, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function BookingModal({ isOpen, onClose, planName, planPrice, themeColor }) {
  const [formData, setFormData] = useState({ name: '', phone: '', address: '', email: '' });
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.address) {
      toast.error('Please fill all required fields');
      return;
    }

    onClose();
    
    // Pass form data and plan details to the QR page
    navigate('/payment-qr', { 
      state: { 
        from: location.pathname,
        formData: formData,
        planName: planName,
        planPrice: planPrice
      } 
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-20 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
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
            <div className="p-6 border-b border-white/5 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">Participate Now</h3>
                <p className="text-gray-500 text-xs mt-1 uppercase tracking-widest">{planName} • ₹{planPrice}</p>
              </div>
              <button onClick={onClose} className="p-2 rounded-full hover:bg-white/5 text-gray-400 hover:text-white transition-colors">
                <FiX size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Full Name *</label>
                <div className="relative">
                  <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input type="text" required placeholder="Enter your name" className="w-full bg-white/5 border border-white/10 rounded-2xl py-3.5 pl-11 pr-4 text-white focus:border-yellow-400/50 outline-none transition-all placeholder:text-gray-700" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">WhatsApp Number *</label>
                <div className="relative">
                  <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input type="tel" required placeholder="Mobile number" className="w-full bg-white/5 border border-white/10 rounded-2xl py-3.5 pl-11 pr-4 text-white focus:border-yellow-400/50 outline-none transition-all placeholder:text-gray-700" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Living Address *</label>
                <div className="relative">
                  <FiMapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                  <textarea required placeholder="Complete address" className="w-full bg-white/5 border border-white/10 rounded-2xl py-3.5 pl-11 pr-4 text-white focus:border-yellow-400/50 outline-none transition-all placeholder:text-gray-700 h-24 resize-none" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Email ID (Optional)</label>
                <div className="relative">
                  <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input type="email" placeholder="your@email.com" className="w-full bg-white/5 border border-white/10 rounded-2xl py-3.5 pl-11 pr-4 text-white focus:border-yellow-400/50 outline-none transition-all placeholder:text-gray-700" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                </div>
              </div>

              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="w-full py-4 mt-4 rounded-2xl font-bold text-white flex items-center justify-center gap-2 shadow-2xl transition-all" style={{ background: `linear-gradient(135deg, ${themeColor}, ${themeColor}cc)` }}>
                <FiSend /> Proceed to Pay & Buy
              </motion.button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}