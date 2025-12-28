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

  // ✅ CATEGORY FLAGS (IMPORTANT)
  const isSaasProject = item.category === "ai-saas-projects";
  const isWebsiteDesign = item.category === "website-designs";

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

        {/* Media */}
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
          
          {/* Category */}
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium capitalize mb-3">
            {item.category.replace(/-/g, " ")}
          </div>

          <h3 className="text-2xl font-display font-bold mb-3">
            {item.title}
          </h3>

          <p className="text-muted-foreground mb-4">
            {item.description}
          </p>

          {/* Features */}
          {item.features && item.features.length > 0 && (
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-foreground mb-3">
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

          {/* ACTION BUTTONS */}
          {(item.websiteUrl || item.githubUrl) && (
            <div className="pt-6 border-t border-border flex flex-wrap gap-4">

              {/* View App / View Website */}
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

              {/* View GitHub */}
              {item.githubUrl && (
                <Button variant="outline" size="lg" asChild>
                  <a
                    href={item.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="mr-2 h-4 w-4"
                    >
                      <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.11 3.29 9.44 7.86 10.97.58.11.79-.25.79-.56v-2.17c-3.2.7-3.88-1.38-3.88-1.38-.53-1.36-1.29-1.72-1.29-1.72-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.78 2.7 1.27 3.36.97.1-.75.4-1.27.72-1.56-2.55-.29-5.23-1.29-5.23-5.75 0-1.27.45-2.3 1.19-3.11-.12-.3-.52-1.52.11-3.17 0 0 .97-.31 3.18 1.19a10.9 10.9 0 012.9-.39c.99 0 1.99.13 2.9.39 2.2-1.5 3.17-1.19 3.17-1.19.64 1.65.24 2.87.12 3.17.74.81 1.18 1.84 1.18 3.11 0 4.47-2.69 5.45-5.25 5.73.41.36.78 1.07.78 2.16v3.2c0 .31.21.68.8.56A11.52 11.52 0 0023.5 12C23.5 5.74 18.27.5 12 .5z" />
                    </svg>
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
