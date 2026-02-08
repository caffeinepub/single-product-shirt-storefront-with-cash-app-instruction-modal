import { useState } from 'react';
import CashAppInstructionsModal from './components/CashAppInstructionsModal';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      src: '/assets/Photoroom_20260118_154454-1.jpeg',
      alt: 'Front view of shirt',
      label: 'Front',
    },
    {
      src: '/assets/Photoroom_20260118_154454.jpeg',
      alt: 'Back view of shirt',
      label: 'Back',
    },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Notice Banner */}
      <div className="bg-primary text-primary-foreground py-3 px-4 text-center">
        <p className="text-sm md:text-base font-medium">
          Customers will receive updates when the product drops and when their preorder has been shipped.
        </p>
      </div>

      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">SLIME SHOP</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 max-w-6xl mx-auto">
          {/* Product Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-muted rounded-lg overflow-hidden group">
              <img
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                className="w-full h-full object-contain"
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex
                        ? 'bg-foreground w-6'
                        : 'bg-foreground/30'
                    }`}
                    aria-label={`View ${images[index].label}`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnail Selector */}
            <div className="grid grid-cols-2 gap-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative aspect-square bg-muted rounded-lg overflow-hidden border-2 transition-all ${
                    index === currentImageIndex
                      ? 'border-foreground'
                      : 'border-transparent hover:border-muted-foreground/50'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-contain"
                  />
                  <span className="absolute bottom-2 left-2 bg-background/90 px-2 py-1 rounded text-xs font-medium">
                    {image.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                  Exclusive Statement Tee
                </h2>
                <Badge variant="secondary" className="text-sm font-semibold px-3 py-1">
                  Preorder
                </Badge>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                A bold statement piece that speaks volumes. This premium tee features unique graphics on both front and back, crafted for those who wake up ready to make moves.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold">$45</span>
                <span className="text-muted-foreground">USD</span>
              </div>
              <p className="text-sm text-muted-foreground">Free shipping included</p>
            </div>

            <div className="space-y-3 pt-4">
              <Button
                onClick={() => setIsModalOpen(true)}
                size="lg"
                className="w-full text-lg h-14 font-semibold"
              >
                Preorder Now
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                Secure payment via Cash App • Expected to ship within 3-5 business days after launch
              </p>
            </div>

            <div className="border-t border-border pt-6 space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold text-sm uppercase tracking-wide">Product Details</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Premium cotton blend fabric</li>
                  <li>• Unique front and back graphics</li>
                  <li>• Comfortable regular fit</li>
                  <li>• Machine washable</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-auto">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-sm text-muted-foreground">
            © 2026. Built with love using{' '}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>

      {/* Cash App Modal */}
      <CashAppInstructionsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
