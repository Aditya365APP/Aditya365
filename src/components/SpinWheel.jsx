import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

export default function SpinWheel({ prizes, isOpen, onClose }) {
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [winner, setWinner] = useState(null);
  const [claimed, setClaimed] = useState(false);

  const numSegments = prizes.length;
  const segmentAngle = 360 / numSegments;

  const segmentColors = [
    '#ff2d55', '#ffd700', '#007aff', '#30d158', '#bf5af2', '#ff9f0a',
    '#00c7be', '#ff375f', '#ffd60a', '#30d158',
  ];

  const spinWheel = useCallback(() => {
    if (spinning) return;
    setSpinning(true);
    setWinner(null);
    const spins = 5 + Math.floor(Math.random() * 5);
    const extraDeg = Math.floor(Math.random() * 360);
    const totalRotation = rotation + spins * 360 + extraDeg;
    setRotation(totalRotation);

    setTimeout(() => {
      // The pointer is at the top (270 degrees). 
      // The segments are drawn starting from 0 degrees (3 o'clock).
      // When the wheel has rotated by 'rotation' degrees clockwise,
      // the segment at the pointer (270 deg) is the one that was 
      // originally at (270 - rotation) % 360.
      const pointerAngle = 270;
      const resultAngle = (pointerAngle - (totalRotation % 360) + 360) % 360;
      const winnerIndex = Math.floor(resultAngle / segmentAngle) % numSegments;
      
      setWinner(prizes[winnerIndex]);
      setSpinning(false);
    }, 5000); // Match the 5s transition duration in CSS

  }, [spinning, rotation, segmentAngle, numSegments, prizes]);

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-overlay"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, y: 40 }} animate={{ scale: 1, y: 0 }}
        className="relative w-full max-w-lg rounded-3xl overflow-hidden text-center luxe-modal"
        style={{ background: '#050510', border: '1px solid rgba(212, 175, 55, 0.2)' }}
        onClick={e => e.stopPropagation()}
      >
        <div className="p-8">
          <div className="absolute top-4 right-4">
             <button onClick={onClose} className="text-white/20 hover:text-white transition-colors">✕</button>
          </div>
          <h2 className="font-display text-4xl font-black text-white mb-2 tracking-tighter uppercase leading-none">
            Grand <span className="gradient-text italic">Wheel</span>
          </h2>
          <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.2em] mb-8">Wheel of Fortune daily draw</p>

          {/* Wheel */}
          <div className="relative inline-block mb-10 group">
            {/* Outer Glow */}
            <div className="absolute inset-[-20px] bg-[#D4AF37] blur-[60px] opacity-10 group-hover:opacity-20 transition-opacity" />
            
            {/* Pointer */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 z-20">
              <div className="w-0 h-0 border-l-[18px] border-r-[18px] border-t-[36px] border-l-transparent border-r-transparent border-t-[#D4AF37] filter drop-shadow-[0_10px_10px_rgba(212,175,55,0.4)]" />
            </div>

            <div
              className="spin-wheel relative z-10 p-2 bg-gradient-to-br from-[#D4AF37]/20 to-transparent rounded-full shadow-[0_0_50px_rgba(0,0,0,0.5)]"
              style={{
                width: 320,
                height: 320,
                transition: spinning ? 'transform 5s cubic-bezier(0.1, 0, 0.1, 1)' : 'none',
                transform: `rotate(${rotation}deg)`,
              }}
            >
              <svg viewBox="0 0 300 300" width="304" height="304" className="filter contrast-[1.1]">
                {prizes.map((prize, i) => {
                  const startAngle = i * segmentAngle;
                  const endAngle = startAngle + segmentAngle;
                  const startRad = (startAngle * Math.PI) / 180;
                  const endRad = (endAngle * Math.PI) / 180;
                  const x1 = 150 + 140 * Math.cos(startRad);
                  const y1 = 150 + 140 * Math.sin(startRad);
                  const x2 = 150 + 140 * Math.cos(endRad);
                  const y2 = 150 + 140 * Math.sin(endRad);
                  const textAngle = startAngle + segmentAngle / 2;
                  const textRad = (textAngle * Math.PI) / 180;
                  const textX = 150 + 95 * Math.cos(textRad);
                  const textY = 150 + 95 * Math.sin(textRad);

                  return (
                    <g key={i}>
                      <path
                        d={`M 150 150 L ${x1} ${y1} A 140 140 0 0 1 ${x2} ${y2} Z`}
                        fill={i % 2 === 0 ? '#0a0a18' : '#05050a'}
                        stroke="#D4AF37"
                        strokeWidth="0.5"
                        strokeOpacity="0.2"
                      />
                      <text
                        x={textX} y={textY}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill={i % 2 === 0 ? '#D4AF37' : 'white'}
                        fontSize="10"
                        fontWeight="900"
                        className="uppercase tracking-[0.1em]"
                        transform={`rotate(${textAngle}, ${textX}, ${textY})`}
                      >
                        {prize.length > 10 ? prize.substring(0, 10) + '…' : prize}
                      </text>
                    </g>
                  );
                })}
                <circle cx="150" cy="150" r="22" fill="#050510" stroke="#D4AF37" strokeWidth="2" />
                <circle cx="150" cy="150" r="18" fill="url(#center-gradient)" />
                <defs>
                   <radialGradient id="center-gradient">
                      <stop offset="0%" stopColor="#D4AF37" />
                      <stop offset="100%" stopColor="#B8860B" />
                   </radialGradient>
                </defs>
                <text x="150" y="156" textAnchor="middle" fill="#000" fontSize="16" fontWeight="black">★</text>
              </svg>
            </div>
          </div>

          {/* Winner display */}
          <div className="h-24">
            {winner && !spinning && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="mb-4 p-5 bg-[#D4AF37]/5 border border-[#D4AF37]/20 rounded-2xl backdrop-blur-md relative"
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black px-4 py-1 rounded-full border border-[#D4AF37]/30">
                   <p className="text-[#D4AF37] font-black text-[10px] uppercase tracking-widest">Victory!</p>
                </div>
                <p className="text-white font-black text-3xl tracking-tighter mt-1">{winner}</p>
                {!claimed ? (
                  <button
                    onClick={() => setClaimed(true)}
                    className="text-[#D4AF37] hover:text-white transition-colors text-xs font-black uppercase tracking-[0.2em] mt-3"
                  >
                    Claim Your Fortune ➔
                  </button>
                ) : (
                  <p className="text-green-500 font-bold text-xs uppercase tracking-widest mt-3">Fortune Claimed</p>
                )}
              </motion.div>
            )}
          </div>

          <button
            onClick={spinWheel}
            disabled={spinning}
            className={`btn-gold relative group px-10 py-5 rounded-2xl text-lg font-black w-full uppercase tracking-[0.3em] overflow-hidden ${spinning ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <span className="relative z-10">{spinning ? 'Channeling Luck...' : 'Release Destiny'}</span>
            <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
          </button>
          <p className="text-white/20 text-[10px] font-bold uppercase tracking-[0.2em] mt-4">1 Complimentary draw daily • Extra spins earned per entry</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
