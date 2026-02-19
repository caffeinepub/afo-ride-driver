import { useState } from 'react';
import { Header } from '@/components/Header';
import { DriverStats } from '@/components/DriverStats';
import { RideRequest } from '@/components/RideRequest';
import { TransactionHistory } from '@/components/TransactionHistory';
import { WalletSection } from '@/components/WalletSection';
import { SafetySection } from '@/components/SafetySection';
import { ProfileSection } from '@/components/ProfileSection';
import { SupportSection } from '@/components/SupportSection';
import { BottomNav } from '@/components/BottomNav';

type TabType = 'home' | 'wallet' | 'safety' | 'profile' | 'support';

export function Dashboard() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [isOnline, setIsOnline] = useState(false);
  const [showRideRequest, setShowRideRequest] = useState(false);

  const handleGoOnline = () => {
    setIsOnline(true);
    setTimeout(() => {
      setShowRideRequest(true);
    }, 2000);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <>
            <DriverStats isOnline={isOnline} onToggleOnline={handleGoOnline} />
            <TransactionHistory />
          </>
        );
      case 'wallet':
        return <WalletSection />;
      case 'safety':
        return <SafetySection />;
      case 'profile':
        return <ProfileSection />;
      case 'support':
        return <SupportSection />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0e27] to-[#1a1f3a] pb-20 pt-16">
      <Header />
      <main className="container mx-auto px-4 py-6 space-y-6">
        {renderContent()}
      </main>
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
      {showRideRequest && (
        <RideRequest onClose={() => setShowRideRequest(false)} />
      )}
    </div>
  );
}
