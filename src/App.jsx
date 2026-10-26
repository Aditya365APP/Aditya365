import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Diamond from './pages/Diamond';
import AlfaBeta from './pages/AlfaBeta';
import Winners from './pages/Winners';
import Leaderboard from './pages/Leaderboard';
import About from './pages/About';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import RefundPolicy from './pages/RefundPolicy';
import Contact from './pages/Contact';
import Faq from './pages/Faq';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#0a0a0f] text-white selection:bg-yellow-500/30">
        {/* Global blur effects */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[150px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[150px]" />
        </div>

        <Navbar />

        <main className="flex-grow relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/diamond" element={<Diamond />} />
            <Route path="/alfa-beta" element={<AlfaBeta />} />
            <Route path="/winners" element={<Winners />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/refund" element={<RefundPolicy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<Faq />} />
            {/* Catch-all fallback */}
            <Route path="*" element={<div className="min-h-screen flex items-center justify-center pt-20"><h1 className="text-2xl text-yellow-400 font-display">Coming Soon...</h1></div>} />
          </Routes>
        </main>

        <Footer className="z-10 relative" />

        {/* Toast Notifications */}
        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#12121f',
              color: '#fff',
              border: '1px solid rgba(255,215,0,0.3)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.8)',
              borderRadius: '16px',
            },
            success: { iconTheme: { primary: '#ffd700', secondary: '#000' } },
            error: { iconTheme: { primary: '#ff375f', secondary: '#fff' } },
          }}
        />
      </div>
    </Router>
  );
}

export default App;
