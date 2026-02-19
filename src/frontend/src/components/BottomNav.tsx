import { Home, Wallet, Shield, User, Headphones } from 'lucide-react';

type TabType = 'home' | 'wallet' | 'safety' | 'profile' | 'support';

interface BottomNavProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  const tabs = [
    { id: 'home' as TabType, icon: Home, label: 'Home' },
    { id: 'wallet' as TabType, icon: Wallet, label: 'Wallet' },
    { id: 'safety' as TabType, icon: Shield, label: 'Safety' },
    { id: 'profile' as TabType, icon: User, label: 'Profile' },
    { id: 'support' as TabType, icon: Headphones, label: 'Support' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#0a0e27]/95 backdrop-blur-sm border-t border-white/10">
      <div className="container mx-auto px-2">
        <div className="flex items-center justify-around py-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-lg transition-colors ${
                  isActive
                    ? 'text-blue-400 bg-blue-500/10'
                    : 'text-white/60 hover:text-white/80'
                }`}
              >
                <Icon className="w-6 h-6" />
                <span className="text-xs font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
