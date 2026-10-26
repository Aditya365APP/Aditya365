/**
 * Razorpay Payment Integration Utility
 * Configured for Aditya 365
 */

// Replace this with your actual Key ID from Razorpay Dashboard (starts with rzp_test_ or rzp_live_)
export const RAZORPAY_KEY_ID = import.meta.env.VITE_RAZORPAY_KEY_ID || 'rzp_test_placeholder';

/**
 * Ensures Razorpay SDK is loaded
 */
export const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

/**
 * Triggers Razorpay Checkout modal
 * 
 * @param {Object} options
 * @param {number} options.amountInRupees - Price in INR (e.g. 100, 200, 500)
 * @param {string} options.planName - Name of the Draw / Reward plan
 * @param {string} options.userName - Customer's full name
 * @param {string} options.userEmail - Customer's email
 * @param {string} options.userPhone - Customer's mobile number
 * @param {string} [options.themeColor='#D4AF37'] - Brand color hex
 * @returns {Promise<Object>} Resolves with payment response on success
 */
export const openRazorpayCheckout = async ({
  amountInRupees,
  planName,
  userName,
  userEmail,
  userPhone,
  themeColor = '#D4AF37',
}) => {
  const isLoaded = await loadRazorpayScript();
  if (!isLoaded) {
    throw new Error('Razorpay SDK failed to load. Please check your internet connection.');
  }

  // Parse price into numerical value
  const numericAmount = parseFloat(String(amountInRupees).replace(/[^0-9.]/g, '')) || 0;
  if (numericAmount <= 0) {
    throw new Error('Invalid payment amount.');
  }

  return new Promise((resolve, reject) => {
    const options = {
      key: RAZORPAY_KEY_ID,
      amount: Math.round(numericAmount * 100), // In paise (₹1 = 100 paise)
      currency: 'INR',
      name: 'Aditya 365',
      description: `Entry for ${planName}`,
      image: '/aditya_logo.jpg',
      handler: function (response) {
        resolve({
          success: true,
          paymentId: response.razorpay_payment_id,
          orderId: response.razorpay_order_id,
          signature: response.razorpay_signature,
          amount: numericAmount,
          planName,
        });
      },
      prefill: {
        name: userName || '',
        email: userEmail || '',
        contact: userPhone || '',
      },
      notes: {
        platform: 'Aditya 365',
        plan: planName,
      },
      theme: {
        color: themeColor || '#D4AF37',
      },
      modal: {
        ondismiss: function () {
          reject(new Error('Payment cancelled by user.'));
        },
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.on('payment.failed', function (response) {
      reject(new Error(response.error.description || 'Payment failed.'));
    });

    paymentObject.open();
  });
};
