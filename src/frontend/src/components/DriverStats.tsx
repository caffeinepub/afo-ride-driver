import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, TrendingUp, Star, Wallet } from 'lucide-react';

interface DriverStatsProps {
  isOnline: boolean;
  onToggleOnline: () => void;
}

export function DriverStats({ isOnline, onToggleOnline }: DriverStatsProps) {
  return (
    <div className="space-y-4">
      <Card className="bg-gradient-to-br from-blue-950/50 to-blue-900/30 border-blue-500/30">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-200">Status</p>
              <p className="text-2xl font-bold text-white">
                {isOnline ? 'Online' : 'Offline'}
              </p>
            </div>
            <Switch
              checked={isOnline}
              onCheckedChange={onToggleOnline}
              className="data-[state=checked]:bg-green-500"
            />
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 gap-4">
        <Card className="bg-[#1a1f3a]/80 border-white/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-white/60 flex items-center">
              <DollarSign className="w-4 h-4 mr-1" />
              Today's Earnings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-white">₹1,250</p>
          </CardContent>
        </Card>

        <Card className="bg-[#1a1f3a]/80 border-white/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-white/60 flex items-center">
              <TrendingUp className="w-4 h-4 mr-1" />
              Weekly Earnings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-white">₹8,450</p>
          </CardContent>
        </Card>

        <Card className="bg-[#1a1f3a]/80 border-white/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-white/60 flex items-center">
              <Star className="w-4 h-4 mr-1" />
              Rating
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-white">4.8</p>
          </CardContent>
        </Card>

        <Card className="bg-[#1a1f3a]/80 border-white/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-white/60 flex items-center">
              <Wallet className="w-4 h-4 mr-1" />
              Wallet Balance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-white">₹5,320</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
