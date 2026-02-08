import { useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Button } from './ui/button';
import { DollarSign, Copy, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

interface CashAppInstructionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CashAppInstructionsModal({
  isOpen,
  onClose,
}: CashAppInstructionsModalProps) {
  const [copied, setCopied] = useState(false);
  const cashtag = '$bslimeballin';
  const amount = '$45';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('bslimeballin');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            <DollarSign className="w-6 h-6 text-primary" />
            Complete Your Preorder
          </DialogTitle>
          <DialogDescription className="text-base pt-2">
            Follow these simple steps to secure your order
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Step 1 */}
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                1
              </div>
              <div className="flex-1 space-y-2">
                <h3 className="font-semibold">Open Cash App</h3>
                <p className="text-sm text-muted-foreground">
                  Launch the Cash App on your mobile device
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                2
              </div>
              <div className="flex-1 space-y-3">
                <h3 className="font-semibold">Send Payment</h3>
                <div className="bg-muted rounded-lg p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                        Send to
                      </p>
                      <p className="text-2xl font-bold">{cashtag}</p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleCopy}
                      className="gap-2"
                    >
                      {copied ? (
                        <>
                          <CheckCircle2 className="w-4 h-4" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          Copy
                        </>
                      )}
                    </Button>
                  </div>
                  <div className="border-t border-border pt-3">
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                      Amount
                    </p>
                    <p className="text-3xl font-bold text-primary">{amount}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                3
              </div>
              <div className="flex-1 space-y-2">
                <h3 className="font-semibold">Confirmation</h3>
                <p className="text-sm text-muted-foreground">
                  Once payment is received, your preorder will be confirmed. Your product will be shipped within 3-5 business days after launch. You'll receive tracking information via the contact details provided.
                </p>
              </div>
            </div>
          </div>

          {/* Important Note */}
          <div className="bg-accent/50 border border-accent rounded-lg p-4">
            <p className="text-sm font-medium mb-1">📦 Important</p>
            <p className="text-sm text-muted-foreground">
              Please ensure you send exactly <strong className="text-foreground">{amount}</strong> to{' '}
              <strong className="text-foreground">{cashtag}</strong>. Your preorder will be confirmed after payment is received.
            </p>
          </div>
        </div>

        <div className="flex gap-3 pt-2">
          <Button variant="outline" onClick={onClose} className="flex-1">
            Cancel
          </Button>
          <Button onClick={onClose} className="flex-1">
            Got It
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
