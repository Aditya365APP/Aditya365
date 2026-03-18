import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiInstagram, FiTwitter, FiFacebook, FiYoutube, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const footerLinks = {
  'Lottery Plans': [
    { label: 'Diamond Lottery', to: '/diamond' },
    { label: 'Alfa Beta Plans', to: '/alfa-beta' },
    { label: 'Spin & Win', to: '/#spin' },
    { label: 'Daily Bonus', to: '/#bonus' },
  ],
  'Company': [
    { label: 'About Us', to: '/about' },
    { label: 'Winners Board', to: '/winners' },
    { label: 'Leaderboard', to: '/leaderboard' },
    { label: 'Contact Us', to: '/contact' },
  ],
  'Support': [
    { label: 'FAQ', to: '/faq' },
    { label: 'Terms & Conditions', to: '/terms' },
    { label: 'Privacy Policy', to: '/privacy' },
    { label: 'Responsible Gaming', to: '/responsible' },
  ],
};

const socials = [
  { icon: FiInstagram, href: '#', label: 'Instagram', color: '#e1306c' },
  { icon: FiFacebook, href: '#', label: 'Facebook', color: '#1877f2' },
  { icon: FiTwitter, href: '#', label: 'Twitter', color: '#1da1f2' },
  { icon: FiYoutube, href: '#', label: 'YouTube', color: '#ff0000' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 mt-20">
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />

      <div className="bg-black/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Brand */}
            <div className="lg:col-span-2 space-y-6">
              <Link to="/" className="flex items-center gap-3 group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden glass border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <img src="/aditya_logo.jpg" alt="Aditya 365" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-display font-black text-2xl text-white tracking-tighter uppercase leading-none">
                    ADITYA <span className="text-[#D4AF37]">365</span>
                  </div>
                  <div className="text-[10px] text-white/40 uppercase tracking-[0.4em] mt-1 font-bold">Premium lottery</div>
                </div>
              </Link>
              <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                The pinnacle of premium lottery experiences in India. We combine cutting-edge technology with transparent fairness to deliver life-changing opportunities daily.
              </p>



              {/* Socials */}
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-9 h-9 rounded-xl flex items-center justify-center border border-white/10 text-gray-400 transition-all hover:border-transparent"
                    style={{ '--hover-color': color }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = color + '22';
                      e.currentTarget.style.color = color;
                      e.currentTarget.style.borderColor = color + '44';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = '';
                      e.currentTarget.style.color = '';
                      e.currentTarget.style.borderColor = '';
                    }}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon size={15} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Links */}
            {Object.entries(footerLinks).map(([group, links]) => (
              <div key={group}>
                <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4">{group}</h4>
                <ul className="space-y-2.5">
                  {links.map(({ label, to }) => (
                    <li key={label}>
                      <Link
                        to={to}
                        className="text-gray-500 text-sm hover:text-yellow-400 transition-colors"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Trust badges */}
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap gap-4 justify-center">
            {['🔒 SSL Secured', '✅ Certified Fair Draw', '🏛️ Legally Registered', '💳 Safe Payments', '🏆 5000+ Winners'].map(badge => (
              <div key={badge} className="px-4 py-2 rounded-full border border-white/10 text-gray-500 text-xs font-medium">
                {badge}
              </div>
            ))}
          </div>

          {/* Bottom */}
          <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-[10px] uppercase tracking-widest font-bold font-sans">
              © 2026 Aditya 365 • Crafted for High Rollers
            </p>
            <div className="flex gap-6 text-gray-500 text-xs font-medium">
              <Link to="/terms" className="hover:text-[#D4AF37] transition-colors">Terms</Link>
              <Link to="/privacy" className="hover:text-[#D4AF37] transition-colors">Privacy</Link>
              <Link to="/responsible" className="hover:text-[#D4AF37] transition-colors">Responsible Gaming</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
