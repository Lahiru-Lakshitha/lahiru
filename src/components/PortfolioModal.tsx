import { X, Play, ExternalLink, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PortfolioItem } from "@/data/portfolioData";

interface PortfolioModalProps {
  item: PortfolioItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export function PortfolioModal({ item, isOpen, onClose }: PortfolioModalProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!isOpen || !item) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
      setIsPlaying(false);
    }
  };

  const handleClose = () => {
    onClose();
    setIsPlaying(false);
  };

  const isWebsiteDesign = item.category === "website-designs";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-fade-in"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-card border border-border shadow-xl animate-scale-in">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 hover:bg-background border border-border transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Container */}
        <div className="relative aspect-video overflow-hidden bg-secondary">
          {item.type === "video" && item.videoUrl ? (
            isPlaying ? (
              <iframe
                src={`${item.videoUrl}?autoplay=1`}
                title={item.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center bg-background/20"
                >
                  <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-glow">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                  </div>
                </button>
              </>
            )
          ) : (
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Category Badge */}
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium capitalize mb-3">
            {item.category.replace(/-/g, " ")}
          </div>

          <h3 className="text-2xl font-display font-bold mb-3">{item.title}</h3>
          
          <p className="text-muted-foreground mb-4">{item.description}</p>

          {/* Features List */}
          {item.features && item.features.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-foreground mb-3">Key Features</h4>
              <ul className="space-y-2">
                {item.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {item.results && (
            <div className="pt-4 border-t border-border mb-4">
              <span className="text-sm font-semibold gradient-text">{item.results}</span>
            </div>
          )}

          {/* View Website Button for Website Designs */}
          {isWebsiteDesign && item.websiteUrl && (
            <div className="pt-4 border-t border-border">
              <Button variant="hero" size="lg" asChild className="w-full sm:w-auto">
                <a href={item.websiteUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Website
                </a>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
