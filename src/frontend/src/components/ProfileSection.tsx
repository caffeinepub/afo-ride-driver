import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User, Car, FileText, LogOut } from 'lucide-react';
import { toast } from 'sonner';

export function ProfileSection() {
  const handleLogout = () => {
    toast.info('Logged out successfully');
  };

  return (
    <div className="space-y-4">
      <Card className="bg-[#1a1f3a]/80 border-white/10">
        <CardContent className="pt-6">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center">
              <User className="w-10 h-10 text-blue-400" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">John Doe</h2>
              <p className="text-white/60">Driver ID: DR12345</p>
              <p className="text-white/60">+91 98765 43210</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-[#1a1f3a]/80 border-white/10">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Car className="w-5 h-5 mr-2 text-blue-400" />
            Vehicle Details
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex justify-between">
            <span className="text-white/60">Vehicle Type</span>
            <span className="text-white font-medium">Sedan</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/60">Registration</span>
            <span className="text-white font-medium">KA 01 AB 1234</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/60">Model</span>
            <span className="text-white font-medium">Honda City</span>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-[#1a1f3a]/80 border-white/10">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <FileText className="w-5 h-5 mr-2 text-blue-400" />
            Documents
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-white/60">Driving License</span>
            <span className="text-green-400 text-sm">Verified</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-white/60">RC Book</span>
            <span className="text-green-400 text-sm">Verified</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-white/60">Aadhar Card</span>
            <span className="text-green-400 text-sm">Verified</span>
          </div>
        </CardContent>
      </Card>

      <Button
        onClick={handleLogout}
        variant="outline"
        className="w-full border-red-500/30 text-red-400 hover:bg-red-500/10"
      >
        <LogOut className="w-5 h-5 mr-2" />
        Logout
      </Button>
    </div>
  );
}
