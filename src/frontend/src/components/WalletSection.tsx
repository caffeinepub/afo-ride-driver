import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Wallet, ArrowUpRight, TrendingUp } from 'lucide-react';
import { toast } from 'sonner';

export function WalletSection() {
  const [withdrawAmount, setWithdrawAmount] = useState('');

  const handleWithdraw = () => {
    if (!withdrawAmount || parseFloat(withdrawAmount) <= 0) {
      toast.error('Please enter a valid amount');
      return;
    }
    toast.success('Withdrawal request submitted!', {
      description: `₹${withdrawAmount} will be transferred to your bank account`,
    });
    setWithdrawAmount('');
  };

  return (
    <div className="space-y-4">
      <Card className="bg-gradient-to-br from-blue-950/50 to-blue-900/30 border-blue-500/30">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-200">Available Balance</p>
              <p className="text-4xl font-bold text-white">₹5,320</p>
            </div>
            <Wallet className="w-12 h-12 text-blue-400" />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-[#1a1f3a]/80 border-white/10">
        <CardHeader>
          <CardTitle className="text-white">Withdraw Funds</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="amount" className="text-white/80">
              Amount
            </Label>
            <Input
              id="amount"
              type="number"
              placeholder="Enter amount"
              value={withdrawAmount}
              onChange={(e) => setWithdrawAmount(e.target.value)}
              className="bg-white/5 border-white/10 text-white"
            />
          </div>
          <Button
            onClick={handleWithdraw}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          >
            <ArrowUpRight className="w-4 h-4 mr-2" />
            Request Withdrawal
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-[#1a1f3a]/80 border-white/10">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
            Incentives & Bonuses
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-green-500/10 rounded-lg border border-green-500/20">
              <span className="text-white/80">Weekly Target Bonus</span>
              <span className="text-green-400 font-bold">₹500</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
              <span className="text-white/80">Referral Bonus</span>
              <span className="text-blue-400 font-bold">₹200</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
