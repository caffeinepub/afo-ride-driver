import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export function PreviewMode() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 p-4">
      <Alert className="bg-blue-950/90 border-blue-500/50 backdrop-blur-sm">
        <AlertCircle className="h-4 w-4 text-blue-400" />
        <AlertTitle className="text-blue-300">Preview Mode</AlertTitle>
        <AlertDescription className="text-blue-200/80">
          This is a preview draft of the AFO Ride Driver application. All features are functional for demonstration purposes.
        </AlertDescription>
      </Alert>
    </div>
  );
}
