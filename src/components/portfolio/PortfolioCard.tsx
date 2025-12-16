import { useState } from "react";
import { Play, ExternalLink } from "lucide-react";
import { PortfolioItem } from "@/data/portfolioData";
import { MasonryGallery } from "./MasonryGallery";

export { MasonryGallery };

interface VideoCardProps {
  item: PortfolioItem;
  onClick: () => void;
}

export function VideoCard({ item, onClick }: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div 
      className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300 animate-fade-in cursor-pointer"
      onClick={onClick}
    >
      <div className="relative aspect-video overflow-hidden">
        {isPlaying && item.videoUrl ? (
          <iframe
            src={`${item.videoUrl}?autoplay=1`}
            title={item.title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onClick={(e) => e.stopPropagation()}
          />
        ) : (
          <>
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent" />
            
            {/* Play Button Overlay */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsPlaying(true);
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-glow">
                <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
              </div>
            </button>
          </>
        )}
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium capitalize z-10">
          {item.category.replace(/-/g, ' ')}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-base font-display font-semibold mb-2 group-hover:text-primary transition-colors">
          {item.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {item.description}
        </p>
      </div>
    </div>
  );
}

interface ImageCardProps {
  item: PortfolioItem;
  index?: number;
  onClick: () => void;
}

export function ImageCard({ item, index = 0, onClick }: ImageCardProps) {
  const isWebsiteDesign = item.category === "website-designs";
  const isImageOnlyCategory = ["social-media-designs", "thumbnails", "photo-editing"].includes(item.category);
  
  return (
    <div
      className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300 animate-fade-in cursor-pointer"
      style={{ animationDelay: `${index * 0.05}s` }}
      onClick={onClick}
    >
      <div className={`relative overflow-hidden ${isImageOnlyCategory ? 'aspect-square bg-secondary' : 'h-48'}`}>
        <img
          src={item.image}
          alt={item.title}
          className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${
            isImageOnlyCategory ? 'object-contain p-2' : 'object-cover'
          }`}
        />
        {!isImageOnlyCategory && (
          <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent" />
        )}
        
        {/* Category Badge - only for non-image-only categories */}
        {!isImageOnlyCategory && (
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium capitalize">
            {item.category.replace(/-/g, ' ')}
          </div>
        )}
      </div>
      
      {/* Content section - only for non-image-only categories */}
      {!isImageOnlyCategory && (
        <div className="p-5">
          {item.client && (
            <div className="text-sm text-muted-foreground mb-2">{item.client}</div>
          )}
          <h3 className="text-base font-display font-semibold mb-2 group-hover:text-primary transition-colors">
            {item.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {item.description}
          </p>
          {item.results && (
            <div className="mt-3 pt-3 border-t border-border">
              <span className="text-sm font-semibold gradient-text">{item.results}</span>
            </div>
          )}
          {isWebsiteDesign && item.websiteUrl && (
            <div className="mt-4">
              <a
                href={item.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
              >
                <ExternalLink className="w-4 h-4" />
                View Website
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

interface PortfolioGridProps {
  items: PortfolioItem[];
  showVideos?: boolean;
  onItemClick: (item: PortfolioItem) => void;
  columns?: "3" | "4";
}

export function PortfolioGrid({ items, showVideos = false, onItemClick, columns = "4" }: PortfolioGridProps) {
  const gridCols = columns === "3" 
    ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6"
    : "grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6";

  return (
    <div className={gridCols}>
      {items.map((item, index) =>
        showVideos && item.type === "video" ? (
          <VideoCard key={item.id} item={item} onClick={() => onItemClick(item)} />
        ) : (
          <ImageCard key={item.id} item={item} index={index} onClick={() => onItemClick(item)} />
        )
      )}
    </div>
  );
}
