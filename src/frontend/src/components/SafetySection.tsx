import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Shield, Phone, MapPin } from 'lucide-react';
import { toast } from 'sonner';

export function SafetySection() {
  const handleSOS = () => {
    toast.error('SOS Alert Activated!', {
      description: 'Emergency services have been notified',
    });
  };

  const handleSecurityRequest = () => {
    toast.success('Security Team Notified', {
      description: 'Help is on the way',
    });
  };

  return (
    <div className="space-y-4">
      <Card className="bg-gradient-to-br from-red-950/50 to-red-900/30 border-red-500/30">
        <CardContent className="pt-6">
          <Button
            onClick={handleSOS}
            className="w-full h-24 bg-red-600 hover:bg-red-700 text-white text-2xl font-bold"
          >
            <AlertTriangle className="w-8 h-8 mr-3" />
            SOS EMERGENCY
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-[#1a1f3a]/80 border-white/10">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Shield className="w-5 h-5 mr-2 text-blue-400" />
            Safety Features
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button
            onClick={handleSecurityRequest}
            variant="outline"
            className="w-full justify-start border-blue-500/30 text-white hover:bg-blue-500/10"
          >
            <Shield className="w-5 h-5 mr-3 text-blue-400" />
            Request Security/Bouncer
          </Button>
          <Button
            variant="outline"
            className="w-full justify-start border-white/10 text-white hover:bg-white/5"
          >
            <Phone className="w-5 h-5 mr-3 text-green-400" />
            Emergency Contact
          </Button>
          <Button
            variant="outline"
            className="w-full justify-start border-white/10 text-white hover:bg-white/5"
          >
            <MapPin className="w-5 h-5 mr-3 text-purple-400" />
            Share Live Location
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-blue-950/30 border-blue-500/20">
        <CardContent className="pt-6">
          <div className="flex items-start space-x-3">
            <Shield className="w-6 h-6 text-blue-400 mt-1" />
            <div>
              <p className="text-white font-medium">Night Mode Safety</p>
              <p className="text-sm text-white/60 mt-1">
                Enhanced safety features are active during night hours (10 PM - 6 AM)
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
