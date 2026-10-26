import { useState, useEffect } from 'react';

function Digit({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="timer-digit">{String(value).padStart(2, '0')}</div>
      <span className="text-gray-600 text-xs mt-1 uppercase tracking-widest">{label}</span>
    </div>
  );
}

export default function CountdownTimer({ initialDays = 0, initialHours = 0, initialMins = 0, variant = 'default' }) {
  const [seconds, setSeconds] = useState(
    initialDays * 86400 + initialHours * 3600 + initialMins * 60
  );

  useEffect(() => {
    if (seconds <= 0) return;
    const id = setInterval(() => setSeconds(s => Math.max(0, s - 1)), 1000);
    return () => clearInterval(id);
  }, []);

  const d = Math.floor(seconds / 86400);
  const h = Math.floor((seconds % 86400) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;

  if (seconds <= 0) {
    return (
      <div className="flex items-center gap-1.5 justify-center">
        <span className="live-badge">DRAW LIVE</span>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className="flex items-center gap-1 font-mono text-[11px]">
        {d > 0 && (
          <span className="px-1.5 py-0.5 rounded bg-white/[0.05] border border-white/[0.08] text-[#D4AF37] font-bold">
            {d}d
          </span>
        )}
        <span className="px-1.5 py-0.5 rounded bg-white/[0.05] border border-white/[0.08] text-gray-200 font-bold">
          {String(h).padStart(2, '0')}h
        </span>
        <span className="text-gray-600 font-bold text-[10px]">:</span>
        <span className="px-1.5 py-0.5 rounded bg-white/[0.05] border border-white/[0.08] text-gray-200 font-bold">
          {String(m).padStart(2, '0')}m
        </span>
        <span className="text-gray-600 font-bold text-[10px]">:</span>
        <span className="px-1.5 py-0.5 rounded bg-white/[0.05] border border-white/[0.08] text-amber-400 font-bold">
          {String(s).padStart(2, '0')}s
        </span>
      </div>
    );
  }

  {/* ORIGINAL CODE:
  return (
    <div className="flex items-end gap-2">
      {d > 0 && <Digit value={d} label="days" />}
      {d > 0 && <span className="text-yellow-500 font-bold text-xl pb-5">:</span>}
      <Digit value={h} label="hrs" />
      <span className="text-yellow-500 font-bold text-xl pb-5">:</span>
      <Digit value={m} label="min" />
      <span className="text-yellow-500 font-bold text-xl pb-5">:</span>
      <Digit value={s} label="sec" />
    </div>
  );
  */}
  return (
    <div className="flex items-end justify-center gap-1 sm:gap-2">
      {d > 0 && <Digit value={d} label="days" />}
      {d > 0 && <span className="text-[#D4AF37] font-mono font-bold text-sm sm:text-base pb-3 opacity-60">:</span>}
      <Digit value={h} label="hrs" />
      <span className="text-[#D4AF37] font-mono font-bold text-sm sm:text-base pb-3 opacity-60">:</span>
      <Digit value={m} label="min" />
      <span className="text-[#D4AF37] font-mono font-bold text-sm sm:text-base pb-3 opacity-60">:</span>
      <Digit value={s} label="sec" />
    </div>
  );
}
