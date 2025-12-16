import { useState, useEffect } from "react";
import { PortfolioItem } from "@/data/portfolioData";

interface MasonryGalleryProps {
  items: PortfolioItem[];
  onItemClick: (item: PortfolioItem) => void;
}

export function MasonryGallery({ items, onItemClick }: MasonryGalleryProps) {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
      {items.map((item, index) => (
        <MasonryItem 
          key={item.id} 
          item={item} 
          index={index}
          onClick={() => onItemClick(item)} 
        />
      ))}
    </div>
  );
}

interface MasonryItemProps {
  item: PortfolioItem;
  index: number;
  onClick: () => void;
}

function MasonryItem({ item, index, onClick }: MasonryItemProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative break-inside-avoid mb-4 group cursor-pointer"
      style={{ animationDelay: `${index * 0.05}s` }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-2xl bg-secondary/30 shadow-lg shadow-black/5 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-primary/10 group-hover:-translate-y-1">
        {/* Loading skeleton */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-secondary animate-pulse rounded-2xl" />
        )}
        
        {/* Main Image */}
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-auto object-cover transition-all duration-500 group-hover:scale-105 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
        
        {/* Hover Overlay */}
        <div 
          className={`absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent transition-opacity duration-300 flex flex-col justify-end p-4 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Category Badge */}
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium capitalize backdrop-blur-sm">
            {item.category.replace(/-/g, ' ')}
          </span>
          
          {/* Title & Description */}
          <div className="transform transition-transform duration-300">
            <h3 className="text-sm font-display font-semibold text-foreground mb-1 line-clamp-1">
              {item.title}
            </h3>
            <p className="text-xs text-muted-foreground line-clamp-2">
              {item.description}
            </p>
          </div>
          
          {/* View indicator */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
            <svg 
              className="w-5 h-5 text-primary-foreground" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" 
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
