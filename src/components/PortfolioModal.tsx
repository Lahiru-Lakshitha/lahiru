import {
  X,
  Play,
  ExternalLink,
  Check,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { PortfolioItem } from "@/data/portfolioData";

interface PortfolioModalProps {
  item: PortfolioItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export function PortfolioModal({
  item,
  isOpen,
  onClose,
}: PortfolioModalProps) {
  // ✅ ALL HOOKS FIRST
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!item) return;
    setCurrentIndex(0);
    setIsPlaying(false);
  }, [item]);

  // ✅ ONLY AFTER HOOKS
  if (!isOpen || !item) return null;

  // Category flags
  const isSaasProject = item.category === "ai-saas-projects";

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

  const hasMultipleImages =
    item.images && item.images.length > 1;

  const currentImage =
    item.images?.[currentIndex] || item.image;

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

        {/* Media Section */}
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
                    <Play
                      className="w-8 h-8 text-primary-foreground ml-1"
                      fill="currentColor"
                    />
                  </div>
                </button>
              </>
            )
          ) : (
            <>
              <img
                src={currentImage}
                alt={item.title}
                className="w-full h-full object-cover"
              />

              {hasMultipleImages && (
                <>
                  <button
                    onClick={() =>
                      setCurrentIndex((prev) =>
                        prev === 0
                          ? item.images!.length - 1
                          : prev - 1
                      )
                    }
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/70 hover:bg-background border border-border"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    onClick={() =>
                      setCurrentIndex((prev) =>
                        prev === item.images!.length - 1
                          ? 0
                          : prev + 1
                      )
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/70 hover:bg-background border border-border"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                    {item.images!.map((_, idx) => (
                      <span
                        key={idx}
                        className={`w-2 h-2 rounded-full ${
                          idx === currentIndex
                            ? "bg-white"
                            : "bg-white/40"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium capitalize mb-3">
            {item.category.replace(/-/g, " ")}
          </div>

          <h3 className="text-2xl font-display font-bold mb-3">
            {item.title}
          </h3>

          <p className="text-muted-foreground mb-4">
            {item.description}
          </p>

          {item.features && item.features.length > 0 && (
            <div className="mb-6">
              <h4 className="text-sm font-semibold mb-3">
                Key Features
              </h4>
              <ul className="space-y-2">
                {item.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {item.results && (
            <div className="pt-4 border-t border-border mb-4">
              <span className="text-sm font-semibold gradient-text">
                {item.results}
              </span>
            </div>
          )}

          {(item.websiteUrl || item.githubUrl) && (
            <div className="pt-6 border-t border-border flex flex-wrap gap-4">
              {item.websiteUrl && (
                <Button variant="hero" size="lg" asChild>
                  <a
                    href={item.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    {isSaasProject ? "View App" : "View Website"}
                  </a>
                </Button>
              )}

              {item.githubUrl && (
                <Button variant="outline" size="lg" asChild>
                  <a
                    href={item.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View GitHub
                  </a>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
