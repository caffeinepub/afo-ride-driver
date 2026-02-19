import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Phone, MessageCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export function SupportSection() {
  const [issue, setIssue] = useState('');

  const handleCallSupport = () => {
    toast.info('Calling support...', {
      description: '+91 1800 123 4567',
    });
  };

  const handleWhatsAppSupport = () => {
    toast.info('Opening WhatsApp...', {
      description: 'Redirecting to WhatsApp support',
    });
  };

  const handleSubmitIssue = () => {
    if (!issue.trim()) {
      toast.error('Please describe your issue');
      return;
    }
    toast.success('Issue reported successfully', {
      description: 'Our team will contact you soon',
    });
    setIssue('');
  };

  return (
    <div className="space-y-4">
      <Card className="bg-[#1a1f3a]/80 border-white/10">
        <CardHeader>
          <CardTitle className="text-white">Contact Support</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button
            onClick={handleCallSupport}
            className="w-full bg-green-600 hover:bg-green-700 text-white justify-start"
          >
            <Phone className="w-5 h-5 mr-3" />
            Call Support
          </Button>
          <Button
            onClick={handleWhatsAppSupport}
            className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white justify-start"
          >
            <MessageCircle className="w-5 h-5 mr-3" />
            WhatsApp Support
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-[#1a1f3a]/80 border-white/10">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <AlertCircle className="w-5 h-5 mr-2 text-yellow-400" />
            Report an Issue
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            placeholder="Describe your issue..."
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
            className="bg-white/5 border-white/10 text-white min-h-32"
          />
          <Button
            onClick={handleSubmitIssue}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          >
            Submit Issue
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-blue-950/30 border-blue-500/20">
        <CardContent className="pt-6">
          <div className="text-center space-y-2">
            <p className="text-white font-medium">24/7 Support Available</p>
            <p className="text-sm text-white/60">
              We're here to help you anytime, anywhere
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
