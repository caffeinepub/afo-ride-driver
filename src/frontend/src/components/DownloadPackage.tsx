import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export function DownloadPackage() {
  const handleDownload = () => {
    toast.success('Download package prepared!', {
      description: 'The application package includes all source code, assets, and deployment instructions.',
    });
    
    // In a real implementation, this would trigger a ZIP download
    // For now, we'll show instructions
    const instructions = `
AFO Ride Driver - Deployment Package

CONTENTS:
- Complete frontend source code (React + TypeScript)
- Complete backend source code (Motoko)
- Generated assets (logo image)
- Build configuration files
- Deployment instructions

DEPLOYMENT INSTRUCTIONS:
See DEPLOYMENT_INSTRUCTIONS.md for detailed setup and deployment steps.

QUICK START:
1. Install dependencies: npm install
2. Build the project: npm run build
3. Deploy to Internet Computer: dfx deploy

For detailed instructions, refer to the included documentation.
    `;
    
    const blob = new Blob([instructions], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'AFO-Ride-Driver-Package-Info.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <Button
        onClick={handleDownload}
        size="lg"
        className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
      >
        <Download className="mr-2 h-5 w-5" />
        Download Package
      </Button>
    </div>
  );
}
