import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

interface GalleryItem {
  title: string;
  images: string[];
  description: string;
}

interface GalleryModalProps {
  item: GalleryItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export function GalleryModal({ item, isOpen, onClose }: GalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  /* ----------------------------------
     RESET WHEN ITEM CHANGES
  ---------------------------------- */
  useEffect(() => {
    if (item) {
      setCurrentIndex(0);
      setIsFading(false);
    }
  }, [item]);

  /* ----------------------------------
     IMAGE CHANGE HANDLER (SAFE)
  ---------------------------------- */
  const changeImage = useCallback(
    (newIndex: number) => {
      if (!item || item.images.length <= 1) return;

      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex(newIndex);
        setIsFading(false);
      }, 200);
    },
    [item]
  );

  const goToPrevious = useCallback(() => {
    if (!item || item.images.length <= 1) return;
    const newIndex =
      currentIndex === 0 ? item.images.length - 1 : currentIndex - 1;
    changeImage(newIndex);
  }, [item, currentIndex, changeImage]);

  const goToNext = useCallback(() => {
    if (!item || item.images.length <= 1) return;
    const newIndex =
      currentIndex === item.images.length - 1 ? 0 : currentIndex + 1;
    changeImage(newIndex);
  }, [item, currentIndex, changeImage]);

  /* ----------------------------------
     KEYBOARD NAVIGATION (FIXED)
  ---------------------------------- */
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, goToPrevious, goToNext, onClose]);

  if (!isOpen || !item) return null;

  const hasMultipleImages = item.images.length > 1;
  const currentImage = item.images[currentIndex];

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-md animate-gallery-fade-in"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-5xl max-h-[95vh] overflow-hidden rounded-lg bg-black/95 border border-border/30 shadow-2xl animate-gallery-scale-in">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 p-2 rounded-full bg-black/60 hover:bg-black/80 border border-white/20 transition-all hover:scale-110"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        {/* IMAGE AREA */}
        <div className="relative w-full h-[80vh] overflow-hidden flex items-center justify-center">
          
          {/* LEFT ARROW */}
          {hasMultipleImages && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/60 hover:bg-black/80 border border-white/20 transition-all hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
          )}

          {/* IMAGE */}
          <img
            src={currentImage}
            alt={`${item.title} ${currentIndex + 1}`}
            className={`max-w-full max-h-full object-contain transition-opacity duration-300 ${
              isFading ? "opacity-0" : "opacity-100"
            }`}
          />

          {/* RIGHT ARROW */}
          {hasMultipleImages && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/60 hover:bg-black/80 border border-white/20 transition-all hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          )}

          {/* DOTS */}
          {hasMultipleImages && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {item.images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    changeImage(index);
                  }}
                  className={`h-2.5 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-white w-6"
                      : "bg-white/40 w-2.5"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* DETAILS */}
        <div className="px-5 py-4 bg-black/80 border-t border-white/10">
          {hasMultipleImages && (
            <p className="text-white/50 text-xs text-center mb-2">
              {currentIndex + 1} / {item.images.length}
            </p>
          )}
          <p className="text-white/80 text-sm text-center">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}
