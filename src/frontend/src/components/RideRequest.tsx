import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Navigation, DollarSign, Clock } from 'lucide-react';
import { toast } from 'sonner';

interface RideRequestProps {
  onClose: () => void;
}

export function RideRequest({ onClose }: RideRequestProps) {
  const [accepted, setAccepted] = useState(false);
  const [rideStarted, setRideStarted] = useState(false);

  const handleAccept = () => {
    setAccepted(true);
    toast.success('Ride accepted!', {
      description: 'Navigate to pickup location',
    });
  };

  const handleReject = () => {
    toast.info('Ride rejected');
    onClose();
  };

  const handleStartRide = () => {
    setRideStarted(true);
    toast.success('Ride started!');
  };

  const handleEndRide = () => {
    toast.success('Ride completed!', {
      description: 'Earnings: ₹250 added to your wallet',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-end justify-center p-4 animate-in slide-in-from-bottom">
      <Card className="w-full max-w-md bg-[#1a1f3a] border-blue-500/30">
        <CardHeader>
          <CardTitle className="text-white">
            {!accepted ? 'New Ride Request' : rideStarted ? 'Ride in Progress' : 'Ride Accepted'}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-green-400 mt-1" />
              <div>
                <p className="text-sm text-white/60">Pickup</p>
                <p className="text-white font-medium">MG Road, Bangalore</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Navigation className="w-5 h-5 text-red-400 mt-1" />
              <div>
                <p className="text-sm text-white/60">Drop</p>
                <p className="text-white font-medium">Koramangala, Bangalore</p>
              </div>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-white/10">
              <div className="flex items-center space-x-2">
                <DollarSign className="w-5 h-5 text-blue-400" />
                <span className="text-white font-bold">₹250</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-blue-400" />
                <span className="text-white">8.5 km</span>
              </div>
            </div>
          </div>

          {!accepted ? (
            <div className="flex space-x-3">
              <Button
                onClick={handleReject}
                variant="outline"
                className="flex-1 border-red-500/50 text-red-400 hover:bg-red-500/10"
              >
                Reject
              </Button>
              <Button
                onClick={handleAccept}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white"
              >
                Accept
              </Button>
            </div>
          ) : !rideStarted ? (
            <Button
              onClick={handleStartRide}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              Start Ride
            </Button>
          ) : (
            <Button
              onClick={handleEndRide}
              className="w-full bg-green-600 hover:bg-green-700 text-white"
            >
              End Ride
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
