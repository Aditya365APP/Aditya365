import { useState, useEffect } from 'react';

function Digit({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="timer-digit">{String(value).padStart(2, '0')}</div>
      <span className="text-gray-600 text-xs mt-1 uppercase tracking-widest">{label}</span>
    </div>
  );
}

export default function CountdownTimer({ initialDays = 0, initialHours = 0, initialMins = 0 }) {
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
}
