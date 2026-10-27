import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiX,
  FiSend,
  FiUser,
  FiPhone,
  FiMail,
  FiMapPin,
  FiCheckCircle,
  FiCopy,
  FiCheck,
  FiArrowLeft,
  FiShield,
  FiSmartphone,
  FiCheckSquare
} from 'react-icons/fi';
import toast from 'react-hot-toast';
import QRCode from 'qrcode';

// ─── CLIENT VERIFIED UPI DETAILS ───
export const CLIENT_UPI_ID = '9959995646@idfcfirst';
export const CLIENT_PAYEE_NAME = 'K Manjunath';
export const CLIENT_BANK_NAME = 'IDFC FIRST Bank';
export const OFFICIAL_QR_IMAGE = '/client_upi_qr.png';
export const WHATSAPP_NUMBER = '917799399889';

export default function BookingModal({ isOpen, onClose, planName, planPrice, themeColor = '#D4AF37' }) {
  // Step tracking: 'form' -> 'upi' -> 'success'
  const [step, setStep] = useState('form');

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    email: '',
  });

  const [dynamicQrUrl, setDynamicQrUrl] = useState('');
  const [utrNumber, setUtrNumber] = useState('');
  const [copied, setCopied] = useState(false);
  const [ticketData, setTicketData] = useState(null);

  // Clean NPCI standard UPI Deep Link
  // Clean format: upi://pay?pa=9959995646@idfcfirst&pn=K%20Manjunath&am=AMOUNT&cu=INR
  const upiDeepLink = `upi://pay?pa=${CLIENT_UPI_ID}&pn=${encodeURIComponent(
    CLIENT_PAYEE_NAME
  )}&am=${planPrice}&cu=INR`;

  // Pre-generate dynamic fallback QR code using local qrcode engine
  useEffect(() => {
    const upiUri = `upi://pay?pa=${CLIENT_UPI_ID}&pn=${encodeURIComponent(
      CLIENT_PAYEE_NAME
    )}&am=${planPrice}&cu=INR`;

    QRCode.toDataURL(upiUri, {
      width: 320,
      margin: 1,
      color: { dark: '#000000', light: '#FFFFFF' },
      errorCorrectionLevel: 'M',
    })
      .then((url) => setDynamicQrUrl(url))
      .catch((err) => console.error('QR generation error:', err));
  }, [planPrice]);

  const handleCopyUpi = () => {
    navigator.clipboard.writeText(CLIENT_UPI_ID);
    setCopied(true);
    toast.success('UPI ID copied to clipboard!');
    setTimeout(() => setCopied(false), 2500);
  };

  // Step 1: Submit Details & proceed to UPI QR
  const handleProceedToUpi = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address) {
      toast.error('Please enter Name, Mobile Number, and Address');
      return;
    }
    setStep('upi');
  };

  // Step 2: Confirm Payment with UTR or WhatsApp
  const handleConfirmUtr = (e) => {
    e.preventDefault();
    if (!utrNumber.trim()) {
      toast.error('Please enter the 12-digit UTR or Transaction Ref number from your UPI app');
      return;
    }

    const ticketNumber = `AD365-${Math.floor(100000 + Math.random() * 900000)}`;
    const finalTicket = {
      ticketNumber,
      utr: utrNumber.trim(),
      planName,
      amount: planPrice,
      name: formData.name,
      phone: formData.phone,
      date: new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    setTicketData(finalTicket);
    setStep('success');
    toast.success('Payment Received! Ticket Generated 🎉', { duration: 5000 });
  };

  // Quick fallback: Send on WhatsApp
  const handleWhatsAppFastTrack = () => {
    const message = `*NEW TICKET BOOKING: ADITYA 365*
--------------------------
*Plan:* ${planName} (₹${planPrice})
*Name:* ${formData.name || 'Participant'}
*Phone:* ${formData.phone || 'N/A'}
*Address:* ${formData.address || 'N/A'}
*Payee:* ${CLIENT_PAYEE_NAME} (${CLIENT_UPI_ID})
${utrNumber ? `*UTR / Ref No:* ${utrNumber}` : '*Status:* Ready to pay via UPI'}
--------------------------
_Please verify my transaction and confirm my entry ticket._`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleClose = () => {
    setStep('form');
    setTicketData(null);
    setUtrNumber('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            className="relative w-full max-w-md rounded-[2rem] overflow-hidden shadow-[0_25px_100px_rgba(0,0,0,1)] border border-white/10 my-auto text-gray-200"
            style={{
              background: 'linear-gradient(165deg, rgba(20,20,32,0.98) 0%, rgba(10,10,20,0.99) 100%)',
              borderColor: `${themeColor}44`,
            }}
          >
            {/* Header */}
            <div className="p-4 sm:p-5 border-b border-white/[0.08] flex items-center justify-between">
              <div className="flex items-center gap-3">
                {step === 'upi' && (
                  <button
                    onClick={() => setStep('form')}
                    className="p-1.5 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
                    title="Back to details"
                  >
                    <FiArrowLeft size={18} />
                  </button>
                )}
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight leading-none">
                    {step === 'success'
                      ? 'Ticket Confirmed 🎉'
                      : step === 'upi'
                      ? 'Verified UPI Payment'
                      : 'Participate & Book'}
                  </h3>
                  <p className="text-gray-400 text-xs mt-1">
                    {planName} • <span className="text-[#D4AF37] font-bold">₹{planPrice}</span>
                  </p>
                </div>
              </div>

              <button
                onClick={handleClose}
                className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <FiX size={18} />
              </button>
            </div>

            {/* ════════════ STEP 1: PARTICIPANT DETAILS ════════════ */}
            {step === 'form' && (
              <form onSubmit={handleProceedToUpi} className="p-5 space-y-3.5">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest ml-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <FiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                      type="text"
                      required
                      placeholder="Enter full name"
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl py-3 pl-10 pr-3 text-sm text-white focus:border-[#D4AF37]/60 outline-none transition-all placeholder:text-gray-600"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest ml-1">
                    Mobile / WhatsApp *
                  </label>
                  <div className="relative">
                    <FiPhone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                      type="tel"
                      required
                      maxLength={10}
                      placeholder="10-digit mobile number"
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl py-3 pl-10 pr-3 text-sm text-white focus:border-[#D4AF37]/60 outline-none transition-all placeholder:text-gray-600"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest ml-1">
                    Delivery Address *
                  </label>
                  <div className="relative">
                    <FiMapPin className="absolute left-3.5 top-3 text-gray-500" />
                    <textarea
                      required
                      rows={2}
                      placeholder="Complete living address (for prize delivery)"
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl py-2.5 pl-10 pr-3 text-xs text-white focus:border-[#D4AF37]/60 outline-none transition-all placeholder:text-gray-600 resize-none leading-relaxed"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest ml-1">
                    Email ID (Optional)
                  </label>
                  <div className="relative">
                    <FiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl py-3 pl-10 pr-3 text-sm text-white focus:border-[#D4AF37]/60 outline-none transition-all placeholder:text-gray-600"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                {/* Primary Action Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 mt-2 rounded-xl font-bold text-black flex items-center justify-center gap-2 shadow-[0_4px_25px_rgba(212,175,55,0.3)] hover:opacity-95 transition-all cursor-pointer text-sm"
                  style={{ background: 'linear-gradient(135deg, #D4AF37 0%, #F5DEB3 100%)' }}
                >
                  <FiSmartphone className="text-base" />
                  <span>Proceed to UPI Payment • ₹{planPrice}</span>
                </button>

                {/* Secondary: Direct WhatsApp Option */}
                <button
                  type="button"
                  onClick={handleWhatsAppFastTrack}
                  className="w-full py-2.5 rounded-xl text-xs text-gray-400 hover:text-white border border-white/10 hover:bg-white/[0.04] flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <FiSend className="text-emerald-400" /> Or Book Directly via WhatsApp
                </button>

                <p className="text-[10px] text-gray-500 text-center uppercase tracking-wider pt-1 flex items-center justify-center gap-1.5">
                  <FiShield className="text-[#D4AF37]" />
                  <span>Direct Bank Deposit via UPI • Zero Platform Fees</span>
                </p>
              </form>
            )}

            {/* ════════════ STEP 2: OFFICIAL CLIENT QR & INSTANT UPI PAY ════════════ */}
            {step === 'upi' && (
              <div className="p-4 sm:p-5 space-y-3.5 max-h-[82vh] overflow-y-auto">
                {/* Amount Transfer Banner */}
                <div className="text-center p-3 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                  <div className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">
                    Pay To: <span className="text-white font-bold">{CLIENT_PAYEE_NAME}</span> ({CLIENT_BANK_NAME})
                  </div>
                  <div className="text-3xl font-black font-mono text-[#D4AF37] mt-0.5">
                    ₹{planPrice}
                  </div>
                  <div className="text-[11px] text-gray-400 mt-0.5">
                    Participant: <span className="text-white font-semibold">{formData.name}</span>
                  </div>
                </div>

                {/* Official IDFC First Bank Client QR Code Card */}
                <div className="bg-white rounded-2xl p-3 text-center mx-auto max-w-[240px] shadow-2xl border border-gray-200">
                  <img
                    src={OFFICIAL_QR_IMAGE}
                    alt="IDFC FIRST Bank QR - K Manjunath"
                    className="w-full h-auto object-contain mx-auto rounded-xl"
                  />
                  <div className="text-[10px] text-gray-900 font-bold tracking-wider uppercase mt-1">
                    Scan with any UPI App
                  </div>
                  <div className="flex justify-center items-center gap-1 mt-0.5 text-[9px] font-semibold text-gray-500">
                    <span>GPay • PhonePe • Paytm • BHIM</span>
                  </div>
                </div>

                {/* Verified Payee & UPI ID Box */}
                <div className="p-3 rounded-xl bg-black/50 border border-white/10 space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <div className="min-w-0 pr-2">
                      <div className="text-[10px] text-gray-400 flex items-center gap-1 font-medium">
                        <FiCheckCircle className="text-emerald-400" size={11} />
                        <span>{CLIENT_PAYEE_NAME} • {CLIENT_BANK_NAME}</span>
                      </div>
                      <div className="font-mono text-[#D4AF37] font-bold text-sm tracking-wide select-all truncate mt-0.5">
                        {CLIENT_UPI_ID}
                      </div>
                    </div>
                    <button
                      onClick={handleCopyUpi}
                      className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-[#D4AF37] text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer flex-shrink-0"
                    >
                      {copied ? <FiCheck className="text-emerald-400" /> : <FiCopy />}
                      <span>{copied ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                </div>

                {/* Mobile Direct Launch Button */}
                <a
                  href={upiDeepLink}
                  className="w-full py-3 rounded-xl bg-[#D4AF37] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:opacity-95 transition-opacity cursor-pointer shadow-lg text-center"
                >
                  <FiSmartphone size={15} />
                  <span>Open PhonePe / GPay / Any UPI App</span>
                </a>

                {/* UTR Verification Input Form */}
                <form onSubmit={handleConfirmUtr} className="pt-3 border-t border-white/[0.08] space-y-2">
                  <label className="text-[11px] font-bold text-gray-300 uppercase tracking-widest block">
                    Enter 12-Digit UPI Ref / UTR No. *
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      required
                      placeholder="e.g. 428901234567"
                      value={utrNumber}
                      onChange={(e) => setUtrNumber(e.target.value)}
                      className="flex-1 bg-white/[0.05] border border-white/15 rounded-xl px-3 py-2 text-sm text-white font-mono placeholder:text-gray-600 focus:border-[#D4AF37] outline-none"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl bg-emerald-500 text-black font-bold text-xs uppercase tracking-wider hover:bg-emerald-400 transition-colors cursor-pointer flex-shrink-0"
                    >
                      Verify
                    </button>
                  </div>
                  <p className="text-[10px] text-gray-500 leading-normal">
                    Find the 12-digit UTR in your Google Pay, PhonePe or Paytm payment receipt.
                  </p>
                </form>

                {/* WhatsApp Direct Assist */}
                <button
                  type="button"
                  onClick={handleWhatsAppFastTrack}
                  className="w-full text-center text-xs text-emerald-400 hover:underline pt-1 cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <FiSend size={12} /> Send Payment Screenshot on WhatsApp
                </button>
              </div>
            )}

            {/* ════════════ STEP 3: CONFIRMED TICKET ════════════ */}
            {step === 'success' && ticketData && (
              <div className="p-6 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto text-2xl shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                  <FiCheckCircle />
                </div>
                <div>
                  <h4 className="text-white text-lg font-bold">Booking Confirmed!</h4>
                  <p className="text-xs text-gray-400 mt-0.5">Your draw entry ticket is successfully locked.</p>
                </div>

                {/* Official Ticket Card */}
                <div className="bg-[#121226] border border-[#D4AF37]/30 rounded-2xl p-4 text-left space-y-2 text-xs relative overflow-hidden">
                  <div className="flex justify-between py-1 border-b border-white/[0.08]">
                    <span className="text-gray-400">Ticket Serial:</span>
                    <span className="text-[#D4AF37] font-mono font-bold text-sm tracking-wider">
                      {ticketData.ticketNumber}
                    </span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/[0.08]">
                    <span className="text-gray-400">Plan:</span>
                    <span className="text-white font-semibold">{ticketData.planName}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/[0.08]">
                    <span className="text-gray-400">Participant:</span>
                    <span className="text-white">{ticketData.name}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/[0.08]">
                    <span className="text-gray-400">UTR / Ref No:</span>
                    <span className="text-gray-300 font-mono text-[11px]">{ticketData.utr}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/[0.08]">
                    <span className="text-gray-400">Payee Account:</span>
                    <span className="text-gray-300 font-mono text-[11px]">{CLIENT_PAYEE_NAME} ({CLIENT_BANK_NAME})</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/[0.08]">
                    <span className="text-gray-400">Amount:</span>
                    <span className="text-emerald-400 font-bold font-mono">₹{ticketData.amount}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-gray-400">Timestamp:</span>
                    <span className="text-gray-400 font-mono text-[10px]">{ticketData.date}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={handleWhatsAppFastTrack}
                    className="flex-1 py-3 rounded-xl bg-emerald-500 text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-emerald-400 transition-colors cursor-pointer"
                  >
                    <FiSend size={13} /> Share on WhatsApp
                  </button>
                  <button
                    onClick={handleClose}
                    className="flex-1 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
