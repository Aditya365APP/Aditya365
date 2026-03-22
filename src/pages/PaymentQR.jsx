import { useEffect, useState } from 'react';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import qrCode from '../assets/QR-code.jpeg';

export default function PaymentQR() {
  const [timeLeft, setTimeLeft] = useState(45);
  const navigate = useNavigate();
  const location = useLocation();
  
  const { from = '/', formData, planName, planPrice } = location.state || {};
  const WHATSAPP_NUMBER = '910000000000'; // Update target number here

  // Prevent direct access without form data
  if (!formData) {
    return <Navigate to="/" replace />;
  }

  // FIX 1: Force scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) {
      const message = `*NEW PARTICIPATION: ADITYA 365*
--------------------------
*Plan:* ${planName} (₹${planPrice})
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Address:* ${formData.address}
${formData.email ? `*Email:* ${formData.email}` : ''}
--------------------------
_I have completed the payment of ₹${planPrice}._`;

      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
      
      // FIX 2: Bypass Popup Blocker
      // Navigate the current tab to trigger the WhatsApp app prompt
      window.location.href = whatsappUrl;

      // Wait 1.5 seconds, then redirect the underlying page back to the previous route
      setTimeout(() => {
        navigate(from, { replace: true });
      }, 1500);

      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, navigate, from, formData, planName, planPrice]);

  return (
    // FIX 3: Increased padding-top (pt-32) to prevent hiding under the navbar
    <div className="min-h-screen flex flex-col items-center justify-center pt-32 pb-12 px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="luxury-card max-w-md w-full text-center p-8 border-yellow-500/30 mt-4"
      >
        <h2 className="text-2xl font-bold text-white mb-2">Complete Your Payment</h2>
        
        <div className="bg-yellow-400/10 border border-yellow-400/30 py-3 px-6 rounded-xl inline-block mb-6 mt-2">
            <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Amount to Pay</p>
            <p className="text-yellow-400 font-mono text-3xl font-black">₹{planPrice}</p>
        </div>
        
        <p className="text-gray-400 text-sm mb-6">Scan using Paytm or any UPI app</p>
        
        <div className="bg-white p-4 rounded-2xl inline-block mb-6 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
          <img 
            src={qrCode} 
            alt="Paytm QR Code" 
            className="w-64 h-64 object-contain rounded-xl"
          />
        </div>

        <div className="space-y-2">
          <p className="text-yellow-400 font-mono text-xl font-bold">
            00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}
          </p>
          <p className="text-gray-500 text-xs uppercase tracking-widest">
            Do not close. WhatsApp will open automatically.
          </p>
        </div>
      </motion.div>
    </div>
  );
}