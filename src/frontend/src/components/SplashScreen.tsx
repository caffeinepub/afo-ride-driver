import { useEffect, useState } from 'react';

export function SplashScreen() {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? '' : prev + '.'));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0a0e27] flex flex-col items-center justify-center">
      <div className="flex flex-col items-center space-y-8 animate-in fade-in duration-1000">
        <div className="relative">
          <img
            src="/assets/generated/afo-ride-logo.dim_512x512.png"
            alt="AFO Ride"
            className="w-48 h-48 object-contain animate-pulse"
          />
          <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full animate-pulse" />
        </div>
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-white tracking-tight">AFO Ride</h1>
          <p className="text-xl text-blue-300 font-medium">Drive Smart. Earn Safe.</p>
        </div>
        <div className="flex items-center space-x-2 text-white/60 text-sm">
          <span>Loading{dots}</span>
        </div>
      </div>
    </div>
  );
}
