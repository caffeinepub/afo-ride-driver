import { useState, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/components/ui/sonner';
import { SplashScreen } from '@/components/SplashScreen';
import { Dashboard } from '@/components/Dashboard';
import { PreviewMode } from '@/components/PreviewMode';
import { DownloadPackage } from '@/components/DownloadPackage';

const queryClient = new QueryClient();

function AppContent() {
  const [showSplash, setShowSplash] = useState(true);
  const [isPreviewMode] = useState(true); // Set to true for preview mode

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <div className="min-h-screen bg-background">
      {isPreviewMode && <PreviewMode />}
      <Dashboard />
      <DownloadPackage />
      <Toaster />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <QueryClientProvider client={queryClient}>
        <AppContent />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
