export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-[#0a0e27]/95 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img
            src="/assets/generated/afo-ride-logo.dim_512x512.png"
            alt="AFO Ride"
            className="w-10 h-10 object-contain"
          />
          <div>
            <h1 className="text-lg font-bold text-white">AFO Ride</h1>
            <p className="text-xs text-blue-300">Driver</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="text-right">
            <p className="text-xs text-white/60">Demo Driver</p>
            <p className="text-sm font-semibold text-white">John Doe</p>
          </div>
        </div>
      </div>
    </header>
  );
}
