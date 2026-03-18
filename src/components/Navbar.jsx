import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/diamond', label: 'Diamond' },
  { to: '/alfa-beta', label: 'Alfa Beta' },
  { to: '/winners', label: 'Winners' },
  { to: '/leaderboard', label: 'Leaderboard' },
  { to: '/about', label: 'About' },
];

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
            ? 'py-3 bg-black/40 backdrop-blur-md border-b border-white/5'
            : 'py-6 bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-white/10 glass flex items-center justify-center"
            >
              <img src="/aditya_logo.jpg" alt="Aditya 365" className="w-full h-full object-cover" />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-display font-black text-2xl tracking-tighter text-white leading-none uppercase">
                Aditya <span className="text-[#D4AF37]">365</span>
              </span>
              <span className="text-[8px] text-white/40 uppercase tracking-[0.4em] mt-1 font-bold">Premium Lottery Platform</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`nav-link ${location.pathname === link.to ? 'active text-yellow-400' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <Link to="/diamond" className="btn-gold px-6 py-2.5 text-xs hidden sm:inline-block tracking-widest uppercase">
              Play Now
            </Link>

            {/* Mobile menu */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-gray-300 hover:text-white p-2"
            >
              {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden border-t border-white/5 mt-2"
              style={{ background: 'rgba(10,10,20,0.98)' }}
            >
              <div className="px-4 py-4 space-y-2">
                {navLinks.map(link => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${location.pathname === link.to
                        ? 'bg-yellow-400/10 text-yellow-400'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to="/diamond"
                  className="w-full text-center block btn-gold py-3 rounded-xl"
                  onClick={() => setMenuOpen(false)}
                >
                  View Plans
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>


    </>
  );
}
